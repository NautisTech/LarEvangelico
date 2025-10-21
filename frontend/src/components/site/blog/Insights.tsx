// @ts-nocheck
"use client";

import { ConteudoResumo } from "@/lib/api/conteudos-public";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export function Insights({ noticias }: { noticias: ConteudoResumo[] }) {
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

	return (
		<>
			<section className="framer-17vt7xa" data-framer-name="Insights">
				<div className="framer-smblzw" data-framer-name="Container">
					<div className="ssr-variant hidden-1mqri84">
						<div
							className="framer-dwuhv7"
							data-framer-name="Stories and insights"
							data-framer-component-type="RichTextContainer"
							style={{
								willChange: "transform",
								opacity: "1",
								transform: "none",
							}}
						>
							<h1
								className="framer-text framer-styles-preset-172snon"
								data-styles-preset="ayQ9EeMdI"
								style={{ textAlign: "center" }}
							>
								{t("blog.insights.title")}
							</h1>
						</div>
					</div>
					<div className="ssr-variant hidden-1m5d5z4 hidden-k7twfa">
						<div
							className="framer-dwuhv7"
							data-framer-name="Stories and insights"
							data-framer-component-type="RichTextContainer"
							style={{
								opacity: "1",
								transform: "none",
							}}
						>
							<h1
								className="framer-text framer-styles-preset-172snon"
								data-styles-preset="ayQ9EeMdI"
								style={{ textAlign: "center" }}
							>
								{t("blog.insights.title")}
							</h1>
						</div>
					</div>
					<div className="framer-1qvc0fm">
						{noticias.map((noticia, index) => {
							const imagemPrincipal =
								noticia.imagem_destaque ||
								noticia.anexos?.[0]?.caminho ||
								"/images/OCUj9MbhJ73rmpYYrHnLgb7sc.jpg";

							return (
								<div
									key={noticia.id || index}
									style={{ width: "100%" }}
								>
									<div className="ssr-variant hidden-1mqri84">
										<div
											className="framer-1nwjufc"
											style={{
												willChange: "transform",
												opacity: "1",
												transform: "none",
											}}
										>
											<div className="ssr-variant hidden-1m5d5z4">
												<div className="framer-pl1gd1-container">
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
																		width="1440"
																		height="1105"
																		sizes="(min-width: 1200px) max(max((min(100vw - 120px, 1440px) - 72px) / 3, 50px), 1px), (min-width: 810px) and (max-width: 1199.98px) max(max((min(100vw - 90px, 1440px) - 36px) / 2, 50px), 1px), (max-width: 809.98px) max(min(100vw - 90px, 1440px), 1px)"
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
											<div className="ssr-variant hidden-k7twfa">
												<div className="framer-pl1gd1-container">
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
																		width="1440"
																		height="1105"
																		sizes="(min-width: 1200px) max(max((min(100vw - 120px, 1440px) - 72px) / 3, 50px), 1px), (min-width: 810px) and (max-width: 1199.98px) max(max((min(100vw - 90px, 1440px) - 36px) / 2, 50px), 1px), (max-width: 809.98px) max(min(100vw - 90px, 1440px), 1px)"
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
																		data-framer-original-sizes="max(max((min(100vw - 90px, 1440px) - 36px) / 2, 50px), 1px)"
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
									<div className="ssr-variant hidden-1m5d5z4 hidden-k7twfa">
										<div
											className="framer-1nwjufc"
											style={{
												opacity: "1",
												transform: "none",
											}}
										>
											<div className="framer-pl1gd1-container">
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
																	width="1440"
																	height="1105"
																	sizes="(min-width: 1200px) max(max((min(100vw - 120px, 1440px) - 72px) / 3, 50px), 1px), (min-width: 810px) and (max-width: 1199.98px) max(max((min(100vw - 90px, 1440px) - 36px) / 2, 50px), 1px), (max-width: 809.98px) max(min(100vw - 90px, 1440px), 1px)"
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
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}
