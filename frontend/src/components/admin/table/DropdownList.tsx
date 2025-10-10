"use client";

import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

export function DropdownList({
  label,
  items,
}: {
  label: string;
  items: string[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative inline-block">
      {/* Backdrop para fechar ao clicar fora */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <button
        type="button"
        className={`
          px-3 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all duration-200
          ${open
            ? `bg-[var(--site-brown-100)] text-[var(--site-brown)] border border-[rgba(82,24,7,0.08)] shadow-sm`
            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400"
          }
        `}
        onClick={() => setOpen((o) => !o)}
      >
        <span>{label}</span>
        <ChevronDownIcon
          size={16}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 mt-2 w-max min-w-48 max-w-xs bg-white border border-gray-200 rounded-lg shadow-xl z-50 animate-in fade-in-0 zoom-in-95 duration-200">
          <div className="max-h-64 overflow-y-auto">
            <ul className="py-2">
              {items.map((item, idx) => (
                <li
                  key={item + idx}
                  className="px-4 py-2.5 text-sm text-gray-700 hover:bg-[var(--site-brown-100)] hover:text-[var(--site-brown)] whitespace-nowrap transition-colors duration-150 cursor-default"
                >
                  {item}
                </li>
              ))}
              {items.length === 0 && (
                <li className="px-4 py-2.5 text-sm text-gray-500 italic">
                  Nenhum item disponível
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
