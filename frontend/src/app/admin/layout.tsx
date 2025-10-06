"use client";

import React from 'react';
import { ProtectedRoute, ModuleTabsProvider, TipoTab } from '@/context';
import { Topbar } from '@/components/admin/topbar';
// @ts-expect-error
import "./global.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const content = (
    <div className="min-w-screen min-h-screen w-full h-full bg-white">
      <div className="flex flex-row w-full h-full">
        {/* Conteúdo principal */}
        <div className="flex-1 flex flex-col h-full px-4 lg:px-8 max-w-100 lg:max-w-100">
          <Topbar />
          <div className="flex-grow py-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <ProtectedRoute>
      <ModuleTabsProvider defaultTab={TipoTab.tabela}>
        {content}
      </ModuleTabsProvider>
    </ProtectedRoute>
  );
}
