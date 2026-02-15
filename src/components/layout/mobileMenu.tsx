"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Drawer, Box, Stack, Typography, IconButton, Divider, Button } from "@mui/material";
import { motion } from "framer-motion";
import Iconify from "../../components/elements/iconify";

const menuContainerVariants = {
	open: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
	closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
};

const menuItemVariants = {
	open: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 120 } },
	closed: { y: 20, opacity: 0 }
};

const menuItems = [
	{ label: "Home", href: "/", icon: "solar:home-2-linear" },
	{ label: "Services", href: "/services", icon: "solar:widget-linear" },
	{ label: "Portfolio", href: "/work", icon: "solar:case-minimalistic-linear" },
	{ label: "Pricing", href: "/pricing", icon: "solar:wad-of-money-linear" },
	{ label: "Blog", href: "/blog-list", icon: "solar:notes-linear" },
	{ label: "Contact", href: "/#contact", icon: "solar:phone-calling-linear" },
];

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	const pathname = usePathname();

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
					borderLeft: "1px solid rgba(139, 92, 246, 0.2)",
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
				<Box sx={{ position: 'absolute', bottom: -50, left: -50, width: 200, height: 200, backgroundColor: '#8B5CF6', filter: 'blur(100px)', opacity: 0.1, zIndex: 0 }} />

				{/* HEADER */}
				<Stack direction="row" alignItems="center" justifyContent="space-between" p={3} sx={{ zIndex: 1 }} component={motion.div} variants={menuItemVariants}>
					<Box component="img" src="/logo/amr-logo.png" sx={{ width: 80, filter: 'brightness(1.2)' }} />
					<IconButton
						onClick={handleMobileMenu}
						sx={{
							backgroundColor: "rgba(255,255,255,0.05)",
							color: "white",
							"&:hover": { backgroundColor: "rgba(139, 92, 246, 0.2)", color: "#8B5CF6" }
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
							const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

							return (
								<Box key={item.href} variants={menuItemVariants} component={motion.div} whileTap={{ scale: 0.97 }}>
									<Button
										component={Link}
										href={item.href}
										onClick={handleMobileMenu}
										fullWidth
										startIcon={<Iconify icon={item.icon} width={22} />}
										sx={{
											justifyContent: "flex-start",
											textTransform: "none",
											fontSize: "1rem",
											fontWeight: isActive ? 700 : 400,
											color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
											backgroundColor: isActive ? "rgba(139, 92, 246, 0.15)" : "transparent",
											borderLeft: isActive ? "4px solid #8B5CF6" : "4px solid transparent",
											borderRadius: "12px",
											px: 2.5,
											py: 1.5,
											transition: "0.3s all ease",
											"&:hover": {
												backgroundColor: "rgba(139, 92, 246, 0.08)",
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
							href="/#contact"
							onClick={handleMobileMenu}
							variant="contained"
							fullWidth
							size="large"
							startIcon={<Iconify icon="solar:magic-stick-3-linear" />}
							sx={{
								backgroundColor: "#8B5CF6",
								borderRadius: "14px",
								py: 1.8,
								fontWeight: 700,
								boxShadow: "0 10px 20px rgba(139, 92, 246, 0.2)",
								"&:hover": { backgroundColor: "#7c3aed", transform: "translateY(-2px)" }
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