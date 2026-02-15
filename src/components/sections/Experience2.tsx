import Link from "next/link"
import {
	Box,
	Container,
	Typography,
	Paper,
	Stack,
	Chip
} from "@mui/material"

const companies = [
	{
		name: "Google",
		years: "2018 - Present",
		logo: "/assets/imgs/home-page-2/experience/google.svg",
	},
	{
		name: "Twitter (X)",
		years: "2012 - 2015",
		logo: "/assets/imgs/home-page-2/experience/twitter.svg",
	},
	{
		name: "Amazon",
		years: "2018 - Present",
		logo: "/assets/imgs/home-page-2/experience/amazon.svg",
	},
	{
		name: "PayPal",
		years: "2010 - 2012",
		logo: "/assets/imgs/home-page-2/experience/payPal.svg",
	},
]

export default function Experience2() {
	return (
		<section id="portfolio">
			<Container sx={{ py: 6 }}>

				<Paper
					variant="outlined"
					sx={{
						borderRadius: 3,
						position: "relative",
						overflow: "hidden"
					}}
				>

					<Box className="box-linear-animation" sx={{ position: "relative", zIndex: 1 }}>

						<Box sx={{ p: { lg: 8, md: 6, xs: 3 } }}>

							{/* HEADER */}
							<Stack direction="row" alignItems="center" spacing={1}>
								<svg xmlns="http://www.w3.org/2000/svg" width={5} height={6}>
									<circle cx="2.5" cy="3" r="2.5" fill="#A8FF53" />
								</svg>

								<Typography className="text-linear-4">
									Experience
								</Typography>
							</Stack>

							<Typography variant="h4" fontWeight={800} mt={1}>
								+12{" "}
								<Typography component="span" color="text.secondary">
									years of{" "}
								</Typography>
								passion{" "}
								<Typography component="span" color="text.secondary">
									for <br /> programming techniques
								</Typography>
							</Typography>

							{/* CONTENT WRAP */}
							<Box
								sx={{
									display: "flex",
									flexWrap: "wrap",
									gap: 4,
									mt: 5,
								}}
							>

								{/* LEFT — COMPANIES */}
								<Box sx={{ flex: "1 1 320px" }}>
									<Stack spacing={2}>
										{companies.map((item, i) => (
											<Box
												key={i}
												component={Link}
												href="#"
												sx={{
													display: "flex",
													alignItems: "center",
													gap: 2,
													p: 2,
													border: "1px solid rgba(255,255,255,0.15)",
													borderRadius: 2,
													textDecoration: "none",
													color: "inherit",
													transition: "0.25s",
													"&:hover": {
														borderColor: "primary.main",
														bgcolor: "rgba(255,255,255,0.04)",
													}
												}}
											>
												<img src={item.logo} width={40} alt={item.name} />

												<Box>
													<Typography fontWeight={600}>
														{item.name}
													</Typography>
													<Typography fontSize={13} color="text.secondary">
														{item.years}
													</Typography>
												</Box>
											</Box>
										))}
									</Stack>
								</Box>

								{/* RIGHT — DETAILS */}
								<Box sx={{ flex: "2 1 420px" }}>

									<Typography className="text-linear-4" fontWeight={600}>
										Senior Software Engineer
									</Typography>

									<Stack component="ul" spacing={2} mt={3} pl={2}>
										<li>
											<Typography>
												Led development of scalable web applications,{" "}
												<span style={{ color: "#A8FF53" }}>improving performance</span> and user experience for millions of users.
											</Typography>
										</li>

										<li>
											<Typography>
												Implemented machine learning algorithms to enhance search functionality.
											</Typography>
										</li>

										<li>
											<Typography>
												Collaborated with cross-functional teams to integrate new features seamlessly.
											</Typography>
										</li>
									</Stack>

									{/* TAGS */}
									<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mt: 4 }}>
										{["Python", "TensorFlow", "Angular", "Kubernetes", "GCP"].map((tag) => (
											<Chip
												key={tag}
												label={tag}
												variant="outlined"
												sx={{
													borderRadius: 1,
													color: "text.secondary",
													fontWeight: 500,
												}}
											/>
										))}
									</Box>

								</Box>
							</Box>

						</Box>

						{/* BACKGROUND IMAGE */}
						<Box
							component="img"
							src="/assets/imgs/home-page-2/services/bg.png"
							alt=""
							sx={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: "100%",
								objectFit: "cover",
								opacity: 0.15,
								zIndex: 0
							}}
						/>

					</Box>
				</Paper>

			</Container>
		</section>
	)
}
