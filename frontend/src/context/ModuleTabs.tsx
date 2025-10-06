"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "react-toastify";

export enum TipoTab {
    // Base
    tabela = 'tabela',
    dashboard = 'dashboard',

    causas = 'causas',
    eventos = 'eventos',
    projetos = 'projetos',
    noticias = 'noticias',
}

interface ModuleTabsContextType {
    activeTab: TipoTab;
    setActiveTab: (tab: TipoTab) => void;
}

const ModuleTabsContext = createContext<ModuleTabsContextType | undefined>(undefined);

interface ModuleTabsProviderProps {
    children: ReactNode;
    defaultTab?: TipoTab;
}

export function ModuleTabsProvider({ children, defaultTab = TipoTab.tabela }: ModuleTabsProviderProps) {
    const [activeTab, setActiveTab] = useState<TipoTab>(defaultTab);

    return (
        <ModuleTabsContext.Provider value={{ activeTab, setActiveTab }}>
            {children}
        </ModuleTabsContext.Provider>
    );
}

export function useModuleTabs(): ModuleTabsContextType {
    const context = useContext(ModuleTabsContext);
    if (context === undefined) {
        toast.error('Erro na aplicação - por favor recarregue a página.');
        // Retornar um valor padrão para evitar crashes
        return {
            activeTab: TipoTab.tabela,
            setActiveTab: () => { }
        };
    }
    return context;
}

export function useModuleTabsSafe() {
    const context = useContext(ModuleTabsContext);
    return context; // Retorna undefined se não estiver dentro do provider
}