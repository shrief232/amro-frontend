'use client';
import Link from 'next/link'
import Marquee from "react-fast-marquee"
import { Box, Container, Typography, Paper } from "@mui/material"

export default function Coporation2() {
	return (
		<section className="section-coporation">
			<Container sx={{ pt: 5 }}>

				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						gap: 3,
						alignItems: "stretch"
					}}
				>

					{/* LEFT SIDE */}
					<Box sx={{ flex: "1 1 65%", minWidth: 320 }}>
						<Paper
							variant="outlined"
							sx={{
								borderRadius: 3,
								overflow: "hidden",
								position: "relative"
							}}
						>

							<Box className="box-linear-animation" sx={{ p: { lg: 6, md: 4, xs: 2 } }}>

								{/* HEADER */}
								<Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
									<svg className="text-primary-2 me-2" xmlns="http://www.w3.org/2000/svg" width={5} height={6}>
										<circle cx="2.5" cy="3" r="2.5" fill="#A8FF53" />
									</svg>

									<Typography className="text-linear-4">
										Cooperation
									</Typography>
								</Box>

								{/* TITLE */}
								<Typography variant="h4" fontWeight={600} mb={2}>
									More than +168 <span className="text-300">companies <br /></span>
									trusted <span className="text-300">worldwide_</span>
								</Typography>

								{/* MARQUEE BOX */}
								<Box sx={{ my: 4, border: "1px solid #2c2c2c", borderRadius: 2, p: 2 }}>

									{/* LEFT */}
									<Marquee className="carouselTicker carouselTicker-left position-relative z-1">
										<ul className="carouselTicker__list m-0">
											{/* 🔥 كل عناصر SVG عندك هنا زي ما هي بدون أي تعديل */}
										</ul>
									</Marquee>

									{/* RIGHT */}
									<Marquee direction="right" className="carouselTicker carouselTicker-right position-relative z-1">
										<ul className="carouselTicker__list m-0">
											{/* 🔥 كل عناصر SVG عندك هنا زي ما هي بدون أي تعديل */}
										</ul>
									</Marquee>

								</Box>

							</Box>
						</Paper>
					</Box>

					{/* RIGHT SIDE */}
					<Box
						sx={{
							flex: "1 1 30%",
							minWidth: 260,
							display: "flex",
							alignItems: "center"
						}}
					>
						<Box>
							<Typography variant="h6" fontWeight={600} mb={2}>
								We collaborate with brands that shape the future_
							</Typography>

							<Typography color="text.secondary" mb={3}>
								From early-stage startups to global enterprises, our partners trust us to deliver scalable, impactful digital solutions.
							</Typography>

							<Link href="/contact" style={{ textDecoration: "none" }}>
								<Box
									sx={{
										display: "inline-block",
										px: 3,
										py: 1.2,
										borderRadius: 2,
										border: "1px solid #A8FF53",
										color: "#A8FF53",
										fontWeight: 600,
										transition: "0.2s",
										"&:hover": {
											background: "#A8FF53",
											color: "#000"
										}
									}}
								>
									Become a Partner →
								</Box>
							</Link>
						</Box>
					</Box>

				</Box>

			</Container>
		</section>
	)
}
