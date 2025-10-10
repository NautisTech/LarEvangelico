"use client";

import { TipoFiltro } from "@/utils";
import { FilterHeader } from "./FilterHeader";

interface FilterLineBaseProps {
    allSelected: boolean;
    someSelected: boolean;
    onSelectAll: (checked: boolean) => void;
    columns: {
        id: string;
        label: string;
        tipoFiltro: TipoFiltro;
        options?: string[];
        isSortable?: boolean;
    }[];
    columnFilters: Record<string, any>;
    setColumnFilters: (filters: Record<string, any>) => void;
    openDropdown: string | null;
    setOpenDropdown: (id: string | null) => void;
    sorting: { id: string; desc: boolean }[];
    setSorting: (sorting: { id: string; desc: boolean }[]) => void;
}

export function FilterLineBase({
    allSelected,
    someSelected,
    onSelectAll,
    columns,
    columnFilters,
    setColumnFilters,
    openDropdown,
    setOpenDropdown,
    sorting,
    setSorting,
}: FilterLineBaseProps) {
    return (
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 sticky top-0 z-10 mb-6 rounded-lg shadow-sm">
            <div className="flex items-center space-x-4 p-4">
                <div className="flex items-center justify-center px-4 py-4 w-12">
                    <input
                        type="checkbox"
                        checked={allSelected}
                        ref={(el) => {
                            if (el) el.indeterminate = someSelected;
                        }}
                        onChange={(e) => onSelectAll(e.target.checked)}
                        className="h-4 w-4 text-[var(--site-brown)] focus:ring-[var(--site-brown)] border-gray-300 rounded"
                    />
                </div>
                <div className="flex-1 grid gap-4" style={{ gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }}>
                    {columns.map((col) => {
                        const columnConstruct = {
                            id: col.id,
                            setFilterValue: (value: any) => {
                                setColumnFilters((prev: Record<string, any>) => ({
                                    ...prev,
                                    [col.id]: value,
                                }));
                            },
                            getFilterValue: () => columnFilters[col.id] || "",
                            getIsSorted: () => {
                                const sort = sorting.find(s => s.id === col.id);
                                return sort ? (sort.desc ? "desc" : "asc") : false;
                            },
                            toggleSorting: () => {
                                const existing = sorting.find(s => s.id === col.id);
                                if (existing) {
                                    if (existing.desc) {
                                        setSorting(sorting.filter(s => s.id !== col.id));
                                    } else {
                                        setSorting(sorting.map(s => s.id === col.id ? { ...s, desc: true } : s));
                                    }
                                } else {
                                    setSorting([...sorting, { id: col.id, desc: false }]);
                                }
                            },
                        };

                        return (
                            <div key={col.id} className="flex items-center px-6 py-4 text-left font-semibold text-gray-700 text-sm uppercase tracking-wider cursor-pointer hover:bg-gray-200 rounded transition-colors duration-200 select-none">
                                <FilterHeader
                                    column={columnConstruct}
                                    label={col.label}
                                    openDropdown={openDropdown}
                                    setOpenDropdown={setOpenDropdown}
                                    tipoFiltro={col.tipoFiltro}
                                    isSortable={col.isSortable ?? true}
                                    options={col.options}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}