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
      <div className="table-header flex flex-col gap-2 mb-2 w-full">
        <div className="w-full">
          <div className="relative w-full flex items-center justify-center">
            {isFilterable && (
              <>
                <label className="flex relative mb-2">
                  <svg
                    className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>

                  <input
                    type="text"
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    placeholder="Pesquisar em todas as colunas..."
                    className={
                      "w-200 pl-10 pr-4 py-2.5 text-sm border border-gray-300 rounded-lg " +
                      "bg-white placeholder-gray-500 text-gray-900 " +
                      "focus:outline-none focus:ring-2 focus:ring-[var(--site-brown)] focus:border-[var(--site-brown)] " +
                      "hover:border-gray-400 transition-all duration-200 shadow-sm"
                    }
                  />
                </label>
                {globalFilter && (
                  <button
                    onClick={() => setGlobalFilter("")}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </>
            )}
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="flex flex-row flex-wrap items-center justify-center gap-2 mt-2">
            {temAcoes && (
              <>
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
              </>
            )}
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
