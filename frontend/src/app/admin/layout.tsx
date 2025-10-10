"use client";

import React, { useEffect, useState } from 'react';
import { ModuleTabsProvider, TipoTab, useAuthContext } from '@/context';
import { Topbar } from '@/components/admin/topbar';
import { ChangePasswordModal } from '@/components/admin/topbar/ChangePasswordModal';
import { changeUtilizadorPassword } from '@/services/Utilizador';
import { toast } from 'react-toastify';
// @ts-expect-error
import "./global.css";
import { Loading } from '@/components/common/Loading';
import { useRouter } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);
  const [changePasswordUserId, setChangePasswordUserId] = useState<number | undefined>(undefined);

  const content = (
    <div className="min-w-full min-h-screen w-full h-full bg-white">
      <div className="flex flex-row w-full h-full">
        {/* Conteúdo principal */}
        <div className="flex-1 flex flex-col h-full px-4 lg:px-8 w-full max-w-full">
          <Topbar openChangePassword={(utilizadorId?: number) => {
            setChangePasswordUserId(utilizadorId);
            setIsChangePasswordOpen(true);
          }} />
          <ChangePasswordModal
            isOpen={isChangePasswordOpen}
            utilizador={undefined}
            isLoading={false}
            onClose={() => setIsChangePasswordOpen(false)}
            onSave={async (password: string) => {
              if (!changePasswordUserId) return;

              const token = typeof window !== 'undefined' ? localStorage.getItem('JwtToken') : null;
              if (!token) {
                toast.error('Sessão inválida. Por favor faça login novamente.');
                setIsChangePasswordOpen(false);
                router.push('/login');
                return;
              }

              try {
                await changeUtilizadorPassword(changePasswordUserId, password);
                setIsChangePasswordOpen(false);
                toast.success('Password alterada com sucesso.');
              } catch (err: any) {
                console.error('Error changing password', err);
                const status = err?.response?.status;
                if (status === 401) {
                  localStorage.removeItem('JwtToken');
                  toast.error('Sessão expirada. Por favor faça login novamente.');
                  router.push('/login');
                  return;
                }

                const serverMsg = err?.response?.data?.message || err?.message || String(err);
                toast.error(`Erro ao alterar password: ${serverMsg}`);
              }
            }}
          />
          <div className="flex-grow py-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );

  const router = useRouter();
  const { utilizador, isAuthenticated, loading } = useAuthContext();

  useEffect(() => {
    if (loading) return;

    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    if (utilizador && !isAuthenticated) {
      router.push('/login');
      return;
    }
  }, [
    loading,
    isAuthenticated,
    utilizador,
    router,
  ]);

  if (loading) return (<Loading />);

  if (!isAuthenticated) return null;

  return (
    <ModuleTabsProvider defaultTab={TipoTab.tabela}>
      {content}
    </ModuleTabsProvider>
  );
}
