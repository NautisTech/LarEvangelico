import React from 'react';
import { RowCheckBox } from '.';

interface StackCardProps {
    index: number;
    checked?: boolean;
    indeterminate?: boolean;
    onCheck?: (checked: boolean) => void;
    children: React.ReactNode;
}

export function StackCard({
    index,
    checked = false,
    indeterminate = false,
    onCheck,
    children,
}: StackCardProps) {
    return (
        <div className={`w-full border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-400 ${checked
            ? "bg-[var(--site-brown-100)] border-l-4 border-l-[rgba(82,24,7,0.12)] shadow-sm"
            : "bg-white"
            }`}>
            <div className="mb-4 flex items-center justify-between">
                <RowCheckBox
                    checked={checked}
                    check={indeterminate}
                    onChange={(e) => onCheck?.(e.target.checked)}
                />
            </div>

            <div className="space-y-4">
                {children}
            </div>
        </div>
    );
}