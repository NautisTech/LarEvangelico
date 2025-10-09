"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useAuthContext, useModuleTabsSafe } from "@/context";
import { Sun, Maximize, Minimize, Bell, Settings, Table as TableIcon, Building2Icon, Book, BarChart3, Users, Layers3, LineChart, Image, TrendingUp, FileText, Bug, InfoIcon, Calendar1Icon, MapPin, Building, Building2, School2Icon, RouteIcon, LockIcon, UserIcon, ComputerIcon, Package, TagIcon, Wrench, TicketIcon, BugIcon, MessageSquare, Newspaper, CalendarDays, FolderKanban, HelpCircle, Sheet, PaperclipIcon } from "lucide-react";
import { toast } from "react-toastify";
import { Modulo } from "@/utils";


interface ModuleTab {
    id: string;
    label: string;
    icon: React.ComponentType<any>;
}

interface ModuleConfig {
    name: string;
    tabs: ModuleTab[];
    hasInternalTabs: boolean; // Indica se a página tem tabs internas
}

export function Topbar() {
    const { utilizador } = useAuthContext();
    const pathname = usePathname();
    const [isFullscreen, setIsFullscreen] = useState(false);

    const moduleTabsContext = useModuleTabsSafe();

    // Configuração dos módulos e suas tabs
    const moduleConfigs: Record<string, ModuleConfig> = {
        conteudos: {
            name: "Conteúdos",
            hasInternalTabs: true,
            tabs: [
                { id: 'tabela', label: 'Notícias', icon: Newspaper },
                { id: 'banners', label: 'Banners', icon: Image },
                { id: 'projetos', label: 'Projetos', icon: FolderKanban },
                { id: 'eventos', label: 'Eventos', icon: CalendarDays },
                { id: 'moderacao', label: 'Moderação', icon: MessageSquare },
                { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
            ]
        }
    };

    // Detectar o módulo atual baseado na URL
    const currentModule = React.useMemo(() => {
        const pathSegments = pathname.split('/').filter(Boolean);
        if (pathSegments.length >= 2 && pathSegments[0] === 'admin') {
            const moduleName = pathSegments[1];
            return moduleConfigs[moduleName] || null;
        }
        return null;
    }, [pathname, moduleConfigs]);

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);

        return () => {
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
        };
    }, []);

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((err) => {
                toast.error(`Erro ao tentar entrar em fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    };

    const imageUrl = utilizador?.anexo?.valor;

    return (
        <div className="w-full mt-[5vh] rounded-2xl bg-gradient-to-r from-zinc-800 via-zinc-800 to-zinc-700 text-white shadow-2xl border border-zinc-700/50 overflow-hidden backdrop-blur-sm">
            {/* Header Principal */}
            <div className="h-[80px] py-6 px-8 flex flex-row items-center justify-between bg-gradient-to-r from-transparent to-zinc-700/20">
                <div className="flex items-center space-x-6">
                    <h3 className="m-0 text-xl font-bold bg-gradient-to-r from-white to-zinc-200 bg-clip-text text-transparent">
                        Bem-vindo(a), {utilizador?.getNome()}!
                    </h3>
                    {currentModule && (
                        <div className="flex items-center space-x-3">
                            <div className="h-6 w-px bg-white"></div>
                            <span className="m-0 text-xl font-bold bg-gradient-to-r from-white to-zinc-200 bg-clip-text text-transparent">
                                {currentModule.name}
                            </span>
                        </div>
                    )}
                </div>

                {/* Icons + User Info */}
                <div className="flex items-center space-x-4">
                    <button
                        onClick={toggleFullscreen}
                        className="p-3 rounded-xl hover:bg-zinc-700 transition-all duration-200"
                        type="button"
                    >
                        {isFullscreen ? (
                            <Minimize className="w-5 h-5 text-zinc-300" />
                        ) : (
                            <Maximize className="w-5 h-5 text-zinc-300" />
                        )}
                    </button>

                    {/* User Info */}
                    <div className="flex items-center space-x-4 ml-4">
                        <div className="text-right">
                            <div className="font-bold text-sm text-white">
                                {utilizador?.getNome() || "Utilizador"}
                            </div>
                            <div className="text-xs text-zinc-400 font-medium">{utilizador?.getUsername()}</div>
                        </div>
                        <div className="relative">
                            {imageUrl && (
                                <img
                                    src={imageUrl}
                                    alt="User Avatar"
                                    className="w-12 h-12 rounded-full object-cover border-2 border-zinc-500/50 shadow-lg"
                                />
                            )}
                            {!imageUrl && (
                                <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-medium text-sm border-2 border-zinc-500/50 shadow-lg object-cover">
                                    {utilizador?.getNome().charAt(0)?.toUpperCase() || "U"}
                                </div>
                            )}
                            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-3 border-zinc-800 rounded-full shadow-lg animate-pulse"></span>
                        </div>
                    </div>
                </div>
            </div>

            {currentModule && (
                <div className="mx-6 h-px bg-gray-500 "></div>
            )}

            {currentModule && currentModule.hasInternalTabs && moduleTabsContext && (
                <div className="bg-gradient-to-r from-zinc-800 to-zinc-700/80 px-8 py-4">
                    <nav className="flex space-x-2 mb-3">
                        {currentModule.tabs.map((tab, index) => {
                            const Icon = tab.icon;
                            const isActive = moduleTabsContext.activeTab === tab.id;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => moduleTabsContext.setActiveTab(tab.id as any)}
                                    className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${isActive
                                        ? 'bg-red-100 text-red-700 border border-red-300!'
                                        : 'text-white hover:bg-gray-600'
                                        }`}
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <Icon className={`w-4 h-4 ${isActive ? 'text-red-700' : 'text-white'}`} />
                                    <span>{tab.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                </div>
            )}
        </div>
    );
}
