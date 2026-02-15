"use client";
import { Fab, Zoom, useScrollTrigger } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function BackToTop() {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	});

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<Zoom in={trigger}>
			<Fab
				onClick={handleClick}
				size="medium"
				sx={{
					position: 'fixed',
					bottom: 30,
					right: 30,
					bgcolor: '#A8FF53',
					color: '#000',
					'&:hover': { bgcolor: '#fff' },
					zIndex: 1000
				}}
			>
				<KeyboardArrowUpIcon />
			</Fab>
		</Zoom>
	);
}