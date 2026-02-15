"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Box, Container, Stack, Typography, Button, styled } from "@mui/material";
import Isotope from "isotope-layout";

const ProjectCard = styled(Box)(({ theme }) => ({
	backgroundColor: "#fff",
	borderRadius: "24px",
	padding: "24px",
	transition: "transform 0.4s ease",
	"&:hover": {
		transform: "translateY(-10px)",
		"& .zoom-img": { transform: "scale(1.05)" },
		"& .arrow-icon": { backgroundColor: "#A8FF53", color: "#000" }
	}
}));

export default function PortfolioFilter() {
	const isotope = useRef<Isotope | null>(null);
	const [filterKey, setFilterKey] = useState<string>("*");

	useEffect(() => {
		const timeout = setTimeout(() => {
			isotope.current = new Isotope(".masonry-active", {
				itemSelector: ".filter-item",
				percentPosition: true,
				transitionDuration: '0.6s',
				masonry: {
					columnWidth: ".filter-item",
				},
			});
		}, 500);

		return () => {
			clearTimeout(timeout);
			isotope.current?.destroy();
		}
	}, []);

	useEffect(() => {
		if (isotope.current) {
			isotope.current.arrange({ filter: filterKey === "*" ? "*" : `.${filterKey}` });
		}
	}, [filterKey]);

	const handleFilterKeyChange = (key: string) => () => {
		setFilterKey(key);
	};

	const filters = [
		{ label: "All Projects", val: "*" },
		{ label: "Branding", val: "brand" },
		{ label: "Web Design", val: "webdesign" },
		{ label: "UI/UX", val: "ui" },
		{ label: "App Dev", val: "app" },
	];

	return (
		<Container sx={{ py: 10 }}>
			{/* Filter Buttons using Stack */}
			<Stack
				direction="row"
				spacing={2}
				flexWrap="wrap"
				sx={{ mb: 6 }}
			>
				{filters.map((f) => (
					<Button
						key={f.val}
						onClick={handleFilterKeyChange(f.val)}
						sx={{
							borderRadius: "50px",
							px: 3,
							py: 1,
							fontWeight: 600,
							textTransform: "uppercase",
							fontSize: "13px",
							border: "1px solid",
							borderColor: filterKey === f.val ? "#A8FF53" : "rgba(255,255,255,0.1)",
							bgcolor: filterKey === f.val ? "#A8FF53" : "transparent",
							color: filterKey === f.val ? "#000" : "#fff",
							"&:hover": {
								bgcolor: filterKey === f.val ? "#A8FF53" : "rgba(255,255,255,0.05)",
								borderColor: "#A8FF53"
							}
						}}
					>
						{f.label}
					</Button>
				))}
			</Stack>

			{/* Masonry Container using Box (Not Grid) */}
			<Box className="masonry-active" sx={{ mx: -2 }}>

				{/* Project Item 1 */}
				<Box className="filter-item brand ui app" sx={{ width: { xs: "100%", md: "50%" }, p: 2 }}>
					<ProjectCard>
						<Box sx={{ overflow: "hidden", borderRadius: "16px" }}>
							<Box
								component="img"
								src="/assets/imgs/projects/projects-1/img-1.png"
								className="zoom-img"
								sx={{ width: "100%", transition: "0.6s ease", display: "block" }}
							/>
						</Box>
						<Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 3 }}>
							<Box component={Link} href="/work-single" sx={{ textDecoration: "none", color: "#000" }}>
								<Typography variant="h5" fontWeight={700}>Photo App UI/UX</Typography>
								<Typography variant="body2" color="text.secondary">Bokeh network</Typography>
							</Box>
							<IconButton className="arrow-icon" sx={{ border: "1px solid #eee", transition: "0.3s" }}>
								<i className="ri-arrow-right-up-line" />
							</IconButton>
						</Stack>
					</ProjectCard>
				</Box>

				{/* Project Item 2 */}
				<Box className="filter-item webdesign brand" sx={{ width: { xs: "100%", md: "50%" }, p: 2 }}>
					<ProjectCard>
						<Box sx={{ overflow: "hidden", borderRadius: "16px" }}>
							<Box component="img" src="/assets/imgs/projects/projects-1/img-2.png" className="zoom-img" sx={{ width: "100%", transition: "0.6s ease", display: "block" }} />
						</Box>
						<Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 3 }}>
							<Box component={Link} href="/work-single" sx={{ textDecoration: "none", color: "#000" }}>
								<Typography variant="h5" fontWeight={700}>Mobile App Design</Typography>
								<Typography variant="body2" color="text.secondary">Tech Innovators Inc.</Typography>
							</Box>
							<IconButton className="arrow-icon" sx={{ border: "1px solid #eee", transition: "0.3s" }}>
								<i className="ri-arrow-right-up-line" />
							</IconButton>
						</Stack>
					</ProjectCard>
				</Box>

				{/* Project Item 3 */}
				<Box className="filter-item ui app" sx={{ width: { xs: "100%", md: "50%" }, p: 2 }}>
					<ProjectCard>
						<Box sx={{ overflow: "hidden", borderRadius: "16px" }}>
							<Box component="img" src="/assets/imgs/projects/projects-1/img-3.png" className="zoom-img" sx={{ width: "100%", transition: "0.6s ease", display: "block" }} />
						</Box>
						<Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 3 }}>
							<Box component={Link} href="/work-single" sx={{ textDecoration: "none", color: "#000" }}>
								<Typography variant="h5" fontWeight={700}>Interaction Design</Typography>
								<Typography variant="body2" color="text.secondary">HealthTrack Solutions</Typography>
							</Box>
							<IconButton className="arrow-icon" sx={{ border: "1px solid #eee", transition: "0.3s" }}>
								<i className="ri-arrow-right-up-line" />
							</IconButton>
						</Stack>
					</ProjectCard>
				</Box>

			</Box>
		</Container>
	);
}

import { IconButton } from "@mui/material";