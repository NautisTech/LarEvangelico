"use client";

import React, { useEffect, useState } from "react";
import { Languages, X } from "lucide-react";
import { useLanguageContext } from "@/context";

const LanguageSelector = () => {
	const [open, setOpen] = useState<boolean>(false);
	const { languages, selectedLanguage, setSelectedLanguage, loading, error } =
		useLanguageContext();

	const handleLanguageChange = (
		languageCode: string,
		languageRegion?: string
	) => {
		const language = languages.find(
			lang => lang.code === languageCode && lang.region === languageRegion
		);
		if (language) {
			setSelectedLanguage(language);
		}
	};

	const toggleLanguageSelector = () => {
		setOpen(!open);
	};

	if (loading) {
		return null;
	}

	if (error || languages.length === 0) {
		return null;
	}

	return (
		<>
			<div className="cs_toggle cs_language_toggle">
				<div
					className="setting_mode"
					style={{ right: open ? "140px" : "0px" }}
				>
					<button
						id="open"
						onClick={toggleLanguageSelector}
						style={{ display: open ? "none" : "block" }}
						title={
							open
								? "Close language selector"
								: "Open language selector"
						}
						aria-label={
							open
								? "Close language selector"
								: "Open language selector"
						}
					>
						<Languages size={24} color="white" />
					</button>
					<button
						id="clecel"
						onClick={toggleLanguageSelector}
						style={{ display: open ? "inline-block" : "none" }}
						title={
							open
								? "Close language selector"
								: "Open language selector"
						}
						aria-label={
							open
								? "Close language selector"
								: "Open language selector"
						}
					>
						<X size={24} color="white" />
					</button>
				</div>
				<div
					className="cs_mode_btn js-mode-type"
					style={{ right: open ? "0px" : "-220px" }}
				>
					{languages.map(language => (
						<button
							key={`${language.code}-${language.region || ""}`}
							className={
								selectedLanguage.code === language.code &&
								selectedLanguage.region === language.region
									? "active"
									: ""
							}
							onClick={() =>
								handleLanguageChange(
									language.code,
									language.region
								)
							}
							data-language={language.code}
							data-region={language.region}
						>
							{language.name}
						</button>
					))}
				</div>
			</div>
		</>
	);
};

export default LanguageSelector;
