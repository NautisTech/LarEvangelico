import { ConteudoCompleto } from "@/lib/api/conteudos-public";
import { useTranslation } from "react-i18next";

export function MainSection({ noticia }: { noticia: ConteudoCompleto }) {
	const { t } = useTranslation("content");
	return (
		<>
			<section className="framer-wb0r73" data-framer-name="Main Section">
				<div className="framer-52tycs" data-framer-name="Container">
					<div className="ssr-variant hidden-14qsnbp">
						<div
							className="framer-199rbth"
							data-framer-name="Introduction"
							data-framer-component-type="RichTextContainer"
							style={{
								willChange: "transform",
								opacity: "1",
								transform: "none",
							}}
						>
							<h5 className="framer-text framer-styles-preset-1js54ic">
								{noticia.subtitulo}
							</h5>

							<p className="framer-text framer-styles-preset-18rceng">
								{noticia.conteudo}
							</p>
						</div>
					</div>
					<div className="ssr-variant hidden-ywbeel hidden-td2yua">
						<div
							className="framer-199rbth"
							data-framer-name="Introduction"
							data-framer-component-type="RichTextContainer"
							style={{ opacity: "1", transform: "none" }}
						>
							<h5 className="framer-text framer-styles-preset-1js54ic">
								{noticia.subtitulo}
							</h5>

							<p
								className="framer-text framer-styles-preset-18rceng"
								dangerouslySetInnerHTML={{
									__html: noticia.conteudo || "",
								}}
							/>
						</div>
					</div>
					<div className="ssr-variant hidden-14qsnbp">
						<div
							className="framer-hxvr20"
							data-border="true"
							data-framer-name="Quote"
							style={{
								willChange: "transform",
								opacity: "1",
								transform: "none",
							}}
						>
							<div
								className="framer-1hiqymv"
								data-framer-name="Content"
							>
								<div
									data-framer-component-type="SVG"
									data-framer-name="“"
									className="framer-15a72fb"
									aria-hidden="true"
									style={{
										imageRendering: "pixelated",
										flexShrink: "0",
									}}
								>
									<div
										className="svgContainer"
										style={{
											width: "100%",
											height: "100%",
											aspectRatio: "inherit",
										}}
									>
										<svg
											style={{
												width: "100%",
												height: "100%",
											}}
										>
											<use href="#svg11823793674"></use>
										</svg>
									</div>
								</div>
								<div
									className="framer-1ui567b"
									data-framer-name="Charis has transformed countless lives with compassion, support, and unwavering dedication to change."
									data-framer-component-type="RichTextContainer"
									style={{
										transform: "none",
									}}
								>
									<h5
										className="framer-text framer-styles-preset-1fj1skz"
										data-styles-preset="Xx3p8Pbb_"
										style={{ textAlign: "center" }}
									>
										{t("blog.main_quote")}
									</h5>
								</div>
							</div>
						</div>
					</div>
					<div className="ssr-variant hidden-ywbeel hidden-td2yua">
						<div
							className="framer-hxvr20"
							data-border="true"
							data-framer-name="Quote"
							style={{ opacity: "1", transform: "none" }}
						>
							<div
								className="framer-1hiqymv"
								data-framer-name="Content"
							>
								<div
									data-framer-component-type="SVG"
									data-framer-name="“"
									className="framer-15a72fb"
									aria-hidden="true"
									style={{
										imageRendering: "pixelated",
										flexShrink: "0",
									}}
								>
									<div
										className="svgContainer"
										style={{
											width: "100%",
											height: "100%",
											aspectRatio: "inherit",
										}}
									>
										<svg
											style={{
												width: "100%",
												height: "100%",
											}}
										>
											<use href="#svg10535775884"></use>
										</svg>
									</div>
								</div>
								<div
									className="framer-1ui567b"
									data-framer-name="Charis has transformed countless lives with compassion, support, and unwavering dedication to change."
									data-framer-component-type="RichTextContainer"
									style={{
										transform: "none",
									}}
								>
									<h5
										className="framer-text framer-styles-preset-1fj1skz"
										data-styles-preset="Xx3p8Pbb_"
										style={{ textAlign: "center" }}
									>
										{t("blog.main_quote")}
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
