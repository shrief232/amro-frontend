"use client";

import React, { useContext } from "react";
import { IconButton, Box } from "@mui/material";
import { ColorModeContext } from "../../context/color-mode-context";
import Iconify from "./iconify";

const goldColor = "#a67c32";

export default function ThemeSwitch() {
	const { toggleColorMode, mode } = useContext(ColorModeContext);
	const isDark = mode === "dark";

	return (
		<Box
			className="theme-switch-wrapper"
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center"
			}}
		>
			<IconButton
				onClick={toggleColorMode}
				disableRipple
				sx={{
					width: 40,
					height: 40,
					borderRadius: "10px",
					border: "1px solid",
					borderColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)",
					transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
					backgroundColor: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
					"&:hover": {
						borderColor: goldColor,
						backgroundColor: isDark ? `${goldColor}1A` : `${goldColor}0D`,
						transform: "scale(1.05)",
						boxShadow: `0 4px 12px ${goldColor}33`,
					}
				}}
			>
				{isDark ? (
					<Iconify
						icon="solar:sun-bold-duotone"
						width={22}
						sx={{ color: goldColor }}
					/>
				) : (
					<Iconify
						icon="solar:moon-bold-duotone"
						width={22}
						sx={{ color: goldColor }}
					/>
				)}
			</IconButton>
		</Box>
	);
}