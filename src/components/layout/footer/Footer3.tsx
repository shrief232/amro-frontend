"use client";

import React from "react";
import Link from "next/link";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function Footer3() {
	return (
		<Box component="footer" sx={{ py: 4 }}>
			<Container maxWidth="lg">
				<Stack
					direction={{ xs: "column", lg: "row" }}
					justifyContent="space-between"
					alignItems="center"
					spacing={{ xs: 4, lg: 0 }}
					sx={{ borderTop: "1px solid rgba(255,255,255,0.1)", pt: 4 }}
				>
					{/* Brand */}
					<Stack direction="row" alignItems="center" component={Link} href="/" sx={{ textDecoration: "none", color: "inherit" }}>
						<Typography variant="h4" fontWeight={700} sx={{ mr: 1 }}>Meisa</Typography>
						<Box component="img" src="/assets/imgs/home-page-3/template/favicon.svg" sx={{ width: 28 }} />
					</Stack>

					{/* Navigation */}
					<Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={3}>
						{["About", "Resume", "Services", "Portfolio", "Blog", "Contact"].map((item) => (
							<Link key={item} href={`#${item.toLowerCase()}`} style={{ textDecoration: "none", color: "inherit", fontSize: "14px", fontWeight: 500 }}>
								{item}
							</Link>
						))}
					</Stack>

					{/* Social */}
					<Stack direction="row" spacing={2}>
						{["facebook-circle", "twitter-x", "linkedin", "github"].map((icon) => (
							<Link key={icon} href="#" style={{ color: "inherit" }}>
								<i className={`ri-${icon}-fill fs-20`} />
							</Link>
						))}
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
}