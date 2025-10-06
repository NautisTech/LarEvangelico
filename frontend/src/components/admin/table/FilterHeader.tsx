"use client";

import { FilterDropdown } from "./FilterDropdown";
import { TipoFiltro } from "@/utils";

export function FilterHeader({
  column,
  label,
  openDropdown,
  setOpenDropdown,
  tipoFiltro,
  isSortable = true,
  options = [],
}: {
  column: any;
  label: string;
  openDropdown: string | null;
  setOpenDropdown: (id: string | null) => void;
  tipoFiltro: TipoFiltro;
  isSortable?: boolean;
  options?: string[];
}) {
  return (
    <div className="flex! items-center! gap-1!">
      {label}
      <FilterDropdown
        column={column}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
        tipoFiltro={tipoFiltro}
        isSortable={isSortable}
        options={options}
      />
    </div>
  );
}
