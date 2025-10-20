"use client";

import {
	motion,
	useMotionValue,
	useTransform,
	animate,
	useInView,
} from "motion/react";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

// Counter component with motion animation
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
	const count = useMotionValue(0);
	const rounded = useTransform(count, Math.round);
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			const controls = animate(count, value, {
				duration: 2,
				ease: "easeOut",
			});
			return controls.stop;
		}
	}, [isInView, count, value]);

	return (
		// @ts-ignore
		<div
			ref={ref}
			style={{
				display: "inline-flex",
			}}
		>
			<motion.h4
				className="framer-text framer-styles-preset-13lkd54 inline!"
				data-styles-preset="SE0dvQEiW"
			>
				{rounded}
			</motion.h4>
			{suffix && (
				// @ts-ignore
				<h4
					className="framer-text framer-styles-preset-13lkd54 inline!"
					data-styles-preset="SE0dvQEiW"
					style={{ marginTop: 0 }}
				>
					{suffix}
				</h4>
			)}
		</div>
	);
}

export function TopSection() {
	const { t } = useTranslation("about");
	return (
		<>
			<section className="framer-pkc2rb" data-framer-name="Top Section">
				<div className="framer-1id3nwb" data-framer-name="Container">
					<div className="framer-4k1bws" data-framer-name="Content">
						<div
							className="framer-1cvm0qn"
							data-framer-name="Title"
						>
							<div className="ssr-variant hidden-1q641mp">
								<div
									className="framer-6rfb8c"
									data-framer-name="Creating a Better Tomorrow"
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
									>
										{t("top_section.title")}
									</h1>
								</div>
							</div>
							<div className="ssr-variant hidden-1cn8rbi hidden-bvam2o">
								<div
									className="framer-6rfb8c"
									data-framer-name="Creating a Better Tomorrow"
									data-framer-component-type="RichTextContainer"
									style={{
										opacity: "1",
										transform: "none",
									}}
								>
									<h1
										className="framer-text framer-styles-preset-172snon"
										data-styles-preset="ayQ9EeMdI"
									>
										{t("top_section.title")}
									</h1>
								</div>
							</div>
						</div>
						<div className="ssr-variant hidden-1q641mp">
							<div
								className="framer-1y0lwri"
								data-framer-name="Content Wrap"
								style={{
									willChange: "transform",
									opacity: "1",
									transform: "none",
								}}
							>
								<div
									className="framer-j9u48t"
									data-framer-name="Content"
								>
									<div
										className="framer-1ycavar"
										data-framer-name="Title Content"
									>
										<div
											className="framer-gm0j0x"
											data-framer-name="Our History &amp; Goal."
											data-framer-component-type="RichTextContainer"
											style={{
												transform: "none",
											}}
										>
											<h3
												className="framer-text framer-styles-preset-ehrduw"
												data-styles-preset="Pm0hsra8F"
												style={{
													color: "var(--token-f1712222-c010-4358-b082-9f76dbcbd998, rgb(113, 34, 11))",
												}}
											>
												{t("top_section.history_title")}
											</h3>
										</div>
										<div
											className="framer-1djxq72"
											data-framer-name="Charis began with a mission to uplift communities and support those in need. Over the years, we've expanded our reach, providing food, education, and emergency relief. Our goal is to create lasting change by empowering individuals and building a better future htmlFor all."
											data-framer-component-type="RichTextContainer"
											style={{
												transform: "none",
											}}
										>
											<p
												className="framer-text framer-styles-preset-18rceng"
												data-styles-preset="efNb1Kccw"
											>
												{t("top_section.history_p1")}
												<br className="framer-text" />
												<br className="framer-text" />
												{t("top_section.history_p2")}
												<br className="framer-text" />
												<br className="framer-text" />
												{t("top_section.history_p3")}
											</p>
										</div>
									</div>
									<div
										className="framer-1jjm38b"
										data-framer-name="Counter"
									>
										<div className="ssr-variant hidden-bvam2o">
											<div className="framer-pnytwb-container">
												<div
													className="framer-BruZL framer-jRQOc framer-i6lblt framer-v-1nxrvpo"
													data-framer-name="24+"
													style={{
														maxWidth: "100%",
														width: "100%",
													}}
												>
													<div className="framer-ixvh3b-container">
														<Counter
															value={77}
															suffix="+"
														/>
													</div>
													<div
														className="framer-1je5i4p"
														data-framer-name="Lives Touched"
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
																"top_section.stats.years"
															)}
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="ssr-variant hidden-1cn8rbi">
											<div className="framer-pnytwb-container">
												<div
													className="framer-BruZL framer-jRQOc framer-i6lblt framer-v-vdbkt5"
													data-framer-name=" 24+ Mobile"
													style={{
														maxWidth: "100%",
														width: "100%",
													}}
												>
													<div className="framer-ixvh3b-container">
														<Counter
															value={77}
															suffix="+"
														/>
													</div>
													<div
														className="framer-1je5i4p"
														data-framer-name="Lives Touched"
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
																"top_section.stats.years"
															)}
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="ssr-variant hidden-bvam2o">
											<div className="framer-1odkg23-container">
												<div
													className="framer-BruZL framer-jRQOc framer-i6lblt framer-v-1uhwwgr"
													data-framer-name="6M+"
													style={{
														maxWidth: "100%",
														width: "100%",
													}}
												>
													<div className="framer-ixvh3b-container">
														<Counter
															value={500}
															suffix="+"
														/>
													</div>
													<div
														className="framer-1je5i4p"
														data-framer-name="Lives Touched"
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
																"top_section.stats.actions"
															)}
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="ssr-variant hidden-1cn8rbi">
											<div className="framer-1odkg23-container">
												<div
													className="framer-BruZL framer-jRQOc framer-i6lblt framer-v-1r84zdg"
													data-framer-name="6M+ Mobile"
													style={{
														maxWidth: "100%",
														width: "100%",
													}}
												>
													<div className="framer-ixvh3b-container">
														<Counter
															value={500}
															suffix="+"
														/>
													</div>
													<div
														className="framer-1je5i4p"
														data-framer-name="Lives Touched"
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
																"top_section.stats.actions"
															)}
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="ssr-variant hidden-bvam2o">
											<div className="framer-13n3o54-container">
												<div
													className="framer-BruZL framer-jRQOc framer-i6lblt framer-v-1vufdrr"
													data-framer-name="7B"
													style={{
														maxWidth: "100%",
														width: "100%",
													}}
												>
													<div className="framer-ixvh3b-container">
														<div
															className="framer-YkOfG framer-RcNjK framer-oGK70 framer-1bucv7k framer-v-1jcq5ok"
															data-framer-name="7B"
															style={{
																height: "100%",
															}}
														>
															<div
																className="framer-r7mdg"
																data-framer-name="Number"
															>
																<div
																	className="framer-180beg"
																	data-framer-name="0"
																	data-framer-component-type="RichTextContainer"
																	style={{
																		transform:
																			"none",
																	}}
																>
																	<h4
																		className="framer-text framer-styles-preset-13lkd54"
																		data-styles-preset="SE0dvQEiW"
																	>
																		{t(
																			"top_section.stats.lives"
																		)}
																	</h4>
																</div>
															</div>
															<div
																className="framer-1cwhc7l"
																data-framer-name="Suffix"
																data-framer-component-type="RichTextContainer"
																style={{
																	transform:
																		"none",
																}}
															>
																<h4
																	className="framer-text framer-styles-preset-13lkd54"
																	data-styles-preset="SE0dvQEiW"
																>
																	<br className="framer-text trailing-break" />
																</h4>
															</div>
														</div>
													</div>
													<div
														className="framer-1je5i4p"
														data-framer-name="Lives Touched"
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
																"top_section.stats.lives_label"
															)}
														</p>
													</div>
												</div>
											</div>
										</div>
										<div className="ssr-variant hidden-1cn8rbi">
											<div className="framer-13n3o54-container">
												<div
													className="framer-BruZL framer-jRQOc framer-i6lblt framer-v-1tlgcws"
													data-framer-name="7B Mobile"
													style={{
														maxWidth: "100%",
														width: "100%",
													}}
												>
													<div className="framer-ixvh3b-container">
														<div
															className="framer-YkOfG framer-RcNjK framer-oGK70 framer-1bucv7k framer-v-1jcq5ok"
															data-framer-name="7B"
															style={{
																height: "100%",
															}}
														>
															<div
																className="framer-r7mdg"
																data-framer-name="Number"
															>
																<div
																	className="framer-180beg"
																	data-framer-name="0"
																	data-framer-component-type="RichTextContainer"
																	style={{
																		transform:
																			"none",
																	}}
																>
																	<h4
																		className="framer-text framer-styles-preset-13lkd54"
																		data-styles-preset="SE0dvQEiW"
																	>
																		{t(
																			"top_section.stats.lives"
																		)}
																	</h4>
																</div>
															</div>
															<div
																className="framer-1cwhc7l"
																data-framer-name="Suffix"
																data-framer-component-type="RichTextContainer"
																style={{
																	transform:
																		"none",
																}}
															>
																<h4
																	className="framer-text framer-styles-preset-13lkd54"
																	data-styles-preset="SE0dvQEiW"
																>
																	<br className="framer-text trailing-break" />
																</h4>
															</div>
														</div>
													</div>
													<div
														className="framer-1je5i4p"
														data-framer-name="Lives Touched"
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
																"top_section.stats.lives_label"
															)}
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="ssr-variant hidden-1cn8rbi hidden-bvam2o">
							<div
								className="framer-1y0lwri"
								data-framer-name="Content Wrap"
								style={{
									opacity: "1",
									transform: "none",
								}}
							>
								<div
									className="framer-j9u48t"
									data-framer-name="Content"
								>
									<div
										className="framer-1ycavar"
										data-framer-name="Title Content"
									>
										<div
											className="framer-gm0j0x"
											data-framer-name="Our History &amp; Goal."
											data-framer-component-type="RichTextContainer"
											style={{
												transform: "none",
											}}
										>
											<h3
												className="framer-text framer-styles-preset-ehrduw"
												data-styles-preset="Pm0hsra8F"
												style={{
													color: "var(--token-f1712222-c010-4358-b082-9f76dbcbd998, rgb(113, 34, 11))",
												}}
											>
												{t("top_section.history_title")}
											</h3>
										</div>
										<div
											className="framer-1djxq72"
											data-framer-name="Charis began with a mission to uplift communities and support those in need. Over the years, we've expanded our reach, providing food, education, and emergency relief. Our goal is to create lasting change by empowering individuals and building a better future htmlFor all."
											data-framer-component-type="RichTextContainer"
											style={{
												transform: "none",
											}}
										>
											<p
												className="framer-text framer-styles-preset-18rceng"
												data-styles-preset="efNb1Kccw"
											>
												{t("top_section.history_p1")}
												<br className="framer-text" />
												<br className="framer-text" />
												{t("top_section.history_p2")}
												<br className="framer-text" />
												<br className="framer-text" />
												{t("top_section.history_p3")}
											</p>
										</div>
									</div>
									<div
										className="framer-1jjm38b"
										data-framer-name="Counter"
									>
										<div className="framer-pnytwb-container">
											<div
												className="framer-BruZL framer-jRQOc framer-i6lblt framer-v-vdbkt5"
												data-framer-name=" 24+ Mobile"
												style={{
													maxWidth: "100%",
													width: "100%",
												}}
											>
												<div className="framer-ixvh3b-container">
													<Counter
														value={77}
														suffix="+"
													/>
												</div>
												<div
													className="framer-1je5i4p"
													data-framer-name="Lives Touched"
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
															"top_section.stats.years"
														)}
													</p>
												</div>
											</div>
										</div>
										<div className="framer-1odkg23-container">
											<div
												className="framer-BruZL framer-jRQOc framer-i6lblt framer-v-1r84zdg"
												data-framer-name="6M+ Mobile"
												style={{
													maxWidth: "100%",
													width: "100%",
												}}
											>
												<div className="framer-ixvh3b-container">
													<Counter
														value={500}
														suffix="+"
													/>
												</div>
												<div
													className="framer-1je5i4p"
													data-framer-name="Lives Touched"
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
															"top_section.stats.actions"
														)}
													</p>
												</div>
											</div>
										</div>
										<div className="framer-13n3o54-container">
											<div
												className="framer-BruZL framer-jRQOc framer-i6lblt framer-v-1tlgcws"
												data-framer-name="7B Mobile"
												style={{
													maxWidth: "100%",
													width: "100%",
												}}
											>
												<div className="framer-ixvh3b-container">
													<div
														className="framer-YkOfG framer-RcNjK framer-oGK70 framer-1bucv7k framer-v-1jcq5ok"
														data-framer-name="7B"
														style={{
															height: "100%",
														}}
													>
														<div
															className="framer-r7mdg"
															data-framer-name="Number"
														>
															<div
																className="framer-180beg"
																data-framer-name="0"
																data-framer-component-type="RichTextContainer"
																style={{
																	transform:
																		"none",
																}}
															>
																<h4
																	className="framer-text framer-styles-preset-13lkd54"
																	data-styles-preset="SE0dvQEiW"
																>
																	{t(
																		"top_section.stats.lives"
																	)}
																</h4>
															</div>
														</div>
														<div
															className="framer-1cwhc7l"
															data-framer-name="Suffix"
															data-framer-component-type="RichTextContainer"
															style={{
																transform:
																	"none",
															}}
														>
															<h4
																className="framer-text framer-styles-preset-13lkd54"
																data-styles-preset="SE0dvQEiW"
															>
																<br className="framer-text trailing-break" />
															</h4>
														</div>
													</div>
												</div>
												<div
													className="framer-1je5i4p"
													data-framer-name="Lives Touched"
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
															"top_section.stats.lives_label"
														)}
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="ssr-variant hidden-1q641mp">
						<div
							className="framer-8y4sww"
							data-framer-name="Figure"
							style={{
								willChange: "transform",
								opacity: "1",
								transform: "none",
							}}
						>
							<div className="ssr-variant hidden-bvam2o">
								<figure
									className="framer-nechj3"
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
											width="2160"
											height="975"
											sizes="(min-width: 1200px) max(min(100vw - 80px, 1440px), 1px), (min-width: 810px) and (max-width: 1199.98px) max(min(100vw - 50px, 1440px), 1px)"
											srcSet="/images/pX3kTbX8pevhtrhh1vpdu5492s0-2.jpg 512w?scale-down-to=512&amp;width=2160&amp;height=975 512w,images/pX3kTbX8pevhtrhh1vpdu5492s0-3.jpg 1024w?scale-down-to=1024&amp;width=2160&amp;height=975 1024w,images/pX3kTbX8pevhtrhh1vpdu5492s0-4.jpg 2048w?scale-down-to=2048&amp;width=2160&amp;height=975 2048w,images/pX3kTbX8pevhtrhh1vpdu5492s0.jpg 2160w?width=2160&amp;height=975 2160w"
											src="/images/pX3kTbX8pevhtrhh1vpdu5492s0.jpg?width=2160&amp;height=975"
											alt="about-image"
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
											data-framer-original-sizes="max(min(100vw - 80px, 1440px), 1px)"
										/>
									</div>
								</figure>
							</div>
							<div className="ssr-variant hidden-1cn8rbi">
								<figure
									className="framer-nechj3"
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
											width="2160"
											height="975"
											sizes="(min-width: 1200px) max(min(100vw - 80px, 1440px), 1px), (min-width: 810px) and (max-width: 1199.98px) max(min(100vw - 50px, 1440px), 1px)"
											srcSet="/images/pX3kTbX8pevhtrhh1vpdu5492s0-2.jpg 512w?scale-down-to=512&amp;width=2160&amp;height=975 512w,images/pX3kTbX8pevhtrhh1vpdu5492s0-3.jpg 1024w?scale-down-to=1024&amp;width=2160&amp;height=975 1024w,images/pX3kTbX8pevhtrhh1vpdu5492s0-4.jpg 2048w?scale-down-to=2048&amp;width=2160&amp;height=975 2048w,images/pX3kTbX8pevhtrhh1vpdu5492s0.jpg 2160w?width=2160&amp;height=975 2160w"
											src="/images/pX3kTbX8pevhtrhh1vpdu5492s0.jpg?width=2160&amp;height=975"
											alt="about-image"
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
						</div>
					</div>
					<div className="ssr-variant hidden-1cn8rbi hidden-bvam2o">
						<div
							className="framer-8y4sww"
							data-framer-name="Figure"
							style={{
								opacity: "1",
								transform: "none",
							}}
						>
							<figure
								className="framer-nechj3"
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
										width="2160"
										height="975"
										sizes="(max-width: 809.98px) max(min(100vw - 50px, 1440px), 1px)"
										srcSet="/images/pX3kTbX8pevhtrhh1vpdu5492s0-5.jpg 512w?scale-down-to=512&amp;lossless=1&amp;width=2160&amp;height=975 512w,images/pX3kTbX8pevhtrhh1vpdu5492s0-6.jpg 1024w?scale-down-to=1024&amp;lossless=1&amp;width=2160&amp;height=975 1024w,images/pX3kTbX8pevhtrhh1vpdu5492s0-7.jpg 2048w?scale-down-to=2048&amp;lossless=1&amp;width=2160&amp;height=975 2048w,images/pX3kTbX8pevhtrhh1vpdu5492s0-1.jpg 2160w?lossless=1&amp;width=2160&amp;height=975 2160w"
										src="/images/pX3kTbX8pevhtrhh1vpdu5492s0-1.jpg?lossless=1&amp;width=2160&amp;height=975"
										alt="about-image"
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
										data-framer-original-sizes="max(min(100vw - 50px, 1440px), 1px)"
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
