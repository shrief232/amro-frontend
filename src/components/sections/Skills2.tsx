"use client";

import React from 'react';
import Link from 'next/link';
import Marquee from 'react-fast-marquee';
import { Box, Container, Typography, Stack, List, ListItem, styled } from '@mui/material';

const IconBox = styled(Box)(({ theme }) => ({
	width: 80,
	height: 80,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: 'rgba(255, 255, 255, 0.05)',
	border: '1px solid rgba(255, 255, 255, 0.1)',
	borderRadius: '12px',
	margin: '24px 10px 0 10px',
	transition: 'all 0.3s ease',
	'&:hover': {
		borderColor: '#A8FF53',
		transform: 'translateY(-5px)',
	},
	'& img': {
		width: '40px',
		height: '40px',
	}
}));

export default function Skills2() {
	const skillList = [
		{ label: "Front-End:", value: "HTML, CSS, JavaScript, React, Angular" },
		{ label: "Back-End:", value: "Node.js, Express, Python, Django" },
		{ label: "Databases:", value: "MySQL, PostgreSQL, MongoDB" },
		{ label: "Tools & Platforms:", value: "Git, Docker, AWS, Heroku" },
		{ label: "Others:", value: "RESTful APIs, GraphQL, Agile Methodologies" },
	];

	return (
		<Box component="section" id="skills" sx={{ pt: 5 }}>
			<Container maxWidth="lg">
				<Box
					sx={{
						bgcolor: '#121212', // لون bg-3 الافتراضي أو غيره حسب الـ theme
						borderRadius: 3,
						border: '1px solid rgba(255, 255, 255, 0.1)',
						position: 'relative',
						overflow: 'hidden',
					}}
				>
					<Box sx={{ position: 'relative', zIndex: 1, py: '60px' }}>
						{/* Header */}
						<Box textAlign="center" mb={8}>
							<Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
								<svg width={5} height={6} viewBox="0 0 5 6" fill="none">
									<circle cx="2.5" cy={3} r="2.5" fill="#A8FF53" />
								</svg>
								<Typography component="span" sx={{ color: '#A8FF53', textTransform: 'uppercase' }}>
									Projects
								</Typography>
							</Stack>
							<Typography variant="h3" sx={{ fontWeight: 'bold', mt: 1 }}>
								My Skills
							</Typography>
						</Box>

						<Container sx={{ mt: 8 }}>
							<Stack direction={{ xs: 'column', lg: 'row' }} spacing={4}>

								{/* Left Side: Marquee Icons */}
								<Stack sx={{ width: { xs: '100%', lg: '50%' } }} spacing={2}>
									<Box sx={{ width: '83.3%', mx: 'auto', overflow: 'hidden' }}>
										<Marquee direction="right" speed={40} gradient={false}>
											{['icon-4.svg', 'icon-1.svg', 'icon-2.svg', 'icon-3.svg', 'icon-6.svg'].map((icon, idx) => (
												<Link key={idx} href="#" style={{ textDecoration: 'none' }}>
													<IconBox>
														<img src={`assets/imgs/home-page-2/hero-1/${icon}`} alt="skill-icon" />
													</IconBox>
												</Link>
											))}
										</Marquee>
									</Box>
									<Box sx={{ width: '66.6%', mx: 'auto', overflow: 'hidden' }}>
										<Marquee direction="left" speed={35} gradient={false}>
											{['icon-7.svg', 'icon-8.svg', 'icon-9.svg', 'icon-5.svg'].map((icon, idx) => (
												<Link key={idx} href="#" passHref>
													<IconBox>
														<img src={`assets/imgs/home-page-2/hero-1/${icon}`} alt="skill-icon" />
													</IconBox>
												</Link>
											))}
										</Marquee>
									</Box>
								</Stack>

								{/* Right Side: Skills Text List */}
								<Stack
									sx={{
										width: { xs: '100%', lg: '50%' },
										borderLeft: { lg: '1px solid rgba(255, 255, 255, 0.1)' },
										pl: { lg: 4 },
										mt: { xs: 5, lg: 0 }
									}}
								>
									<List sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
										{skillList.map((item, index) => (
											<ListItem key={index} sx={{ px: 0, mb: 3, alignItems: 'flex-start' }}>
												<Stack direction={{ xs: 'column', md: 'row' }} spacing={1}>
													<Typography sx={{ color: 'text.primary', fontWeight: 'bold', minWidth: '140px' }}>
														{item.label}
													</Typography>
													<Typography sx={{ color: 'rgba(255,255,255,0.6)' }}>
														{item.value}
													</Typography>
												</Stack>
											</ListItem>
										))}
									</List>
								</Stack>

							</Stack>
						</Container>
					</Box>

					{/* Decoration Elements */}
					<Box className="decorate" sx={{ position: 'absolute', display: { xs: 'none', md: 'block' }, pointerEvents: 'none' }}>
						<Box className="rotateme">
							<Box className="circle-1-1" />
							<Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
								<svg style={{ marginBottom: '40px' }} width={9} height={9} viewBox="0 0 9 9" fill="none">
									<circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
								</svg>
							</Box>
							<Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
								<svg style={{ marginBottom: '24px' }} width={9} height={9} viewBox="0 0 9 9" fill="none">
									<circle cx="4.5" cy="4.5" r="4.5" fill="#636366" />
								</svg>
							</Box>
						</Box>
					</Box>
				</Box>
			</Container>
		</Box>
	);
}