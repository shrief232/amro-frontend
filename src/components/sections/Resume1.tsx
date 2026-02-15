"use client";

import React from "react";
import Link from "next/link";
import { Box, Container, Stack, Typography, Button, styled } from "@mui/material";

const StyledResumeCard = styled(Box)(({ theme }) => ({
	padding: "32px",
	backgroundColor: "rgba(255, 255, 255, 0.03)",
	borderRadius: "16px",
	height: "100%",
	border: "1px solid rgba(255, 255, 255, 0.05)",
	[theme.breakpoints.up("lg")]: {
		padding: "48px",
	},
}));

const ResumeItem = ({ date, title, subtitle, score }: { date: string, title: string, subtitle: string, score?: string }) => (
	<Box sx={{ mt: 5, px: 4, py: 3, bgcolor: "rgba(255, 255, 255, 0.02)", borderRadius: "12px" }}>
		<Stack direction="row" alignItems="flex-end" justifyContent="space-between">
			<Box>
				<Typography sx={{ fontWeight: 800, color: "#A8FF53", mb: 1 }}>{date}</Typography>
				<Typography variant="h6" fontWeight="bold">{title}</Typography>
				<Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)" }}>{subtitle}</Typography>
			</Box>
			{score && (
				<Typography variant="h4" sx={{ color: "#A8FF53", fontWeight: "bold" }}>
					{score.split('/')[0]}<Typography component="span" sx={{ fontSize: "1.2rem" }}>/{score.split('/')[1]}</Typography>
				</Typography>
			)}
		</Stack>
	</Box>
);

export default function Resume1() {
	return (
		<Box
			component="section"
			id="resume"
			sx={{
				position: "relative",
				pt: 18, // pt-150
				overflow: "hidden",
				backgroundImage: 'url(/assets/imgs/projects/projects-1/background.png)',
				backgroundSize: 'cover',
				backgroundPosition: 'center'
			}}
		>
			<Container maxWidth="lg">
				{/* Header Section */}
				<Stack direction={{ xs: "column", lg: "row" }} alignItems="flex-end" justifyContent="space-between" spacing={2}>
					<Box sx={{ maxWidth: "700px" }}>
						<Typography variant="h3" sx={{ color: "#A8FF53", fontWeight: "bold", mb: 2 }}>
							My Resume
						</Typography>
						<Typography variant="h6" sx={{ color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>
							I believe that working hard and trying to learn every day will<br />
							make me improve in satisfying my customers.
						</Typography>
					</Box>
					<Button
						component={Link}
						href="/#contact"
						variant="contained"
						sx={{
							background: "linear-gradient(45deg, #A8FF53 30%, #2AF598 90%)",
							color: "#000",
							fontWeight: "bold",
							px: 4,
							py: 1.5,
							borderRadius: "50px",
							textTransform: "none",
							fontSize: "1rem",
							"& i": { ml: 1 }
						}}
					>
						Get in touch <i className="ri-arrow-right-up-line" />
					</Button>
				</Stack>

				{/* Resume Cards Content */}
				<Stack direction={{ xs: "column", lg: "row" }} spacing={4} sx={{ mt: 6 }}>

					{/* Education Side */}
					<Box sx={{ flex: 1 }}>
						<StyledResumeCard>
							<Stack direction="row" alignItems="flex-end" spacing={2} sx={{ mb: 4 }}>
								<Box component="img" src="/assets/imgs/resume/resume-1/icon-1.svg" sx={{ borderBottom: "3px solid #A8FF53", pb: 1 }} />
								<Typography variant="h4" fontWeight="bold" sx={{ borderBottom: "1px solid rgba(255,255,255,0.1)", pb: 1, width: "100%" }}>
									Education
								</Typography>
							</Stack>
							<ResumeItem date="2018-2019" title="Certification in UX Design" subtitle="University of Stanford" score="4.9/5" />
							<ResumeItem date="2017-2018" title="Certification in Web Dev" subtitle="University of Stanford" score="5.0/5" />
							<ResumeItem date="2014-2016" title="Advanced UX/UI Bootcamp" subtitle="Design Academy" score="4.9/5" />
							<ResumeItem date="2012-2013" title="Certification in Graphic Design" subtitle="Coursera" score="4.8/5" />
						</StyledResumeCard>
					</Box>

					{/* Experience Side */}
					<Box sx={{ flex: 1 }}>
						<StyledResumeCard sx={{ height: "100%" }}>
							<Stack direction="row" alignItems="flex-end" spacing={2} sx={{ mb: 4 }}>
								<Box component="img" src="/assets/imgs/resume/resume-1/icon-2.svg" sx={{ borderBottom: "3px solid #A8FF53", pb: 1 }} />
								<Typography variant="h4" fontWeight="bold" sx={{ borderBottom: "1px solid rgba(255,255,255,0.1)", pb: 1, width: "100%" }}>
									Experience
								</Typography>
							</Stack>
							<ResumeItem date="2019 - Present" title="Senior UI/UX Designer" subtitle="Leader in Creative team" />
							<ResumeItem date="2016 - 2019" title="UI/UX Designer at BOS Agency" subtitle="Tech Startup" />
							<ResumeItem date="2014 - 2016" title="Freelance UI/UX Designer" subtitle="Self-Employed" />
							<ResumeItem date="2012 - 2014" title="Junior UI Designer" subtitle="Web Solutions team" />
						</StyledResumeCard>
					</Box>
				</Stack>
			</Container>

			{/* Scrolling Text Background */}
			<Box sx={{ position: "relative", py: 20, overflow: "hidden" }}>
				<Typography
					variant="h1"
					sx={{
						fontSize: { xs: "60px", lg: "150px" },
						fontWeight: "bold",
						textTransform: "uppercase",
						WebkitTextStroke: "1px rgba(255,255,255,0.2)",
						color: "transparent",
						whiteSpace: "nowrap",
						textAlign: "center",
						width: "100%"
					}}
				>
					Branding . Marketing . User Interface
				</Typography>
			</Box>
		</Box>
	);
}