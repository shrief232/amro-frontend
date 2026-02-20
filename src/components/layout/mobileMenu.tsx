"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drawer, Box, Stack, Typography, IconButton, Divider, Button } from "@mui/material";
import { motion } from "framer-motion";
import Iconify from "../../components/elements/iconify";

const goldColor = "#a67c32";

const menuContainerVariants = {
	open: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
	closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
};

const menuItemVariants = {
	open: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 120 } },
	closed: { y: 20, opacity: 0 }
};

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	const pathname = usePathname();
	const isInternalPage = pathname !== "/";

	const menuItems = [
		{ label: "About", href: "/", icon: "solar:home-1-linear" },
		{ label: "Resume", href: isInternalPage ? "/#resume" : "#resume", icon: "solar:notes-linear" },
		{ label: "Services", href: isInternalPage ? "/#services" : "#services", icon: "solar:widget-linear" },
		{ label: "Portfolio", href: isInternalPage ? "/#portfolio" : "#portfolio", icon: "solar:case-minimalistic-linear" },
		{ label: "Contact", href: isInternalPage ? "/#contact" : "#contact", icon: "solar:phone-calling-linear" },
	];

	const handleLinkClick = (e: React.MouseEvent, href: string) => {
		handleMobileMenu();

		if (href.startsWith("#") && pathname === "/") {
			e.preventDefault();
			const targetId = href.replace("#", "");
			const element = document.getElementById(targetId);
			if (element) {
				element.scrollIntoView({ behavior: "smooth", block: "start" });
			}
		}
	};

	return (
		<Drawer
			anchor="right"
			open={isMobileMenu}
			onClose={handleMobileMenu}
			PaperProps={{
				sx: {
					width: { xs: "85%", sm: 340 },
					backgroundColor: "rgba(10, 10, 10, 0.95)",
					backdropFilter: "blur(20px)",
					color: "#fff",
					backgroundImage: "none",
					borderLeft: `1px solid ${goldColor}33`,
					p: 0,
				},
			}}
		>
			<Box
				component={motion.div}
				variants={menuContainerVariants}
				initial="closed"
				animate={isMobileMenu ? "open" : "closed"}
				display="flex"
				flexDirection="column"
				height="100%"
				sx={{ position: 'relative' }}
			>
				{/* Background Glow */}
				<Box sx={{
					position: 'absolute',
					bottom: -50,
					left: -50,
					width: 200,
					height: 200,
					backgroundColor: goldColor,
					filter: 'blur(100px)',
					opacity: 0.1,
					zIndex: 0
				}} />

				{/* HEADER */}
				<Stack direction="row" alignItems="center" justifyContent="space-between" p={3} sx={{ zIndex: 1 }} component={motion.div} variants={menuItemVariants}>
					<Box component="img" src="/logo/amr-logo.png" sx={{ width: 80, filter: 'brightness(1.2)' }} />
					<IconButton
						onClick={handleMobileMenu}
						sx={{
							backgroundColor: "rgba(255,255,255,0.05)",
							color: "white",
							"&:hover": {
								backgroundColor: `${goldColor}33`,
								color: goldColor
							}
						}}
					>
						<Iconify icon="solar:close-square-linear" width={24} />
					</IconButton>
				</Stack>

				<Divider sx={{ borderColor: "rgba(255,255,255,0.05)", mx: 3 }} />

				{/* MENU LINKS */}
				<Box flex={1} overflow="auto" px={2} py={4} sx={{ zIndex: 1 }}>
					<Stack spacing={1.5}>
						{menuItems.map((item) => {
							const isActive = item.href === "/" ? pathname === "/" : pathname === item.href;

							return (
								<Box key={item.label} variants={menuItemVariants} component={motion.div} whileTap={{ scale: 0.97 }}>
									<Button
										component={Link}
										href={item.href}
										onClick={(e) => handleLinkClick(e, item.href)}
										fullWidth
										startIcon={<Iconify icon={item.icon} width={22} />}
										sx={{
											justifyContent: "flex-start",
											textTransform: "none",
											fontSize: "1rem",
											fontWeight: isActive ? 700 : 400,
											color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
											backgroundColor: isActive ? `${goldColor}26` : "transparent",
											borderLeft: isActive ? `4px solid ${goldColor}` : "4px solid transparent",
											borderRadius: "12px",
											px: 2.5,
											py: 1.5,
											transition: "0.3s all ease",
											"&:hover": {
												backgroundColor: `${goldColor}14`,
												color: "#fff",
												paddingLeft: "25px"
											},
										}}
									>
										{item.label}
									</Button>
								</Box>
							);
						})}
					</Stack>
				</Box>

				{/* FOOTER CTA */}
				<Box component={motion.div} p={3} variants={menuItemVariants} sx={{ zIndex: 1 }}>
					<Stack spacing={2}>
						<Button
							component={Link}
							href={isInternalPage ? "/#contact" : "#contact"}
							onClick={(e) => handleLinkClick(e, isInternalPage ? "/#contact" : "#contact")}
							variant="contained"
							fullWidth
							size="large"
							startIcon={<Iconify icon="solar:magic-stick-3-linear" />}
							sx={{
								backgroundColor: goldColor,
								borderRadius: "14px",
								py: 1.8,
								fontWeight: 700,
								boxShadow: `0 10px 20px ${goldColor}33`,
								"&:hover": {
									backgroundColor: "#8B6D40",
									transform: "translateY(-2px)"
								}
							}}
						>
							Hire Me Now
						</Button>

						<Typography align="center" variant="caption" sx={{ color: "rgba(255,255,255,0.3)", mt: 2 }}>
							Available for new opportunities
						</Typography>
					</Stack>
				</Box>
			</Box>
		</Drawer>
	);
}