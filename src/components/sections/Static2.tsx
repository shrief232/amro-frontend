"use client";

import React from 'react';
import CountUp from 'react-countup';
import { Box, Container, Stack, Typography } from '@mui/material';

// تعريف الـ Props لضمان عدم وجود أخطاء TypeScript
interface StatItemProps {
	iconClass: string;
	endNumber: number;
	label: string;
}

const StatItem = ({ iconClass, endNumber, label }: StatItemProps) => (
	<Stack
		alignItems={{ xs: 'center', lg: 'flex-start' }}
		textAlign={{ xs: 'center', lg: 'left' }}
		sx={{ position: 'relative', zIndex: 2 }}
	>
		{/* الأيقونة */}
		<Box
			component="i"
			className={iconClass}
			sx={{ fontSize: '2rem', color: '#A8FF53', mb: 1 }}
		/>

		{/* الرقم */}
		<Typography
			variant="h3"
			component="h2"
			sx={{
				fontWeight: 500,
				color: 'text.primary',
				fontSize: '50px',
				display: 'flex',
				alignItems: 'center'
			}}
		>
			<CountUp enableScrollSpy={true} end={endNumber} />
			<Box component="span" sx={{ fontWeight: 300, ml: 0.5 }}>+</Box>
		</Typography>

		{/* النص */}
		<Typography
			variant="body1"
			sx={{ color: 'text.primary', fontSize: '1rem', mt: 0.5 }}
		>
			{label}
		</Typography>
	</Stack>
);

export default function Static2() {
	const statsData: StatItemProps[] = [
		{ iconClass: "ri-shape-line", endNumber: 12, label: "Year Experience" },
		{ iconClass: "ri-computer-line", endNumber: 250, label: "Projects Completed" },
		{ iconClass: "ri-service-line", endNumber: 680, label: "Satisfied Clients" },
		{ iconClass: "ri-award-line", endNumber: 18, label: "Awards Winner" },
	];

	return (
		<Box component="section" sx={{ position: 'relative', zIndex: 0 }}>
			<Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
				<Box
					sx={{
						bgcolor: 'background.paper', // بديل bg-3
						py: '60px',
						px: { xs: 2, md: 4 },
						border: '1px solid',
						borderColor: 'divider',
						borderRadius: 3,
						position: 'relative',
						overflow: 'hidden',
					}}
				>
					{/* محتوى الستاتس */}
					<Stack
						direction={{ xs: 'column', md: 'row' }}
						justifyContent="space-around"
						alignItems="center"
						spacing={{ xs: 6, md: 4 }}
						sx={{ position: 'relative', zIndex: 2 }}
					>
						{statsData.map((stat, index) => (
							<StatItem
								key={index}
								iconClass={stat.iconClass}
								endNumber={stat.endNumber}
								label={stat.label}
							/>
						))}
					</Stack>

					{/* صورة الخلفية مع الـ Filter */}
					<Box
						sx={{
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%',
							height: '100%',
							zIndex: 1,
							backgroundImage: 'url(/assets/imgs/home-page-2/static/bg.png)',
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							filter: 'invert(1)',
							opacity: 0.1,
							pointerEvents: 'none',
						}}
					/>
				</Box>
			</Container>
		</Box>
	);
}