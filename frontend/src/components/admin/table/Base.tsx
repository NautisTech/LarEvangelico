"use client";

import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
  getFilteredRowModel,
  getPaginationRowModel,
  SortingState,
  ColumnFiltersState,
} from "@tanstack/react-table";
import { TableProperties } from "lucide-react";
import { useState } from "react";
import { Loading } from "@/components/common";
import { Header, Pagination, RowCheckBox } from "@/components/admin/table";

import { Modulo } from "@/utils";

export interface BaseTableProps<T> {
  modulo: Modulo;
  icon?: React.ReactNode;
  titulo?: string;
  subtitulo?: string;
  count?: number;
  temAcoes?: boolean;
  hideExport?: boolean;

  data: T[];
  columns: any[];

  inlineEdit?: (selected: object) => void;
  inlineDelete?: (selectedId: number) => void;
  onReloadAction?: () => void;
  onCreateAction?: () => void;
  onEditAction?: (selectedIds: (string | number)[]) => void;
  onDeleteAction?: (selectedIds: (string | number)[]) => void;
  onDeactivateAction?: (selectedIds: (string | number)[]) => void;
  onActivateAction?: (selectedIds: (string | number)[]) => void;
  onConcludeAction?: (selectedIds: (string | number)[]) => void;
  onReopenAction?: (selectedIds: (string | number)[]) => void;
  onRowDoubleClick?: (row: T) => void;
  customActions?: React.ReactNode;

  isFilterable?: boolean;
  isPaginated?: boolean;
  isLoading?: boolean;
  rowIdKey?: string;
}

