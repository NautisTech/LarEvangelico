"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '@/context';
import { Modulo } from '@/utils';
import { useEffect } from 'react';
import { Loading } from '@/components/common/Loading';

interface ProtectedRouteProps {
  children: React.ReactNode;
  moduloNecessario?: Modulo;
  permissaoNecessaria?: string;
  fallbackPath?: string;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  moduloNecessario,
  permissaoNecessaria,
  fallbackPath = '/admin/acesso-negado'
}) => {
  const router = useRouter();
  const { utilizador, isAuthenticated, loading } = useAuthContext();

  useEffect(() => {
    if (loading) return;

    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    if (!utilizador && !loading) {
      router.push(fallbackPath);
      return;
    }
  }, [
    loading,
    isAuthenticated,
    utilizador,
    moduloNecessario,
    permissaoNecessaria,
    router,
    fallbackPath
  ]);

  if (loading) return (<Loading />);

  if (!isAuthenticated) return null;

  if (!utilizador && !loading) return null;

  return <>{children}</>;
};