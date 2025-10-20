// @ts-nocheck
"use client";

import { Conteudo } from "@/models";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

interface InsightsProps {
	causas: Conteudo[];
}

export function Insights({ causas }: InsightsProps) {
	const { t } = useTranslation("content");
	const router = useRouter();

	const handleCausaClick = (id: number) => {
		router.push(`/causas/${id}`);
	};

	const formatCurrency = (value: number | null) => {
		if (!value) return "€0";
		return new Intl.NumberFormat("pt-PT", {
			style: "currency",
			currency: "EUR",
		}).format(value);
	};

	return (
		<>
			<section className="framer-lxl4dw" data-framer-name="Insights">
				<div className="framer-1am8g5o" data-framer-name="Container">
					<div className="ssr-variant hidden-s0rxjy">
						<div
							className="framer-uy0g2m"
							data-framer-name="Stories and insights"
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
								{t("causas.insights.title")}
							</h2>
						</div>
					</div>
					<div className="ssr-variant hidden-44iexs hidden-i8u7wv">
						<div
							className="framer-uy0g2m"
							data-framer-name="Stories and insights"
							data-framer-component-type="RichTextContainer"
							style={{
								opacity: "1",
								transform: "none",
							}}
						>
							<h2
								className="framer-text framer-styles-preset-s0nzzz"
								data-styles-preset="N1eiVmsrJ"
								style={{ textAlign: "center" }}
							>
								{t("causas.insights.title")}
							</h2>
						</div>
					</div>
					<div
						className="framer-1jg6xwi"
						data-framer-name="Causes Lists"
					>
						{causas.map((causa, index) => {
							const imagemPrincipal =
								causa.anexos?.find(anexo => anexo.principal)
									?.valor ||
								causa.anexos?.[0]?.valor ||
								"/images/OCUj9MbhJ73rmpYYrHnLgb7sc.jpg";

							return (
								<>
									<div
										className="ssr-variant hidden-s0rxjy hidden-44iexs"
										key={`${causa.id || index}-desktop`}
									>
										<div
											className="framer-poj5s1"
											style={{
												willChange: "transform",
												opacity: "1",
												transform: "none",
											}}
										>
											<div className="ssr-variant hidden-44iexs">
												<div className="framer-wsjg83-container">
													<div
														className="framer-d7En5 framer-RcNjK framer-Yo47e framer-jRQOc framer-1ex0le0 framer-v-1ex0le0"
														data-border="true"
														data-framer-name="Primary"
														style={{
															"--1an90bp": "36px",
															borderBottomWidth:
																"1px",
															borderColor:
																"var(--token-4e132b7a-8408-4224-bc97-7e71f267842c, rgb(215, 201, 183))",
															borderLeftWidth:
																"1px",
															borderRightWidth:
																"1px",
															borderStyle:
																"solid",
															borderTopWidth:
																"1px",
															backgroundColor:
																"var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))",
															borderBottomLeftRadius:
																"12px",
															borderBottomRightRadius:
																"12px",
															borderTopLeftRadius:
																"12px",
															borderTopRightRadius:
																"12px",
															width: "100%",
														}}
													>
														<div
															className="framer-fjc7qo"
															data-framer-name="Content"
														>
															<a
																className="framer-nah7t3 framer-yk3d88"
																data-framer-name="Figure"
																onClick={() =>
																	handleCausaClick(
																		causa.id!
																	)
																}
																style={{
																	borderBottomLeftRadius:
																		"12px",
																	borderBottomRightRadius:
																		"12px",
																	borderTopLeftRadius:
																		"12px",
																	borderTopRightRadius:
																		"12px",
																	cursor: "pointer",
																}}
															>
																<div
																	className="framer-wk3qfq"
																	data-framer-name="overlay"
																	style={{
																		backgroundColor:
																			"var(--token-39994faa-240b-446c-8aa7-a268b7374093, rgb(82, 24, 7))",
																		opacity:
																			"0.2",
																	}}
																></div>
																<figure
																	className="framer-1rewzo1"
																	data-framer-name="Image"
																>
																	<div
																		style={{
																			position:
																				"absolute",
																			borderTopLeftRadius:
																				"inherit",
																			borderTopRightRadius:
																				"inherit",
																			borderBottomRightRadius:
																				"inherit",
																			borderBottomLeftRadius:
																				"inherit",
																			top: "0px",
																			right: "0px",
																			bottom: "0px",
																			left: "0px",
																		}}
																		data-framer-background-image-wrapper="true"
																	>
																		<img
																			decoding="async"
																			width="1600"
																			height="1418"
																			sizes="(min-width: 1200px) max(max(max((min(100vw - 120px, 1440px) - 84px) / 3, 50px), 1px) - NaNpx, 1px), (min-width: 810px) and (max-width: 1199.98px) max(max(max((min(100vw - 90px, 1440px) - 25px) / 2, 50px), 1px) - NaNpx, 1px), (max-width: 809.98px) max(max(min(100vw - 90px, 1440px), 1px) - NaNpx, 1px)"
																			src={
																				imagemPrincipal
																			}
																			alt={
																				causa.titulo
																			}
																			style={{
																				display:
																					"block",
																				width: "100%",
																				height: "100%",
																				borderTopLeftRadius:
																					"inherit",
																				borderTopRightRadius:
																					"inherit",
																				borderBottomRightRadius:
																					"inherit",
																				borderBottomLeftRadius:
																					"inherit",
																				objectPosition:
																					"center center",
																				objectFit:
																					"cover",
																			}}
																			data-framer-original-sizes="max(max(max((min(100vw - 120px, 1440px) - 84px) / 3, 50px), 1px) - NaNpx, 1px)"
																		/>
																	</div>
																</figure>
																{causa.objetivo && (
																	<div className="framer-1lcshmx-container">
																		<div
																			className="framer-aE08l framer-2Vypl framer-jRQOc framer-1bdcnzx framer-v-1bdcnzx"
																			data-framer-name="Primary"
																			style={{
																				backgroundColor:
																					"var(--token-065bffec-4ac7-4625-aced-acd0f0a75d90, rgb(254, 206, 102))",
																				borderBottomLeftRadius:
																					"4px",
																				borderBottomRightRadius:
																					"4px",
																				borderTopLeftRadius:
																					"4px",
																				borderTopRightRadius:
																					"4px",
																			}}
																		>
																			<div
																				className="framer-1xva6ob"
																				data-framer-name="Goal:"
																				data-framer-component-type="RichTextContainer"
																				style={{
																					transform:
																						"none",
																				}}
																			>
																				<p
																					className="framer-text framer-styles-preset-myx315"
																					data-styles-preset="SArK0nEOS"
																				>
																					{t(
																						"causas.insights.goal_label"
																					)}
																				</p>
																			</div>
																			<div
																				className="framer-1y22eeh"
																				data-framer-name="$114,000"
																				data-framer-component-type="RichTextContainer"
																				style={{
																					transform:
																						"none",
																				}}
																			>
																				<p
																					className="framer-text framer-styles-preset-18rceng"
																					data-styles-preset="efNb1Kccw"
																				>
																					{formatCurrency(
																						causa.objetivo
																					)}
																				</p>
																			</div>
																		</div>
																	</div>
																)}
															</a>

															<div
																className="framer-1jip428"
																data-framer-name="Main Content"
															>
																<div
																	className="framer-cs2fea"
																	data-framer-name="Title Content"
																	style={{
																		marginBottom: 32,
																	}}
																>
																	<div
																		className="framer-t0iiul"
																		data-framer-name="Feeding the Hungry"
																		data-framer-component-type="RichTextContainer"
																		style={{
																			transform:
																				"none",
																		}}
																	>
																		<h5
																			className="framer-text framer-styles-preset-1js54ic"
																			data-styles-preset="YoG87oFzq"
																		>
																			<a
																				className="framer-text framer-styles-preset-ixgrlg"
																				data-styles-preset="PGCP_hdlP"
																				onClick={() =>
																					handleCausaClick(
																						causa.id!
																					)
																				}
																				style={{
																					cursor: "pointer",
																				}}
																			>
																				{
																					causa.titulo
																				}
																			</a>
																		</h5>
																	</div>
																	<div
																		className="framer-1cl0vg4"
																		data-framer-name="We provide nutritious meals to fight hunger and bring hope to struggling communities."
																		data-framer-component-type="RichTextContainer"
																		style={{
																			transform:
																				"none",
																		}}
																	>
																		<p
																			className="framer-text framer-styles-preset-18rceng"
																			data-styles-preset="efNb1Kccw"
																		>
																			{
																				causa.subtitulo
																			}
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
																			handleCausaClick(
																				causa.id!
																			)
																		}
																		tabIndex={
																			0
																		}
																		style={{
																			borderBottomWidth:
																				"1px",
																			borderColor:
																				"var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2))",
																			borderLeftWidth:
																				"1px",
																			borderRightWidth:
																				"1px",
																			borderStyle:
																				"solid",
																			borderTopWidth:
																				"1px",
																			borderBottomLeftRadius:
																				"4px",
																			borderBottomRightRadius:
																				"4px",
																			borderTopLeftRadius:
																				"4px",
																			borderTopRightRadius:
																				"4px",
																		}}
																	>
																		<div
																			className="framer-ptdzar"
																			data-framer-name="Background"
																			style={{
																				backgroundColor:
																					"var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2))",
																				opacity:
																					"1",
																			}}
																		></div>
																		<div
																			className="framer-uhgsoe"
																			data-framer-name="Join us Today"
																			data-framer-component-type="RichTextContainer"
																			style={{
																				transform:
																					"none",
																			}}
																		>
																			<p
																				className="framer-text framer-styles-preset-18rceng"
																				data-styles-preset="efNb1Kccw"
																				style={{
																					color: "white",
																				}}
																			>
																				{t(
																					"causas.insights.button"
																				)}
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
																					userSelect:
																						"none",
																					width: "100%",
																					height: "100%",
																					display:
																						"inline-block",
																					fill: "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))",
																					color: "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))",
																					flexShrink:
																						"0",
																				}}
																			>
																				<g color="var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))">
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
											<div className="ssr-variant hidden-i8u7wv">
												<div className="framer-wsjg83-container">
													<div
														className="framer-d7En5 framer-RcNjK framer-Yo47e framer-jRQOc framer-1ex0le0 framer-v-1ex0le0"
														data-border="true"
														data-framer-name="Primary"
														style={{
															"--1an90bp": "20px",
															borderBottomWidth:
																"1px",
															borderColor:
																"var(--token-4e132b7a-8408-4224-bc97-7e71f267842c, rgb(215, 201, 183))",
															borderLeftWidth:
																"1px",
															borderRightWidth:
																"1px",
															borderStyle:
																"solid",
															borderTopWidth:
																"1px",
															backgroundColor:
																"var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))",
															borderBottomLeftRadius:
																"12px",
															borderBottomRightRadius:
																"12px",
															borderTopLeftRadius:
																"12px",
															borderTopRightRadius:
																"12px",
															width: "100%",
														}}
													>
														<div
															className="framer-fjc7qo"
															data-framer-name="Content"
														>
															<a
																className="framer-nah7t3 framer-yk3d88"
																data-framer-name="Figure"
																onClick={() =>
																	handleCausaClick(
																		causa.id!
																	)
																}
																style={{
																	borderBottomLeftRadius:
																		"12px",
																	borderBottomRightRadius:
																		"12px",
																	borderTopLeftRadius:
																		"12px",
																	borderTopRightRadius:
																		"12px",
																	cursor: "pointer",
																}}
															>
																<div
																	className="framer-wk3qfq"
																	data-framer-name="overlay"
																	style={{
																		backgroundColor:
																			"var(--token-39994faa-240b-446c-8aa7-a268b7374093, rgb(82, 24, 7))",
																		opacity:
																			"0.2",
																	}}
																></div>
																<figure
																	className="framer-1rewzo1"
																	data-framer-name="Image"
																>
																	<div
																		style={{
																			position:
																				"absolute",
																			borderTopLeftRadius:
																				"inherit",
																			borderTopRightRadius:
																				"inherit",
																			borderBottomRightRadius:
																				"inherit",
																			borderBottomLeftRadius:
																				"inherit",
																			top: "0px",
																			right: "0px",
																			bottom: "0px",
																			left: "0px",
																		}}
																		data-framer-background-image-wrapper="true"
																	>
																		<img
																			decoding="async"
																			width="1600"
																			height="1418"
																			sizes="(min-width: 1200px) max(max(max((min(100vw - 120px, 1440px) - 84px) / 3, 50px), 1px) - NaNpx, 1px), (min-width: 810px) and (max-width: 1199.98px) max(max(max((min(100vw - 90px, 1440px) - 25px) / 2, 50px), 1px) - NaNpx, 1px), (max-width: 809.98px) max(max(min(100vw - 90px, 1440px), 1px) - NaNpx, 1px)"
																			src={
																				imagemPrincipal
																			}
																			alt={
																				causa.titulo
																			}
																			style={{
																				display:
																					"block",
																				width: "100%",
																				height: "100%",
																				borderTopLeftRadius:
																					"inherit",
																				borderTopRightRadius:
																					"inherit",
																				borderBottomRightRadius:
																					"inherit",
																				borderBottomLeftRadius:
																					"inherit",
																				objectPosition:
																					"center center",
																				objectFit:
																					"cover",
																			}}
																			data-framer-original-sizes="max(max(max((min(100vw - 90px, 1440px) - 25px) / 2, 50px), 1px) - NaNpx, 1px)"
																		/>
																	</div>
																</figure>
																{causa.objetivo && (
																	<div className="framer-1lcshmx-container">
																		<div
																			className="framer-aE08l framer-2Vypl framer-jRQOc framer-1bdcnzx framer-v-1bdcnzx"
																			data-framer-name="Primary"
																			style={{
																				backgroundColor:
																					"var(--token-065bffec-4ac7-4625-aced-acd0f0a75d90, rgb(254, 206, 102))",
																				borderBottomLeftRadius:
																					"4px",
																				borderBottomRightRadius:
																					"4px",
																				borderTopLeftRadius:
																					"4px",
																				borderTopRightRadius:
																					"4px",
																			}}
																		>
																			<div
																				className="framer-1xva6ob"
																				data-framer-name="Goal:"
																				data-framer-component-type="RichTextContainer"
																				style={{
																					transform:
																						"none",
																				}}
																			>
																				<p
																					className="framer-text framer-styles-preset-myx315"
																					data-styles-preset="SArK0nEOS"
																				>
																					{t(
																						"causas.insights.goal_label"
																					)}
																				</p>
																			</div>
																			<div
																				className="framer-1y22eeh"
																				data-framer-name="$114,000"
																				data-framer-component-type="RichTextContainer"
																				style={{
																					transform:
																						"none",
																				}}
																			>
																				<p
																					className="framer-text framer-styles-preset-18rceng"
																					data-styles-preset="efNb1Kccw"
																				>
																					{formatCurrency(
																						causa.objetivo
																					)}
																				</p>
																			</div>
																		</div>
																	</div>
																)}
															</a>

															<div
																className="framer-1jip428"
																data-framer-name="Main Content"
															>
																<div
																	className="framer-cs2fea"
																	data-framer-name="Title Content"
																	style={{
																		marginBottom: 32,
																	}}
																>
																	<div
																		className="framer-t0iiul"
																		data-framer-name="Feeding the Hungry"
																		data-framer-component-type="RichTextContainer"
																		style={{
																			transform:
																				"none",
																		}}
																	>
																		<h5
																			className="framer-text framer-styles-preset-1js54ic"
																			data-styles-preset="YoG87oFzq"
																		>
																			<a
																				className="framer-text framer-styles-preset-ixgrlg"
																				data-styles-preset="PGCP_hdlP"
																				onClick={() =>
																					handleCausaClick(
																						causa.id!
																					)
																				}
																				style={{
																					cursor: "pointer",
																				}}
																			>
																				{
																					causa.titulo
																				}
																			</a>
																		</h5>
																	</div>
																	<div
																		className="framer-1cl0vg4"
																		data-framer-name="We provide nutritious meals to fight hunger and bring hope to struggling communities."
																		data-framer-component-type="RichTextContainer"
																		style={{
																			transform:
																				"none",
																		}}
																	>
																		<p
																			className="framer-text framer-styles-preset-18rceng"
																			data-styles-preset="efNb1Kccw"
																		>
																			{
																				causa.subtitulo
																			}
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
																			handleCausaClick(
																				causa.id!
																			)
																		}
																		tabIndex={
																			0
																		}
																		style={{
																			borderBottomWidth:
																				"1px",
																			borderColor:
																				"var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2))",
																			borderLeftWidth:
																				"1px",
																			borderRightWidth:
																				"1px",
																			borderStyle:
																				"solid",
																			borderTopWidth:
																				"1px",
																			borderBottomLeftRadius:
																				"4px",
																			borderBottomRightRadius:
																				"4px",
																			borderTopLeftRadius:
																				"4px",
																			borderTopRightRadius:
																				"4px",
																		}}
																	>
																		<div
																			className="framer-ptdzar"
																			data-framer-name="Background"
																			style={{
																				backgroundColor:
																					"var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2))",
																				opacity:
																					"1",
																			}}
																		></div>
																		<div
																			className="framer-uhgsoe"
																			data-framer-name="Join us Today"
																			data-framer-component-type="RichTextContainer"
																			style={{
																				transform:
																					"none",
																			}}
																		>
																			<p
																				className="framer-text framer-styles-preset-18rceng"
																				data-styles-preset="efNb1Kccw"
																				style={{
																					color: "white",
																				}}
																			>
																				{t(
																					"causas.insights.button"
																				)}
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
																					userSelect:
																						"none",
																					width: "100%",
																					height: "100%",
																					display:
																						"inline-block",
																					fill: "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))",
																					color: "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))",
																					flexShrink:
																						"0",
																				}}
																			>
																				<g color="var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))">
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
										</div>
									</div>
									<div
										className="ssr-variant hidden-s0rxjy hidden-i8u7wv"
										key={`${causa.id || index}-tablet`}
									>
										<div
											className="framer-poj5s1"
											style={{
												willChange: "transform",
												opacity: "1",
												transform: "none",
											}}
										>
											<div className="ssr-variant hidden-44iexs">
												<div className="framer-wsjg83-container">
													<div
														className="framer-d7En5 framer-RcNjK framer-Yo47e framer-jRQOc framer-1ex0le0 framer-v-1ex0le0"
														data-border="true"
														data-framer-name="Primary"
														style={{
															"--1an90bp": "36px",
															borderBottomWidth:
																"1px",
															borderColor:
																"var(--token-4e132b7a-8408-4224-bc97-7e71f267842c, rgb(215, 201, 183))",
															borderLeftWidth:
																"1px",
															borderRightWidth:
																"1px",
															borderStyle:
																"solid",
															borderTopWidth:
																"1px",
															backgroundColor:
																"var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))",
															borderBottomLeftRadius:
																"12px",
															borderBottomRightRadius:
																"12px",
															borderTopLeftRadius:
																"12px",
															borderTopRightRadius:
																"12px",
															width: "100%",
														}}
													>
														<div
															className="framer-fjc7qo"
															data-framer-name="Content"
														>
															<a
																className="framer-nah7t3 framer-yk3d88"
																data-framer-name="Figure"
																onClick={() =>
																	handleCausaClick(
																		causa.id!
																	)
																}
																style={{
																	borderBottomLeftRadius:
																		"12px",
																	borderBottomRightRadius:
																		"12px",
																	borderTopLeftRadius:
																		"12px",
																	borderTopRightRadius:
																		"12px",
																	cursor: "pointer",
																}}
															>
																<div
																	className="framer-wk3qfq"
																	data-framer-name="overlay"
																	style={{
																		backgroundColor:
																			"var(--token-39994faa-240b-446c-8aa7-a268b7374093, rgb(82, 24, 7))",
																		opacity:
																			"0.2",
																	}}
																></div>
																<figure
																	className="framer-1rewzo1"
																	data-framer-name="Image"
																>
																	<div
																		style={{
																			position:
																				"absolute",
																			borderTopLeftRadius:
																				"inherit",
																			borderTopRightRadius:
																				"inherit",
																			borderBottomRightRadius:
																				"inherit",
																			borderBottomLeftRadius:
																				"inherit",
																			top: "0px",
																			right: "0px",
																			bottom: "0px",
																			left: "0px",
																		}}
																		data-framer-background-image-wrapper="true"
																	>
																		<img
																			decoding="async"
																			width="1600"
																			height="1418"
																			sizes="(min-width: 1200px) max(max(max((min(100vw - 120px, 1440px) - 84px) / 3, 50px), 1px) - NaNpx, 1px), (min-width: 810px) and (max-width: 1199.98px) max(max(max((min(100vw - 90px, 1440px) - 25px) / 2, 50px), 1px) - NaNpx, 1px), (max-width: 809.98px) max(max(min(100vw - 90px, 1440px), 1px) - NaNpx, 1px)"
																			src={
																				imagemPrincipal
																			}
																			alt={
																				causa.titulo
																			}
																			style={{
																				display:
																					"block",
																				width: "100%",
																				height: "100%",
																				borderTopLeftRadius:
																					"inherit",
																				borderTopRightRadius:
																					"inherit",
																				borderBottomRightRadius:
																					"inherit",
																				borderBottomLeftRadius:
																					"inherit",
																				objectPosition:
																					"center center",
																				objectFit:
																					"cover",
																			}}
																			data-framer-original-sizes="max(max(max((min(100vw - 120px, 1440px) - 84px) / 3, 50px), 1px) - NaNpx, 1px)"
																		/>
																	</div>
																</figure>
																{causa.objetivo && (
																	<div className="framer-1lcshmx-container">
																		<div
																			className="framer-aE08l framer-2Vypl framer-jRQOc framer-1bdcnzx framer-v-1bdcnzx"
																			data-framer-name="Primary"
																			style={{
																				backgroundColor:
																					"var(--token-065bffec-4ac7-4625-aced-acd0f0a75d90, rgb(254, 206, 102))",
																				borderBottomLeftRadius:
																					"4px",
																				borderBottomRightRadius:
																					"4px",
																				borderTopLeftRadius:
																					"4px",
																				borderTopRightRadius:
																					"4px",
																			}}
																		>
																			<div
																				className="framer-1xva6ob"
																				data-framer-name="Goal:"
																				data-framer-component-type="RichTextContainer"
																				style={{
																					transform:
																						"none",
																				}}
																			>
																				<p
																					className="framer-text framer-styles-preset-myx315"
																					data-styles-preset="SArK0nEOS"
																				>
																					{t(
																						"causas.insights.goal_label"
																					)}
																				</p>
																			</div>
																			<div
																				className="framer-1y22eeh"
																				data-framer-name="$114,000"
																				data-framer-component-type="RichTextContainer"
																				style={{
																					transform:
																						"none",
																				}}
																			>
																				<p
																					className="framer-text framer-styles-preset-18rceng"
																					data-styles-preset="efNb1Kccw"
																				>
																					{formatCurrency(
																						causa.objetivo
																					)}
																				</p>
																			</div>
																		</div>
																	</div>
																)}
															</a>

															<div
																className="framer-1jip428"
																data-framer-name="Main Content"
															>
																<div
																	className="framer-cs2fea"
																	data-framer-name="Title Content"
																	style={{
																		marginBottom: 32,
																	}}
																>
																	<div
																		className="framer-t0iiul"
																		data-framer-name="Feeding the Hungry"
																		data-framer-component-type="RichTextContainer"
																		style={{
																			transform:
																				"none",
																		}}
																	>
																		<h5
																			className="framer-text framer-styles-preset-1js54ic"
																			data-styles-preset="YoG87oFzq"
																		>
																			<a
																				className="framer-text framer-styles-preset-ixgrlg"
																				data-styles-preset="PGCP_hdlP"
																				onClick={() =>
																					handleCausaClick(
																						causa.id!
																					)
																				}
																				style={{
																					cursor: "pointer",
																				}}
																			>
																				{
																					causa.titulo
																				}
																			</a>
																		</h5>
																	</div>
																	<div
																		className="framer-1cl0vg4"
																		data-framer-name="We provide nutritious meals to fight hunger and bring hope to struggling communities."
																		data-framer-component-type="RichTextContainer"
																		style={{
																			transform:
																				"none",
																		}}
																	>
																		<p
																			className="framer-text framer-styles-preset-18rceng"
																			data-styles-preset="efNb1Kccw"
																		>
																			{
																				causa.subtitulo
																			}
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
																			handleCausaClick(
																				causa.id!
																			)
																		}
																		tabIndex={
																			0
																		}
																		style={{
																			borderBottomWidth:
																				"1px",
																			borderColor:
																				"var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2))",
																			borderLeftWidth:
																				"1px",
																			borderRightWidth:
																				"1px",
																			borderStyle:
																				"solid",
																			borderTopWidth:
																				"1px",
																			borderBottomLeftRadius:
																				"4px",
																			borderBottomRightRadius:
																				"4px",
																			borderTopLeftRadius:
																				"4px",
																			borderTopRightRadius:
																				"4px",
																		}}
																	>
																		<div
																			className="framer-ptdzar"
																			data-framer-name="Background"
																			style={{
																				backgroundColor:
																					"var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2))",
																				opacity:
																					"1",
																			}}
																		></div>
																		<div
																			className="framer-uhgsoe"
																			data-framer-name="Join us Today"
																			data-framer-component-type="RichTextContainer"
																			style={{
																				transform:
																					"none",
																			}}
																		>
																			<p
																				className="framer-text framer-styles-preset-18rceng"
																				data-styles-preset="efNb1Kccw"
																				style={{
																					color: "white",
																				}}
																			>
																				{t(
																					"causas.insights.button"
																				)}
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
																					userSelect:
																						"none",
																					width: "100%",
																					height: "100%",
																					display:
																						"inline-block",
																					fill: "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))",
																					color: "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))",
																					flexShrink:
																						"0",
																				}}
																			>
																				<g color="var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))">
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
											<div className="ssr-variant hidden-i8u7wv">
												<div className="framer-wsjg83-container">
													<div
														className="framer-d7En5 framer-RcNjK framer-Yo47e framer-jRQOc framer-1ex0le0 framer-v-1ex0le0"
														data-border="true"
														data-framer-name="Primary"
														style={{
															"--1an90bp": "20px",
															borderBottomWidth:
																"1px",
															borderColor:
																"var(--token-4e132b7a-8408-4224-bc97-7e71f267842c, rgb(215, 201, 183))",
															borderLeftWidth:
																"1px",
															borderRightWidth:
																"1px",
															borderStyle:
																"solid",
															borderTopWidth:
																"1px",
															backgroundColor:
																"var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))",
															borderBottomLeftRadius:
																"12px",
															borderBottomRightRadius:
																"12px",
															borderTopLeftRadius:
																"12px",
															borderTopRightRadius:
																"12px",
															width: "100%",
														}}
													>
														<div
															className="framer-fjc7qo"
															data-framer-name="Content"
														>
															<a
																className="framer-nah7t3 framer-yk3d88"
																data-framer-name="Figure"
																onClick={() =>
																	handleCausaClick(
																		causa.id!
																	)
																}
																style={{
																	borderBottomLeftRadius:
																		"12px",
																	borderBottomRightRadius:
																		"12px",
																	borderTopLeftRadius:
																		"12px",
																	borderTopRightRadius:
																		"12px",
																	cursor: "pointer",
																}}
															>
																<div
																	className="framer-wk3qfq"
																	data-framer-name="overlay"
																	style={{
																		backgroundColor:
																			"var(--token-39994faa-240b-446c-8aa7-a268b7374093, rgb(82, 24, 7))",
																		opacity:
																			"0.2",
																	}}
																></div>
																<figure
																	className="framer-1rewzo1"
																	data-framer-name="Image"
																>
																	<div
																		style={{
																			position:
																				"absolute",
																			borderTopLeftRadius:
																				"inherit",
																			borderTopRightRadius:
																				"inherit",
																			borderBottomRightRadius:
																				"inherit",
																			borderBottomLeftRadius:
																				"inherit",
																			top: "0px",
																			right: "0px",
																			bottom: "0px",
																			left: "0px",
																		}}
																		data-framer-background-image-wrapper="true"
																	>
																		<img
																			decoding="async"
																			width="1600"
																			height="1418"
																			sizes="(min-width: 1200px) max(max(max((min(100vw - 120px, 1440px) - 84px) / 3, 50px), 1px) - NaNpx, 1px), (min-width: 810px) and (max-width: 1199.98px) max(max(max((min(100vw - 90px, 1440px) - 25px) / 2, 50px), 1px) - NaNpx, 1px), (max-width: 809.98px) max(max(min(100vw - 90px, 1440px), 1px) - NaNpx, 1px)"
																			src={
																				imagemPrincipal
																			}
																			alt={
																				causa.titulo
																			}
																			style={{
																				display:
																					"block",
																				width: "100%",
																				height: "100%",
																				borderTopLeftRadius:
																					"inherit",
																				borderTopRightRadius:
																					"inherit",
																				borderBottomRightRadius:
																					"inherit",
																				borderBottomLeftRadius:
																					"inherit",
																				objectPosition:
																					"center center",
																				objectFit:
																					"cover",
																			}}
																			data-framer-original-sizes="max(max(max((min(100vw - 90px, 1440px) - 25px) / 2, 50px), 1px) - NaNpx, 1px)"
																		/>
																	</div>
																</figure>
																{causa.objetivo && (
																	<div className="framer-1lcshmx-container">
																		<div
																			className="framer-aE08l framer-2Vypl framer-jRQOc framer-1bdcnzx framer-v-1bdcnzx"
																			data-framer-name="Primary"
																			style={{
																				backgroundColor:
																					"var(--token-065bffec-4ac7-4625-aced-acd0f0a75d90, rgb(254, 206, 102))",
																				borderBottomLeftRadius:
																					"4px",
																				borderBottomRightRadius:
																					"4px",
																				borderTopLeftRadius:
																					"4px",
																				borderTopRightRadius:
																					"4px",
																			}}
																		>
																			<div
																				className="framer-1xva6ob"
																				data-framer-name="Goal:"
																				data-framer-component-type="RichTextContainer"
																				style={{
																					transform:
																						"none",
																				}}
																			>
																				<p
																					className="framer-text framer-styles-preset-myx315"
																					data-styles-preset="SArK0nEOS"
																				>
																					{t(
																						"causas.insights.goal_label"
																					)}
																				</p>
																			</div>
																			<div
																				className="framer-1y22eeh"
																				data-framer-name="$114,000"
																				data-framer-component-type="RichTextContainer"
																				style={{
																					transform:
																						"none",
																				}}
																			>
																				<p
																					className="framer-text framer-styles-preset-18rceng"
																					data-styles-preset="efNb1Kccw"
																				>
																					{formatCurrency(
																						causa.objetivo
																					)}
																				</p>
																			</div>
																		</div>
																	</div>
																)}
															</a>

															<div
																className="framer-1jip428"
																data-framer-name="Main Content"
															>
																<div
																	className="framer-cs2fea"
																	data-framer-name="Title Content"
																	style={{
																		marginBottom: 32,
																	}}
																>
																	<div
																		className="framer-t0iiul"
																		data-framer-name="Feeding the Hungry"
																		data-framer-component-type="RichTextContainer"
																		style={{
																			transform:
																				"none",
																		}}
																	>
																		<h5
																			className="framer-text framer-styles-preset-1js54ic"
																			data-styles-preset="YoG87oFzq"
																		>
																			<a
																				className="framer-text framer-styles-preset-ixgrlg"
																				data-styles-preset="PGCP_hdlP"
																				onClick={() =>
																					handleCausaClick(
																						causa.id!
																					)
																				}
																				style={{
																					cursor: "pointer",
																				}}
																			>
																				{
																					causa.titulo
																				}
																			</a>
																		</h5>
																	</div>
																	<div
																		className="framer-1cl0vg4"
																		data-framer-name="We provide nutritious meals to fight hunger and bring hope to struggling communities."
																		data-framer-component-type="RichTextContainer"
																		style={{
																			transform:
																				"none",
																		}}
																	>
																		<p
																			className="framer-text framer-styles-preset-18rceng"
																			data-styles-preset="efNb1Kccw"
																		>
																			{
																				causa.subtitulo
																			}
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
																			handleCausaClick(
																				causa.id!
																			)
																		}
																		tabIndex={
																			0
																		}
																		style={{
																			borderBottomWidth:
																				"1px",
																			borderColor:
																				"var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2))",
																			borderLeftWidth:
																				"1px",
																			borderRightWidth:
																				"1px",
																			borderStyle:
																				"solid",
																			borderTopWidth:
																				"1px",
																			borderBottomLeftRadius:
																				"4px",
																			borderBottomRightRadius:
																				"4px",
																			borderTopLeftRadius:
																				"4px",
																			borderTopRightRadius:
																				"4px",
																		}}
																	>
																		<div
																			className="framer-ptdzar"
																			data-framer-name="Background"
																			style={{
																				backgroundColor:
																					"var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2))",
																				opacity:
																					"1",
																			}}
																		></div>
																		<div
																			className="framer-uhgsoe"
																			data-framer-name="Join us Today"
																			data-framer-component-type="RichTextContainer"
																			style={{
																				transform:
																					"none",
																			}}
																		>
																			<p
																				className="framer-text framer-styles-preset-18rceng"
																				data-styles-preset="efNb1Kccw"
																				style={{
																					color: "white",
																				}}
																			>
																				{t(
																					"causas.insights.button"
																				)}
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
																					userSelect:
																						"none",
																					width: "100%",
																					height: "100%",
																					display:
																						"inline-block",
																					fill: "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))",
																					color: "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))",
																					flexShrink:
																						"0",
																				}}
																			>
																				<g color="var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))">
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
										</div>
									</div>
									<div
										className="ssr-variant hidden-44iexs hidden-i8u7wv"
										key={`${causa.id || index}-mobile`}
									>
										<div
											className="framer-poj5s1"
											style={{
												opacity: "1",
												transform: "none",
											}}
										>
											<div className="framer-wsjg83-container">
												<div
													className="framer-d7En5 framer-RcNjK framer-Yo47e framer-jRQOc framer-1ex0le0 framer-v-lfs6ys"
													data-border="true"
													data-framer-name="Mobile"
													style={{
														"--1an90bp": "20px",
														borderBottomWidth:
															"1px",
														borderColor:
															"var(--token-4e132b7a-8408-4224-bc97-7e71f267842c, rgb(215, 201, 183))",
														borderLeftWidth: "1px",
														borderRightWidth: "1px",
														borderStyle: "solid",
														borderTopWidth: "1px",
														backgroundColor:
															"var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))",
														borderBottomLeftRadius:
															"6px",
														borderBottomRightRadius:
															"6px",
														borderTopLeftRadius:
															"6px",
														borderTopRightRadius:
															"6px",
														width: "100%",
													}}
												>
													<div
														className="framer-fjc7qo"
														data-framer-name="Content"
													>
														<a
															className="framer-nah7t3 framer-yk3d88"
															data-framer-name="Figure"
															onClick={() =>
																handleCausaClick(
																	causa.id!
																)
															}
															style={{
																borderBottomLeftRadius:
																	"6px",
																borderBottomRightRadius:
																	"6px",
																borderTopLeftRadius:
																	"6px",
																borderTopRightRadius:
																	"6px",
																cursor: "pointer",
															}}
														>
															<div
																className="framer-wk3qfq"
																data-framer-name="overlay"
																style={{
																	backgroundColor:
																		"var(--token-39994faa-240b-446c-8aa7-a268b7374093, rgb(82, 24, 7))",
																	opacity:
																		"0.2",
																}}
															></div>
															<figure
																className="framer-1rewzo1"
																data-framer-name="Image"
															>
																<div
																	style={{
																		position:
																			"absolute",
																		borderTopLeftRadius:
																			"inherit",
																		borderTopRightRadius:
																			"inherit",
																		borderBottomRightRadius:
																			"inherit",
																		borderBottomLeftRadius:
																			"inherit",
																		top: "0px",
																		right: "0px",
																		bottom: "0px",
																		left: "0px",
																	}}
																	data-framer-background-image-wrapper="true"
																>
																	<img
																		decoding="async"
																		width="1600"
																		height="1418"
																		sizes="(min-width: 1200px) max(max(max((min(100vw - 120px, 1440px) - 84px) / 3, 50px), 1px) - NaNpx, 1px), (min-width: 810px) and (max-width: 1199.98px) max(max(max((min(100vw - 90px, 1440px) - 25px) / 2, 50px), 1px) - NaNpx, 1px), (max-width: 809.98px) max(max(min(100vw - 90px, 1440px), 1px) - NaNpx, 1px)"
																		src={
																			imagemPrincipal
																		}
																		alt={
																			causa.titulo
																		}
																		style={{
																			display:
																				"block",
																			width: "100%",
																			height: "100%",
																			borderTopLeftRadius:
																				"inherit",
																			borderTopRightRadius:
																				"inherit",
																			borderBottomRightRadius:
																				"inherit",
																			borderBottomLeftRadius:
																				"inherit",
																			objectPosition:
																				"center center",
																			objectFit:
																				"cover",
																		}}
																		data-framer-original-sizes="max(max(min(100vw - 90px, 1440px), 1px) - NaNpx, 1px)"
																	/>
																</div>
															</figure>
															{causa.objetivo && (
																<div className="framer-1lcshmx-container">
																	<div
																		className="framer-aE08l framer-2Vypl framer-jRQOc framer-1bdcnzx framer-v-1bdcnzx"
																		data-framer-name="Primary"
																		style={{
																			backgroundColor:
																				"var(--token-065bffec-4ac7-4625-aced-acd0f0a75d90, rgb(254, 206, 102))",
																			borderBottomLeftRadius:
																				"4px",
																			borderBottomRightRadius:
																				"4px",
																			borderTopLeftRadius:
																				"4px",
																			borderTopRightRadius:
																				"4px",
																		}}
																	>
																		<div
																			className="framer-1xva6ob"
																			data-framer-name="Goal:"
																			data-framer-component-type="RichTextContainer"
																			style={{
																				transform:
																					"none",
																			}}
																		>
																			<p
																				className="framer-text framer-styles-preset-myx315"
																				data-styles-preset="SArK0nEOS"
																			>
																				{t(
																					"causas.insights.goal_label"
																				)}
																			</p>
																		</div>
																		<div
																			className="framer-1y22eeh"
																			data-framer-name="$114,000"
																			data-framer-component-type="RichTextContainer"
																			style={{
																				transform:
																					"none",
																			}}
																		>
																			<p
																				className="framer-text framer-styles-preset-18rceng"
																				data-styles-preset="efNb1Kccw"
																			>
																				{formatCurrency(
																					causa.objetivo
																				)}
																			</p>
																		</div>
																	</div>
																</div>
															)}
														</a>

														<div
															className="framer-1jip428"
															data-framer-name="Main Content"
														>
															<div
																className="framer-cs2fea"
																data-framer-name="Title Content"
																style={{
																	marginBottom: 32,
																}}
															>
																<div
																	className="framer-t0iiul"
																	data-framer-name="Feeding the Hungry"
																	data-framer-component-type="RichTextContainer"
																	style={{
																		transform:
																			"none",
																	}}
																>
																	<h5
																		className="framer-text framer-styles-preset-1js54ic"
																		data-styles-preset="YoG87oFzq"
																	>
																		<a
																			className="framer-text framer-styles-preset-ixgrlg"
																			data-styles-preset="PGCP_hdlP"
																			onClick={() =>
																				handleCausaClick(
																					causa.id!
																				)
																			}
																			style={{
																				cursor: "pointer",
																			}}
																		>
																			{
																				causa.titulo
																			}
																		</a>
																	</h5>
																</div>
																<div
																	className="framer-1cl0vg4"
																	data-framer-name="We provide nutritious meals to fight hunger and bring hope to struggling communities."
																	data-framer-component-type="RichTextContainer"
																	style={{
																		transform:
																			"none",
																	}}
																>
																	<p
																		className="framer-text framer-styles-preset-18rceng"
																		data-styles-preset="efNb1Kccw"
																	>
																		{
																			causa.subtitulo
																		}
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
																		handleCausaClick(
																			causa.id!
																		)
																	}
																	tabIndex={0}
																	style={{
																		borderBottomWidth:
																			"1px",
																		borderColor:
																			"var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2))",
																		borderLeftWidth:
																			"1px",
																		borderRightWidth:
																			"1px",
																		borderStyle:
																			"solid",
																		borderTopWidth:
																			"1px",
																		borderBottomLeftRadius:
																			"4px",
																		borderBottomRightRadius:
																			"4px",
																		borderTopLeftRadius:
																			"4px",
																		borderTopRightRadius:
																			"4px",
																		cursor: "pointer",
																	}}
																>
																	<div
																		className="framer-ptdzar"
																		data-framer-name="Background"
																		style={{
																			backgroundColor:
																				"var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2))",
																			opacity:
																				"1",
																		}}
																	></div>
																	<div
																		className="framer-uhgsoe"
																		data-framer-name="Join us Today"
																		data-framer-component-type="RichTextContainer"
																		style={{
																			transform:
																				"none",
																		}}
																	>
																		<p
																			className="framer-text framer-styles-preset-18rceng"
																			data-styles-preset="efNb1Kccw"
																			style={{
																				color: "white",
																			}}
																		>
																			{t(
																				"causas.insights.button"
																			)}
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
																				userSelect:
																					"none",
																				width: "100%",
																				height: "100%",
																				display:
																					"inline-block",
																				fill: "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))",
																				color: "var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))",
																				flexShrink:
																					"0",
																			}}
																		>
																			<g color="var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255))">
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
									</div>
								</>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}
