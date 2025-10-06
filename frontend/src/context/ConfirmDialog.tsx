"use client";

import { useConfirmDialog } from '@/hooks';
import { ConfirmDialog } from '@/components/common';
import { useEffect, useState, createContext, ReactNode } from "react";

interface ConfirmContextType {
  confirm: (options: { title?: string; message: string; confirmText?: string; cancelText?: string }) => Promise<boolean>;
}

export const ConfirmContext = createContext<ConfirmContextType | null>(null);

interface ConfirmProviderProps {
  children: ReactNode;
}

export const ConfirmProvider = ({ children }: ConfirmProviderProps) => {
    const [isClient, setIsClient] = useState(false);
    const { isOpen, options, confirm, handleConfirm, handleCancel } = useConfirmDialog();

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null;

    return (
        <ConfirmContext.Provider value={{ confirm }}>
            {children}
            <ConfirmDialog
                isOpen={isOpen}
                options={options}
                onConfirm={handleConfirm}
                onCancel={handleCancel}
            />
        </ConfirmContext.Provider>
    );
};