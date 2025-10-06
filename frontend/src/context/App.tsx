"use client";

import React from "react";
import { AuthProvider, ToastProvider, ConfirmProvider, LanguageProvider } from ".";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {

  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ConfirmProvider>
            {children}
          </ConfirmProvider>
          <ToastProvider />
        </AuthProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
};
