"use client";

import { useConfirmDialog } from "@/hooks";

interface ConfirmDialogProps {
    isOpen: boolean;
    options: {
        title?: string;
        message: string;
        confirmText?: string;
        cancelText?: string;
    } | null;
    onConfirm: () => void;
    onCancel: () => void;
}

export function ConfirmDialog({ isOpen, options, onConfirm, onCancel }: ConfirmDialogProps) {
    if (!isOpen || !options) return null;

    return (
        <div className="modal-overlay">
            <div className="bg-white rounded-lg max-w-md w-full mx-4">
                {options.title && (
                    <>
                        <div className="bg-gray-50 p-4 rounded-t-lg">
                            <h2 className="text-lg font-semibold">{options.title}</h2>
                        </div>
                        <hr className="border-t border-gray-200" />
                    </>
                )}
                <p className="text-gray-700 mb-6 p-4">{options.message}</p>
                <hr className="border-t border-gray-200" />
                <div className="bg-gray-50 p-4 rounded-b-lg flex justify-end space-x-4">
                    <button
                        onClick={onCancel}
                        className="button-base delete-button"
                    >
                        {options.cancelText || 'Cancelar'}
                    </button>
                    <button
                        onClick={onConfirm}
                        className="button-base create-button"
                    >
                        {options.confirmText || 'Confirmar'}
                    </button>
                </div>
            </div>
        </div>
    );
}