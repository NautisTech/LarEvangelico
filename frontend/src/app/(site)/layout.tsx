import React from "react";
import LanguageSelector from "@/components/common/LanguageSelector";

import "./global.scss";

export default function SiteLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			{children}
			<LanguageSelector />
		</>
	);
}