export function Base<T>({
  modulo,
  icon = <TableProperties className="rules-icon" size={64} />,
  titulo,
  subtitulo,
  count,
  temAcoes,
  hideExport = true,

  data,
  columns,

  onReloadAction,
  onCreateAction,
  onEditAction,
  onDeleteAction,
  onDeactivateAction,
  onActivateAction,
  onConcludeAction,
  onReopenAction,
  onRowDoubleClick,
  customActions,

  isFilterable = true,
  isPaginated = true,
  isLoading,
  rowIdKey = "id",
}: BaseTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
  const selectedIds = Object.keys(rowSelection).filter(
    (key) => rowSelection[key]
  );

  const table = useReactTable({
    data,
    columns,

    state: {
      sorting,
      globalFilter,
      columnFilters,
      rowSelection,
    },

    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getRowId: (row: any) => row[rowIdKey],

    enableRowSelection: true,
  });

  const onClearFilters = () => {
    setGlobalFilter("");
    setColumnFilters([]);
    setSorting([]);
  };

  const onExportData = () => {
    const colunasVisiveis = table.getVisibleLeafColumns();
    const colunasExport = colunasVisiveis.map((col) =>
      typeof col.columnDef.header === "function"
        ? col.columnDef.id ?? ""
        : String(col.columnDef.header)
    );
    const linhasExport = table.getFilteredRowModel().rows.map((row) =>
      colunasVisiveis.map((col) => {
        const cell = row.getAllCells().find((c) => c.column.id === col.id);
        const val = cell ? cell.getValue() : "";
        if (typeof val === "object" && val !== null) return JSON.stringify(val);
        return val;
      })
    );
    return { colunas: colunasExport, linhas: linhasExport };
  };

  // Função para limpar seleção após ações
  const clearSelection = () => {
    setRowSelection({});
  };

  // Wrappers para ações que limpam seleção
  const handleDelete = onDeleteAction
    ? () => {
      onDeleteAction(selectedIds);
      clearSelection();
    }
    : undefined;

  return (
    <section className="w-full overflow-hidden py-4 space-y-6">
      <div className="bg-white rounded-lg p-6">
        <Header
          modulo={modulo}
          icon={icon}
          titulo={titulo}
          subtitulo={subtitulo}
          count={count}
          temAcoes={temAcoes}
          isFilterable={isFilterable}
          hideExport={hideExport}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
          onReload={onReloadAction}
          onClearFilters={onClearFilters}
          onExportData={onExportData}
          onCreate={onCreateAction}
          onEdit={onEditAction ? () => onEditAction(selectedIds) : undefined}
          onDelete={handleDelete}
          onDeactivate={
            onDeactivateAction ? () => onDeactivateAction(selectedIds) : undefined
          }
          onActivate={
            onActivateAction ? () => onActivateAction(selectedIds) : undefined
          }
          onConclude={
            onConcludeAction ? () => onConcludeAction(selectedIds) : undefined
          }
          onReopen={
            onReopenAction ? () => onReopenAction(selectedIds) : undefined
          }
          customActions={customActions}
        />
      </div>

      {/* Stats Bar - mostra informações sobre seleção */}

      {selectedIds.length > 0 && isFilterable && (
        <div className="bg-[var(--site-brown-100)] border border-[rgba(82,24,7,0.08)] rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-[var(--site-brown)] font-medium">
                {selectedIds.length === 1
                  ? "1 item selecionado"
                  : `${selectedIds.length} items selecionados`
                }
              </span>
            </div>
            <button
              onClick={() => setRowSelection({})}
              className="text-[var(--site-brown)] hover:text-[var(--site-brown-dark)] text-sm font-medium transition-colors duration-200"
            >
              Limpar seleção
            </button>
          </div>
        </div>
      )}

      {isLoading ? (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex justify-center items-center min-h-[400px]">
          <Loading />
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <div className="max-h-[70vh] overflow-y-auto">
              <table className="w-full min-w-max">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 sticky top-0 z-10">
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {isFilterable && (
                        <th className="px-4 py-4 w-12">
                          <div className="flex items-center justify-center">
                            <RowCheckBox
                              checked={table.getIsAllRowsSelected()}
                              check={table.getIsSomeRowsSelected()}
                              onChange={table.getToggleAllRowsSelectedHandler()}
                            />
                          </div>
                        </th>
                      )}
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          className="px-6 py-4 text-left font-semibold text-gray-700 text-sm uppercase tracking-wider cursor-pointer hover:bg-gray-200 transition-colors duration-200 select-none"
                        >
                          <div className="flex items-center space-x-1">
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {table.getRowModel().rows.map((row, index) => (
                    <tr
                      key={row.id}
                      className={`
                        transition-all duration-200 group
                        ${row.getIsSelected()
                          ? "bg-[var(--site-brown-100)] border-l-4 border-l-[rgba(82,24,7,0.12)] shadow-sm"
                          : index % 2 === 0
                            ? "bg-white hover:bg-gray-50"
                            : "bg-gray-25 hover:bg-gray-50"
                        }
                        ${onRowDoubleClick ? "cursor-pointer" : ""}
                        hover:shadow-sm
                      `}
                      onDoubleClick={() => onRowDoubleClick?.(row.original)}
                    >
                      {isFilterable && (
                        <td className="px-4 py-4 w-12">
                          <div className="flex items-center justify-center">
                            <RowCheckBox
                              checked={row.getIsSelected()}
                              check={
                                row.getIsSomeSelected && row.getIsSomeSelected()
                              }
                              onChange={row.getToggleSelectedHandler()}
                            />
                          </div>
                        </td>
                      )}
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className="px-6 py-4 text-sm text-gray-900 font-medium whitespace-nowrap"
                        >
                          <div className="flex items-center">
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                  {table.getRowModel().rows.length === 0 && (
                    <tr>
                      <td
                        colSpan={table.getVisibleLeafColumns().length + 1}
                        className="px-6 py-12 text-center text-gray-500"
                      >
                        <div className="flex flex-col items-center space-y-2">
                          <TableProperties className="h-12 w-12 text-gray-300" />
                          <p className="text-lg font-medium">Nenhum dado encontrado</p>
                          <p className="text-sm">Não há registos para exibir no momento.</p>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination Section */}
          <div className="bg-gray-50 border-t border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              {isPaginated && (
                <>
                  <div className="text-sm text-gray-700">
                    A mostrar{" "}
                    <span className="font-medium">
                      {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1}
                    </span>{" "}
                    a{" "}
                    <span className="font-medium">
                      {Math.min(
                        (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
                        table.getFilteredRowModel().rows.length
                      )}
                    </span>{" "}
                    de{" "}
                    <span className="font-medium">
                      {table.getFilteredRowModel().rows.length}
                    </span>{" "}
                    resultados
                  </div>

                  <Pagination
                    pageIndex={table.getState().pagination.pageIndex}
                    pageCount={table.getPageCount()}
                    canPreviousPage={table.getCanPreviousPage()}
                    canNextPage={table.getCanNextPage()}
                    onPreviousPage={() => table.previousPage()}
                    onNextPage={() => table.nextPage()}
                    pageSize={table.getState().pagination.pageSize}
                    setPageSize={table.setPageSize}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
