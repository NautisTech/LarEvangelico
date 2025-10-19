"use client";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export function Change() {
	const router = useRouter();
	const { t } = useTranslation("partners");
	return (
		<>
			<section className="framer-1sd4mu2" data-framer-name="Change">
				<div className="framer-qjfh8j" data-framer-name="Container">
					<div className="ssr-variant hidden-1w2ghag">
						<div
							className="framer-1tzjaqe"
							data-framer-name="Title Content"
							style={{
								willChange: "transform",
								opacity: "1",
								transform: "none",
							}}
						>
							<div
								className="framer-4l2eqe"
								data-framer-name="Be part of the change"
								data-framer-component-type="RichTextContainer"
								style={{
									transform: "none",
								}}
							>
								<blockquote className="framer-text">
									<h2
										className="framer-text framer-styles-preset-172snon"
										data-styles-preset="ayQ9EeMdI"
									>
										<strong className="framer-text">
											{t("change.title")}
										</strong>
									</h2>
								</blockquote>
							</div>
							<div className="ssr-variant hidden-yz9twz">
								<div className="framer-jq2fr9-container">
									<a
										className="framer-EomdA framer-2Vypl framer-rvcmdt framer-v-rvcmdt framer-1d5tuq9"
										data-border="true"
										data-framer-name="Primary"
										onClick={() =>
											router.push("/contactos")
										}
										style={{
											borderBottomWidth: "1px",
											borderColor:
												"var(--token-b48c5b23-5851-4ed2-9bdd-7e6ab154d227, rgb(187, 60, 13))",
											borderLeftWidth: "1px",
											borderRightWidth: "1px",
											borderStyle: "solid",
											borderTopWidth: "1px",
											backgroundColor:
												"var(--token-b48c5b23-5851-4ed2-9bdd-7e6ab154d227, rgb(187, 60, 13))",
											borderBottomLeftRadius: "4px",
											borderBottomRightRadius: "4px",
											borderTopLeftRadius: "4px",
											borderTopRightRadius: "4px",
										}}
									>
										<div
											className="framer-v2z3h"
											data-framer-name="Background"
											style={{
												backgroundColor:
													"var(--token-b48c5b23-5851-4ed2-9bdd-7e6ab154d227, rgb(187, 60, 13))",
												opacity: "1",
											}}
										></div>
										<div
											className="framer-fxosjp"
											data-framer-name="Join us Today"
											data-framer-component-type="RichTextContainer"
											style={{ transform: "none" }}
										>
											<p
												className="framer-text framer-styles-preset-myx315"
												data-styles-preset="SArK0nEOS"
												style={{
													color: "var(--extracted-r6o4lv, var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255)))",
												}}
											>
												{t("change.button")}
											</p>
										</div>
										<div
											className="framer-101fbqw"
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
							<div className="ssr-variant hidden-1y9xiyb">
								<div className="framer-jq2fr9-container">
									<a
										className="framer-EomdA framer-2Vypl framer-rvcmdt framer-v-rvcmdt framer-1d5tuq9"
										data-border="true"
										data-framer-name="Primary"
										onClick={() =>
											router.push("/contactos")
										}
										style={{
											borderBottomWidth: "1px",
											borderColor:
												"var(--token-b48c5b23-5851-4ed2-9bdd-7e6ab154d227, rgb(187, 60, 13))",
											borderLeftWidth: "1px",
											borderRightWidth: "1px",
											borderStyle: "solid",
											borderTopWidth: "1px",
											backgroundColor:
												"var(--token-b48c5b23-5851-4ed2-9bdd-7e6ab154d227, rgb(187, 60, 13))",
											borderBottomLeftRadius: "4px",
											borderBottomRightRadius: "4px",
											borderTopLeftRadius: "4px",
											borderTopRightRadius: "4px",
										}}
									>
										<div
											className="framer-v2z3h"
											data-framer-name="Background"
											style={{
												backgroundColor:
													"var(--token-b48c5b23-5851-4ed2-9bdd-7e6ab154d227, rgb(187, 60, 13))",
												opacity: "1",
											}}
										></div>
										<div
											className="framer-fxosjp"
											data-framer-name="Join us Today"
											data-framer-component-type="RichTextContainer"
											style={{ transform: "none" }}
										>
											<p
												className="framer-text framer-styles-preset-myx315"
												data-styles-preset="SArK0nEOS"
												style={{
													color: "var(--extracted-r6o4lv, var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255)))",
												}}
											>
												{t("change.button")}
											</p>
										</div>
										<div
											className="framer-101fbqw"
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
					<div className="ssr-variant hidden-1y9xiyb hidden-yz9twz">
						<div
							className="framer-1tzjaqe"
							data-framer-name="Title Content"
							style={{
								opacity: "1",
								transform: "none",
							}}
						>
							<div
								className="framer-4l2eqe"
								data-framer-name="Be part of the change"
								data-framer-component-type="RichTextContainer"
								style={{
									transform: "none",
								}}
							>
								<blockquote className="framer-text">
									<h2
										className="framer-text framer-styles-preset-172snon"
										data-styles-preset="ayQ9EeMdI"
									>
										<strong className="framer-text">
											{t("change.title")}
										</strong>
									</h2>
								</blockquote>
							</div>
							<div className="framer-jq2fr9-container">
								<a
									className="framer-EomdA framer-2Vypl framer-rvcmdt framer-v-1cm66cn framer-1d5tuq9"
									data-border="true"
									data-framer-name="Mobile banner"
									onClick={() => router.push("/contactos")}
									style={{
										borderBottomWidth: "1px",
										borderColor:
											"var(--token-b48c5b23-5851-4ed2-9bdd-7e6ab154d227, rgb(187, 60, 13))",
										borderLeftWidth: "1px",
										borderRightWidth: "1px",
										borderStyle: "solid",
										borderTopWidth: "1px",
										backgroundColor: "rgba(0, 0, 0, 0)",
										borderBottomLeftRadius: "4px",
										borderBottomRightRadius: "4px",
										borderTopLeftRadius: "4px",
										borderTopRightRadius: "4px",
									}}
								>
									<div
										className="framer-v2z3h"
										data-framer-name="Background"
										style={{
											backgroundColor:
												"var(--token-b48c5b23-5851-4ed2-9bdd-7e6ab154d227, rgb(187, 60, 13))",
											opacity: "1",
										}}
									></div>
									<div
										className="framer-fxosjp"
										data-framer-name="Join us Today"
										data-framer-component-type="RichTextContainer"
										style={{ transform: "none" }}
									>
										<p
											className="framer-text framer-styles-preset-myx315"
											data-styles-preset="SArK0nEOS"
											style={{
												color: "var(--extracted-r6o4lv, var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255)))",
											}}
										>
											{t("change.button")}
										</p>
									</div>
									<div
										className="framer-101fbqw"
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
					<div className="ssr-variant hidden-1w2ghag">
						<div
							className="framer-1gzj85h"
							data-framer-name="Content"
							style={{
								willChange: "transform",
								opacity: "1",
								transform: "none",
							}}
						>
							<div
								className="framer-bjuegi"
								data-framer-name="Shape"
								style={{
									transform: "rotate(-60deg)",
								}}
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
										loading="lazy"
										width="153"
										height="117"
										src="/images/UXcaplXgPtq5sJgW6orvzto8uzM.png?width=153&amp;height=117"
										alt="Design elements"
										style={{
											display: "block",
											width: "100%",
											height: "100%",
											borderTopLeftRadius: "inherit",
											borderTopRightRadius: "inherit",
											borderBottomRightRadius: "inherit",
											borderBottomLeftRadius: "inherit",
											objectPosition: "center center",
											objectFit: "contain",
										}}
									/>
								</div>
							</div>
							<div
								className="framer-hbnpvf"
								data-framer-name="Figure"
							>
								<div className="ssr-variant hidden-yz9twz">
									<figure
										className="framer-1ictc7e"
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
												loading="lazy"
												width="966"
												height="975"
												sizes="(min-width: 1200px) max((min(100vw - 80px, 1440px) - 150px) / 2, 1px), (min-width: 810px) and (max-width: 1199.98px) max((min(100vw - 50px, 1440px) - 40px) / 2, 1px)"
												srcSet="/images/CLuD3cxEGB870pohSLxhCOLmtPA.jpg 966w?width=966&amp;height=975 966w"
												src="/images/CLuD3cxEGB870pohSLxhCOLmtPA.jpg?width=966&amp;height=975"
												alt="change-img"
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
												data-framer-original-sizes="max((min(100vw - 80px, 1440px) - 150px) / 2, 1px)"
											/>
										</div>
									</figure>
								</div>
								<div className="ssr-variant hidden-1y9xiyb">
									<figure
										className="framer-1ictc7e"
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
												loading="lazy"
												width="966"
												height="975"
												sizes="(min-width: 1200px) max((min(100vw - 80px, 1440px) - 150px) / 2, 1px), (min-width: 810px) and (max-width: 1199.98px) max((min(100vw - 50px, 1440px) - 40px) / 2, 1px)"
												srcSet="/images/CLuD3cxEGB870pohSLxhCOLmtPA.jpg 966w?width=966&amp;height=975 966w"
												src="/images/CLuD3cxEGB870pohSLxhCOLmtPA.jpg?width=966&amp;height=975"
												alt="change-img"
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
												data-framer-original-sizes="max((min(100vw - 50px, 1440px) - 40px) / 2, 1px)"
											/>
										</div>
									</figure>
								</div>
							</div>
							<div
								className="framer-7mxq5i"
								data-framer-name="Join our growing community of volunteers and become a force for good. Whether big or small, every act of kindness helps create a brighter future for those in need."
								data-framer-component-type="RichTextContainer"
								style={{
									transform: "none",
								}}
							>
								<p
									className="framer-text framer-styles-preset-18rceng"
									data-styles-preset="efNb1Kccw"
								>
									{t("change.description")}
								</p>
							</div>
						</div>
					</div>
					<div className="ssr-variant hidden-1y9xiyb hidden-yz9twz">
						<div
							className="framer-1gzj85h"
							data-framer-name="Content"
							style={{
								opacity: "1",
								transform: "none",
							}}
						>
							<div
								className="framer-bjuegi"
								data-framer-name="Shape"
								style={{
									transform: "rotate(-60deg)",
								}}
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
										loading="lazy"
										width="153"
										height="117"
										src="/images/UXcaplXgPtq5sJgW6orvzto8uzM.png?width=153&amp;height=117"
										alt="Design elements"
										style={{
											display: "block",
											width: "100%",
											height: "100%",
											borderTopLeftRadius: "inherit",
											borderTopRightRadius: "inherit",
											borderBottomRightRadius: "inherit",
											borderBottomLeftRadius: "inherit",
											objectPosition: "center center",
											objectFit: "contain",
										}}
									/>
								</div>
							</div>
							<div
								className="framer-hbnpvf"
								data-framer-name="Figure"
							>
								<figure
									className="framer-1ictc7e"
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
											loading="lazy"
											width="966"
											height="975"
											sizes="(max-width: 809.98px) max(min(100vw - 50px, 1440px), 1px)"
											srcSet="/images/CLuD3cxEGB870pohSLxhCOLmtPA-1.jpg 966w?lossless=1&amp;width=966&amp;height=975 966w"
											src="/images/CLuD3cxEGB870pohSLxhCOLmtPA-1.jpg?lossless=1&amp;width=966&amp;height=975"
											alt="change-img"
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
											data-framer-original-sizes="max(min(100vw - 50px, 1440px), 1px)"
										/>
									</div>
								</figure>
							</div>
							<div
								className="framer-7mxq5i"
								data-framer-name="Join our growing community of volunteers and become a force for good. Whether big or small, every act of kindness helps create a brighter future for those in need."
								data-framer-component-type="RichTextContainer"
								style={{
									transform: "none",
								}}
							>
								<p
									className="framer-text framer-styles-preset-18rceng"
									data-styles-preset="efNb1Kccw"
								>
									{t("change.description")}
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
