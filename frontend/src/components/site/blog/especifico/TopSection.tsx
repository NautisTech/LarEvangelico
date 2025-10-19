"use client";

import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Conteudo } from "@/models";

export function TopSection({ noticia }: { noticia: Conteudo }) {
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

	const imagemPrincipal =
		noticia.anexos?.find(anexo => anexo.principal)?.valor ||
		noticia.anexos?.[0]?.valor ||
		"/images/OCUj9MbhJ73rmpYYrHnLgb7sc.jpg";

	return (
		<>
			<section className="framer-1fz0bai" data-framer-name="Top Section">
				<div className="framer-2rf4ua" data-framer-name="Container">
					<div className="ssr-variant hidden-14qsnbp">
						<div
							className="framer-1k8m19l"
							data-framer-name="Main Title"
							style={{
								willChange: "transform",
								opacity: "1",
								transform: "none",
							}}
						>
							<div
								className="framer-gpfmk8"
								data-framer-name="Friday, April 8, 2022"
								data-framer-component-type="RichTextContainer"
								style={{
									transform: "none",
								}}
							>
								<p
									className="framer-text framer-styles-preset-18rceng"
									data-styles-preset="efNb1Kccw"
								>
									{formatarData(noticia.criado_em)}
								</p>
							</div>
							<div
								className="framer-1n82c34"
								data-framer-name="Bringing hope through food, shelter, and support"
								data-framer-component-type="RichTextContainer"
								style={{
									transform: "none",
								}}
							>
								<h1
									className="framer-text framer-styles-preset-172snon"
									data-styles-preset="ayQ9EeMdI"
								>
									{noticia.titulo}
								</h1>
							</div>
						</div>
					</div>
					<div className="ssr-variant hidden-ywbeel hidden-td2yua">
						<div
							className="framer-1k8m19l"
							data-framer-name="Main Title"
							style={{
								opacity: "1",
								transform: "none",
							}}
						>
							<div
								className="framer-gpfmk8"
								data-framer-name="Friday, April 8, 2022"
								data-framer-component-type="RichTextContainer"
								style={{
									transform: "none",
								}}
							>
								<p
									className="framer-text framer-styles-preset-18rceng"
									data-styles-preset="efNb1Kccw"
								>
									{formatarData(noticia.criado_em)}
								</p>
							</div>
							<div
								className="framer-1n82c34"
								data-framer-name="Bringing hope through food, shelter, and support"
								data-framer-component-type="RichTextContainer"
								style={{
									transform: "none",
								}}
							>
								<h1
									className="framer-text framer-styles-preset-172snon"
									data-styles-preset="ayQ9EeMdI"
								>
									{noticia.titulo}
								</h1>
							</div>
						</div>
					</div>
					<div className="ssr-variant hidden-14qsnbp">
						<div
							className="framer-hxk2d6"
							data-framer-name="Featured Image"
							style={{
								willChange: "transform",
								opacity: "1",
								transform: "none",
							}}
						>
							<div className="ssr-variant hidden-td2yua">
								<figure
									className="framer-5psgrm"
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
											width="1440"
											height="1105"
											sizes="(min-width: 1200px) min(100vw - 120px, 1440px), (min-width: 810px) and (max-width: 1199px) min(100vw - 90px, 1440px), (max-width: 809px) min(100vw - 90px, 1440px)"
											src={imagemPrincipal}
											alt={noticia.titulo}
											style={{
												display: "block",
												width: "100%",
												height: "100%",
												borderTopLeftRadius: "inherit",
												borderTopRightRadius: "inherit",
												borderBottomRightRadius:
													"inherit",
												borderBottomLeftRadius:
													"inherit",
												objectPosition: "center center",
												objectFit: "cover",
											}}
											data-framer-original-sizes="min(100vw - 120px, 1440px)"
										/>
									</div>
								</figure>
							</div>
							<div className="ssr-variant hidden-ywbeel">
								<figure
									className="framer-5psgrm"
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
											width="1440"
											height="1105"
											sizes="(min-width: 1200px) min(100vw - 120px, 1440px), (min-width: 810px) and (max-width: 1199px) min(100vw - 90px, 1440px), (max-width: 809px) min(100vw - 90px, 1440px)"
											src={imagemPrincipal}
											alt={noticia.titulo}
											style={{
												display: "block",
												width: "100%",
												height: "100%",
												borderTopLeftRadius: "inherit",
												borderTopRightRadius: "inherit",
												borderBottomRightRadius:
													"inherit",
												borderBottomLeftRadius:
													"inherit",
												objectPosition: "center center",
												objectFit: "cover",
											}}
											data-framer-original-sizes="min(100vw - 90px, 1440px)"
										/>
									</div>
								</figure>
							</div>
						</div>
					</div>
					<div className="ssr-variant hidden-ywbeel hidden-td2yua">
						<div
							className="framer-hxk2d6"
							data-framer-name="Featured Image"
							style={{
								opacity: "1",
								transform: "none",
							}}
						>
							<figure
								className="framer-5psgrm"
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
										width="1440"
										height="1105"
										sizes="(min-width: 1200px) min(100vw - 120px, 1440px), (min-width: 810px) and (max-width: 1199px) min(100vw - 90px, 1440px), (max-width: 809px) min(100vw - 90px, 1440px)"
										src={imagemPrincipal}
										alt={noticia.titulo}
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
										data-framer-original-sizes="min(100vw - 90px, 1440px)"
									/>
								</div>
							</figure>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
