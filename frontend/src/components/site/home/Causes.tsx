"use client";

import "./Causes.module.css";
import React from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { ConteudoResumo, createCamposHelper } from "@/lib/api/conteudos-public";

export function Causes({
	causas,
	isLoading,
}: {
	causas: ConteudoResumo[];
	isLoading: boolean;
}) {
	const { t } = useTranslation("home");
	const router = useRouter();

	const getImagemPrincipal = (causa: ConteudoResumo) => {
		if (!causa.anexos || causa.anexos.length === 0) {
			return "/images/placeholder.jpg";
		}
		const imagemPrincipal = causa.imagem_destaque;
		return (
			imagemPrincipal ||
			causa.anexos[0]?.caminho ||
			"/images/placeholder.jpg"
		);
	};

	// Helper function to get objetivo from causa (não usa hook)
	const getObjetivo = (causa: ConteudoResumo) => {
		const campos = createCamposHelper(causa.campos_personalizados);
		return campos.getTexto('objetivo', '');
	};

	const renderCauseCard = (causa: ConteudoResumo, index: number) => {
		const objetivo = getObjetivo(causa)

		return (
			<div
				key={causa.slug}
				className="framer-qns2ns"
				style={{
					willChange: "transform",
					opacity: "1",
					transform: "none",
				}}
			>
				<div className="framer-1x357vu-container">
					<div
						className="framer-d7En5 framer-RcNjK framer-Yo47e framer-jRQOc framer-1ex0le0 framer-v-1ex0le0"
						data-border="true"
						data-framer-name="Primary"
						style={{
							// @ts-ignore
							"--1an90bp": "36px",
							borderBottomWidth: "1px",
							borderColor:
								"var(--token-4e132b7a-8408-4224-bc97-7e71f267842c, rgb(215, 201, 183))",
							borderLeftWidth: "1px",
							borderRightWidth: "1px",
							borderStyle: "solid",
							borderTopWidth: "1px",
							backgroundColor:
								"var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))",
							borderBottomLeftRadius: "12px",
							borderBottomRightRadius: "12px",
							borderTopLeftRadius: "12px",
							borderTopRightRadius: "12px",
							width: "100%",
						}}
					>
						<div className="framer-fjc7qo" data-framer-name="Content">
							<a
								className="framer-nah7t3 framer-yk3d88"
								data-framer-name="Figure"
								onClick={() => router.push(`/causas/${causa.slug}`)}
								style={{
									borderBottomLeftRadius: "12px",
									borderBottomRightRadius: "12px",
									borderTopLeftRadius: "12px",
									borderTopRightRadius: "12px",
									cursor: "pointer",
								}}
							>
								<div
									className="framer-wk3qfq"
									data-framer-name="overlay"
									style={{
										backgroundColor:
											"var(--token-39994faa-240b-446c-8aa7-a268b7374093, rgb(82, 24, 7))",
										opacity: "0.2",
									}}
								></div>
								<figure
									className="framer-1rewzo1"
									data-framer-name="Image"
								>
									<div
										style={{
											position: "absolute",
											borderTopLeftRadius: "inherit",
											borderTopRightRadius: "inherit",
											borderBottomRightRadius: "inherit",
											borderBottomLeftRadius: "inherit",
											top: "0px",
											right: "0px",
											bottom: "0px",
											left: "0px",
										}}
										data-framer-background-image-wrapper="true"
									>
										<img
											decoding="async"
											src={getImagemPrincipal(causa)}
											alt={causa.titulo}
											style={{
												display: "block",
												width: "100%",
												height: "100%",
												borderTopLeftRadius: "inherit",
												borderTopRightRadius: "inherit",
												borderBottomRightRadius: "inherit",
												borderBottomLeftRadius: "inherit",
												objectPosition: "center center",
												objectFit: "cover",
											}}
										/>
									</div>
								</figure>
								<div className="framer-1lcshmx-container">
									<div
										className="framer-aE08l framer-2Vypl framer-jRQOc framer-1bdcnzx framer-v-1bdcnzx"
										data-framer-name="Primary"
										style={{
											backgroundColor:
												"var(--token-065bffec-4ac7-4625-aced-acd0f0a75d90, rgb(254, 206, 102))",
											borderBottomLeftRadius: "4px",
											borderBottomRightRadius: "4px",
											borderTopLeftRadius: "4px",
											borderTopRightRadius: "4px",
										}}
									>
										<div
											className="framer-1xva6ob"
											data-framer-name="Goal:"
											data-framer-component-type="RichTextContainer"
											style={{ transform: "none" }}
										>
											<p
												className="framer-text framer-styles-preset-myx315"
												data-styles-preset="SArK0nEOS"
											>
												{t("causes.goal")}
											</p>
										</div>
										<div
											className="framer-1y22eeh"
											data-framer-name="$114,000"
											data-framer-component-type="RichTextContainer"
											style={{ transform: "none" }}
										>
											<p
												className="framer-text framer-styles-preset-18rceng"
												data-styles-preset="efNb1Kccw"
											>
												{objetivo}
											</p>
										</div>
									</div>
								</div>
							</a>

							<div
								className="framer-1jip428"
								data-framer-name="Main Content"
								style={{}}
							>
								<div
									className="framer-cs2fea"
									data-framer-name="Title Content"
									style={{ marginBottom: "20px" }}
								>
									<div
										className="framer-t0iiul"
										data-framer-name="Feeding the Hungry"
										data-framer-component-type="RichTextContainer"
										style={{
											transform: "none",
											marginBottom: "8px",
										}}
									>
										<h5
											className="framer-text framer-styles-preset-1js54ic"
											data-styles-preset="YoG87oFzq"
											style={{ margin: 0 }}
										>
											<a
												className="framer-text framer-styles-preset-ixgrlg"
												data-styles-preset="PGCP_hdlP"
												onClick={() =>
													router.push(
														`/causas/${causa.slug}`
													)
												}
												style={{ cursor: "pointer" }}
											>
												{causa.titulo}
											</a>
										</h5>
									</div>
									<div
										className="framer-1cl0vg4"
										data-framer-name="We provide nutritious meals to fight hunger and bring hope to struggling communities."
										data-framer-component-type="RichTextContainer"
										style={{ transform: "none" }}
									>
										<p
											className="framer-text framer-styles-preset-18rceng"
											data-styles-preset="efNb1Kccw"
											style={{ margin: 0 }}
										>
											{causa.subtitulo}
										</p>
									</div>
								</div>
								<div className="framer-71cqzm-container">
									<a
										className="framer-DB2m2 framer-jRQOc framer-hozlb9 framer-v-ifgymi framer-57amc9"
										data-border="true"
										data-framer-name="Bordered"
										data-highlight="true"
										onClick={() =>
											router.push(`/causas/${causa.slug}`)
										}
										tabIndex={0}
										style={{
											borderBottomWidth: "1px",
											borderColor:
												"var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2))",
											borderLeftWidth: "1px",
											borderRightWidth: "1px",
											borderStyle: "solid",
											borderTopWidth: "1px",
											borderBottomLeftRadius: "4px",
											borderBottomRightRadius: "4px",
											borderTopLeftRadius: "4px",
											borderTopRightRadius: "4px",
											cursor: "pointer",
										}}
									>
										<div
											className="framer-ptdzar"
											data-framer-name="Background"
											style={{
												backgroundColor: "white",
												opacity: "1",
												borderBottomLeftRadius: "inherit",
												borderBottomRightRadius: "inherit",
												borderTopLeftRadius: "inherit",
												borderTopRightRadius: "inherit",
											}}
										></div>
										<div
											className="framer-uhgsoe"
											data-framer-name="Join us Today"
											data-framer-component-type="RichTextContainer"
											style={{ transform: "none" }}
										>
											<p
												className="framer-text framer-styles-preset-18rceng"
												data-styles-preset="efNb1Kccw"
												style={{
													color: "var(--extracted-r6o4lv, var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2)))",
												}}
											>
												{t("causes.button")}
											</p>
										</div>
										<div
											className="framer-mzpyxu"
											data-framer-name="Icon"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 256 256"
												focusable="false"
												color="var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))"
												style={{
													userSelect: "none",
													width: "100%",
													height: "100%",
													display: "inline-block",
													fill: "var(--extracted-r6o4lv, var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2)))",
													color: "var(--extracted-r6o4lv, var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2)))",
													flexShrink: "0",
												}}
											>
												<g color="var(--extracted-r6o4lv, var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2)))">
													<path d="M200,64V168a8,8,0,0,1-16,0V83.31L69.66,197.66a8,8,0,0,1-11.32-11.32L172.69,72H88a8,8,0,0,1,0-16H192A8,8,0,0,1,200,64Z"></path>
												</g>
											</svg>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (isLoading) {
		return (
			<section className="framer-1ho1v04" data-framer-name="Causes">
				<div className="framer-fijemp" data-framer-name="Container">
					<div style={{ textAlign: "center", padding: "60px 0" }}>
						<p
							className="framer-text framer-styles-preset-18rceng"
							data-styles-preset="efNb1Kccw"
						>
							{t("causes.loading")}
						</p>
					</div>
				</div>
			</section>
		);
	}
	return (
		<>
			<section className="framer-1ho1v04" data-framer-name="Causes">
				<div className="framer-fijemp" data-framer-name="Container">
					<div className="ssr-variant hidden-181rvcf">
						<div
							className="framer-om1gnp"
							data-framer-name="Our Key Causes"
							data-framer-component-type="RichTextContainer"
							style={{
								willChange: "transform",
								opacity: "1",
								transform: "none",
							}}
						>
							<h2
								className="framer-text framer-styles-preset-s0nzzz"
								data-styles-preset="N1eiVmsrJ"
								style={{ textAlign: "center" }}
							>
								{t("causes.title")}
							</h2>
						</div>
					</div>
					<div className="ssr-variant hidden-mqny1y hidden-72rtr7">
						<div
							className="framer-om1gnp"
							data-framer-name="Our Key Causes"
							data-framer-component-type="RichTextContainer"
							style={{ opacity: "1", transform: "none" }}
						>
							<h2
								className="framer-text framer-styles-preset-s0nzzz"
								data-styles-preset="N1eiVmsrJ"
								style={{ textAlign: "center" }}
							>
								{t("causes.title")}
							</h2>
						</div>
					</div>
					<div
						className="framer-1lclb7g"
						data-framer-name="Causes List Wrap"
					>
						<div
							className="framer-10spe0m"
							data-framer-name="Causes Lists"
						>
							{causas.map((causa, index) => (
								<>
									<div
										className="ssr-variant hidden-mqny1y"
										key={causa.slug}
									>
										{renderCauseCard(causa, index)}
									</div>
									<div
										className="ssr-variant hidden-181rvcf hidden-72rtr7"
										key={`${causa.slug}-tablet`}
									>
										{renderCauseCard(causa, index)}
									</div>
								</>
							))}
						</div>
						<div className="ssr-variant hidden-181rvcf">
							<div
								className="framer-1a5jlmr-container"
								style={{
									willChange: "transform",
									opacity: "1",
									transform: "none",
								}}
							>
								{" "}
								<a
									className="framer-h0BuT framer-jRQOc framer-RIsvM framer-cdvq63 framer-v-cdvq63 framer-nwk3ei"
									data-framer-name="Primary"
									onClick={() => router.push("/causas")}
								>
									<div
										className="framer-uxa79c"
										data-framer-name="Line"
										style={{
											backgroundColor:
												"var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2))",
										}}
									></div>
									<div
										className="framer-bumizy"
										data-framer-name="View All Causes"
										data-framer-component-type="RichTextContainer"
										style={{ transform: "none" }}
									>
										<p
											className="framer-text framer-styles-preset-18rceng"
											data-styles-preset="efNb1Kccw"
											style={{
												textAlign: "center",
												color: "var(--extracted-r6o4lv, var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2)))",
											}}
										>
											{t("causes.view_all")}
										</p>
									</div>
								</a>
							</div>
						</div>
						<div className="ssr-variant hidden-mqny1y hidden-72rtr7">
							<div
								className="framer-1a5jlmr-container"
								style={{
									opacity: "1",
									transform: "none",
								}}
							>
								<a
									className="framer-h0BuT framer-jRQOc framer-RIsvM framer-cdvq63 framer-v-cdvq63 framer-nwk3ei"
									data-framer-name="Primary"
									onClick={() => router.push("/causas")}
								>
									<div
										className="framer-uxa79c"
										data-framer-name="Line"
										style={{
											backgroundColor:
												"var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2))",
										}}
									></div>
									<div
										className="framer-bumizy"
										data-framer-name="View All Causes"
										data-framer-component-type="RichTextContainer"
										style={{ transform: "none" }}
									>
										<p
											className="framer-text framer-styles-preset-18rceng"
											data-styles-preset="efNb1Kccw"
											style={{
												textAlign: "center",
												color: "var(--extracted-r6o4lv, var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2)))",
											}}
										>
											{t("causes.view_all")}
										</p>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
