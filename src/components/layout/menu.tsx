"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Stack, Button, styled } from "@mui/material";

const menuItems = [
	{ label: "Home", href: "/" },
	{ label: "Services", href: "/services" },
	{ label: "Portfolio", href: "/work" },
	{ label: "Pricing", href: "/pricing" },
	{ label: "Blog", href: "/blog-list" },
	{ label: "Contact", href: "/#contact" },
];

export default function Menu() {
	const pathname = usePathname();

	return (
		<Stack
			component="ul"
			direction="row"
			spacing={1}
			alignItems="center"
			sx={{ listStyle: "none", p: 0, m: 0 }}
		>
			{menuItems.map((item) => {
				const isActive =
					item.href === "/"
						? pathname === "/"
						: pathname.startsWith(item.href);

				return (
					<Box component="li" key={item.href}>
						<Button
							component={Link}
							href={item.href}
							disableRipple
							sx={{
								fontWeight: 600,
								fontSize: "15px",
								textTransform: "none",
								color: isActive ? "#A8FF53" : "text.primary",
								opacity: isActive ? 1 : 0.8,
								position: "relative",
								minWidth: "auto",
								px: 2,
								py: 1,
								background: "transparent",
								transition: "all 0.3s ease",
								"&:hover": {
									opacity: 1,
									background: "transparent",
									color: "#A8FF53",
								},
								"&::after": {
									content: '""',
									position: "absolute",
									left: "50%",
									bottom: 0,
									width: isActive ? "80%" : "0%",
									height: "2px",
									bgcolor: "#A8FF53",
									transform: "translateX(-50%)",
									transition: "0.3s cubic-bezier(0.4, 0, 0.2, 1)",
								},
								"&:hover::after": {
									width: "80%",
								}
							}}
						>
							{item.label}
						</Button>
					</Box>
				);
			})}
		</Stack>
	);
}

import { Box } from "@mui/material";