"use client";
import { Fab, useScrollTrigger, useMediaQuery, useTheme } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useEffect, useState } from 'react';

const goldColor = "#a67c32";

export default function BackToTop() {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
	const [show, setShow] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShow(window.scrollY > (isMobile ? 200 : 100));
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Check initial scroll

		return () => window.removeEventListener('scroll', handleScroll);
	}, [isMobile]);

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	if (!show) return null;

	return (
		<Fab
			onClick={handleClick}
			size={isMobile ? "small" : "medium"}
			sx={{
				position: 'fixed',
				bottom: { xs: 20, sm: 30 },
				right: { xs: 20, sm: 30 },
				bgcolor: goldColor,
				color: '#fff',
				boxShadow: `0 4px 12px ${goldColor}4D`,
				'&:hover': {
					bgcolor: '#8B6D40',
					boxShadow: `0 6px 16px ${goldColor}80`,
				},
				zIndex: 9999,
				animation: 'fadeIn 0.3s ease',
				'@keyframes fadeIn': {
					'0%': { opacity: 0, transform: 'scale(0.8)' },
					'100%': { opacity: 1, transform: 'scale(1)' },
				},
			}}
		>
			<KeyboardArrowUpIcon fontSize={isMobile ? "small" : "medium"} />
		</Fab>
	);
}