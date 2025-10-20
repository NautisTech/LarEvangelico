"use client";

import { useRouter } from "next/navigation";
import { Conteudo } from "@/models";
import { useTranslation } from "react-i18next";
import Image from "next/image";

interface MainProps {
	causa: Conteudo | null;
}

export function Main({ causa }: MainProps) {
	const { t } = useTranslation("content");
	const router = useRouter();

	// Buscar a imagem principal dos anexos
	const imagemPrincipal =
		causa?.anexos?.find(anexo => anexo.principal)?.valor ||
		causa?.anexos?.[0]?.valor ||
		"/images/6HJpGnWZNHmb6dTcAtnneDOlw.jpg";

	const titulo = causa?.titulo || "Solidariedade";
	const descricao =
		causa?.subtitulo ||
		"Promovemos o bem-estar e a formação integral de crianças, jovens e idosos, inspirados pelos valores da fé, amor e serviço ao próximo.";
	return (
		<>
			<section className="framer-1s4s87b" data-framer-name="Main">
				<div className="framer-1n5o92b">
					<div className="framer-1p5gn7r">
						<div
							className="framer-66d6xi"
							data-framer-name="Container"
						>
							<div
								className="framer-1evzkgj"
								data-framer-name="Left"
							>
								<div className="ssr-variant hidden-s0rxjy hidden-44iexs">
									<div
										className="framer-1xpv40p"
										data-framer-name="Title Content"
										style={{
											willChange: "transform",
											opacity: "1",
											transform: "none",
										}}
									>
										<div
											className="framer-w8rro6"
											data-framer-name="Title"
										>
											<div
												className="framer-jw1ch6"
												data-framer-name="Access to"
												data-framer-component-type="RichTextContainer"
												style={{ transform: "none" }}
											>
												<h1
													className="framer-text framer-styles-preset-172snon"
													data-styles-preset="ayQ9EeMdI"
													style={{
														textAlign: "left",
													}}
												>
													{titulo}
												</h1>
											</div>
										</div>
										<div
											className="framer-1ma2jyz"
											data-framer-name="Description"
										>
											<div
												className="framer-1kk7xm8"
												data-framer-name="Our dedicated volunteers are the heart of our mission, working tirelessly to bring hope and change to those in need."
												data-framer-component-type="RichTextContainer"
												style={{
													transform: "none",
												}}
											>
												<p
													className="framer-text framer-styles-preset-18rceng"
													data-styles-preset="efNb1Kccw"
												>
													{descricao}
												</p>
											</div>
											<div className="ssr-variant hidden-44iexs">
												<div className="framer-3l8w1t-container">
													<a
														className="framer-DB2m2 framer-jRQOc framer-hozlb9 framer-v-ifgymi framer-57amc9"
														data-border="true"
														data-framer-name="Bordered"
														data-highlight="true"
														onClick={() =>
															router.push(
																`/causas/${causa?.id!}`
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
														}}
													>
														<div
															className="framer-ptdzar"
															data-framer-name="Background"
															style={{
																backgroundColor:
																	"var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2))",
																opacity: "1",
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
																	"causas.main.button"
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
											<div className="ssr-variant hidden-i8u7wv">
												<div className="framer-3l8w1t-container">
													<a
														className="framer-DB2m2 framer-jRQOc framer-hozlb9 framer-v-ifgymi framer-57amc9"
														data-border="true"
														data-framer-name="Bordered"
														data-highlight="true"
														onClick={() =>
															router.push(
																`/causas/${causa?.id!}`
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
														}}
													>
														<div
															className="framer-ptdzar"
															data-framer-name="Background"
															style={{
																backgroundColor:
																	"var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2))",
																opacity: "1",
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
																	"causas.main.button"
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
								<div className="ssr-variant hidden-s0rxjy hidden-i8u7wv">
									<div
										className="framer-1xpv40p"
										data-framer-name="Title Content"
										style={{
											willChange: "transform",
											opacity: "1",
											transform: "none",
										}}
									>
										<div
											className="framer-w8rro6"
											data-framer-name="Title"
										>
											<div
												className="framer-jw1ch6"
												data-framer-name="Access to"
												data-framer-component-type="RichTextContainer"
												style={{ transform: "none" }}
											>
												<h1
													className="framer-text framer-styles-preset-172snon"
													data-styles-preset="ayQ9EeMdI"
													style={{
														textAlign: "left",
													}}
												>
													{titulo}
												</h1>
											</div>
										</div>
										<div
											className="framer-1ma2jyz"
											data-framer-name="Description"
										>
											<div
												className="framer-1kk7xm8"
												data-framer-name="Our dedicated volunteers are the heart of our mission, working tirelessly to bring hope and change to those in need."
												data-framer-component-type="RichTextContainer"
												style={{
													transform: "none",
												}}
											>
												<p
													className="framer-text framer-styles-preset-18rceng"
													data-styles-preset="efNb1Kccw"
												>
													{descricao}
												</p>
											</div>
											<div className="ssr-variant hidden-44iexs">
												<div className="framer-3l8w1t-container">
													<a
														className="framer-DB2m2 framer-jRQOc framer-hozlb9 framer-v-ifgymi framer-57amc9"
														data-border="true"
														data-framer-name="Bordered"
														data-highlight="true"
														onClick={() =>
															router.push(
																`/causas/${causa?.id!}`
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
														}}
													>
														<div
															className="framer-ptdzar"
															data-framer-name="Background"
															style={{
																backgroundColor:
																	"var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2))",
																opacity: "1",
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
																	"causas.main.button"
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
											<div className="ssr-variant hidden-i8u7wv">
												<div className="framer-3l8w1t-container">
													<a
														className="framer-DB2m2 framer-jRQOc framer-hozlb9 framer-v-ifgymi framer-57amc9"
														data-border="true"
														data-framer-name="Bordered"
														data-highlight="true"
														onClick={() =>
															router.push(
																`/causas/${causa?.id!}`
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
														}}
													>
														<div
															className="framer-ptdzar"
															data-framer-name="Background"
															style={{
																backgroundColor:
																	"var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2))",
																opacity: "1",
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
																	"causas.main.button"
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
								<div className="ssr-variant hidden-44iexs hidden-i8u7wv">
									<div
										className="framer-1xpv40p"
										data-framer-name="Title Content"
										style={{
											opacity: "1",
											transform: "none",
										}}
									>
										<div
											className="framer-w8rro6"
											data-framer-name="Title"
										>
											<div
												className="framer-jw1ch6"
												data-framer-name="Access to"
												data-framer-component-type="RichTextContainer"
												style={{ transform: "none" }}
											>
												<h1
													className="framer-text framer-styles-preset-172snon"
													data-styles-preset="ayQ9EeMdI"
													style={{
														textAlign: "left",
													}}
												>
													{titulo}
												</h1>
											</div>
										</div>
										<div
											className="framer-1ma2jyz"
											data-framer-name="Description"
										>
											<div
												className="framer-1kk7xm8"
												data-framer-name="Our dedicated volunteers are the heart of our mission, working tirelessly to bring hope and change to those in need."
												data-framer-component-type="RichTextContainer"
												style={{
													transform: "none",
												}}
											>
												<p
													className="framer-text framer-styles-preset-18rceng"
													data-styles-preset="efNb1Kccw"
												>
													{descricao}
												</p>
											</div>
											<div className="framer-3l8w1t-container">
												<a
													className="framer-DB2m2 framer-jRQOc framer-hozlb9 framer-v-ifgymi framer-57amc9"
													data-border="true"
													data-framer-name="Bordered"
													data-highlight="true"
													onClick={() =>
														router.push(
															`/causas/${causa?.id!}`
														)
													}
													tabIndex={0}
													style={{
														borderBottomWidth:
															"1px",
														borderColor:
															"var(--token-76b9cbad-4dc8-4bc3-a43b-d42a9da69ee1, rgb(29, 15, 2))",
														borderLeftWidth: "1px",
														borderRightWidth: "1px",
														borderStyle: "solid",
														borderTopWidth: "1px",
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
															opacity: "1",
														}}
													></div>
													<div
														className="framer-uhgsoe"
														data-framer-name="Join us Today"
														data-framer-component-type="RichTextContainer"
														style={{
															transform: "none",
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
																"causas.main.button"
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
																flexShrink: "0",
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
							<div className="ssr-variant hidden-s0rxjy hidden-44iexs">
								<div
									className="framer-130v96t"
									data-framer-name="Figure"
									style={{
										willChange: "transform",
										opacity: "1",
										transform: "none",
									}}
								>
									<div
										className="framer-fd6ibv hidden-s0rxjy"
										data-framer-name="Highlight"
										style={{
											transform:
												"scale(-1) rotate(90deg)",
										}}
									>
										<div
											style={{
												position: "absolute",
												borderTopLeftRadius: "inherit",
												borderTopRightRadius: "inherit",
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
												width="115"
												height="106"
												src="/images/mmCzqWqzkhg2pdmqYfnPVkZAxIQ.png?width=115&amp;height=106"
												alt="shine-shape"
												style={{
													display: "block",
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
													objectFit: "contain",
												}}
											/>
										</div>
									</div>
									<div className="ssr-variant hidden-44iexs">
										<figure
											className="framer-v3t0am"
											data-framer-name="Image"
										>
											<div
												style={{
													position: "absolute",
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
													sizes="(min-width: 1200px) max((min(max(100vw - 120px, 1px), 1440px) - 50px) * 0.4667, 1px), (min-width: 810px) and (max-width: 1199.98px) max((min(max(100vw - 90px, 1px), 1440px) - 40px) / 2, 1px), (max-width: 809.98px) min(max(100vw - 90px, 1px), 1440px)"
													src={imagemPrincipal}
													alt={titulo}
													style={{
														display: "block",
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
														objectFit: "cover",
													}}
													data-framer-original-sizes="max((min(max(100vw - 120px, 1px), 1440px) - 50px) * 0.4667, 1px)"
												/>
											</div>
										</figure>
									</div>
									<div className="ssr-variant hidden-i8u7wv">
										<figure
											className="framer-v3t0am"
											data-framer-name="Image"
										>
											<div
												style={{
													position: "absolute",
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
													sizes="(min-width: 1200px) max((min(max(100vw - 120px, 1px), 1440px) - 50px) * 0.4667, 1px), (min-width: 810px) and (max-width: 1199.98px) max((min(max(100vw - 90px, 1px), 1440px) - 40px) / 2, 1px), (max-width: 809.98px) min(max(100vw - 90px, 1px), 1440px)"
													src={imagemPrincipal}
													alt={titulo}
													style={{
														display: "block",
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
														objectFit: "cover",
													}}
													data-framer-original-sizes="max((min(max(100vw - 90px, 1px), 1440px) - 40px) / 2, 1px)"
												/>
											</div>
										</figure>
									</div>
								</div>
							</div>
							<div className="ssr-variant hidden-s0rxjy hidden-i8u7wv">
								<div
									className="framer-130v96t"
									data-framer-name="Figure"
									style={{
										willChange: "transform",
										opacity: "1",
										transform: "none",
									}}
								>
									<div
										className="framer-fd6ibv hidden-s0rxjy"
										data-framer-name="Highlight"
										style={{
											transform:
												"scale(-1) rotate(90deg)",
										}}
									>
										<div
											style={{
												position: "absolute",
												borderTopLeftRadius: "inherit",
												borderTopRightRadius: "inherit",
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
												width="115"
												height="106"
												src="/images/mmCzqWqzkhg2pdmqYfnPVkZAxIQ.png?width=115&amp;height=106"
												alt="shine-shape"
												style={{
													display: "block",
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
													objectFit: "contain",
												}}
											/>
										</div>
									</div>
									<div className="ssr-variant hidden-44iexs">
										<figure
											className="framer-v3t0am"
											data-framer-name="Image"
										>
											<div
												style={{
													position: "absolute",
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
													sizes="(min-width: 1200px) max((min(max(100vw - 120px, 1px), 1440px) - 50px) * 0.4667, 1px), (min-width: 810px) and (max-width: 1199.98px) max((min(max(100vw - 90px, 1px), 1440px) - 40px) / 2, 1px), (max-width: 809.98px) min(max(100vw - 90px, 1px), 1440px)"
													src={imagemPrincipal}
													alt={titulo}
													style={{
														display: "block",
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
														objectFit: "cover",
													}}
													data-framer-original-sizes="max((min(max(100vw - 120px, 1px), 1440px) - 50px) * 0.4667, 1px)"
												/>
											</div>
										</figure>
									</div>
									<div className="ssr-variant hidden-i8u7wv">
										<figure
											className="framer-v3t0am"
											data-framer-name="Image"
										>
											<div
												style={{
													position: "absolute",
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
													sizes="(min-width: 1200px) max((min(max(100vw - 120px, 1px), 1440px) - 50px) * 0.4667, 1px), (min-width: 810px) and (max-width: 1199.98px) max((min(max(100vw - 90px, 1px), 1440px) - 40px) / 2, 1px), (max-width: 809.98px) min(max(100vw - 90px, 1px), 1440px)"
													src={imagemPrincipal}
													alt={titulo}
													style={{
														display: "block",
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
														objectFit: "cover",
													}}
													data-framer-original-sizes="max((min(max(100vw - 90px, 1px), 1440px) - 40px) / 2, 1px)"
												/>
											</div>
										</figure>
									</div>
								</div>
							</div>
							<div className="ssr-variant hidden-44iexs hidden-i8u7wv">
								<div
									className="framer-130v96t"
									data-framer-name="Figure"
									style={{
										opacity: "1",
										transform: "none",
									}}
								>
									<div
										className="framer-fd6ibv hidden-s0rxjy"
										data-framer-name="Highlight"
										style={{
											transform:
												"scale(-1) rotate(90deg)",
										}}
									>
										<div
											style={{
												position: "absolute",
												borderTopLeftRadius: "inherit",
												borderTopRightRadius: "inherit",
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
												width="115"
												height="106"
												src="/images/mmCzqWqzkhg2pdmqYfnPVkZAxIQ.png?width=115&amp;height=106"
												alt="shine-shape"
												style={{
													display: "block",
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
													objectFit: "contain",
												}}
											/>
										</div>
									</div>
									<figure
										className="framer-v3t0am"
										data-framer-name="Image"
									>
										<div
											style={{
												position: "absolute",
												borderTopLeftRadius: "inherit",
												borderTopRightRadius: "inherit",
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
												sizes="(min-width: 1200px) max((min(max(100vw - 120px, 1px), 1440px) - 50px) * 0.4667, 1px), (min-width: 810px) and (max-width: 1199.98px) max((min(max(100vw - 90px, 1px), 1440px) - 40px) / 2, 1px), (max-width: 809.98px) min(max(100vw - 90px, 1px), 1440px)"
												src={imagemPrincipal}
												alt={titulo}
												style={{
													display: "block",
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
													objectFit: "cover",
												}}
												data-framer-original-sizes="min(max(100vw - 90px, 1px), 1440px)"
											/>
										</div>
									</figure>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
