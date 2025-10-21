"use client";

import React from "react";
import {
	ToastProvider,
	LanguageProvider,
} from ".";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "@/context/I18n";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5, // 5 minutos por padrão
			gcTime: 1000 * 60 * 10, // 10 minutos em cache
			refetchOnWindowFocus: false,
			refetchOnMount: false,
			refetchOnReconnect: false,
			retry: 1,
		},
	},
});

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<LanguageProvider>
			<QueryClientProvider client={queryClient}>
				{children}
				<ToastProvider />
			</QueryClientProvider>
		</LanguageProvider>
	);
};
