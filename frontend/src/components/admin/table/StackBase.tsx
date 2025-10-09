"use client";

import { useState, useMemo } from "react";
import { Modulo, TipoFiltro } from "@/utils";
import { Loading } from "@/components/common";
import { Header, StackCard, FilterLineBase } from ".";
import { TableProperties } from "lucide-react";

export interface StackBaseProps<T> {
    modulo: Modulo;
    icon?: React.ReactNode;
    titulo?: string;
    subtitulo?: string;
    count?: number;
    temAcoes?: boolean;
    hideExport?: boolean;

    data: T[];

    onInlineApprove?: (item: T) => void;
    onInlineDisapprove?: (item: T) => void;

    onReloadAction?: () => void;
    onCreateAction?: () => void;
    onEditAction?: (selectedIds: (string | number)[]) => void;
    onDeleteAction?: (selectedIds: (string | number)[]) => void;
    onDisapproveAction?: (selectedIds: (string | number)[]) => void;
    onApproveAction?: (selectedIds: (string | number)[]) => void;
    customActions?: React.ReactNode;

    isFilterable?: boolean;
    isLoading?: boolean;
    filterFn?: (item: T, filter: string) => boolean;
    filterColumns?: {
        id: string;
        label: string;
        tipoFiltro: TipoFiltro;
        options?: string[];
        isSortable?: boolean;
    }[];
    renderCardContent?: (item: T, onApprove?: (item: T) => void, onDisapprove?: (item: T) => void) => React.ReactNode;
}

export function StackBase<T>({
    modulo,
    icon,
    titulo,
    subtitulo,
    count,
    temAcoes = true,
    hideExport = true,

    data,

    onInlineApprove,
    onInlineDisapprove,

    onReloadAction,
    onCreateAction,
    onEditAction,
    onDeleteAction,
    onDisapproveAction,
    onApproveAction,
    customActions,

    isFilterable = true,
    isLoading,
    filterFn = (item, filter) => JSON.stringify(item).toLowerCase().includes(filter.toLowerCase()),
    filterColumns,
    renderCardContent,
}: StackBaseProps<T>) {
    const [globalFilter, setGlobalFilter] = useState("");
    const [columnFilters, setColumnFilters] = useState<Record<string, any>>({});
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
    const [sorting, setSorting] = useState<{ id: string; desc: boolean }[]>([]);

    const getNestedValue = (obj: any, path: string) => {
        return path.split('.').reduce((current, key) => current?.[key], obj);
    };

    const filteredData = useMemo(() => {
        let filtered = data;
        if (globalFilter) filtered = filtered.filter(item => filterFn(item, globalFilter));
        for (const [key, value] of Object.entries(columnFilters)) {
            if (value) {
                const columnConfig = filterColumns?.find(col => col.id === key);
                filtered = filtered.filter((item: any) => {
                    const itemValue = getNestedValue(item, key);
                    if (columnConfig?.tipoFiltro === TipoFiltro.Multiselect) {
                        // Para multiselect, value é um array de strings selecionadas
                        if (!Array.isArray(value) || value.length === 0) return true;
                        if (!Array.isArray(itemValue)) return false;
                        // Verifica se algum dos valores selecionados está presente nos nomes dos objetos
                        return itemValue.some((obj: any) =>
                            obj && obj.nome && value.includes(obj.nome)
                        );
                    } else if (typeof itemValue === 'string') {
                        return itemValue.toLowerCase().includes(value.toLowerCase());
                    } else if (Array.isArray(itemValue)) {
                        return itemValue.some(v => v && v.toLowerCase().includes(value.toLowerCase()));
                    } else {
                        return itemValue == value;
                    }
                });
            }
        }
        // Apply sorting
        if (sorting.length > 0) {
            filtered = [...filtered].sort((a, b) => {
                for (const sort of sorting) {
                    const aValue = getNestedValue(a, sort.id);
                    const bValue = getNestedValue(b, sort.id);
                    let cmp = 0;
                    if (aValue < bValue) cmp = -1;
                    else if (aValue > bValue) cmp = 1;
                    if (cmp !== 0) return sort.desc ? -cmp : cmp;
                }
                return 0;
            });
        }
        return filtered;
    }, [data, globalFilter, columnFilters, sorting, filterFn]);

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

    const handleItemSelection = (itemId: string, checked: boolean) => {
        setRowSelection(prev => ({
            ...prev,
            [itemId]: checked
        }));
    };

    const onClearFilters = () => {
        setGlobalFilter("");
        setColumnFilters({});
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
                    hideExport={true}
                    globalFilter={globalFilter}
                    setGlobalFilter={setGlobalFilter}
                    onReload={onReloadAction}
                    onClearFilters={onClearFilters}
                    onCreate={onCreateAction}
                    onEdit={onEditAction ? () => onEditAction(selectedIds) : undefined}
                    onDelete={onDeleteAction ? () => onDeleteAction(selectedIds) : undefined}
                    onApprove={() => onApproveAction?.(selectedIds)}
                    onDisapprove={() => onDisapproveAction?.(selectedIds)}
                    customActions={customActions}
                />
            </div>

            {isLoading ? (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 flex justify-center items-center min-h-[400px]">
                    <Loading />
                </div>
            ) : (
                <div>
                    {filterColumns && filterColumns.length > 0 && (
                        <FilterLineBase
                            allSelected={allSelected}
                            someSelected={someSelected}
                            onSelectAll={handleSelectAll}
                            columns={filterColumns}
                            columnFilters={columnFilters}
                            setColumnFilters={setColumnFilters}
                            openDropdown={openDropdown}
                            setOpenDropdown={setOpenDropdown}
                            sorting={sorting}
                            setSorting={setSorting}
                        />
                    )}

                    <div className="grid grid-cols-1 gap-6">
                        {filteredData.map((item, index) => {
                            const itemId = (item as any)?.id?.toString() || index.toString();
                            const isSelected = rowSelection[itemId] || false;

                            return (
                                <StackCard
                                    key={itemId}
                                    index={index}
                                    checked={isSelected}
                                    onCheck={(checked) => handleItemSelection(itemId, checked)}
                                >
                                    {renderCardContent ? renderCardContent(item, onInlineApprove, onInlineDisapprove) : (
                                        <div className="text-gray-500">Conteúdo não definido</div>
                                    )}
                                </StackCard>
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
                </div>
            )}
        </section>
    );
}
