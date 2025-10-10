"use client";

import React, { useState, useRef, useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';
import { TableProperties, Bold, Italic, Underline, Strikethrough, Smile, X, Upload, Image as ImageIcon, TrashIcon, Trash2Icon, Quote, Heading1, Heading2, Heading3, Heading4, List, ListOrdered, Code, AlignLeft, AlignCenter, AlignRight, Type, Plus } from 'lucide-react';
import { useEditor, EditorContent } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import BoldExt from '@tiptap/extension-bold';
import ItalicExt from '@tiptap/extension-italic';
import UnderlineExt from '@tiptap/extension-underline';
import StrikeExt from '@tiptap/extension-strike';
import { TextStyle, FontSize } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { Highlight } from '@tiptap/extension-highlight';
import Heading from '@tiptap/extension-heading';
import ListItem from '@tiptap/extension-list-item';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import Blockquote from '@tiptap/extension-blockquote';
import CodeBlock from '@tiptap/extension-code-block';
import { TextAlign } from '@tiptap/extension-text-align';
import { useDropzone } from 'react-dropzone';

import { Anexo, Conteudo, Etiqueta } from '@/models';
import { TipoAnexo, TipoConteudo } from '@/utils';
import { useEtiquetaHook } from '@/hooks';
import { toast } from 'react-toastify';


export interface ContentEditorProps<T> {
    titulo?: string;
    conteudo?: Conteudo | null;
    tipoConteudo: TipoConteudo;
    onSave?: (conteudo: Conteudo, filesData: { imagemPrincipal: File | null, anexos: File[] }) => void;
    onNext?: () => void;
    onPrevious?: () => void;
}

export function ContentEditor<T>({
    titulo,
    conteudo,
    tipoConteudo,
    onSave,
    // onNext,
    // onPrevious,
}: ContentEditorProps<T>) {

    const [tituloShowEmoji, setTituloShowEmoji] = useState(false);
    const [subtituloShowEmoji, setSubtituloShowEmoji] = useState(false);
    const [update, setUpdate] = useState<number>(0);
    const [imagemPrincipal, setImagemPrincipal] = useState<File | null>(null);
    const [anexos, setAnexos] = useState<File[]>([]);
    const [anexosExistentes, setAnexosExistentes] = useState<Anexo[]>([]);
    const [imagemPrincipalExistente, setImagemPrincipalExistente] = useState<Anexo | null>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [etiquetasSelecionadas, setEtiquetasSelecionadas] = useState<string[]>([]);
    const [novaEtiqueta, setNovaEtiqueta] = useState('');
    const [corpoShowEmoji, setCorpoShowEmoji] = useState(false);
    const [corpoTextColor, setCorpoTextColor] = useState('#000000');
    const [corpoBgColor, setCorpoBgColor] = useState('#ffffff');
    const [tituloTextColor, setTituloTextColor] = useState('#000000');
    const [tituloBgColor, setTituloBgColor] = useState('#ffffff');
    const [subtituloTextColor, setSubtituloTextColor] = useState('#000000');
    const [subtituloBgColor, setSubtituloBgColor] = useState('#ffffff');

    // Estado para múltiplos conteúdos
    const [isCreatingNew, setIsCreatingNew] = useState(conteudo ? false : true);

    // Conteúdo atual sendo editado
    const currentContent = isCreatingNew ? null : conteudo;

    // Key interna para forçar remontagem
    const [internalKey, setInternalKey] = useState(Date.now());

    // Atualizar key interna quando conteúdo muda
    useEffect(() => {
        setInternalKey(Date.now());
    }, [conteudo, conteudo?.id]);

    // Funções auxiliares para obter cores ativas
    const getEditorColorState = (editor: any) => {
        if (!editor) return { color: '#000000', highlightColor: '#ffffff' };

        const textStyleAttrs = editor.getAttributes('textStyle');
        const highlightAttrs = editor.getAttributes('highlight');

        return {
            color: textStyleAttrs?.color || '#000000',
            highlightColor: highlightAttrs?.color || '#ffffff',
            isPurple: editor.isActive('textStyle', { color: '#958DF1' }),
            isRed: editor.isActive('textStyle', { color: '#' }),
            isOrange: editor.isActive('textStyle', { color: '#FBBC88' }),
            isYellow: editor.isActive('textStyle', { color: '#FAF594' }),
            isBlue: editor.isActive('textStyle', { color: '#70CFF8' }),
            isTeal: editor.isActive('textStyle', { color: '#94FADB' }),
            isGreen: editor.isActive('textStyle', { color: '#B9F18D' }),
            isPurpleBg: editor.isActive('highlight', { color: '#958DF1' }),
            isRedBg: editor.isActive('highlight', { color: '#F98181' }),
            isOrangeBg: editor.isActive('highlight', { color: '#FBBC88' }),
            isYellowBg: editor.isActive('highlight', { color: '#FAF594' }),
            isBlueBg: editor.isActive('highlight', { color: '#70CFF8' }),
            isTealBg: editor.isActive('highlight', { color: '#94FADB' }),
            isGreenBg: editor.isActive('highlight', { color: '#B9F18D' }),
        };
    };

    // Função auxiliar para determinar campos visíveis baseado no tipo de conteúdo
    const getVisibleFields = (tipo: TipoConteudo) => {
        return {
            showAnexoPrincipal: true, // Todos os tipos têm anexo principal
            showAnexos: true,
            showEtiquetas: true,
            showSubtitulo: true, // Todos os tipos têm subtítulo
            showCorpo: true,
            showDataInicioFim: tipo === TipoConteudo.Evento,
        };
    };

    const visibleFields = getVisibleFields(tipoConteudo);

    // Etiquetas existentes (vem da API)
    const { data: etiquetasData = [] } = useEtiquetaHook();
    const etiquetasExistentes = etiquetasData.map(etiqueta => etiqueta.nome);

    const adicionarEtiqueta = (etiqueta: string) => {
        if (etiqueta.trim() && !etiquetasSelecionadas.includes(etiqueta.trim())) {
            setEtiquetasSelecionadas([...etiquetasSelecionadas, etiqueta.trim()]);
        }
    };

    const removerEtiqueta = (etiqueta: string) => {
        setEtiquetasSelecionadas(etiquetasSelecionadas.filter(e => e !== etiqueta));
    };

    const handleNovaEtiqueta = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            adicionarEtiqueta(novaEtiqueta);
            setNovaEtiqueta('');
        }
    };

    const validateConteudo = (): boolean => {
        const titulo = tituloEditor?.getText().trim() || '';
        const corpo = corpoEditor?.getText().trim() || '';
        const subtitulo = subtituloEditor?.getText().trim() || '';

        const totalAnexos = (imagemPrincipal ? 1 : 0) +
            (imagemPrincipalExistente && !imagemPrincipal ? 1 : 0) +
            anexos.length +
            anexosExistentes.length;

        if (!titulo) {
            toast.warning('Por favor, preencha o título.');
            return false;
        }

        switch (tipoConteudo) {
            case TipoConteudo.Projeto:
            case TipoConteudo.Noticia:
                if (!corpo) {
                    toast.warning('Por favor, preencha o corpo do conteúdo.');
                    return false;
                }
                if (totalAnexos === 0) {
                    toast.warning('Por favor, adicione pelo menos uma imagem/anexo.');
                    return false;
                }
                break;

            case TipoConteudo.Evento:
                if (!corpo) {
                    toast.warning('Por favor, preencha o corpo do evento.');
                    return false;
                }
                if (totalAnexos === 0) {
                    toast.warning('Por favor, adicione pelo menos uma imagem/anexo.');
                    return false;
                }
                const dataInicioInput = document.getElementById('data-inicio') as HTMLInputElement;
                if (!dataInicioInput?.value) {
                    toast.warning('Por favor, defina a data de início do evento.');
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

    const tituloEditor = useEditor({
        extensions: [Document, Paragraph, Text, BoldExt, ItalicExt, UnderlineExt, StrikeExt, TextStyle, FontSize, Color, Highlight.configure({
            multicolor: true,
        })],
        content: '',
        immediatelyRender: false,
        onUpdate: () => setUpdate((u: number) => u + 1),
        onSelectionUpdate: () => setUpdate((u: number) => u + 1),
    });

    const subtituloEditor = useEditor({
        extensions: [Document, Paragraph, Text, BoldExt, ItalicExt, UnderlineExt, StrikeExt, TextStyle, FontSize, Color, Highlight.configure({
            multicolor: true,
        })],
        content: '',
        immediatelyRender: false,
        onUpdate: () => setUpdate((u: number) => u + 1),
        onSelectionUpdate: () => setUpdate((u: number) => u + 1),
    });

    const corpoEditor = useEditor({
        extensions: [
            Document,
            Paragraph,
            Text,
            BoldExt,
            ItalicExt,
            UnderlineExt,
            StrikeExt,
            TextStyle,
            FontSize,
            Color,
            Highlight.configure({
                multicolor: true,
            }),
            Heading.configure({ levels: [1, 2, 3, 4] }),
            ListItem,
            BulletList,
            OrderedList,
            Blockquote,
            CodeBlock,
            TextAlign.configure({
                types: ['heading', 'paragraph'],
                alignments: ['left', 'center', 'right', 'justify'],
            }),
        ],
        content: '',
        immediatelyRender: false,
        onUpdate: () => setUpdate((u: number) => u + 1),
        onSelectionUpdate: () => setUpdate((u: number) => u + 1),
    });

    // Atualizar estados dos inputs quando o editor muda
    useEffect(() => {
        if (tituloEditor) {
            const textStyleAttrs = tituloEditor.getAttributes('textStyle');
            const highlightAttrs = tituloEditor.getAttributes('highlight');

            if (textStyleAttrs?.color) {
                setTituloTextColor(textStyleAttrs.color);
            }
            if (highlightAttrs?.color) {
                setTituloBgColor(highlightAttrs.color);
            }
        }

        if (subtituloEditor) {
            const textStyleAttrs = subtituloEditor.getAttributes('textStyle');
            const highlightAttrs = subtituloEditor.getAttributes('highlight');

            if (textStyleAttrs?.color) {
                setSubtituloTextColor(textStyleAttrs.color);
            }
            if (highlightAttrs?.color) {
                setSubtituloBgColor(highlightAttrs.color);
            }
        }

        if (corpoEditor) {
            const textStyleAttrs = corpoEditor.getAttributes('textStyle');
            const highlightAttrs = corpoEditor.getAttributes('highlight');

            if (textStyleAttrs?.color) {
                setCorpoTextColor(textStyleAttrs.color);
            }
            if (highlightAttrs?.color) {
                setCorpoBgColor(highlightAttrs.color);
            }
        }
    }, [update, tituloEditor, subtituloEditor, corpoEditor]);

    // Inicializar editores com conteúdo existente
    useEffect(() => {
        if (currentContent) {
            // Só inicializar se temos dados válidos
            if (tituloEditor && currentContent.titulo) {
                tituloEditor.commands.setContent(currentContent.titulo);
            }
            if (subtituloEditor && currentContent.subtitulo && visibleFields.showSubtitulo) {
                subtituloEditor.commands.setContent(currentContent.subtitulo);
            }
            if (corpoEditor && currentContent.corpo && visibleFields.showCorpo) {
                corpoEditor.commands.setContent(currentContent.corpo);
            }

            // Inicializar datas se for evento
            if (visibleFields.showDataInicioFim) {
                if (currentContent.data_inicio) {
                    const dataInicioInput = document.getElementById('data-inicio') as HTMLInputElement;
                    if (dataInicioInput) {
                        dataInicioInput.value = currentContent.data_inicio.toISOString().split('T')[0];
                    }
                }
                if (currentContent.data_fim) {
                    const dataFimInput = document.getElementById('data-fim') as HTMLInputElement;
                    if (dataFimInput) {
                        dataFimInput.value = currentContent.data_fim.toISOString().split('T')[0];
                    }
                }
            }

            // Inicializar etiquetas
            if (visibleFields.showEtiquetas && currentContent.etiquetas) {
                setEtiquetasSelecionadas(currentContent.etiquetas.map((e: Etiqueta) => e.nome));
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
        }
    }, [currentContent, tituloEditor, subtituloEditor, corpoEditor, visibleFields.showDataInicioFim, visibleFields.showEtiquetas, visibleFields.showCorpo, visibleFields.showSubtitulo, internalKey]);

    const handleSave = async () => {
        try {
            // Validar antes de salvar
            if (!validateConteudo()) {
                return;
            }

            // Coletar dados dos editores
            const titulo = tituloEditor?.getHTML() || '';
            const subtitulo = visibleFields.showSubtitulo ? subtituloEditor?.getHTML() || null : null;
            const corpo = visibleFields.showCorpo ? corpoEditor?.getHTML() || null : null;

            // Coletar datas se for evento
            let dataInicio = null;
            let dataFim = null;
            if (visibleFields.showDataInicioFim) {
                const dataInicioInput = document.getElementById('data-inicio') as HTMLInputElement;
                const dataFimInput = document.getElementById('data-fim') as HTMLInputElement;
                dataInicio = dataInicioInput?.value ? new Date(dataInicioInput.value) : null;
                dataFim = dataFimInput?.value ? new Date(dataFimInput.value) : null;
            }

            // Preparar etiquetas (só se estiverem visíveis)
            const etiquetas = visibleFields.showEtiquetas ? etiquetasSelecionadas.map(nome => {
                // Procurar se a etiqueta já existe
                const etiquetaExistente = etiquetasData.find(e => e.nome === nome);
                return etiquetaExistente || new Etiqueta({ nome });
            }) : [];

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
                titulo,
                subtitulo,
                corpo,
                data_inicio: dataInicio,
                data_fim: dataFim,
                publico: false, // Default
                etiquetas,
                anexos: anexosList, // Apenas anexos existentes
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
                <h1 className="text-3xl font-bold text-gray-900 mb-8">{titulo ?? "Editor de Conteúdo"}</h1>

                {/* Progress Bar - só mostra se há múltiplos conteúdos */}
                {/* {conteudos.length > 1 && (
                    <div className="mb-8 bg-white rounded-xl shadow-md border border-gray-200 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-medium text-gray-700">
                                A editar conteúdo {currentContentIndex + 1} de {conteudos.length}
                            </span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => {
                                        if (currentContentIndex > 0) {
                                            setCurrentContentIndex(currentContentIndex - 1);
                                            onPrevious?.();
                                        }
                                    }}
                                    disabled={currentContentIndex === 0}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Anterior
                                </button>
                                <button
                                    onClick={() => {
                                        if (currentContentIndex < conteudos.length - 1) {
                                            setCurrentContentIndex(currentContentIndex + 1);
                                            onNext?.();
                                        }
                                    }}
                                    disabled={currentContentIndex === conteudos.length - 1}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Próximo
                                </button>
                            </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-[var(--site-brown)] h-2 rounded-full transition-all duration-300"
                                style={{ width: `${((currentContentIndex + 1) / conteudos.length) * 100}%` }}
                            ></div>
                        </div>
                    </div>
                )} */}

                {/* General Section */}
                <section className="mb-8 bg-white rounded-xl shadow-md border border-gray-200 p-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">Informações Gerais</h2>
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Título</label>
                            <div className="border border-gray-300 rounded-lg">
                                <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                                    <div className="flex gap-2 flex-wrap mb-2">
                                        <button onClick={() => tituloEditor?.chain().focus().toggleBold().run()} className={`p-2 rounded-md transition ${tituloEditor?.isActive('bold') ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><Bold size={16} /></button>
                                        <button onClick={() => tituloEditor?.chain().focus().toggleItalic().run()} className={`p-2 rounded-md transition ${tituloEditor?.isActive('italic') ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><Italic size={16} /></button>
                                        <button onClick={() => tituloEditor?.chain().focus().toggleUnderline().run()} className={`p-2 rounded-md transition ${tituloEditor?.isActive('underline') ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><Underline size={16} /></button>
                                        <button onClick={() => tituloEditor?.chain().focus().toggleStrike().run()} className={`p-2 rounded-md transition ${tituloEditor?.isActive('strike') ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><Strikethrough size={16} /></button>
                                        <div className="relative">
                                            <button onClick={() => setTituloShowEmoji(!tituloShowEmoji)} className="p-2 rounded-md bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 transition"><Smile size={16} /></button>
                                            {tituloShowEmoji && <div className="absolute top-full left-0 z-10 mt-1"><EmojiPicker onEmojiClick={(emojiData) => { tituloEditor?.chain().focus().insertContent(emojiData.emoji).run(); setTituloShowEmoji(false); }} /></div>}
                                        </div>
                                    </div>

                                    {/* Linha de cores do texto */}
                                    <div className="flex gap-2 flex-wrap items-center mb-2">
                                        <span className="text-xs text-gray-500 mr-2 self-center">Texto:</span>
                                        <input
                                            type="color"
                                            onChange={(event) => {
                                                tituloEditor?.chain().focus().setColor(event.target.value).run();
                                                setTituloTextColor(event.target.value);
                                            }}
                                            value={tituloTextColor}
                                            className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                                            title="Selecionar cor personalizada do texto"
                                        />
                                        <button onClick={() => { tituloEditor?.chain().focus().setColor('#958DF1').run(); setTituloTextColor('#958DF1'); }} className={`w-6 h-6 rounded-full bg-purple-400 border-2 ${tituloEditor?.isActive('textStyle', { color: '#958DF1' }) ? 'border-gray-800' : 'border-gray-300'} transition`} title="Roxo"></button>
                                        <button onClick={() => { tituloEditor?.chain().focus().setColor('#F98181').run(); setTituloTextColor('#F98181'); }} className={`w-6 h-6 rounded-full bg-red-400 border-2 ${tituloEditor?.isActive('textStyle', { color: '#F98181' }) ? 'border-gray-800' : 'border-gray-300'} transition`} title="Vermelho"></button>
                                        <button onClick={() => { tituloEditor?.chain().focus().setColor('#FBBC88').run(); setTituloTextColor('#FBBC88'); }} className={`w-6 h-6 rounded-full bg-orange-400 border-2 ${tituloEditor?.isActive('textStyle', { color: '#FBBC88' }) ? 'border-gray-800' : 'border-gray-300'} transition`} title="Laranja"></button>
                                        <button onClick={() => { tituloEditor?.chain().focus().setColor('#FAF594').run(); setTituloTextColor('#FAF594'); }} className={`w-6 h-6 rounded-full bg-yellow-400 border-2 ${tituloEditor?.isActive('textStyle', { color: '#FAF594' }) ? 'border-gray-800' : 'border-gray-300'} transition`} title="Amarelo"></button>
                                        <button onClick={() => { tituloEditor?.chain().focus().setColor('#70CFF8').run(); setTituloTextColor('#70CFF8'); }} className={`w-6 h-6 rounded-full bg-blue-400 border-2 ${tituloEditor?.isActive('textStyle', { color: '#70CFF8' }) ? 'border-gray-800' : 'border-gray-300'} transition`} title="Azul"></button>
                                        <button onClick={() => { tituloEditor?.chain().focus().setColor('#94FADB').run(); setTituloTextColor('#94FADB'); }} className={`w-6 h-6 rounded-full bg-teal-400 border-2 ${tituloEditor?.isActive('textStyle', { color: '#94FADB' }) ? 'border-gray-800' : 'border-gray-300'} transition`} title="Verde água"></button>
                                        <button onClick={() => { tituloEditor?.chain().focus().setColor('#B9F18D').run(); setTituloTextColor('#B9F18D'); }} className={`w-6 h-6 rounded-full bg-green-400 border-2 ${tituloEditor?.isActive('textStyle', { color: '#B9F18D' }) ? 'border-gray-800' : 'border-gray-300'} transition`} title="Verde"></button>
                                        <button onClick={() => tituloEditor?.chain().focus().unsetColor().run()} className="p-2 rounded-md bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 transition" title="Remover cor do texto"><X size={14} /></button>

                                        {/* Separador */}
                                        <div className="w-px h-8 bg-gray-300 mx-4"></div>

                                        {/* Cor de fundo */}
                                        <span className="text-xs text-gray-500 mr-2 self-center">Fundo:</span>
                                        <input
                                            type="color"
                                            onChange={(event) => {
                                                tituloEditor?.chain().focus().setHighlight({ color: event.target.value }).run();
                                                setTituloBgColor(event.target.value);
                                            }}
                                            value={tituloBgColor}
                                            className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                                            title="Selecionar cor personalizada do fundo"
                                        />
                                        <button onClick={() => { tituloEditor?.chain().focus().setHighlight({ color: '#958DF1' }).run(); setTituloBgColor('#958DF1'); }} className={`w-6 h-6 rounded-full bg-purple-400 border-2 ${getEditorColorState(tituloEditor).isPurpleBg ? 'border-gray-800' : 'border-gray-300'} transition`} title="Fundo Roxo"></button>
                                        <button onClick={() => { tituloEditor?.chain().focus().setHighlight({ color: '#F98181' }).run(); setTituloBgColor('#F98181'); }} className={`w-6 h-6 rounded-full bg-red-400 border-2 ${getEditorColorState(tituloEditor).isRedBg ? 'border-gray-800' : 'border-gray-300'} transition`} title="Fundo Vermelho"></button>
                                        <button onClick={() => { tituloEditor?.chain().focus().setHighlight({ color: '#FBBC88' }).run(); setTituloBgColor('#FBBC88'); }} className={`w-6 h-6 rounded-full bg-orange-400 border-2 ${getEditorColorState(tituloEditor).isOrangeBg ? 'border-gray-800' : 'border-gray-300'} transition`} title="Fundo Laranja"></button>
                                        <button onClick={() => { tituloEditor?.chain().focus().setHighlight({ color: '#FAF594' }).run(); setTituloBgColor('#FAF594'); }} className={`w-6 h-6 rounded-full bg-yellow-400 border-2 ${getEditorColorState(tituloEditor).isYellowBg ? 'border-gray-800' : 'border-gray-300'} transition`} title="Fundo Amarelo"></button>
                                        <button onClick={() => { tituloEditor?.chain().focus().setHighlight({ color: '#70CFF8' }).run(); setTituloBgColor('#70CFF8'); }} className={`w-6 h-6 rounded-full bg-blue-400 border-2 ${getEditorColorState(tituloEditor).isBlueBg ? 'border-gray-800' : 'border-gray-300'} transition`} title="Fundo Azul"></button>
                                        <button onClick={() => { tituloEditor?.chain().focus().setHighlight({ color: '#94FADB' }).run(); setTituloBgColor('#94FADB'); }} className={`w-6 h-6 rounded-full bg-teal-400 border-2 ${getEditorColorState(tituloEditor).isTealBg ? 'border-gray-800' : 'border-gray-300'} transition`} title="Fundo Verde água"></button>
                                        <button onClick={() => { tituloEditor?.chain().focus().setHighlight({ color: '#B9F18D' }).run(); setTituloBgColor('#B9F18D'); }} className={`w-6 h-6 rounded-full bg-green-400 border-2 ${getEditorColorState(tituloEditor).isGreenBg ? 'border-gray-800' : 'border-gray-300'} transition`} title="Fundo Verde"></button>
                                        <button onClick={() => tituloEditor?.chain().focus().unsetHighlight().run()} className="p-2 rounded-md bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 transition" title="Remover cor do fundo"><X size={14} /></button>
                                    </div>
                                </div>
                                <div className="p-4 min-h-[80px]">
                                    <EditorContent editor={tituloEditor} className="tiptap-editor text-gray-900" />
                                </div>
                            </div>
                        </div>

                        {/* Subtítulo - só mostra se não for Banner */}
                        {visibleFields.showSubtitulo && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subtítulo</label>
                                <div className="border border-gray-300 rounded-lg">
                                    <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                                        <div className="flex gap-2 flex-wrap mb-2">
                                            <button onClick={() => subtituloEditor?.chain().focus().toggleBold().run()} className={`p-2 rounded-md transition ${subtituloEditor?.isActive('bold') ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><Bold size={16} /></button>
                                            <button onClick={() => subtituloEditor?.chain().focus().toggleItalic().run()} className={`p-2 rounded-md transition ${subtituloEditor?.isActive('italic') ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><Italic size={16} /></button>
                                            <button onClick={() => subtituloEditor?.chain().focus().toggleUnderline().run()} className={`p-2 rounded-md transition ${subtituloEditor?.isActive('underline') ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><Underline size={16} /></button>
                                            <button onClick={() => subtituloEditor?.chain().focus().toggleStrike().run()} className={`p-2 rounded-md transition ${subtituloEditor?.isActive('strike') ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><Strikethrough size={16} /></button>
                                            <div className="relative">
                                                <button onClick={() => setSubtituloShowEmoji(!subtituloShowEmoji)} className="p-2 rounded-md bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 transition"><Smile size={16} /></button>
                                                {subtituloShowEmoji && <div className="absolute top-full left-0 z-10 mt-1"><EmojiPicker onEmojiClick={(emojiData) => { subtituloEditor?.chain().focus().insertContent(emojiData.emoji).run(); setSubtituloShowEmoji(false); }} /></div>}
                                            </div>
                                        </div>

                                        {/* Linha de cores do texto */}
                                        <div className="flex gap-2 flex-wrap items-center mb-2">
                                            <span className="text-xs text-gray-500 mr-2 self-center">Texto:</span>
                                            <input
                                                type="color"
                                                onChange={(event) => {
                                                    subtituloEditor?.chain().focus().setColor(event.target.value).run();
                                                    setSubtituloTextColor(event.target.value);
                                                }}
                                                value={subtituloTextColor}
                                                className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                                                title="Selecionar cor personalizada do texto"
                                            />
                                            <button onClick={() => { subtituloEditor?.chain().focus().setColor('#958DF1').run(); setSubtituloTextColor('#958DF1'); }} className={`w-6 h-6 rounded-full bg-purple-400 border-2 ${subtituloEditor?.isActive('textStyle', { color: '#958DF1' }) ? 'border-gray-800' : 'border-gray-300'} transition`} title="Roxo"></button>
                                            <button onClick={() => { subtituloEditor?.chain().focus().setColor('#F98181').run(); setSubtituloTextColor('#F98181'); }} className={`w-6 h-6 rounded-full bg-red-400 border-2 ${subtituloEditor?.isActive('textStyle', { color: '#F98181' }) ? 'border-gray-800' : 'border-gray-300'} transition`} title="Vermelho"></button>
                                            <button onClick={() => { subtituloEditor?.chain().focus().setColor('#FBBC88').run(); setSubtituloTextColor('#FBBC88'); }} className={`w-6 h-6 rounded-full bg-orange-400 border-2 ${subtituloEditor?.isActive('textStyle', { color: '#FBBC88' }) ? 'border-gray-800' : 'border-gray-300'} transition`} title="Laranja"></button>
                                            <button onClick={() => { subtituloEditor?.chain().focus().setColor('#FAF594').run(); setSubtituloTextColor('#FAF594'); }} className={`w-6 h-6 rounded-full bg-yellow-400 border-2 ${subtituloEditor?.isActive('textStyle', { color: '#FAF594' }) ? 'border-gray-800' : 'border-gray-300'} transition`} title="Amarelo"></button>
                                            <button onClick={() => { subtituloEditor?.chain().focus().setColor('#70CFF8').run(); setSubtituloTextColor('#70CFF8'); }} className={`w-6 h-6 rounded-full bg-blue-400 border-2 ${subtituloEditor?.isActive('textStyle', { color: '#70CFF8' }) ? 'border-gray-800' : 'border-gray-300'} transition`} title="Azul"></button>
                                            <button onClick={() => { subtituloEditor?.chain().focus().setColor('#94FADB').run(); setSubtituloTextColor('#94FADB'); }} className={`w-6 h-6 rounded-full bg-teal-400 border-2 ${subtituloEditor?.isActive('textStyle', { color: '#94FADB' }) ? 'border-gray-800' : 'border-gray-300'} transition`} title="Verde água"></button>
                                            <button onClick={() => { subtituloEditor?.chain().focus().setColor('#B9F18D').run(); setSubtituloTextColor('#B9F18D'); }} className={`w-6 h-6 rounded-full bg-green-400 border-2 ${subtituloEditor?.isActive('textStyle', { color: '#B9F18D' }) ? 'border-gray-800' : 'border-gray-300'} transition`} title="Verde"></button>
                                            <button onClick={() => subtituloEditor?.chain().focus().unsetColor().run()} className="p-2 rounded-md bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 transition" title="Remover cor do texto"><X size={14} /></button>

                                            {/* Separador */}
                                            <div className="w-px h-8 bg-gray-300 mx-4"></div>

                                            {/* Cor de fundo */}
                                            <span className="text-xs text-gray-500 mr-2 self-center">Fundo:</span>
                                            <input
                                                type="color"
                                                onChange={(event) => {
                                                    subtituloEditor?.chain().focus().setHighlight({ color: event.target.value }).run();
                                                    setSubtituloBgColor(event.target.value);
                                                }}
                                                value={subtituloBgColor}
                                                className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                                                title="Selecionar cor personalizada do fundo"
                                            />
                                            <button onClick={() => { subtituloEditor?.chain().focus().setHighlight({ color: '#958DF1' }).run(); setSubtituloBgColor('#958DF1'); }} className={`w-6 h-6 rounded-full bg-purple-400 border-2 ${getEditorColorState(subtituloEditor).isPurpleBg ? 'border-gray-800' : 'border-gray-300'} transition`} title="Fundo Roxo"></button>
                                            <button onClick={() => { subtituloEditor?.chain().focus().setHighlight({ color: '#F98181' }).run(); setSubtituloBgColor('#F98181'); }} className={`w-6 h-6 rounded-full bg-red-400 border-2 ${getEditorColorState(subtituloEditor).isRedBg ? 'border-gray-800' : 'border-gray-300'} transition`} title="Fundo Vermelho"></button>
                                            <button onClick={() => { subtituloEditor?.chain().focus().setHighlight({ color: '#FBBC88' }).run(); setSubtituloBgColor('#FBBC88'); }} className={`w-6 h-6 rounded-full bg-orange-400 border-2 ${getEditorColorState(subtituloEditor).isOrangeBg ? 'border-gray-800' : 'border-gray-300'} transition`} title="Fundo Laranja"></button>
                                            <button onClick={() => { subtituloEditor?.chain().focus().setHighlight({ color: '#FAF594' }).run(); setSubtituloBgColor('#FAF594'); }} className={`w-6 h-6 rounded-full bg-yellow-400 border-2 ${getEditorColorState(subtituloEditor).isYellowBg ? 'border-gray-800' : 'border-gray-300'} transition`} title="Fundo Amarelo"></button>
                                            <button onClick={() => { subtituloEditor?.chain().focus().setHighlight({ color: '#70CFF8' }).run(); setSubtituloBgColor('#70CFF8'); }} className={`w-6 h-6 rounded-full bg-blue-400 border-2 ${getEditorColorState(subtituloEditor).isBlueBg ? 'border-gray-800' : 'border-gray-300'} transition`} title="Fundo Azul"></button>
                                            <button onClick={() => { subtituloEditor?.chain().focus().setHighlight({ color: '#94FADB' }).run(); setSubtituloBgColor('#94FADB'); }} className={`w-6 h-6 rounded-full bg-teal-400 border-2 ${getEditorColorState(subtituloEditor).isTealBg ? 'border-gray-800' : 'border-gray-300'} transition`} title="Fundo Verde água"></button>
                                            <button onClick={() => { subtituloEditor?.chain().focus().setHighlight({ color: '#B9F18D' }).run(); setSubtituloBgColor('#B9F18D'); }} className={`w-6 h-6 rounded-full bg-green-400 border-2 ${getEditorColorState(subtituloEditor).isGreenBg ? 'border-gray-800' : 'border-gray-300'} transition`} title="Fundo Verde"></button>
                                            <button onClick={() => subtituloEditor?.chain().focus().unsetHighlight().run()} className="p-2 rounded-md bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 transition" title="Remover cor do fundo"><X size={14} /></button>
                                        </div>
                                    </div>
                                    <div className="p-4 min-h-[80px]">
                                        <EditorContent editor={subtituloEditor} className="tiptap-editor text-gray-900" />
                                    </div>
                                </div>
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
                        <div className="border border-gray-300 rounded-lg">
                            <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                                <div className="flex gap-2 flex-wrap mb-2">
                                    {/* Formatação básica */}
                                    <button onClick={() => corpoEditor?.chain().focus().toggleBold().run()} className={`p-2 rounded-md transition ${corpoEditor?.isActive('bold') ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><Bold size={16} /></button>
                                    <button onClick={() => corpoEditor?.chain().focus().toggleItalic().run()} className={`p-2 rounded-md transition ${corpoEditor?.isActive('italic') ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><Italic size={16} /></button>
                                    <button onClick={() => corpoEditor?.chain().focus().toggleUnderline().run()} className={`p-2 rounded-md transition ${corpoEditor?.isActive('underline') ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><Underline size={16} /></button>
                                    <button onClick={() => corpoEditor?.chain().focus().toggleStrike().run()} className={`p-2 rounded-md transition ${corpoEditor?.isActive('strike') ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><Strikethrough size={16} /></button>

                                    {/* Separador */}
                                    <div className="w-px h-8 bg-gray-300 mx-2"></div>

                                    {/* Cabeçalhos */}
                                    <button onClick={() => corpoEditor?.chain().focus().toggleHeading({ level: 1 }).run()} className={`p-2 rounded-md transition ${corpoEditor?.isActive('heading', { level: 1 }) ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><Heading1 size={16} /></button>
                                    <button onClick={() => corpoEditor?.chain().focus().toggleHeading({ level: 2 }).run()} className={`p-2 rounded-md transition ${corpoEditor?.isActive('heading', { level: 2 }) ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><Heading2 size={16} /></button>
                                    <button onClick={() => corpoEditor?.chain().focus().toggleHeading({ level: 3 }).run()} className={`p-2 rounded-md transition ${corpoEditor?.isActive('heading', { level: 3 }) ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><Heading3 size={16} /></button>
                                    <button onClick={() => corpoEditor?.chain().focus().toggleHeading({ level: 4 }).run()} className={`p-2 rounded-md transition ${corpoEditor?.isActive('heading', { level: 4 }) ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><Heading4 size={16} /></button>

                                    {/* Separador */}
                                    <div className="w-px h-8 bg-gray-300 mx-2"></div>

                                    {/* Alinhamento de texto */}
                                    <button onClick={() => corpoEditor?.chain().focus().setTextAlign('left').run()} className={`p-2 rounded-md transition ${corpoEditor?.isActive({ textAlign: 'left' }) ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><AlignLeft size={16} /></button>
                                    <button onClick={() => corpoEditor?.chain().focus().setTextAlign('center').run()} className={`p-2 rounded-md transition ${corpoEditor?.isActive({ textAlign: 'center' }) ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><AlignCenter size={16} /></button>
                                    <button onClick={() => corpoEditor?.chain().focus().setTextAlign('right').run()} className={`p-2 rounded-md transition ${corpoEditor?.isActive({ textAlign: 'right' }) ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><AlignRight size={16} /></button>
                                    <button onClick={() => corpoEditor?.chain().focus().setTextAlign('justify').run()} className={`p-2 rounded-md transition ${corpoEditor?.isActive({ textAlign: 'justify' }) ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><Type size={16} /></button>

                                    {/* Separador */}
                                    <div className="w-px h-8 bg-gray-300 mx-2"></div>

                                    {/* Listas */}
                                    <button onClick={() => corpoEditor?.chain().focus().toggleBulletList().run()} className={`p-2 rounded-md transition ${corpoEditor?.isActive('bulletList') ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><List size={16} /></button>
                                    <button onClick={() => corpoEditor?.chain().focus().toggleOrderedList().run()} className={`p-2 rounded-md transition ${corpoEditor?.isActive('orderedList') ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><ListOrdered size={16} /></button>

                                    {/* Separador */}
                                    <div className="w-px h-8 bg-gray-300 mx-2"></div>

                                    {/* Citação e Código */}
                                    <button onClick={() => corpoEditor?.chain().focus().toggleBlockquote().run()} className={`p-2 rounded-md transition ${corpoEditor?.isActive('blockquote') ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><Quote size={16} /></button>
                                    <button onClick={() => corpoEditor?.chain().focus().toggleCodeBlock().run()} className={`p-2 rounded-md transition ${corpoEditor?.isActive('codeBlock') ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}><Code size={16} /></button>

                                    {/* Separador */}
                                    <div className="w-px h-8 bg-gray-300 mx-2"></div>

                                    {/* Emojis */}
                                    <div className="relative">
                                        <button onClick={() => setCorpoShowEmoji(!corpoShowEmoji)} className="p-2 rounded-md bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 transition"><Smile size={16} /></button>
                                        {corpoShowEmoji && <div className="absolute top-full right-0 z-10 mt-1"><EmojiPicker onEmojiClick={(emojiData) => { corpoEditor?.chain().focus().insertContent(emojiData.emoji).run(); setCorpoShowEmoji(false); }} /></div>}
                                    </div>
                                </div>

                                {/* Linha de cores do texto */}
                                <div className="flex gap-2 flex-wrap items-center mb-2">
                                    <span className="text-xs text-gray-500 mr-2 self-center">Texto:</span>
                                    <input
                                        type="color"
                                        onChange={(event) => {
                                            corpoEditor?.chain().focus().setColor(event.target.value).run();
                                            setCorpoTextColor(event.target.value);
                                        }}
                                        value={corpoTextColor}
                                        className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                                        title="Selecionar cor personalizada do texto"
                                    />
                                    <button onClick={() => { corpoEditor?.chain().focus().setColor('#958DF1').run(); setCorpoTextColor('#958DF1'); }} className={`w-6 h-6 rounded-full bg-purple-400 border-2 ${corpoEditor?.isActive('textStyle', { color: '#958DF1' }) ? 'border-gray-800' : 'border-gray-300'} transition`} title="Roxo"></button>
                                    <button onClick={() => { corpoEditor?.chain().focus().setColor('#F98181').run(); setCorpoTextColor('#F98181'); }} className={`w-6 h-6 rounded-full bg-red-400 border-2 ${corpoEditor?.isActive('textStyle', { color: '#F98181' }) ? 'border-gray-800' : 'border-gray-300'} transition`} title="Vermelho"></button>
                                    <button onClick={() => { corpoEditor?.chain().focus().setColor('#FBBC88').run(); setCorpoTextColor('#FBBC88'); }} className={`w-6 h-6 rounded-full bg-orange-400 border-2 ${corpoEditor?.isActive('textStyle', { color: '#FBBC88' }) ? 'border-gray-800' : 'border-gray-300'} transition`} title="Laranja"></button>
                                    <button onClick={() => { corpoEditor?.chain().focus().setColor('#FAF594').run(); setCorpoTextColor('#FAF594'); }} className={`w-6 h-6 rounded-full bg-yellow-400 border-2 ${corpoEditor?.isActive('textStyle', { color: '#FAF594' }) ? 'border-gray-800' : 'border-gray-300'} transition`} title="Amarelo"></button>
                                    <button onClick={() => { corpoEditor?.chain().focus().setColor('#70CFF8').run(); setCorpoTextColor('#70CFF8'); }} className={`w-6 h-6 rounded-full bg-blue-400 border-2 ${corpoEditor?.isActive('textStyle', { color: '#70CFF8' }) ? 'border-gray-800' : 'border-gray-300'} transition`} title="Azul"></button>
                                    <button onClick={() => { corpoEditor?.chain().focus().setColor('#94FADB').run(); setCorpoTextColor('#94FADB'); }} className={`w-6 h-6 rounded-full bg-teal-400 border-2 ${corpoEditor?.isActive('textStyle', { color: '#94FADB' }) ? 'border-gray-800' : 'border-gray-300'} transition`} title="Verde água"></button>
                                    <button onClick={() => { corpoEditor?.chain().focus().setColor('#B9F18D').run(); setCorpoTextColor('#B9F18D'); }} className={`w-6 h-6 rounded-full bg-green-400 border-2 ${corpoEditor?.isActive('textStyle', { color: '#B9F18D' }) ? 'border-gray-800' : 'border-gray-300'} transition`} title="Verde"></button>
                                    <button onClick={() => corpoEditor?.chain().focus().unsetColor().run()} className="p-2 rounded-md bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 transition" title="Remover cor do texto"><X size={14} /></button>

                                    {/* Separador */}
                                    <div className="w-px h-8 bg-gray-300 mx-4"></div>

                                    {/* Cor de fundo */}
                                    <span className="text-xs text-gray-500 mr-2 self-center">Fundo:</span>
                                    <input
                                        type="color"
                                        onChange={(event) => {
                                            corpoEditor?.chain().focus().setHighlight({ color: event.target.value }).run();
                                            setCorpoBgColor(event.target.value);
                                        }}
                                        value={corpoBgColor}
                                        className="w-8 h-8 rounded border border-gray-300 cursor-pointer"
                                        title="Selecionar cor personalizada do fundo"
                                    />
                                    <button onClick={() => { corpoEditor?.chain().focus().setHighlight({ color: '#958DF1' }).run(); setCorpoBgColor('#958DF1'); }} className={`w-6 h-6 rounded-full bg-purple-400 border-2 ${getEditorColorState(corpoEditor).isPurpleBg ? 'border-gray-800' : 'border-gray-300'} transition`} title="Fundo Roxo"></button>
                                    <button onClick={() => { corpoEditor?.chain().focus().setHighlight({ color: '#F98181' }).run(); setCorpoBgColor('#F98181'); }} className={`w-6 h-6 rounded-full bg-red-400 border-2 ${getEditorColorState(corpoEditor).isRedBg ? 'border-gray-800' : 'border-gray-300'} transition`} title="Fundo Vermelho"></button>
                                    <button onClick={() => { corpoEditor?.chain().focus().setHighlight({ color: '#FBBC88' }).run(); setCorpoBgColor('#FBBC88'); }} className={`w-6 h-6 rounded-full bg-orange-400 border-2 ${getEditorColorState(corpoEditor).isOrangeBg ? 'border-gray-800' : 'border-gray-300'} transition`} title="Fundo Laranja"></button>
                                    <button onClick={() => { corpoEditor?.chain().focus().setHighlight({ color: '#FAF594' }).run(); setCorpoBgColor('#FAF594'); }} className={`w-6 h-6 rounded-full bg-yellow-400 border-2 ${getEditorColorState(corpoEditor).isYellowBg ? 'border-gray-800' : 'border-gray-300'} transition`} title="Fundo Amarelo"></button>
                                    <button onClick={() => { corpoEditor?.chain().focus().setHighlight({ color: '#70CFF8' }).run(); setCorpoBgColor('#70CFF8'); }} className={`w-6 h-6 rounded-full bg-blue-400 border-2 ${getEditorColorState(corpoEditor).isBlueBg ? 'border-gray-800' : 'border-gray-300'} transition`} title="Fundo Azul"></button>
                                    <button onClick={() => { corpoEditor?.chain().focus().setHighlight({ color: '#94FADB' }).run(); setCorpoBgColor('#94FADB'); }} className={`w-6 h-6 rounded-full bg-teal-400 border-2 ${getEditorColorState(corpoEditor).isTealBg ? 'border-gray-800' : 'border-gray-300'} transition`} title="Fundo Verde água"></button>
                                    <button onClick={() => { corpoEditor?.chain().focus().setHighlight({ color: '#B9F18D' }).run(); setCorpoBgColor('#B9F18D'); }} className={`w-6 h-6 rounded-full bg-green-400 border-2 ${getEditorColorState(corpoEditor).isGreenBg ? 'border-gray-800' : 'border-gray-300'} transition`} title="Fundo Verde"></button>
                                    <button onClick={() => corpoEditor?.chain().focus().unsetHighlight().run()} className="p-2 rounded-md bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 transition" title="Remover cor do fundo"><X size={14} /></button>
                                </div>

                                {/* Terceira linha - Tamanhos de fonte */}
                                <div className="flex gap-2 flex-wrap">
                                    <span className="text-xs text-gray-500 mr-2 self-center">Tamanho:</span>
                                    <button onClick={() => corpoEditor?.chain().focus().setFontSize('12px').run()} className={`p-1 rounded-md transition ${corpoEditor?.isActive('textStyle', { fontSize: '12px' }) ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}>12px</button>
                                    <button onClick={() => corpoEditor?.chain().focus().setFontSize('14px').run()} className={`p-1 rounded-md transition ${corpoEditor?.isActive('textStyle', { fontSize: '14px' }) ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}>14px</button>
                                    <button onClick={() => corpoEditor?.chain().focus().setFontSize('16px').run()} className={`p-1 rounded-md transition ${corpoEditor?.isActive('textStyle', { fontSize: '16px' }) ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}>16px</button>
                                    <button onClick={() => corpoEditor?.chain().focus().setFontSize('18px').run()} className={`p-1 rounded-md transition ${corpoEditor?.isActive('textStyle', { fontSize: '18px' }) ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}>18px</button>
                                    <button onClick={() => corpoEditor?.chain().focus().setFontSize('20px').run()} className={`p-1 rounded-md transition ${corpoEditor?.isActive('textStyle', { fontSize: '20px' }) ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}>20px</button>
                                    <button onClick={() => corpoEditor?.chain().focus().setFontSize('24px').run()} className={`p-1 rounded-md transition ${corpoEditor?.isActive('textStyle', { fontSize: '24px' }) ? 'bg-[var(--site-brown)] text-white' : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-300'}`}>24px</button>
                                    <button onClick={() => corpoEditor?.chain().focus().unsetFontSize().run()} className="p-1 rounded-md bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 transition" title="Remover tamanho de fonte">Auto</button>
                                </div>
                            </div>
                            <div className="p-6 min-h-[200px]">
                                <EditorContent editor={corpoEditor} className="tiptap-editor" />
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

                {/* Tags Section - só mostra se não for Banner */}
                {visibleFields.showEtiquetas && (
                    <section className="mb-8 bg-white rounded-xl shadow-md border border-gray-200 p-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Etiquetas</h2>
                        <div className="space-y-6">
                            {/* Criar nova etiqueta */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Criar Nova Etiqueta</label>
                                <input
                                    type="text"
                                    value={novaEtiqueta}
                                    onChange={(e) => setNovaEtiqueta(e.target.value)}
                                    onKeyDown={handleNovaEtiqueta}
                                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[var(--site-brown)] focus:border-[var(--site-brown)] transition"
                                    placeholder="Digite o nome da etiqueta e pressione Enter"
                                />
                            </div>

                            {/* Etiquetas existentes */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">Etiquetas Existentes</label>
                                <div className="flex flex-wrap gap-2">
                                    {etiquetasExistentes.map((etiqueta) => (
                                        <button
                                            key={etiqueta}
                                            onClick={() => adicionarEtiqueta(etiqueta)}
                                            disabled={etiquetasSelecionadas.includes(etiqueta)}
                                            className={`px-3 py-1 rounded-full text-sm font-medium transition ${etiquetasSelecionadas.includes(etiqueta)
                                                ? 'bg-[var(--site-brown-100)] text-[var(--site-brown-dark)] cursor-not-allowed'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                                                }`}
                                        >
                                            + {etiqueta}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Etiquetas selecionadas */}
                            {etiquetasSelecionadas.length > 0 && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">Etiquetas Selecionadas</label>
                                    <div className="flex flex-wrap gap-2">
                                        {etiquetasSelecionadas.map((etiqueta) => (
                                            <span
                                                key={etiqueta}
                                                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--site-brown-100)] text-[var(--site-brown-dark)]"
                                            >
                                                {etiqueta}
                                                <button
                                                    onClick={() => removerEtiqueta(etiqueta)}
                                                    className="ml-2 text-red-600 hover:text-red-800 transition"
                                                >
                                                    <X size={14} />
                                                </button>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                )}

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