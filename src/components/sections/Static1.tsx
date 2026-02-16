"use client";

import React from 'react';
import CountUp from 'react-countup';
import { Box, Container, Stack, Typography, styled, useTheme } from '@mui/material';

const goldColor = "#a67c32";

interface CounterProps {
	end: number;
	labelTop: string;
	labelBottom: string;
}

const CounterItem = ({ end, labelTop, labelBottom }: CounterProps) => {
	const theme = useTheme();
	const isDark = theme.palette.mode === "dark";

	return (
		<Box sx={{ py: 2 }}>
			<Stack direction="row" alignItems="center" justifyContent="center">
				<Typography
					variant="h2"
					sx={{
						fontWeight: 700,
						color: isDark ? '#fff' : '#111',
						display: 'flex',
						alignItems: 'center',
						fontSize: { xs: '2.5rem', md: '3rem' },
						"&::before": {
							content: '"+"',
							color: goldColor,
							fontWeight: 500,
							mr: 0.5,
							fontSize: { xs: '2rem', md: '2.5rem' }
						}
					}}
				>
					<CountUp enableScrollSpy={true} end={end} duration={2.5} />
				</Typography>

				<Stack sx={{ ml: 1.5, textAlign: 'left' }}>
					<Typography
						variant="body1"
						sx={{
							color: isDark ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)',
							lineHeight: 1.2,
							fontSize: { xs: '0.85rem', md: '1rem' }
						}}
					>
						{labelTop}
					</Typography>
					<Typography
						variant="body1"
						sx={{
							fontWeight: 'bold',
							lineHeight: 1.2,
							color: isDark ? '#fff' : '#111',
							fontSize: { xs: '0.85rem', md: '1rem' }
						}}
					>
						{labelBottom}
					</Typography>
				</Stack>
			</Stack>
		</Box>
	);
};

export default function Static1() {
	const theme = useTheme();
	const isDark = theme.palette.mode === "dark";

	const stats = [
		{ end: 12, labelTop: "Years of", labelBottom: "Experience" },
		{ end: 180, labelTop: "Projects", labelBottom: "Completed" },
		{ end: 95, labelTop: "Satisfied", labelBottom: "Clients" },
		{ end: 8, labelTop: "Awards", labelBottom: "Won" },
	];

	return (
		<Box
			component="section"
			sx={{
				position: 'relative',
				overflow: 'hidden',
				zIndex: 0,
				py: { xs: 6, md: 8 },
				bgcolor: isDark ? '#0A0A0A' : '#f5f5f5',
				transition: 'background-color 0.3s ease',
			}}
		>
			<Container maxWidth="lg">
				<Stack
					direction={{ xs: 'column', sm: 'row' }}
					justifyContent="space-between"
					alignItems="center"
					spacing={{ xs: 2, sm: 4, md: 2 }}
					sx={{
						flexWrap: 'wrap',
						gap: { xs: 1, md: 0 }
					}}
				>
					{stats.map((stat, index) => (
						<Box
							key={index}
							sx={{
								width: { xs: '100%', sm: '50%', md: 'auto' },
								minWidth: { md: '180px', lg: '200px' },
								textAlign: 'center',
								borderRight: {
									md: index < stats.length - 1 ? `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}` : 'none'
								},
								borderBottom: {
									xs: index < stats.length - 1 ? `1px solid ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}` : 'none',
									md: 'none'
								},
								pb: { xs: index < stats.length - 1 ? 2 : 0, md: 0 },
								mb: { xs: index < stats.length - 1 ? 2 : 0, md: 0 },
							}}
						>
							<CounterItem
								end={stat.end}
								labelTop={stat.labelTop}
								labelBottom={stat.labelBottom}
							/>
						</Box>
					))}
				</Stack>
			</Container>
		</Box>
	);
}