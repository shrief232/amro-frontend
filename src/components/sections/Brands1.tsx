"use client";

import React from 'react';
import Marquee from 'react-fast-marquee';
import { Box, Container, Typography, Stack, styled } from '@mui/material';

// تنسيق اللوجو الواحد داخل الماركي
const BrandLogo = styled(Box)(({ theme }) => ({
	padding: '0 40px', // المسافة بين اللوجوهات
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	'& img': {
		maxHeight: '40px', // توحيد الارتفاع لكل اللوجوهات
		width: 'auto',
		filter: 'grayscale(1) brightness(2)', // بيخلي اللوجوهات متناسقة مع التصميم الغامق
		opacity: 0.6,
		transition: 'all 0.3s ease',
		'&:hover': {
			filter: 'grayscale(0) brightness(1)',
			opacity: 1,
		}
	}
}));

export default function Brands1() {
	// مصفوفة اللوجوهات لسهولة التعديل
	const logos = Array.from({ length: 10 }, (_, i) => `/assets/imgs/brands/brands-1/logo-${i + 1}.png`);

	return (
		<Box
			component="section"
			sx={{
				py: { xs: 8, md: 12 }, // section-padding
				bgcolor: 'transparent'
			}}
		>
			<Container maxWidth="lg">
				<Box textAlign="center" mb={6}>
					<Typography
						variant="h3"
						sx={{
							fontWeight: 'bold',
							mb: 2,
							fontSize: { xs: '1.75rem', md: '2.5rem' }
						}}
					>
						Trusted by industry leaders
					</Typography>
					<Typography
						variant="body1"
						sx={{
							color: 'rgba(255, 255, 255, 0.5)', // text-300
							maxWidth: '700px',
							mx: 'auto',
							lineHeight: 1.6
						}}
					>
						I have collaborated with many large corporations, companies, and agencies around
						<br />
						the world in many fields of design and consulting
					</Typography>
				</Box>
			</Container>

			{/* Marquee Section */}
			<Box sx={{ mt: 5, position: 'relative', zIndex: 1 }}>
				<Marquee
					direction="right"
					gradient={false}
					speed={50}
				>
					<Stack direction="row" alignItems="center">
						{logos.map((src, index) => (
							<BrandLogo key={index}>
								<img src={src} alt={`brand-logo-${index + 1}`} />
							</BrandLogo>
						))}
					</Stack>
				</Marquee>
			</Box>
		</Box>
	);
}