// @ts-nocheck

import { Conteudo } from "@/models";
import { useRouter } from "next/navigation";

import { useTranslation } from "react-i18next";

export function Causes({ causas }: { causas: Conteudo[] }) {
	const router = useRouter();
	const { t } = useTranslation("content");

	const formatCurrency = (value: number) => {
		return new Intl.NumberFormat("pt-PT", {
			style: "currency",
			currency: "EUR",
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(value);
	};

	const handleCausaClick = (id: string) => {
		router.push(`/causas/${id}`);
	};

	if (!causas || causas.length === 0) {
		return null;
	}

	return (
		<>
			<section className="framer-qgyhda" data-framer-name="Causes">
				<div className="framer-q9xl3o" data-framer-name="Container">
					<div className="ssr-variant hidden-d9yx5v">
						<div
							className="framer-gfw0ym"
							data-framer-name="Our Key Causes"
							data-framer-component-type="RichTextContainer"
							style={{
								willChange: "transform",
								opacity: "1",
								transform: "none",
							}}
						>
							<h3
								className="framer-text framer-styles-preset-ehrduw"
								data-styles-preset="Pm0hsra8F"
								style={{ textAlign: "center" }}
							>
								{t("causas_specific.other_title")}
							</h3>
						</div>
					</div>
					<div className="ssr-variant hidden-wz6xei hidden-utjgut">
						<div
							className="framer-gfw0ym"
							data-framer-name="Our Key Causes"
							data-framer-component-type="RichTextContainer"
							style={{ opacity: "1", transform: "none" }}
						>
							<h3
								className="framer-text framer-styles-preset-ehrduw"
								data-styles-preset="Pm0hsra8F"
								style={{ textAlign: "center" }}
							>
								{t("causas_specific.other_title")}
							</h3>
						</div>
					</div>
					<div
						className="framer-16kj5yn"
						data-framer-name="Causes Lists"
					>
						<div className="ssr-variant hidden-wz6xei">
							{causas.map((causa, index) => {
								const imagemPrincipal =
									causa.anexos?.find(anexo => anexo.principal)
										?.valor ||
									causa.anexos?.[0]?.valor ||
									"../images/Bte6guHqFv0lXXuFa5GHNuEI0Mg.jpg";

								return (
									<>
										<div className="ssr-variant hidden-d9yx5v">
											<div
												className="framer-1plvl6g"
												style={{
													willChange: "transform",
													opacity: "1",
													transform: "none",
												}}
											>
												<div className="framer-1cdp940-container">
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
																data-framer-page-link-current="true"
																style={{
																	borderBottomLeftRadius:
																		"12px",
																	borderBottomRightRadius:
																		"12px",
																	borderTopLeftRadius:
																		"12px",
																	borderTopRightRadius:
																		"12px",
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
																			height="1209"
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
																						"causas_specific.goal_label"
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
																style={{
																	"-Mtzcmr":
																		"32",
																}}
															>
																<div
																	className="framer-cs2fea"
																	data-framer-name="Title Content"
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
																				data-framer-page-link-current="true"
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
																<div
																	className="framer-71cqzm-container"
																	style={{
																		marginTop:
																			"20px",
																	}}
																>
																	<div
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
																					"causas_specific.button"
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
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="ssr-variant hidden-utjgut">
											<div
												className="framer-1plvl6g"
												style={{
													opacity: "1",
													transform: "none",
												}}
											>
												<div className="framer-1cdp940-container">
													<div
														className="framer-d7En5 framer-RcNjK framer-Yo47e framer-jRQOc framer-1ex0le0 framer-v-lfs6ys"
														data-border="true"
														data-framer-name="Mobile"
														style={{
															"--1an90bp": "25px",
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
																data-framer-page-link-current="true"
																style={{
																	borderBottomLeftRadius:
																		"6px",
																	borderBottomRightRadius:
																		"6px",
																	borderTopLeftRadius:
																		"6px",
																	borderTopRightRadius:
																		"6px",
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
																			height="1209"
																			sizes="(min-width: 1200px) max(max(max((min(100vw - 120px, 1440px) - 84px) / 3, 50px), 1px) - NaNpx, 1px), (max-width: 809px) max(max(min(100vw - 90px, 1440px), 1px) - NaNpx, 1px), (min-width: 810px) and (max-width: 1199px) max(max(max((min(100vw - 90px, 1440px) - 25px) / 2, 50px), 1px) - NaNpx, 1px)"
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
																					"causas_specific.goal_label"
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
																				{
																					causa.objetivo
																				}
																			</p>
																		</div>
																	</div>
																</div>
															</a>

															<div
																className="framer-1jip428"
																data-framer-name="Main Content"
																style={{
																	"-Mtzcmr":
																		"20",
																}}
															>
																<div
																	className="framer-cs2fea"
																	data-framer-name="Title Content"
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
																				data-framer-page-link-current="true"
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
																<div
																	className="framer-71cqzm-container"
																	style={{
																		marginTop:
																			"20px",
																	}}
																>
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
																		data-framer-page-link-current="true"
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
																			style={{
																				color: "white",
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
																					"causas_specific.button"
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
				</div>
			</section>
		</>
	);
}
