import { useState, useContext } from 'react';
import { ConfirmContext } from '@/context';

interface ConfirmDialogOptions {
    title?: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
}

export const useConfirmDialog = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [options, setOptions] = useState<ConfirmDialogOptions | null>(null);
    const [resolve, setResolve] = useState<((value: boolean) => void) | null>(null);

    const confirm = (opts: ConfirmDialogOptions): Promise<boolean> => {
        setOptions(opts);
        setIsOpen(true);
        return new Promise((res) => {
            setResolve(() => res);
        });
    };

    const handleConfirm = () => {
        setIsOpen(false);
        setOptions(null);
        resolve?.(true);
    };

    const handleCancel = () => {
        setIsOpen(false);
        setOptions(null);
        resolve?.(false);
    };

    return {
        isOpen,
        options,
        confirm,
        handleConfirm,
        handleCancel,
    };
};

export const useConfirm = () => {
    const context = useContext(ConfirmContext);
    if (!context) {
        throw new Error('useConfirm must be used within ConfirmProvider');
    }
    return context;
};