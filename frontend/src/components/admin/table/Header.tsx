"use client";

import {
  CloudDownloadIcon,
  RefreshCwIcon,
  FilterXIcon,
  ChevronDownIcon,
  PlusIcon,
  Trash2Icon,
  MinusIcon,
  PencilIcon,
  TableProperties,
  Check,
  X,
} from "lucide-react";
import { useState } from "react";
import { useAuthContext } from "@/context";
import { Modulo } from "@/utils";

interface HeaderProps {
  modulo: Modulo;
  icon?: React.ReactNode;
  titulo?: string;
  subtitulo?: string;
  count?: number;
  temAcoes?: boolean;
  isFilterable?: boolean;
  hideExport?: boolean;
  globalFilter: string;
  setGlobalFilter: (value: string) => void;
  onReload?: () => void;
  onClearFilters?: () => void;
  onExportData?: () => { colunas: string[]; linhas: any[][] };
  onCreate?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  onDeactivate?: () => void;
  onActivate?: () => void;
  onConclude?: () => void;
  onReopen?: () => void;
  onApprove?: () => void;
  onDisapprove?: () => void;
  customActions?: React.ReactNode;
}

export function Header({
  modulo,
  icon = <TableProperties className="rules-icon" size={64} />,
  titulo,
  subtitulo,
  count,


  temAcoes,
  isFilterable = true,
  hideExport = true,
  globalFilter,
  setGlobalFilter,

  onReload,
  onClearFilters,
  onExportData,

  onCreate,
  onEdit,
  onDelete,
  onDeactivate,
  onActivate,
  onConclude,
  onReopen,
  onApprove,
  onDisapprove,
  customActions,
}: HeaderProps) {
  const [exportOpen, setExportOpen] = useState(false);

  return (
    <>
      <div className="section-header flex flex-col items-center">
        {icon}
        <h2 className="section-title">{titulo || `Tabela de ${modulo} `}</h2>
        <p className="section-description">
          {subtitulo}. {count !== undefined && count > 0 && (<span>Total: {count}</span>)}
        </p>
      </div>
      <div className="table-header flex items-end align-items-end gap-4 mb-2">
        <div className="flex flex-col gap-2 flex-start">
          <div className="relative">
            {isFilterable && (
              <>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                <input
                  type="text"
                  value={globalFilter}
                  onChange={(e) => setGlobalFilter(e.target.value)}
                  placeholder="Pesquisar em todas as colunas..."
                  className="
                    w-80 pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg
                    bg-white placeholder-gray-500 text-gray-900
                    focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500
                    hover:border-gray-400 transition-all duration-200
                    shadow-sm
                  "
                />
                {globalFilter && (
                  <button
                    onClick={() => setGlobalFilter('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </>
            )}

          </div>
        </div>
        <div className="flex flex-col gap-2">
          {temAcoes && (
            <>
              <div className="flex justify-end mt-1 gap-2">
                {onConclude && (
                  <button
                    className="button-base create-button"
                    onClick={onConclude}
                  >
                    <Check size={16} className="inline! mr-2!" />
                    {"Concluir Selecionados"}
                  </button>
                )}

                {onReopen && (
                  <button
                    className="button-base delete-button"
                    onClick={onReopen}
                  >
                    <X size={16} className="inline! mr-2!" />
                    {"Reabrir Selecionados"}
                  </button>
                )}
                {onApprove && (
                  <button
                    className="button-base create-button"
                    onClick={onApprove}
                  >
                    <Check size={16} className="inline! mr-2!" />
                    {modulo === Modulo.Conteudos && ("Publicar Selecionados")}
                  </button>
                )}

                {onDisapprove && (
                  <button
                    className="button-base delete-button"
                    onClick={onDisapprove}
                  >
                    <X size={16} className="inline! mr-2!" />
                    {modulo === Modulo.Conteudos && ("Ocultar Selecionados")}
                  </button>
                )}

                {onActivate && (
                  <button
                    className="button-base create-button"
                    onClick={onActivate}
                  >
                    <PlusIcon size={16} className="inline! mr-2!" />
                    {"Ativar Selecionados"}
                  </button>
                )}

                {onDeactivate && (
                  <button
                    className="button-base delete-button"
                    onClick={onDeactivate}
                  >
                    <MinusIcon size={16} className="inline! mr-2!" />
                    {"Desativar Selecionados"}
                  </button>
                )}
              </div>

              <div className="flex justify-end gap-2">
                {onCreate && (
                  <button
                    className="button-base create-button"
                    onClick={onCreate}
                  >
                    <PlusIcon size={16} className="inline! mr-2!" />
                    {"Criar"}
                  </button>
                )}
                {onDelete && (
                  <button
                    className="button-base delete-button"
                    onClick={onDelete}
                  >
                    <Trash2Icon size={16} className="inline! mr-2!" />
                    {"Apagar Selecionados"}
                  </button>
                )}
                {onEdit && (
                  <button className="button-base edit-button" onClick={onEdit}>
                    <PencilIcon size={16} className="inline! mr-2!" />
                    {"Editar Selecionados"}
                  </button>
                )}
              </div>
            </>
          )}

          <div className="flex justify-end gap-2">

            {isFilterable && (
              <button
                className="button-base clear-filters-button flex items-center gap-2"
                type="button"
                onClick={onClearFilters}
              >
                <FilterXIcon size={16} />
                Limpar Filtros
              </button>
            )}
            <button
              className="button-base refresh-button flex items-center gap-2"
              type="button"
              onClick={onReload}
            >
              <RefreshCwIcon size={16} />
              Recarregar Dados
            </button>
            {customActions}
          </div>
        </div>
      </div>
    </>
  );
}
