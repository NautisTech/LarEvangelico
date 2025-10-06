"use client";

import React, { useEffect, useRef } from "react";

export function RowCheckBox({ checked, check, onChange }: { checked: boolean; check?: boolean; onChange: (e: any) => void }) {
    const ref = useRef<HTMLInputElement>(null);
    useEffect(() => {
        if (ref.current) {
            ref.current.indeterminate = Boolean(check);
        }
    }, [check]);
    return <input className="accent-[#ef4444]!" type="checkbox" ref={ref} checked={checked} onChange={onChange} />;
}