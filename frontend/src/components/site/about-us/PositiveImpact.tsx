"use client";

import React from "react";
import DonationModal from "../DonationModal";
import { useTranslation } from "react-i18next";

export function PositiveImpact() {
	const { t } = useTranslation("about");

	const [isModalOpen, setModalOpen] = React.useState(false);
	const handleModalOpen = () => {
		setModalOpen(true);
	};
	const handleModalClose = () => {
		setModalOpen(false);
	};

	return (
		<>
			<section
				className="framer-1m4rlcb"
				data-framer-name="Positive Impact"
			>
				<div
					className="framer-14ul55h"
					data-framer-name="Container Fluid"
				>
					<div className="ssr-variant hidden-bvam2o">
						<div
							className="framer-iskrt3 hidden-1q641mp"
							data-framer-name="Icon"
							style={{
								willChange: "transform",
								opacity: "1",
								transform:
									"translate(-50%, -50%) translateX(-43px) translateY(17px)",
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
									width="263"
									height="203"
									src="/images/uZCck7kO61BbMCSNsS3pTI3ePg.png?width=263&amp;height=203"
									alt="stars"
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
					</div>
					<div className="ssr-variant hidden-1cn8rbi hidden-1q641mp">
						<div
							className="framer-iskrt3 hidden-1q641mp"
							data-framer-name="Icon"
							style={{
								willChange: "transform",
								opacity: "1",
								transform: "translateX(-43px) translateY(17px)",
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
									width="263"
									height="203"
									src="/images/uZCck7kO61BbMCSNsS3pTI3ePg.png?width=263&amp;height=203"
									alt="stars"
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
					</div>
					<div className="ssr-variant hidden-1q641mp">
						<div
							className="framer-12bn0wo"
							data-framer-name="Title Content"
							style={{
								willChange: "transform",
								opacity: "1",
								transform: "none",
							}}
						>
							<div
								className="framer-hysl85"
								data-framer-name="The Meaningful ways we create lasting positive impact"
								data-framer-component-type="RichTextContainer"
								style={{
									transform: "none",
								}}
							>
								<h2
									className="framer-text framer-styles-preset-s0nzzz"
									data-styles-preset="N1eiVmsrJ"
								>
									{t("positive_impact.title")}
								</h2>
							</div>
						</div>
					</div>
					<div className="ssr-variant hidden-1cn8rbi hidden-bvam2o">
						<div
							className="framer-12bn0wo"
							data-framer-name="Title Content"
							style={{
								opacity: "1",
								transform: "none",
							}}
						>
							<div
								className="framer-hysl85"
								data-framer-name="The Meaningful ways we create lasting positive impact"
								data-framer-component-type="RichTextContainer"
								style={{
									transform: "none",
								}}
							>
								<h2
									className="framer-text framer-styles-preset-s0nzzz"
									data-styles-preset="N1eiVmsrJ"
								>
									{t("positive_impact.title")}
								</h2>
							</div>
						</div>
					</div>
					<div className="framer-ribbmr" data-framer-name="Row">
						<div className="framer-i3h5em" data-framer-name="Main">
							<div className="ssr-variant hidden-1q641mp">
								<div
									className="framer-znqfu"
									data-framer-name="Figure"
									style={{
										willChange: "transform",
										opacity: "1",
										transform: "none",
									}}
								>
									<div className="ssr-variant hidden-bvam2o">
										<figure
											className="framer-14gyw3e"
											data-framer-name="image"
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
													loading="lazy"
													width="745"
													height="800"
													sizes="(min-width: 1200px) max((max(min(100vw - 80px, 1824px) * 0.81 - 205px, 1px) - 129px) / 1.8, 1px), (min-width: 810px) and (max-width: 1199.98px) max((max(min(100vw - 50px, 1824px) * 0.81 - 205px, 1px) - 40px) / 1.8, 1px)"
													srcSet="/images/IZSZICF4K7nLKsmRawuR9SWA4.jpg 745w?width=745&amp;height=800 745w"
													src="/images/IZSZICF4K7nLKsmRawuR9SWA4.jpg?width=745&amp;height=800"
													alt="Impact"
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
													data-framer-original-sizes="max((max(min(100vw - 80px, 1824px) * 0.81 - 205px, 1px) - 129px) / 1.8, 1px)"
												/>
											</div>
										</figure>
									</div>
									<div className="ssr-variant hidden-1cn8rbi">
										<figure
											className="framer-14gyw3e"
											data-framer-name="image"
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
													loading="lazy"
													width="745"
													height="800"
													sizes="(min-width: 1200px) max((max(min(100vw - 80px, 1824px) * 0.81 - 205px, 1px) - 129px) / 1.8, 1px), (min-width: 810px) and (max-width: 1199.98px) max((max(min(100vw - 50px, 1824px) * 0.81 - 205px, 1px) - 40px) / 1.8, 1px)"
													srcSet="/images/IZSZICF4K7nLKsmRawuR9SWA4.jpg 745w?width=745&amp;height=800 745w"
													src="/images/IZSZICF4K7nLKsmRawuR9SWA4.jpg?width=745&amp;height=800"
													alt="Impact"
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
													data-framer-original-sizes="max((max(min(100vw - 50px, 1824px) * 0.81 - 205px, 1px) - 40px) / 1.8, 1px)"
												/>
											</div>
										</figure>
									</div>
								</div>
							</div>
							<div className="ssr-variant hidden-1cn8rbi hidden-bvam2o">
								<div
									className="framer-znqfu"
									data-framer-name="Figure"
									style={{
										opacity: "1",
										transform: "none",
									}}
								>
									<figure
										className="framer-14gyw3e"
										data-framer-name="image"
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
												width="745"
												height="800"
												sizes="(max-width: 809.98px) max(min(100vw - 50px, 1824px), 1px)"
												srcSet="/images/IZSZICF4K7nLKsmRawuR9SWA4-1.jpg 745w?lossless=1&amp;width=745&amp;height=800 745w"
												src="/images/IZSZICF4K7nLKsmRawuR9SWA4-1.jpg?lossless=1&amp;width=745&amp;height=800"
												alt="Impact"
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
												data-framer-original-sizes="max(min(100vw - 50px, 1824px), 1px)"
											/>
										</div>
									</figure>
								</div>
							</div>
							<div className="ssr-variant hidden-1q641mp">
								<div
									className="framer-7foo0m"
									data-framer-name="Content"
									style={{
										willChange: "transform",
										opacity: "1",
										transform: "none",
									}}
								>
									<div
										className="framer-7v95g6"
										data-framer-name="Title Content"
									>
										<div
											className="framer-5sbq4y"
											data-framer-name="Creating Lasting Change"
											data-framer-component-type="RichTextContainer"
											style={{
												transform: "none",
											}}
										>
											<h4
												className="framer-text framer-styles-preset-13lkd54"
												data-styles-preset="SE0dvQEiW"
											>
												{t(
													"positive_impact.section_title"
												)}
											</h4>
										</div>
										<div
											className="framer-166n4xg"
											data-framer-name="We provide essential resources like food, education, and emergency aid to vulnerable communities. Our initiatives focus on making a lasting impact by addressing critical needs. Through collaboration with volunteers and donors, we ensure that help reaches those who need it most."
											data-framer-component-type="RichTextContainer"
											style={{
												transform: "none",
											}}
										>
											<p
												className="framer-text framer-styles-preset-18rceng"
												data-styles-preset="efNb1Kccw"
											>
												{t(
													"positive_impact.description"
												)}
											</p>
										</div>
									</div>
									<div
										className="ssr-variant hidden-bvam2o"
										onClick={handleModalOpen}
									>
										<div className="framer-1p0yejy-container">
											<a
												className="framer-DB2m2 framer-jRQOc framer-hozlb9 framer-v-hozlb9 framer-57amc9"
												data-border="true"
												data-framer-name="Primary"
												data-highlight="true"
												tabIndex={0}
												style={{
													borderBottomWidth: "1px",
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
													borderTopLeftRadius: "4px",
													borderTopRightRadius: "4px",
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
															color: "var(--extracted-r6o4lv, var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255)))",
														}}
													>
														{t(
															"positive_impact.button"
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
															userSelect: "none",
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
									<div
										className="ssr-variant hidden-1cn8rbi"
										onClick={handleModalOpen}
									>
										<div className="framer-1p0yejy-container">
											<a
												className="framer-DB2m2 framer-jRQOc framer-hozlb9 framer-v-hozlb9 framer-57amc9"
												data-border="true"
												data-framer-name="Primary"
												data-highlight="true"
												tabIndex={0}
												style={{
													borderBottomWidth: "1px",
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
													borderTopLeftRadius: "4px",
													borderTopRightRadius: "4px",
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
															color: "var(--extracted-r6o4lv, var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255)))",
														}}
													>
														{t(
															"positive_impact.button"
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
															userSelect: "none",
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
							<div className="ssr-variant hidden-1cn8rbi hidden-bvam2o">
								<div
									className="framer-7foo0m"
									data-framer-name="Content"
									style={{
										opacity: "1",
										transform: "none",
									}}
								>
									<div
										className="framer-7v95g6"
										data-framer-name="Title Content"
									>
										<div
											className="framer-5sbq4y"
											data-framer-name="Creating Lasting Change"
											data-framer-component-type="RichTextContainer"
											style={{
												transform: "none",
											}}
										>
											<h4
												className="framer-text framer-styles-preset-13lkd54"
												data-styles-preset="SE0dvQEiW"
											>
												{t(
													"positive_impact.section_title"
												)}
											</h4>
										</div>
										<div
											className="framer-166n4xg"
											data-framer-name="We provide essential resources like food, education, and emergency aid to vulnerable communities. Our initiatives focus on making a lasting impact by addressing critical needs. Through collaboration with volunteers and donors, we ensure that help reaches those who need it most."
											data-framer-component-type="RichTextContainer"
											style={{
												transform: "none",
											}}
										>
											<p
												className="framer-text framer-styles-preset-18rceng"
												data-styles-preset="efNb1Kccw"
											>
												{t(
													"positive_impact.description"
												)}
											</p>
										</div>
									</div>
									<div
										className="framer-1p0yejy-container"
										onClick={handleModalOpen}
									>
										<a
											className="framer-DB2m2 framer-jRQOc framer-hozlb9 framer-v-hozlb9 framer-57amc9"
											data-border="true"
											data-framer-name="Primary"
											data-highlight="true"
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
												style={{ transform: "none" }}
											>
												<p
													className="framer-text framer-styles-preset-18rceng"
													data-styles-preset="efNb1Kccw"
													style={{
														color: "var(--extracted-r6o4lv, var(--token-3a43d70e-9044-4fcc-943f-bb35b36ef731, rgb(255, 255, 255)))",
													}}
												>
													{t(
														"positive_impact.button"
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
						<div
							className="framer-1muyvsg hidden-1q641mp"
							data-framer-name="Figure"
							style={{
								willChange: "transform",
								opacity: "1",
								transform: "none",
							}}
						>
							<div className="ssr-variant hidden-bvam2o">
								<figure
									className="framer-18455q3"
									data-framer-name="image"
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
											width="531"
											height="405"
											sizes="(min-width: 1200px) max(min(100vw - 80px, 1824px) * 0.19, 1px), (max-width: 809.98px) max(min(100vw - 80px, 1824px) * 0.19, 1px), (min-width: 810px) and (max-width: 1199.98px) max(min(100vw - 50px, 1824px) * 0.19, 1px)"
											srcSet="/images/glaNEKMsPPERzntICb5XeNECfM-1.jpg 512w?scale-down-to=512&amp;width=531&amp;height=405 512w,images/glaNEKMsPPERzntICb5XeNECfM.jpg 531w?width=531&amp;height=405 531w"
											src="/images/glaNEKMsPPERzntICb5XeNECfM.jpg?width=531&amp;height=405"
											alt="Impact"
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
											data-framer-original-sizes="max(min(100vw - 80px, 1824px) * 0.19, 1px)"
										/>
									</div>
								</figure>
							</div>
							<div className="ssr-variant hidden-1cn8rbi hidden-1q641mp">
								<figure
									className="framer-18455q3"
									data-framer-name="image"
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
											width="531"
											height="405"
											sizes="(min-width: 1200px) max(min(100vw - 80px, 1824px) * 0.19, 1px), (max-width: 809.98px) max(min(100vw - 80px, 1824px) * 0.19, 1px), (min-width: 810px) and (max-width: 1199.98px) max(min(100vw - 50px, 1824px) * 0.19, 1px)"
											srcSet="/images/glaNEKMsPPERzntICb5XeNECfM-1.jpg 512w?scale-down-to=512&amp;width=531&amp;height=405 512w,images/glaNEKMsPPERzntICb5XeNECfM.jpg 531w?width=531&amp;height=405 531w"
											src="/images/glaNEKMsPPERzntICb5XeNECfM.jpg?width=531&amp;height=405"
											alt="Impact"
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
											data-framer-original-sizes="max(min(100vw - 50px, 1824px) * 0.19, 1px)"
										/>
									</div>
								</figure>
							</div>
						</div>
					</div>
				</div>
			</section>
			{isModalOpen && (
				<DonationModal open={isModalOpen} onClose={handleModalClose} />
			)}
		</>
	);
}
