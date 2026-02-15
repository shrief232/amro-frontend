"use client"

import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import {
	Box,
	Container,
	Typography,
	Paper
} from "@mui/material"

const swiperOptions = {
	modules: [Autoplay, Pagination, Navigation],
	slidesPerView: 1,
	slidesPerGroup: 1,
	centeredSlides: false,
	loop: true,
	autoplay: { delay: 4000 },
	pagination: { el: ".swiper-pagination" },
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
}

export default function Projects2() {
	return (
		<Box className="section-projects-2" pt={5}>

			<Container>
				<Paper
					elevation={0}
					sx={{
						borderRadius: 3,
						border: "1px solid rgba(255,255,255,0.12)",
						position: "relative",
						overflow: "hidden",
						bgcolor: "transparent",
					}}
				>

					<Box className="box-linear-animation" position="relative" zIndex={1}>

						<Box p={{ xs: 3, md: 6, lg: 8 }} position="relative" zIndex={1}>

							<Box display="flex" alignItems="center" gap={1}>
								<svg width={5} height={6}>
									<circle cx="2.5" cy="3" r="2.5" fill="#A8FF53" />
								</svg>
								<Typography className="text-linear-4">
									Projects
								</Typography>
							</Box>

							<Typography variant="h3" mt={1}>
								My Recent Works
							</Typography>

							<Box position="relative">

								<Swiper {...swiperOptions} className="slider-two pb-3">

									<SwiperSlide>
										<ProjectSlide />
									</SwiperSlide>

									<SwiperSlide>
										<ProjectSlide />
									</SwiperSlide>

								</Swiper>

								<Box
									display={{ xs: "none", md: "flex" }}
									gap={2}
									position="absolute"
									bottom={0}
									right={0}
									pb={7}
									pr={5}
								>

									<Box className="swiper-button-prev shadow">
										<svg width={24} height={24}>
											<path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z" fill="white" />
										</svg>
									</Box>

									<Box className="swiper-button-next shadow">
										<svg width={24} height={24}>
											<path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" fill="#A8FF53" />
										</svg>
									</Box>

								</Box>

							</Box>

						</Box>

						<Box
							component="img"
							src="assets/imgs/home-page-2/projects/bg.png"
							alt=""
							sx={{
								position: "absolute",
								top: 0,
								left: 0,
								zIndex: 0,
							}}
						/>

					</Box>

				</Paper>
			</Container>

		</Box>
	)
}

function ProjectSlide() {
	return (
		<Box mt={5} p={{ xs: 3, md: 4, lg: 5 }} border="1px solid rgba(255,255,255,0.12)" className="bg-3">

			<Box display="flex" flexWrap="wrap" gap={4}>

				<Box flex="1 1 380px">
					<Box
						component="img"
						src="assets/imgs/home-page-2/projects/img-1.png"
						alt=""
						sx={{ width: "100%", display: "block" }}
					/>
				</Box>

				<Box flex="1 1 460px">

					<Typography className="text-linear-4" variant="h4">
						Integrate AI into the <br />
						ecommerce system
					</Typography>

					<Typography mt={2}>
						Developed an online learning platform with course management, quizzes, and progress tracking.
					</Typography>

					<Box component="ul" mt={4} p={0} sx={{ listStyle: "none" }}>

						<Typography component="li" className="text-secondary-2 mb-3 border-bottom pb-3">
							Project Info
						</Typography>

						{[
							["Client", "Conceptual JSC"],
							["Completion Time", "6 months"],
							["Technologies", "Node.js, React, MongoDB, Stripe"],
						].map(([label, value]) => (
							<Box key={label} component="li" mb={2} borderBottom="1px solid rgba(255,255,255,0.12)" pb={2}>
								<Box display="flex" justifyContent="space-between">
									<Typography>{label}</Typography>
									<Typography className="text-300">{value}</Typography>
								</Box>
							</Box>
						))}

					</Box>

					<Box display="flex" flexWrap="wrap" gap={3} mt={4}>

						<Link href="#" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
							Live Demo
						</Link>

						<Link href="#" className="text-300 border-bottom border-1 px-2 pb-2 link-hover">
							View on Github
						</Link>

					</Box>

				</Box>

			</Box>

		</Box>
	)
}
