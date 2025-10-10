"use client";

import React, { useState, useEffect } from 'react';
import { Upload, Image as ImageIcon, Trash2Icon, Plus, X } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

import { Anexo, Conteudo } from '@/models';
import { TipoConteudo } from '@/utils';
import { toast } from 'react-toastify';


export interface ContentEditorProps<T> {
    tituloPage?: string;
    conteudo?: Conteudo | null;
    tipoConteudo: TipoConteudo;
    onSave?: (conteudo: Conteudo, filesData: { imagemPrincipal: File | null, anexos: File[] }) => void;
    onNext?: () => void;
    onPrevious?: () => void;
}

export function ContentEditor<T>({
    tituloPage,
    conteudo,
    tipoConteudo,
    onSave,
    // onNext,
    // onPrevious,
}: ContentEditorProps<T>) {

    const [titulo, setTitulo] = useState<string>('');
    const [subtitulo, setSubtitulo] = useState<string>('');
    const [corpo, setCorpo] = useState<string>('');
    const [imagemPrincipal, setImagemPrincipal] = useState<File | null>(null);
    const [anexos, setAnexos] = useState<File[]>([]);
    const [anexosExistentes, setAnexosExistentes] = useState<Anexo[]>([]);
    const [imagemPrincipalExistente, setImagemPrincipalExistente] = useState<Anexo | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [objetivo, setObjetivo] = useState<number | null>(null);
    const [angariado, setAngariado] = useState<number | null>(null);

    // Campos específicos da causa
    const [introducao, setIntroducao] = useState<string>('');
    const [desafio, setDesafio] = useState<string>('');
    const [problema, setProblema] = useState<string>('');
    const [solucao, setSolucao] = useState<string>('');

    // Estado para múltiplos conteúdos
    const [isCreatingNew, setIsCreatingNew] = useState(conteudo ? false : true);

    // Conteúdo atual sendo editado
    const currentContent = isCreatingNew ? null : conteudo;

    // Função auxiliar para determinar campos visíveis baseado no tipo de conteúdo
    const getVisibleFields = (tipo: TipoConteudo) => {
        return {
            showAnexoPrincipal: true, // Todos os tipos têm anexo principal
            showAnexos: tipo !== TipoConteudo.Causa, // Causas não têm anexos adicionais
            showSubtitulo: true, // Todos os tipos têm subtítulo
            showCorpo: tipo !== TipoConteudo.Causa, // Causas não têm corpo
            showSeccoesCausa: tipo === TipoConteudo.Causa,
            showDataInicioFim: false,
            showDonations: tipo === TipoConteudo.Causa,
        };
    };

    const visibleFields = getVisibleFields(tipoConteudo);

    const validateConteudo = (): boolean => {
        const totalAnexos = (imagemPrincipal ? 1 : 0) +
            (imagemPrincipalExistente && !imagemPrincipal ? 1 : 0) +
            anexos.length +
            anexosExistentes.length;

        if (!titulo.trim()) {
            toast.warning('Por favor, preencha o título.');
            return false;
        }

        switch (tipoConteudo) {
            case TipoConteudo.Noticia:
                if (!corpo.trim()) {
                    toast.warning('Por favor, preencha o corpo do conteúdo.');
                    return false;
                }
                if (totalAnexos === 0) {
                    toast.warning('Por favor, adicione pelo menos uma imagem/anexo.');
                    return false;
                }
                break;

            case TipoConteudo.Causa:
                if (!subtitulo.trim()) {
                    toast.warning('Por favor, preencha o subtítulo da causa.');
                    return false;
                }
                const causaAnexo = imagemPrincipal || imagemPrincipalExistente;
                if (!causaAnexo) {
                    toast.warning('Por favor, adicione a imagem principal da causa.');
                    return false;
                }
                break;

            default:
                break;
        }

        return true;
    };

    const onDropPrincipal = (acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
            setImagemPrincipal(acceptedFiles[0]);
        }
    };

    const onDropAnexos = (acceptedFiles: File[]) => {
        setAnexos((prev: File[]) => [...prev, ...acceptedFiles]);
    };

    const { getRootProps: getRootPropsPrincipal, getInputProps: getInputPropsPrincipal, isDragActive: isDragActivePrincipal } = useDropzone({
        onDrop: onDropPrincipal,
        accept: { 'image/*': [] },
        multiple: false,
    });

    const { getRootProps: getRootPropsAnexos, getInputProps: getInputPropsAnexos, isDragActive: isDragActiveAnexos } = useDropzone({
        onDrop: onDropAnexos,
        accept: { 'image/*': [] },
        multiple: true,
    });

    // Inicializar campos com conteúdo existente
    useEffect(() => {
        if (currentContent) {
            if (currentContent.titulo) {
                setTitulo(currentContent.titulo);
            }
            if (currentContent.subtitulo && visibleFields.showSubtitulo) {
                setSubtitulo(currentContent.subtitulo);
            }
            if (currentContent.corpo && visibleFields.showCorpo) {
                setCorpo(currentContent.corpo);
            }

            // Inicializar campos específicos da causa
            if (visibleFields.showSeccoesCausa) {
                if (currentContent.introducao) {
                    setIntroducao(currentContent.introducao);
                }
                if (currentContent.desafio) {
                    setDesafio(currentContent.desafio);
                }
                if (currentContent.problema) {
                    setProblema(currentContent.problema);
                }
                if (currentContent.solucao) {
                    setSolucao(currentContent.solucao);
                }
            }

            // Inicializar anexos existentes
            if (currentContent.anexos) {
                const principal = currentContent.anexos.find(anexo => anexo.principal);
                const outros = currentContent.anexos.filter(anexo => !anexo.principal);

                if (principal) {
                    setImagemPrincipalExistente(principal);
                }
                if (outros.length > 0) {
                    setAnexosExistentes(outros);
                }
            }

            if (typeof currentContent.objetivo !== 'undefined' && currentContent.objetivo !== null) {
                setObjetivo(currentContent.objetivo as number);
            } else {
                setObjetivo(null);
            }

            if (typeof currentContent.angariado !== 'undefined' && currentContent.angariado !== null) {
                setAngariado(currentContent.angariado as number);
            } else {
                setAngariado(null);
            }
        }
    }, [currentContent, visibleFields.showCorpo, visibleFields.showSubtitulo]);

    const handleSave = async () => {
        try {
            // Validar antes de salvar
            if (!validateConteudo()) {
                return;
            }

            // Coletar dados dos campos
            const tituloValue = titulo.trim();
            const subtituloValue = visibleFields.showSubtitulo ? subtitulo.trim() || null : null;
            const corpoValue = visibleFields.showCorpo ? corpo.trim() || null : null;

            // Coletar datas se for evento
            let dataInicio = null;
            let dataFim = null;
            if (visibleFields.showDataInicioFim) {
                const dataInicioInput = document.getElementById('data-inicio') as HTMLInputElement;
                const dataFimInput = document.getElementById('data-fim') as HTMLInputElement;
                dataInicio = dataInicioInput?.value ? new Date(dataInicioInput.value) : null;
                dataFim = dataFimInput?.value ? new Date(dataFimInput.value) : null;
            }

            // Preparar anexos existentes
            const anexosList: Anexo[] = [];

            // Incluir imagem principal existente se não foi substituída
            if (imagemPrincipalExistente && !imagemPrincipal) {
                anexosList.push(imagemPrincipalExistente);
            }

            // Incluir anexos existentes que não foram removidos
            if (visibleFields.showAnexos) {
                anexosExistentes.forEach((anexo) => {
                    anexosList.push(anexo);
                });
            }

            // Criar objeto Conteudo sem os novos anexos primeiro
            const conteudoData = new Conteudo({
                id: currentContent?.id || null,
                tipo: tipoConteudo,
                titulo: tituloValue,
                subtitulo: subtituloValue,
                corpo: corpoValue,
                data_inicio: dataInicio,
                data_fim: dataFim,
                publico: false, // Default
                anexos: anexosList, // Apenas anexos existentes
                objetivo: objetivo ?? null,
                angariado: angariado ?? null,
                introducao: visibleFields.showSeccoesCausa ? introducao.trim() || null : null,
                desafio: visibleFields.showSeccoesCausa ? desafio.trim() || null : null,
                problema: visibleFields.showSeccoesCausa ? problema.trim() || null : null,
                solucao: visibleFields.showSeccoesCausa ? solucao.trim() || null : null,
                publicado_em: null,
                visualizacoes: 0,
                criado_em: new Date(),
                atualizado_em: null
            });

            // Call onSave with the conteudo data and files info for the parent to handle
            await onSave?.(conteudoData, { imagemPrincipal, anexos });

        } catch (error) {
        }
    };

    const handleCancel = () => {
        // Por enquanto, só volta atrás (pode ser customizado)
        window.history.back();
    };

    return (
        <>
            <div className="max-w-6xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">{tituloPage ?? "Editor de Conteúdo"}</h1>

                {/* General Section */}
                <section className="mb-8 bg-white rounded-xl shadow-md border border-gray-200 p-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Informações Gerais</h2>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Título</label>
                            <input
                                type="text"
                                value={titulo}
                                onChange={(e) => setTitulo(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--site-brown)] focus:border-[var(--site-brown)] transition"
                                placeholder="Digite o título..."
                            />
                        </div>

                        {/* Subtítulo - só mostra se não for Banner */}
                        {visibleFields.showSubtitulo && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subtítulo</label>
                                <textarea
                                    value={subtitulo}
                                    onChange={(e) => setSubtitulo(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--site-brown)] focus:border-[var(--site-brown)] transition min-h-[100px]"
                                    placeholder="Digite o subtítulo..."
                                    rows={3}
                                />
                            </div>
                        )}

                        {/* Datas de início e fim - só mostra para Eventos */}
                        {visibleFields.showDataInicioFim && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="data-inicio" className="block text-sm font-medium text-gray-700 mb-2">Data de Início</label>
                                    <input type="date" id="data-inicio" name="data-inicio" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--site-brown)] focus:border-[var(--site-brown)] transition" />
                                </div>
                                <div>
                                    <label htmlFor="data-fim" className="block text-sm font-medium text-gray-700 mb-2">Data de Fim</label>
                                    <input type="date" id="data-fim" name="data-fim" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--site-brown)] focus:border-[var(--site-brown)] transition" />
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Content Body Section - só mostra se não for Banner */}
                {visibleFields.showCorpo && (
                    <section className="mb-8 bg-white rounded-xl shadow-md border border-gray-200 p-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Corpo do Conteúdo</h2>
                        <textarea
                            value={corpo}
                            onChange={(e) => setCorpo(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--site-brown)] focus:border-[var(--site-brown)] transition min-h-[300px]"
                            placeholder="Digite o corpo do conteúdo..."
                            rows={10}
                        />
                    </section>
                )}

                {/* Seções específicas da Causa */}
                {visibleFields.showSeccoesCausa && (
                    <section className="mb-8 bg-white rounded-xl shadow-md border border-gray-200 p-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Secções da Causa</h2>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Introdução</label>
                                <textarea
                                    value={introducao}
                                    onChange={(e) => setIntroducao(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--site-brown)] focus:border-[var(--site-brown)] transition min-h-[150px]"
                                    placeholder="Introdução da causa..."
                                    rows={5}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Desafio</label>
                                <textarea
                                    value={desafio}
                                    onChange={(e) => setDesafio(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--site-brown)] focus:border-[var(--site-brown)] transition min-h-[150px]"
                                    placeholder="Desafio da causa..."
                                    rows={5}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Problema</label>
                                <textarea
                                    value={problema}
                                    onChange={(e) => setProblema(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--site-brown)] focus:border-[var(--site-brown)] transition min-h-[150px]"
                                    placeholder="Problema da causa..."
                                    rows={5}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Solução</label>
                                <textarea
                                    value={solucao}
                                    onChange={(e) => setSolucao(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--site-brown)] focus:border-[var(--site-brown)] transition min-h-[150px]"
                                    placeholder="Solução da causa..."
                                    rows={5}
                                />
                            </div>
                        </div>
                    </section>
                )}

                {/* Causa specific fields */}
                {visibleFields.showDonations && (
                    <section className="mb-8 bg-white rounded-xl shadow-md border border-gray-200 p-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Doações</h2>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Objetivo (€)</label>
                                <div className="w-full">
                                    <input
                                        type="number"
                                        step="1"
                                        min="0"
                                        value={objetivo ?? ''}
                                        onChange={(e) => setObjetivo(e.target.value === '' ? null : parseInt(e.target.value, 10))}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--site-brown)] focus:border-[var(--site-brown)] transition"
                                        placeholder="0"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Angariado (€)</label>
                                <div className="w-full">
                                    <input
                                        type="number"
                                        step="1"
                                        min="0"
                                        value={angariado ?? ''}
                                        onChange={(e) => setAngariado(e.target.value === '' ? null : parseInt(e.target.value, 10))}
                                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--site-brown)] focus:border-[var(--site-brown)] transition"
                                        placeholder="0"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Media Section */}
                <section className="mb-8 bg-white rounded-xl shadow-md border border-gray-200 p-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Mídia</h2>
                    <div className="space-y-8">
                        {/* Imagem Principal */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-4">Imagem Principal</label>
                            <div className="flex gap-6">
                                {/* Uploader sempre visível */}
                                <div className="w-1/2">
                                    <div {...getRootPropsPrincipal()} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer h-48 flex flex-col justify-center hover:border-[var(--site-brown)] hover:bg-[var(--site-brown-100)] transition">
                                        <input {...getInputPropsPrincipal()} />
                                        <Upload size={32} className="mx-auto text-gray-400 mb-3" />
                                        <p className="text-gray-600 text-sm font-medium mb-1">
                                            {isDragActivePrincipal ? 'Solte a imagem aqui...' : 'Arraste e solte uma imagem ou clique para selecionar'}
                                        </p>
                                        <p className="text-xs text-gray-500">Apenas imagens são aceitas</p>
                                    </div>
                                </div>

                                {/* Preview ou espaço vazio */}
                                <div className="w-1/2">
                                    {imagemPrincipal ? (
                                        <div className="relative h-48 border border-gray-200 rounded-lg p-3 flex items-center justify-center bg-gray-50">
                                            {/* Next.js recommends <Image /> but these are dynamic object URLs or external links; keep <img> */}
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={URL.createObjectURL(imagemPrincipal)}
                                                alt="Imagem Principal"
                                                className="max-w-full max-h-full object-contain rounded cursor-pointer"
                                                onDoubleClick={() => setSelectedImage(URL.createObjectURL(imagemPrincipal))}
                                            />
                                            <button
                                                onClick={() => setImagemPrincipal(null)}
                                                className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 transition shadow-md"
                                            >
                                                <Trash2Icon size={16} />
                                            </button>
                                            <span className="absolute bottom-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded">
                                                Novo
                                            </span>
                                        </div>
                                    ) : imagemPrincipalExistente ? (
                                        <div className="relative h-48 border border-gray-200 rounded-lg p-3 flex items-center justify-center bg-gray-50">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={imagemPrincipalExistente.valor}
                                                alt="Imagem Principal Existente"
                                                className="max-w-full max-h-full object-contain rounded cursor-pointer"
                                                onDoubleClick={() => setSelectedImage(imagemPrincipalExistente!.valor)}
                                            />
                                            <button
                                                onClick={() => setImagemPrincipalExistente(null)}
                                                className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-1.5 hover:bg-red-600 transition shadow-md"
                                            >
                                                <Trash2Icon size={16} />
                                            </button>
                                            <span className="absolute bottom-3 left-3 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                                                Existente
                                            </span>
                                        </div>
                                    ) : (
                                        <div className="h-48 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                                            <div className="text-center">
                                                <ImageIcon size={32} className="mx-auto text-gray-400 mb-2" />
                                                <p className="text-gray-500 text-sm">Preview da imagem</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Anexos */}
                        {visibleFields.showAnexos && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-4">Anexos (Imagens Adicionais)</label>

                                {/* Anexos Existentes */}
                                {anexosExistentes.length > 0 && (
                                    <div className="mb-6">
                                        <h4 className="text-sm font-medium text-gray-700 mb-3">Anexos Existentes</h4>
                                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                            {anexosExistentes.map((anexo: Anexo, index: number) => (
                                                <div key={`existente-${anexo.id}`} className="relative group aspect-square">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        src={anexo.valor}
                                                        alt={`Anexo Existente ${index + 1}`}
                                                        className="w-full h-full object-cover rounded-lg border border-gray-200 cursor-pointer transition-transform hover:scale-105"
                                                        onDoubleClick={() => setSelectedImage(anexo.valor)}
                                                    />
                                                    <button
                                                        onClick={() => setAnexosExistentes(anexosExistentes.filter((_, i) => i !== index))}
                                                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all shadow-md hover:bg-red-600"
                                                    >
                                                        <Trash2Icon size={12} />
                                                    </button>
                                                    <span className="absolute bottom-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                                                        Existente
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Upload de Novos Anexos */}
                                <div {...getRootPropsAnexos()} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-[var(--site-brown)] hover:bg-[var(--site-brown-100)] transition">
                                    <input {...getInputPropsAnexos()} />
                                    <ImageIcon size={32} className="mx-auto text-gray-400 mb-3" />
                                    <p className="text-gray-600 text-sm font-medium mb-1">
                                        {isDragActiveAnexos ? 'Solte as imagens aqui...' : 'Arraste e solte imagens ou clique para selecionar'}
                                    </p>
                                    <p className="text-xs text-gray-500">Múltiplas imagens são aceitas</p>
                                </div>

                                {/* Novos Anexos */}
                                {anexos.length > 0 && (
                                    <div className="mt-6">
                                        <h4 className="text-sm font-medium text-gray-700 mb-3">Novos Anexos</h4>
                                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                            {anexos.map((file: File, index: number) => (
                                                <div key={`novo-${index}`} className="relative group aspect-square">
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                    <img
                                                        src={URL.createObjectURL(file)}
                                                        alt={`Novo Anexo ${index + 1}`}
                                                        className="w-full h-full object-cover rounded-lg border border-gray-200 cursor-pointer transition-transform hover:scale-105"
                                                        onDoubleClick={() => setSelectedImage(URL.createObjectURL(file))}
                                                    />
                                                    <button
                                                        onClick={() => setAnexos(anexos.filter((_, i) => i !== index))}
                                                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-all shadow-md hover:bg-red-600"
                                                    >
                                                        <Trash2Icon size={12} />
                                                    </button>
                                                    <span className="absolute bottom-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
                                                        Novo
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </section>

                {/* Action Buttons */}
                <section className="mb-8 bg-white rounded-xl shadow-md border border-gray-200 p-8">
                    <div className="flex justify-between items-center">
                        <div className="flex justify-start items-center">
                            <span className="text-sm font-medium text-gray-700">
                                A alterar conteúdo {isCreatingNew ? '(Modo Criação)' : '(Modo Edição)'}
                            </span>
                        </div>
                        <div className="flex justify-end gap-4">
                            <button onClick={handleSave} className="create-button button-base">
                                <Plus size={16} className="mr-2 inline" />
                                Guardar Conteúdo
                            </button>
                            <button onClick={handleCancel} className="delete-button button-base">
                                <X size={16} className="mr-2 inline" />
                                Cancelar
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            {/* Modal para imagem em grande */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
                    <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={selectedImage!}
                            alt="Imagem ampliada"
                            className="max-w-full max-h-full object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default ContentEditor;