"use client";

import { useState, useRef, useEffect } from "react";
import {
  FilterIcon,
  ArrowUpDownIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "lucide-react";
import { TipoFiltro } from "@/utils";

export function FilterDropdown({
  column,
  openDropdown,
  setOpenDropdown,
  tipoFiltro,
  isSortable = true,
  options = [],
}: {
  column: any;
  openDropdown: string | null;
  setOpenDropdown: (id: string | null) => void;
  tipoFiltro: TipoFiltro | string;
  isSortable?: boolean;
  options?: string[];
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [shouldAlignRight, setShouldAlignRight] = useState(false);
  const isOpen = openDropdown === column.id;

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      // Find the closest table container
      const tableContainer = triggerRef.current.closest(
        '.overflow-auto, .navbar-dropdown-scrollable, [class*="overflow-"]'
      );

      if (tableContainer) {
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const containerRect = tableContainer.getBoundingClientRect();

        // Estimated dropdown width (you can adjust this based on your content)
        const dropdownWidth =
          tipoFiltro === "multiselect"
            ? 200
            : tipoFiltro === TipoFiltro.Data
              ? 180
              : tipoFiltro === TipoFiltro.Timestamp
                ? 200
                : 160;

        // Calculate if dropdown would overflow the table container
        const dropdownRightEdge = triggerRect.left + dropdownWidth;
        const containerRightEdge = containerRect.right;

        // If dropdown would overflow, align it to the right
        const wouldOverflow = dropdownRightEdge > containerRightEdge;
        setShouldAlignRight(wouldOverflow);
      }
    }
  }, [isOpen, tipoFiltro]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <div className="flex items-center gap-1">
        {tipoFiltro !== TipoFiltro.Undefined  && (
          <button
            ref={triggerRef}
            onClick={() => setOpenDropdown(isOpen ? null : column.id)}
            className={`
              p-1.5 rounded-md transition-all duration-200 hover:bg-gray-100
              ${column.getFilterValue()
                ? "text-red-600 bg-red-50 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
              }
            `}
            title="Filtrar"
          >
            <FilterIcon size={14} />
          </button>
        )}
        {isSortable && (
          <button
            onClick={() => column.toggleSorting()}
            className={`
              p-1.5 rounded-md transition-all duration-200 hover:bg-gray-100
              ${column.getIsSorted()
                ? "text-red-600 bg-red-50 shadow-sm"
                : "text-gray-500 hover:text-gray-700"
              }
            `}
            title="Ordenar"
          >
            {column.getIsSorted() === "asc" ? (
              <ArrowUpIcon size={14} />
            ) : column.getIsSorted() === "desc" ? (
              <ArrowDownIcon size={14} />
            ) : (
              <ArrowUpDownIcon size={14} />
            )}
          </button>
        )}
      </div>
      {isOpen && (
        <>
          {/* Backdrop para fechar ao clicar fora */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setOpenDropdown(null)}
          />
          <div
            className={`
              absolute z-50 mt-2 p-4 bg-white border border-gray-200 rounded-lg shadow-xl min-w-48 max-w-xs
              animate-in fade-in-0 zoom-in-95 duration-200
              ${shouldAlignRight ? "right-0" : "left-0"}
            `}
            style={{
              ...(shouldAlignRight ? { right: 0 } : { left: 0 }),
            }}
          >
            {tipoFiltro === "multiselect" ? (
              <div className="flex flex-col gap-3">
                <label className="text-xs font-medium text-gray-700">
                  Selecionar opções:
                </label>
                <select
                  multiple
                  value={column.getFilterValue() ?? []}
                  onChange={(e) => {
                    const selected = Array.from(e.target.selectedOptions).map(
                      (opt) => opt.value
                    );
                    column.setFilterValue(selected);
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm h-32 focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
                  autoFocus
                >
                  {options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => column.setFilterValue(undefined)}
                  className="px-3 py-2 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Limpar Filtro
                </button>
              </div>
            ) : tipoFiltro === TipoFiltro.Bool ? (
              <div className="flex flex-col gap-3">
                <label className="text-xs font-medium text-gray-700">
                  Filtrar por:
                </label>
                <select
                  value={column.getFilterValue() ?? ""}
                  onChange={(e) => column.setFilterValue(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
                  autoFocus
                >
                  <option value="">Todos</option>
                  <option value="true">Sim</option>
                  <option value="false">Não</option>
                </select>
                <button
                  onClick={() => column.setFilterValue(undefined)}
                  className="px-2 py-1 text-xs border rounded hover:bg-gray-50"
                >
                  Limpar
                </button>
              </div>
            ) : tipoFiltro === TipoFiltro.Data ? (
              <div className="flex flex-col gap-3">
                <div>
                  <label className="text-xs font-medium text-gray-700">De:</label>
                  <input
                    type="date"
                    value={column.getFilterValue()?.from ?? ""}
                    onChange={(e) => {
                      const to = column.getFilterValue()?.to ?? "";
                      column.setFilterValue({ from: e.target.value, to });
                    }}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
                    autoFocus
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700">Até:</label>
                  <input
                    type="date"
                    value={column.getFilterValue()?.to ?? ""}
                    onChange={(e) => {
                      const from = column.getFilterValue()?.from ?? "";
                      column.setFilterValue({ from, to: e.target.value });
                    }}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
                  />
                </div>
                <button
                  onClick={() => column.setFilterValue(undefined)}
                  className="px-2 py-1 text-xs border rounded hover:bg-gray-50 mt-1"
                >
                  Limpar
                </button>
              </div>
            ) : tipoFiltro === TipoFiltro.Timestamp ? (
              <div className="flex flex-col gap-3">
                <div>
                  <label className="text-xs font-medium text-gray-700">De:</label>
                  <input
                    type="time"
                    value={column.getFilterValue()?.from ?? ""}
                    onChange={(e) => {
                      const to = column.getFilterValue()?.to ?? "";
                      column.setFilterValue({ from: e.target.value, to });
                    }}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
                    autoFocus
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700">Até:</label>
                  <input
                    type="time"
                    value={column.getFilterValue()?.to ?? ""}
                    onChange={(e) => {
                      const from = column.getFilterValue()?.from ?? "";
                      column.setFilterValue({ from, to: e.target.value });
                    }}
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
                  />
                </div>
                <button
                  onClick={() => column.setFilterValue(undefined)}
                  className="px-3 py-2 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Limpar Filtro
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <label className="text-xs font-medium text-gray-700">
                  Filtrar por {String(column.id)}:
                </label>
                <input
                  type={tipoFiltro === TipoFiltro.Numero ? "number" : "text"}
                  value={(column.getFilterValue() ?? "") as string}
                  onChange={(e) =>
                    column.setFilterValue(
                      tipoFiltro === TipoFiltro.Numero
                        ? Number(e.target.value) || ""
                        : e.target.value
                    )
                  }
                  autoFocus
                  placeholder={`Digite para filtrar...`}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white"
                />
                <button
                  onClick={() => column.setFilterValue(undefined)}
                  className="px-3 py-2 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  Limpar Filtro
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
