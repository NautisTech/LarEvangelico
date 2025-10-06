"use client";

import React, { useMemo } from "react";
import { SortingState, ColumnFiltersState } from "@tanstack/react-table";
import { useState } from "react";
import { Header } from ".";
import { Loading } from "@/components";
import { Conteudo } from "@/models";
import { Modulo } from "@/utils";
import { ContentCard } from "./ContentCard";
import { TableProperties } from "lucide-react";

export interface GridBaseProps<T> {
    modulo: Modulo;
    icon?: React.ReactNode;
    titulo?: string;
    subtitulo?: string;
    count?: number;
    temAcoes?: boolean;
    hideExport?: boolean;

    data: T[];

    onInlineEdit?: (item: T) => void;
    onInlineDisapprove?: (item: T) => void;
    onInlineApprove?: (item: T) => void;
    onInlineDelete?: (item: T) => void;

    onReloadAction?: () => void;
    onCreateAction?: () => void;
    onEditAction?: (selectedIds: (string | number)[]) => void;
    onDeleteAction?: (selectedIds: (string | number)[]) => void;
    onDisapproveAction?: (selectedIds: (string | number)[]) => void;
    onApproveAction?: (selectedIds: (string | number)[]) => void;
    onConcludeAction?: (selectedIds: (string | number)[]) => void;
    customActions?: React.ReactNode;

    isFilterable?: boolean;
    isPaginated?: boolean;
    isLoading?: boolean;
    filterFn?: (item: T, filter: string) => boolean;
}

export function GridBase<T>({
    modulo,
    icon = <TableProperties className="rules-icon" size={64} />,
    titulo,
    subtitulo,
    count,
    temAcoes = true,
    hideExport = true,

    data,

    onInlineEdit,
    onInlineDisapprove,
    onInlineApprove,
    onInlineDelete,
    onReloadAction,
    onCreateAction,
    onEditAction,
    onDeleteAction,
    onDisapproveAction,
    onApproveAction,
    onConcludeAction,
    customActions,

    isFilterable = true,
    isPaginated = true,
    isLoading,
    filterFn,
}: GridBaseProps<T>) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [globalFilter, setGlobalFilter] = useState("");
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});

    const filteredData = useMemo(() => {
        if (!globalFilter) return data;

        if (filterFn) {
            return data.filter(item => filterFn(item, globalFilter));
        }

        return data.filter((item: any) => {
            const searchTerm = globalFilter.toLowerCase();
            return (
                item.titulo?.toLowerCase().includes(searchTerm) ||
                item.subtitulo?.toLowerCase().includes(searchTerm) ||
                item.corpo?.toLowerCase().includes(searchTerm)
            );
        });
    }, [data, globalFilter, filterFn]);

    const selectedIds = Object.keys(rowSelection).filter(
        (key) => rowSelection[key]
    );

    const allSelected =
        filteredData.length > 0 && selectedIds.length === filteredData.length;
    const someSelected =
        selectedIds.length > 0 && selectedIds.length < filteredData.length;

    const handleSelectAll = (checked: boolean) => {
        if (checked) {
            const allIds: Record<string, boolean> = {};
            filteredData.forEach((item: any) => {
                if (item.id) {
                    allIds[item.id.toString()] = true;
                }
            });
            setRowSelection(allIds);
        } else {
            setRowSelection({});
        }
    };

    const onClearFilters = () => {
        setGlobalFilter("");
        setColumnFilters([]);
        setSorting([]);
    };

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
                    onCreate={onCreateAction}
                    onEdit={onEditAction ? () => onEditAction(selectedIds) : undefined}
                    onDelete={onDeleteAction ? () => onDeleteAction(selectedIds) : undefined}
                    onDisapprove={onDisapproveAction ? () => onDisapproveAction(selectedIds) : undefined}
                    onApprove={onApproveAction ? () => onApproveAction(selectedIds) : undefined}
                    onConclude={onConcludeAction ? () => onConcludeAction(selectedIds) : undefined}
                    customActions={customActions}
                />
            </div>

            {isLoading ? (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex justify-center items-center min-h-[400px]">
                    <Loading />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredData.map((item, index) => {
                        const itemId = (item as any)?.id?.toString() || index.toString();
                        const isSelected = rowSelection[itemId] || false;

                        return (
                            <ContentCard
                                key={itemId}
                                conteudo={item as unknown as Conteudo}
                                checked={isSelected}
                                onCheck={(checked: boolean) => {
                                    setRowSelection(prev => ({
                                        ...prev,
                                        [itemId]: checked
                                    }));
                                }}
                                onEdit={onInlineEdit as (conteudo: Conteudo) => void}
                                onDisapprove={onInlineDisapprove as (conteudo: Conteudo) => void}
                                onApprove={onInlineApprove as (conteudo: Conteudo) => void}
                                onDelete={onInlineDelete as (conteudo: Conteudo) => void}
                            />
                        );
                    })}
                    {filteredData.length === 0 && (
                        <div className="col-span-full text-center py-8 text-gray-500">
                            {globalFilter
                                ? "Nenhum item encontrado com os filtros aplicados."
                                :
                                <>
                                    <div className="flex flex-col items-center space-y-2">
                                        <TableProperties className="h-12 w-12 text-gray-300" />
                                        <p className="text-lg font-medium">Nenhum dado encontrado</p>
                                        <p className="text-sm">Não há registos para exibir no momento.</p>
                                    </div>
                                </>
                            }
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}
