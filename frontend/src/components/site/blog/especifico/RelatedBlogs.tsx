// @ts-nocheck
"use client";

import { useRouter } from "next/navigation";
import { ConteudoResumo } from "@/lib/api/conteudos-public";
import { useTranslation } from "react-i18next";

export function RelatedBlogs({ noticias }: { noticias: ConteudoResumo[] }) {
	const router = useRouter();
	const { t, i18n } = useTranslation("content");

	const handleNoticiaClick = (id: number) => {
		router.push(`/blog/${id}`);
	};

	const formatarData = (data: Date | string) => {
		const dateLocale = t("blog.date_locale", {
			defaultValue: i18n.language || "pt-PT",
		});
		const dateOptions = t("blog.date_options", {
			returnObjects: true,
			defaultValue: {
				weekday: "long",
				year: "numeric",
				month: "long",
				day: "numeric",
			},
		}) as Intl.DateTimeFormatOptions;
		return new Intl.DateTimeFormat(dateLocale, dateOptions).format(
			new Date(data)
		);
	};

	if (!noticias || noticias.length === 0) {
		return null;
	}

	return (
		<>
			<section className="framer-1yn08do" data-framer-name="Insights">
				<div className="framer-kyiqoi" data-framer-name="Container">
					<div className="ssr-variant hidden-14qsnbp">
						<div
							className="framer-39h0uj"
							data-framer-name="Stories and insights"
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
								{t("blog.related_title")}
							</h3>
						</div>
					</div>
					<div className="ssr-variant hidden-ywbeel hidden-td2yua">
						<div
							className="framer-39h0uj"
							data-framer-name="Stories and insights"
							data-framer-component-type="RichTextContainer"
							style={{
								opacity: "1",
								transform: "none",
							}}
						>
							<h3
								className="framer-text framer-styles-preset-ehrduw"
								data-styles-preset="Pm0hsra8F"
								style={{ textAlign: "center" }}
							>
								{t("blog.related_title")}
							</h3>
						</div>
					</div>
					<div className="framer-1j6pwy7">
						{noticias.map((noticia, index) => {
							const imagemPrincipal = noticia?.imagem_destaque ||
								noticia?.anexos?.[0]?.caminho ||
								"../images/27Tiaf1q57EwhHjAhksDD2Mmnc.jpg";

							return (
								<>
									<div
										className="ssr-variant hidden-14qsnbp"
										key={noticia.id || index}
									>
										<div
											className="framer-1ol05s7"
											style={{
												willChange: "transform",
												opacity: "1",
												transform: "none",
											}}
										>
											<div className="ssr-variant hidden-td2yua">
												<div className="framer-xes26-container">
													<div
														className="framer-LAhMH framer-jRQOc framer-u5oc0 framer-Yo47e framer-tv52ym framer-v-tv52ym"
														data-framer-name="Primary"
														style={{
															"--3489i3": "24",
															width: "100%",
														}}
													>
														<a
															className="framer-1mowlqu framer-1qlj46u"
															data-framer-name="Figure"
															onClick={() =>
																handleNoticiaClick(
																	noticia.id!
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
															<figure
																className="framer-1f0kqqs"
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
																		loading="lazy"
																		width="1440"
																		height="1105"
																		sizes="(min-width: 1200px) max(max((min(100vw - 120px, 1440px) - 72px) / 3, 50px), 1px), (min-width: 810px) and (max-width: 1199px) max(max((min(100vw - 90px, 1440px) - 50px) / 3, 50px), 1px), (max-width: 809px) max(min(100vw - 90px, 1440px), 1px)"
																		src={
																			imagemPrincipal
																		}
																		alt={
																			noticia.titulo
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
																		data-framer-original-sizes="max(max((min(100vw - 120px, 1440px) - 72px) / 3, 50px), 1px)"
																	/>
																</div>
															</figure>
														</a>

														<div
															className="framer-mnmd5x"
															data-framer-name="TItle Content"
														>
															<div
																className="framer-zybjgk"
																data-framer-name="Date"
															>
																<div
																	className="framer-15pyenf"
																	data-framer-name="Friday, April 8, 2022"
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
																		{formatarData(
																			noticia.criado_em
																		)}
																	</p>
																</div>
															</div>
															<div
																className="framer-1kuggei"
																data-framer-name="Bringing Hope Through Food, Shelter, and Support"
																data-framer-component-type="RichTextContainer"
																style={{
																	transform:
																		"none",
																}}
															>
																<h6
																	className="framer-text framer-styles-preset-9i5qw2"
																	data-styles-preset="OXZ7pDCA2"
																>
																	<a
																		className="framer-text framer-styles-preset-ixgrlg"
																		data-styles-preset="PGCP_hdlP"
																		onClick={() =>
																			handleNoticiaClick(
																				noticia.id!
																			)
																		}
																		data-framer-page-link-current="true"
																		style={{
																			cursor: "pointer",
																		}}
																	>
																		{
																			noticia.titulo
																		}
																	</a>
																</h6>
															</div>
														</div>
													</div>
												</div>
											</div>
											<div className="ssr-variant hidden-ywbeel">
												<div className="framer-xes26-container">
													<div
														className="framer-LAhMH framer-jRQOc framer-u5oc0 framer-Yo47e framer-tv52ym framer-v-tv52ym"
														data-framer-name="Primary"
														style={{
															"--3489i3": "24",
															width: "100%",
														}}
													>
														<a
															className="framer-1mowlqu framer-1qlj46u"
															data-framer-name="Figure"
															onClick={() =>
																handleNoticiaClick(
																	noticia.id!
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
															<figure
																className="framer-1f0kqqs"
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
																		loading="lazy"
																		width="1440"
																		height="1105"
																		sizes="(min-width: 1200px) max(max((min(100vw - 120px, 1440px) - 72px) / 3, 50px), 1px), (min-width: 810px) and (max-width: 1199px) max(max((min(100vw - 90px, 1440px) - 50px) / 3, 50px), 1px), (max-width: 809px) max(min(100vw - 90px, 1440px), 1px)"
																		src={
																			imagemPrincipal
																		}
																		alt={
																			noticia.titulo
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
																		data-framer-original-sizes="max(max((min(100vw - 90px, 1440px) - 50px) / 3, 50px), 1px)"
																	/>
																</div>
															</figure>
														</a>

														<div
															className="framer-mnmd5x"
															data-framer-name="TItle Content"
														>
															<div
																className="framer-zybjgk"
																data-framer-name="Date"
															>
																<div
																	className="framer-15pyenf"
																	data-framer-name="Friday, April 8, 2022"
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
																		{formatarData(
																			noticia.criado_em
																		)}
																	</p>
																</div>
															</div>
															<div
																className="framer-1kuggei"
																data-framer-name="Bringing Hope Through Food, Shelter, and Support"
																data-framer-component-type="RichTextContainer"
																style={{
																	transform:
																		"none",
																}}
															>
																<h6
																	className="framer-text framer-styles-preset-9i5qw2"
																	data-styles-preset="OXZ7pDCA2"
																>
																	<a
																		className="framer-text framer-styles-preset-ixgrlg"
																		data-styles-preset="PGCP_hdlP"
																		onClick={() =>
																			handleNoticiaClick(
																				noticia.id!
																			)
																		}
																		data-framer-page-link-current="true"
																		style={{
																			cursor: "pointer",
																		}}
																	>
																		{
																			noticia.titulo
																		}
																	</a>
																</h6>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div
										className="ssr-variant hidden-ywbeel hidden-td2yua"
										key={noticia.id || index}
									>
										<div
											className="framer-1ol05s7"
											style={{
												opacity: "1",
												transform: "none",
											}}
										>
											<div className="framer-xes26-container">
												<div
													className="framer-LAhMH framer-jRQOc framer-u5oc0 framer-Yo47e framer-tv52ym framer-v-tv52ym"
													data-framer-name="Primary"
													style={{
														"--3489i3": "16",
														width: "100%",
													}}
												>
													<a
														className="framer-1mowlqu framer-1qlj46u"
														data-framer-name="Figure"
														onClick={() =>
															handleNoticiaClick(
																noticia.id!
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
														<figure
															className="framer-1f0kqqs"
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
																	loading="lazy"
																	width="1440"
																	height="1105"
																	sizes="(min-width: 1200px) max(max((min(100vw - 120px, 1440px) - 72px) / 3, 50px), 1px), (min-width: 810px) and (max-width: 1199px) max(max((min(100vw - 90px, 1440px) - 50px) / 3, 50px), 1px), (max-width: 809px) max(min(100vw - 90px, 1440px), 1px)"
																	src={
																		imagemPrincipal
																	}
																	alt={
																		noticia.titulo
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
																	data-framer-original-sizes="max(min(100vw - 90px, 1440px), 1px)"
																/>
															</div>
														</figure>
													</a>

													<div
														className="framer-mnmd5x"
														data-framer-name="TItle Content"
													>
														<div
															className="framer-zybjgk"
															data-framer-name="Date"
														>
															<div
																className="framer-15pyenf"
																data-framer-name="Friday, April 8, 2022"
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
																	{formatarData(
																		noticia.criado_em
																	)}
																</p>
															</div>
														</div>
														<div
															className="framer-1kuggei"
															data-framer-name="Bringing Hope Through Food, Shelter, and Support"
															data-framer-component-type="RichTextContainer"
															style={{
																transform:
																	"none",
															}}
														>
															<h6
																className="framer-text framer-styles-preset-9i5qw2"
																data-styles-preset="OXZ7pDCA2"
															>
																<a
																	className="framer-text framer-styles-preset-ixgrlg"
																	data-styles-preset="PGCP_hdlP"
																	onClick={() =>
																		handleNoticiaClick(
																			noticia.id!
																		)
																	}
																	data-framer-page-link-current="true"
																	style={{
																		cursor: "pointer",
																	}}
																>
																	{
																		noticia.titulo
																	}
																</a>
															</h6>
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
