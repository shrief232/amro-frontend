import { Box, Container, Typography, Paper, Stack } from "@mui/material"

export default function Education2() {
	return (
		<section id="resume">
			<Container sx={{ py: 6 }}>

				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						gap: 3,
						alignItems: "stretch"
					}}
				>

					{/* ================= EDUCATION ================= */}
					<Box sx={{ flex: "1 1 48%", minWidth: 320 }}>

						<Paper
							variant="outlined"
							sx={{
								borderRadius: 3,
								height: "100%",
								overflow: "hidden",
								position: "relative"
							}}
						>
							<Box className="box-linear-animation" sx={{ p: { md: 5, xs: 3 } }}>

								{/* HEADER */}
								<Stack direction="row" alignItems="center" spacing={1}>
									<svg xmlns="http://www.w3.org/2000/svg" width={24} height={28} viewBox="0 0 24 28">
										<path className="fill-primary-2" d="M0 22.667V4.66699C0 2.45786 1.79087 0.666992 4 0.666992H22.6667C23.4031 0.666992 24 1.26395 24 2.00033V26.0003C24 26.7367 23.4031 27.3337 22.6667 27.3337H4.66667C2.08933 27.3337 0 25.2443 0 22.667ZM21.3333 24.667V20.667H4.66667C3.56209 20.667 2.66667 21.5625 2.66667 22.667C2.66667 23.7715 3.56209 24.667 4.66667 24.667H21.3333ZM9.33333 3.33366H4C3.26363 3.33366 2.66667 3.93062 2.66667 4.66699V18.4494C3.27284 18.1614 3.95093 18.0003 4.66667 18.0003H21.3333V3.33366H18.6667V14.0003L14 11.3337L9.33333 14.0003V3.33366Z" fill="#62A92B" />
									</svg>

									<Typography variant="h5" fontWeight={700}>
										Education
									</Typography>
								</Stack>

								{/* LIST */}
								<Stack spacing={3} mt={4} position="relative">

									<EduItem year="2020–2024" title="MIT" desc="Bachelor’s Degree in Computer Science" />
									<EduItem year="2018–2019" title="Harvard University" desc="Certification in React and Redux, Node.js Developer Course" />
									<EduItem year="2015–2016" title="Stanford University" desc="Certification in Full Stack Web Development" />
									<EduItem year="2013–2015" title="University of Washington" desc="Certification in React and Redux, Node.js Developer Course" />

									{/* LINE */}
									<Box
										sx={{
											position: "absolute",
											left: 6,
											top: 0,
											bottom: 0,
											width: 1,
											borderLeft: "1px solid rgba(255,255,255,0.15)"
										}}
									/>
								</Stack>

							</Box>
						</Paper>
					</Box>

					{/* ================= RESEARCH ================= */}
					<Box sx={{ flex: "1 1 48%", minWidth: 320 }}>

						<Paper
							variant="outlined"
							sx={{
								borderRadius: 3,
								height: "100%",
								bgcolor: "background.paper",
								overflow: "hidden",
								position: "relative"
							}}
						>
							<Box sx={{ p: { md: 5, xs: 3 } }}>

								{/* HEADER */}
								<Stack direction="row" alignItems="center" spacing={1}>
									<svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32">
										<path className="fill-primary-2" d="M20 4H28V10.6667H25.3333V6.66667H20V4ZM12 4V6.66667H6.66667V10.6667H4V4H12ZM20 28V25.3333H25.3333V21.3333H28V28H20ZM12 28H4V21.3333H6.66667V25.3333H12V28ZM4 14.6667H28V17.3333H4V14.6667Z" fill="#A8FF53" />
									</svg>

									<Typography variant="h5" fontWeight={700}>
										Researched
									</Typography>
								</Stack>

								{/* LIST */}
								<Stack spacing={3} mt={4} position="relative">

									<EduItem year="2023–2024" title="Advanced Data Analytics with Big Data Tools" desc="Utilized big data tools for advanced analytics and insights." />
									<EduItem year="2021–2013" title="Cloud-Native Application Architectures" desc="Studied best practices for designing cloud-native applications." />
									<EduItem year="2019–2020" title="AI-Driven User Experience Personalization" desc="Leveraged AI to personalize user experiences based on behavior." />

									{/* LINE */}
									<Box
										sx={{
											position: "absolute",
											left: 6,
											top: 0,
											bottom: 0,
											width: 1,
											borderLeft: "1px solid rgba(255,255,255,0.15)"
										}}
									/>
								</Stack>

							</Box>
						</Paper>
					</Box>

				</Box>

			</Container>
		</section>
	)
}

/* ================= ITEM ================= */

function EduItem({ year, title, desc }: any) {
	return (
		<Stack direction="row" spacing={2} zIndex={1} position="relative">

			<Typography
				fontSize={14}
				color="text.secondary"
				minWidth={90}
				whiteSpace="nowrap"
			>
				{year}:
			</Typography>

			<Box>
				<Typography color="primary.main" fontWeight={600}>
					{title}
				</Typography>

				<Typography fontSize={14} color="text.primary">
					{desc}
				</Typography>
			</Box>

		</Stack>
	)
}
