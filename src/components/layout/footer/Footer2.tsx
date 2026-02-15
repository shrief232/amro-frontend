"use client";

import React from "react";
import { Box, Container, Stack, Typography, IconButton } from "@mui/material";
import Link from "next/link";

export default function Footer2() {
	return (
		<Box component="footer" sx={{ py: 4 }}>
			<Container>
				<Stack
					alignItems="center"
					spacing={3}
					sx={{ borderTop: "1px solid rgba(255,255,255,0.1)", pt: 4 }}
				>
					{/* Logo */}
					<Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "inherit" }}>
						<Box component="img" src="/assets/imgs/home-page-2/template/favicon.svg" sx={{ width: 30 }} />
						<Typography variant="h5" fontWeight={700} sx={{ ml: 1.5 }}>James.dev</Typography>
					</Link>

					{/* Social */}
					<Stack direction="row" spacing={2}>
						{["facebook-circle", "twitter-x", "linkedin", "github"].map((icon) => (
							<IconButton
								key={icon}
								href={`http://${icon.split('-')[0]}.com`}
								sx={{ color: "text.primary", "&:hover": { color: "#A8FF53" } }}
							>
								<i className={`ri-${icon}-fill fs-18`} />
							</IconButton>
						))}
					</Stack>

					{/* Links */}
					<Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={4}>
						{["About", "Resume", "Services", "Portfolio", "Blog", "Contact"].map((item) => (
							<Link key={item} href={`#${item.toLowerCase()}`} style={{ textDecoration: "none", color: "inherit", fontSize: "14px" }}>
								{item}
							</Link>
						))}
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
}