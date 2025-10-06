"use client";

import React from 'react';
import Link from 'next/link';
import { useAuthContext } from '@/context';

export default function AcessoNegadoPage() {
  const { utilizador, logout } = useAuthContext();

  return (
    // <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    //   <div className="max-w-md w-full space-y-8">
    //     <div className="text-center">
    //       <div className="mx-auto h-24 w-24 text-red-500">
    //         <svg
    //           className="h-full w-full"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth={2}
    //             d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
    //           />
    //         </svg>
    //       </div>

    //       <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
    //         Acesso Negado
    //       </h2>

    //       <p className="mt-2 text-sm text-gray-600">
    //         Não tem permissões para aceder a esta página.
    //       </p>

    //       {utilizador && (
    //         <div className="mt-4 p-4 bg-gray-100 rounded-md">
    //           <p className="text-sm text-gray-700">
    //             <strong>Utilizador:</strong> {utilizador.nome}
    //           </p>
    //           <p className="text-sm text-gray-700">
    //             <strong>Email:</strong> {utilizador.email}
    //           </p>
    //         </div>
    //       )}
    //     </div>

    //     <div className="mt-8 space-y-4">
    //       <Link
    //         href="/admin"
    //         className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //       >
    //         Voltar ao Dashboard
    //       </Link>

    //       <button
    //         onClick={logout}
    //         className="group relative w-full flex justify-center py-2 px-4 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //       >
    //         Terminar Sessão
    //       </button>
    //     </div>

    //     <div className="mt-6 text-center">
    //       <p className="text-xs text-gray-500">
    //         Se acredita que isto é um erro, contacte o administrador do sistema.
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <></>
  );
}