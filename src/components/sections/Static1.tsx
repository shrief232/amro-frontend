"use client";

import React from 'react';
import CountUp from 'react-countup';
import { Box, Container, Stack, Typography, styled } from '@mui/material';

// تحويل الـ Counter Item لمكون فرعي عشان الكود ميبقاش طويل ومنظم
interface CounterProps {
	end: number;
	labelTop: string;
	labelBottom: string;
}

const CounterItem = ({ end, labelTop, labelBottom }: CounterProps) => (
	<Box sx={{ py: 2 }}>
		<Stack direction="row" alignItems="center" justifyContent="center">
			{/* الرقم */}
			<Typography
				variant="h2" // بديل لـ ds-1
				sx={{
					fontWeight: 700,
					color: 'text.primary', // لون الـ text-dark
					display: 'flex',
					alignItems: 'center',
					"&::before": {
						content: '"+"',
						color: 'primary.main', // لون الـ text-primary-1
						fontWeight: 500,
						mr: 0.5
					}
				}}
			>
				<CountUp enableScrollSpy={true} end={end} />
			</Typography>

			{/* النص الجانبي */}
			<Stack sx={{ ml: 1.5, textAlign: 'left' }}>
				<Typography
					variant="body1"
					sx={{ color: 'rgba(255, 255, 255, 0.5)', lineHeight: 1.2 }}
				>
					{labelTop}
				</Typography>
				<Typography
					variant="body1"
					sx={{ fontWeight: 'bold', lineHeight: 1.2 }}
				>
					{labelBottom}
				</Typography>
			</Stack>
		</Stack>
	</Box>
);

export default function Static1() {
	const stats = [
		{ end: 12, labelTop: "Year of", labelBottom: "Experience" },
		{ end: 250, labelTop: "Projects", labelBottom: "Completed" },
		{ end: 680, labelTop: "Satisfied", labelBottom: "Happy Clients" },
		{ end: 18, labelTop: "Awards", labelBottom: "Won Received" },
	];

	return (
		<Box
			component="section"
			sx={{
				position: 'relative',
				overflow: 'hidden',
				zIndex: 0,
				py: 8,
				bgcolor: '#0A0A0A' // بديل لـ bg-900
			}}
		>
			<Container maxWidth="lg">
				{/* Stack هنا شايل الـ Row بالكامل وبيتحكم في التوزيع */}
				<Stack
					direction={{ xs: 'column', md: 'row' }}
					justifyContent="space-between"
					alignItems="center"
					spacing={{ xs: 4, md: 2 }}
					sx={{ flexWrap: 'wrap' }}
				>
					{stats.map((stat, index) => (
						<Box
							key={index}
							sx={{
								width: { xs: '100%', md: 'auto' },
								minWidth: { md: '200px' }
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