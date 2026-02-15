"use client"

import Link from "next/link"
import { Box, Container, Typography, Paper } from "@mui/material"

export default function Service2() {
	return (
		<Box id="services" pt={5}>

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

					<Box position="relative" zIndex={1} p={{ xs: 2, md: 4, lg: 6 }} className="box-linear-animation">

						{/* HEADER */}
						<Box textAlign="center">

							<Box display="flex" justifyContent="center" alignItems="center" gap={1}>
								<svg xmlns="http://www.w3.org/2000/svg" width={5} height={6}>
									<circle cx="2.5" cy="3" r="2.5" fill="#A8FF53" />
								</svg>

								<Typography className="text-linear-4">
									Cooperation
								</Typography>
							</Box>

							<Typography variant="h3" mt={1}>
								Designing solutions{" "}
								<span className="text-300">
									customized <br />
									to meet your requirements
								</span>
							</Typography>

						</Box>

						{/* SERVICES */}
						<Box
							mt={5}
							display="flex"
							flexWrap="wrap"
							gap={3}
						>

							{services.map((service, i) => (
								<Box key={i} flex="1 1 300px" minWidth={280}>
									<ServiceCard {...service} />
								</Box>
							))}

						</Box>

						{/* FOOTER */}
						<Box textAlign="center" pt={7}>
							<Typography className="text-300">
								Excited to take on <span className="text-dark">new projects</span> and collaborate.
								<br />
								Let's chat about your ideas.{" "}
								<Link href="#" className="text-primary-2">
									Reach out!
								</Link>
							</Typography>
						</Box>

						{/* BACKGROUND */}
						<Box
							component="img"
							src="assets/imgs/home-page-2/services/bg.png"
							alt=""
							sx={{
								position: "absolute",
								top: 0,
								left: 0,
								zIndex: 0,
								width: "100%",
								opacity: 0.5,
							}}
						/>

					</Box>

				</Paper>

			</Container>

		</Box>
	)
}

function ServiceCard({ icon, title, desc }: any) {
	return (
		<Box
			className="hover-up"
			p={3}
			borderRadius={2}
			height="100%"
			sx={{
				border: "1px solid rgba(255,255,255,0.08)",
				transition: "0.3s ease",
				"&:hover": {
					transform: "translateY(-6px)",
					borderColor: "#A8FF53",
				},
			}}
		>

			<Box mb={2}>{icon}</Box>

			<Typography fontWeight={600} mb={2}>
				{title}
			</Typography>

			<Typography className="text-300" fontSize={14}>
				{desc}
			</Typography>

		</Box>
	)
}

const services = [
	{
		title: "Web & App Development",
		desc: <>Crafting user-friendly interfaces using <span className="text-secondary-2">HTML</span>, <span className="text-secondary-2">CSS</span>, <span className="text-secondary-2">JavaScript</span>, React & Angular.</>,
		icon: iconBox,
	},
	{
		title: "Database Management",
		desc: <>Managing SQL & NoSQL databases like <span className="text-secondary-2">MySQL</span>, PostgreSQL & MongoDB.</>,
		icon: iconDb,
	},
	{
		title: "API Development",
		desc: <>Building scalable <span className="text-secondary-2">RESTful APIs</span> for front-end & back-end.</>,
		icon: iconApi,
	},
	{
		title: "Performance Optimization",
		desc: <>Speed optimization using <span className="text-secondary-2">Node.js</span> & Express.</>,
		icon: iconSpeed,
	},
	{
		title: "E-commerce Solutions",
		desc: <>Secure scalable <span className="text-secondary-2">e-commerce platforms</span>.</>,
		icon: iconShop,
	},
	{
		title: "Integrating AI",
		desc: <>Enhance products with <span className="text-secondary-2">AI automation</span>.</>,
		icon: iconAi,
	},
]

/* ICONS */
const iconBox = <svg width={24} height={24}><rect width="24" height="24" fill="#1F1F24" /></svg>
const iconDb = <svg width={24} height={24}><rect width="24" height="24" fill="#1F1F24" /></svg>
const iconApi = <svg width={24} height={24}><rect width="24" height="24" fill="#1F1F24" /></svg>
const iconSpeed = <svg width={24} height={24}><rect width="24" height="24" fill="#1F1F24" /></svg>
const iconShop = <svg width={24} height={24}><rect width="24" height="24" fill="#1F1F24" /></svg>
const iconAi = <svg width={24} height={24}><rect width="24" height="24" fill="#1F1F24" /></svg>
