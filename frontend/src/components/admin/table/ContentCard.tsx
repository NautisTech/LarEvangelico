import React from 'react';
import { Conteudo } from '@/models';
import { Check, Trash2, X, Eye, Edit, FileText, MessageSquare } from 'lucide-react';
import { RowCheckBox } from '.';

interface CardProps {
    conteudo: Conteudo;
    checked?: boolean;
    indeterminate?: boolean;
    onCheck?: (checked: boolean) => void;
    onEdit?: (conteudo: Conteudo) => void;
    onApprove?: (conteudo: Conteudo) => void;
    onDisapprove?: (conteudo: Conteudo) => void;
    onDelete?: (conteudo: Conteudo) => void;
}

export function ContentCard({
    conteudo,
    checked = false,
    indeterminate = false,
    onCheck,
    onEdit,
    onApprove,
    onDisapprove,
    onDelete,
}: CardProps) {
    return (
        <div
            key={conteudo.id}
            className={`group relative w-full rounded-xl shadow-sm border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden ${checked
                ? "bg-red-50 border-red-300 shadow-md ring-2 ring-red-200"
                : "bg-white hover:border-gray-300"
                }`}
        >
            {/* Checkbox - positioned absolutely */}
            <div className="absolute top-3 left-3 z-10">
                <RowCheckBox
                    checked={checked}
                    check={indeterminate}
                    onChange={(e) => onCheck?.(e.target.checked)}
                />
            </div>

            {conteudo?.anexos && conteudo?.anexos.length > 0 && (
                <div className="w-full h-48 overflow-hidden bg-gray-100">
                    <img
                        src={conteudo.anexos.find(a => a.principal)?.valor}
                        alt={conteudo.anexos.find(a => a.principal)?.nome}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}

            {/* Content */}
            <div className="p-6 space-y-4 pb-20">
                {/* Author Info */}
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-medium text-sm">
                        {conteudo.criado_por?.nome?.charAt(0)?.toUpperCase() || "U"}
                    </div>
                    <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">
                            {conteudo.criado_por?.nome || "Usuário"}
                        </div>
                        <div className="text-xs text-gray-500">
                            Criado em {conteudo.criado_em ? new Date(conteudo.criado_em).toLocaleDateString("pt-BR") : "Data desconhecida"}
                        </div>
                    </div>
                </div>

                {/* Title */}
                <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight line-clamp-2">
                        {conteudo.titulo ? (
                            <span dangerouslySetInnerHTML={{ __html: conteudo.titulo }} />
                        ) : (
                            "Sem título"
                        )}
                    </h3>
                    {conteudo.subtitulo && (
                        <p className="text-gray-600 text-sm leading-relaxed">
                            <span dangerouslySetInnerHTML={{ __html: conteudo.subtitulo }} />
                        </p>
                    )}
                </div>

                {/* Body */}
                {conteudo.corpo && (
                    <div className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                        <span dangerouslySetInnerHTML={{ __html: conteudo.corpo }} />
                    </div>
                )}

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-gray-500 border-t border-gray-100 pt-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                            <Eye size={16} className="text-gray-400" />
                            <span>{conteudo.visualizacoes || 0}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <MessageSquare size={16} className="text-gray-400" />
                            <span>0</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-xs text-gray-400">
                            {conteudo.publicado_em ? "Publicado em" : "Não publicado"}
                        </div>
                        <div className="font-medium">
                            {conteudo.publicado_em
                                ? new Date(conteudo.publicado_em).toLocaleDateString("pt-BR", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric"
                                })
                                : ""
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="absolute bottom-0 left-0 right-0 flex gap-4 items-center justify-center p-4">
                {onEdit && (
                    <button
                        onClick={() => onEdit(conteudo)}
                        className="button-base edit-button"
                        title="Editar conteúdo"
                    >
                        <Edit size={16} className="inline! mr-2!" />
                        Editar
                    </button>
                )}

                {conteudo.publico ? (
                    onDisapprove && (
                        <button
                            onClick={() => onDisapprove(conteudo)}
                            className="button-base delete-button"
                        >
                            <X size={16} className="inline! mr-2!" />
                            Ocultar
                        </button>
                    )
                ) : (
                    onApprove && (
                        <button
                            onClick={() => onApprove(conteudo)}
                            className="button-base create-button"
                        >
                            <Check size={16} className="inline! mr-2!" />
                            Publicar
                        </button>
                    )
                )}

                {onDelete && (
                    <button
                        onClick={() => onDelete(conteudo)}
                        className="button-base delete-button"
                    >
                        <Trash2 size={16} className="inline! mr-2!" />
                        Apagar
                    </button>
                )}
            </div>
        </div>
    );
}
