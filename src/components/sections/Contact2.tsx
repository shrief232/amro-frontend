"use client"

import {
	Box,
	Container,
	Typography,
	Stack,
	TextField,
	Button,
	Card
} from "@mui/material"

const contacts = [
	{
		label: "Phone Number",
		value: "+1-234-567-8901",
		icon: "ri-phone-fill",
		link: "tel:+1-234-567-8901",
	},
	{
		label: "Email",
		value: "contact@william.design",
		icon: "ri-mail-fill",
		link: "mailto:contact@william.design",
	},
	{
		label: "Skype",
		value: "WilliamDesignUX",
		icon: "ri-skype-fill",
		link: "skype:WilliamDesignUX?add",
	},
	{
		label: "Address",
		value: "0811 Erdman Prairie, Joaville CA",
		icon: "ri-map-2-fill",
		link: "https://maps.google.com/maps?q=1st+avenue,New+York",
	},
]

export default function Contact2() {
	return (
		<Box id="contact" py={10} position="relative" overflow="hidden">
			<Container sx={{ position: "relative", zIndex: 2 }}>

				<Box display="flex" flexWrap="wrap" gap={6} alignItems="center">

					{/* FORM SIDE */}
					<Box flex="1 1 420px" minWidth={300}>
						<Card
							sx={{
								p: { xs: 3, md: 4 },
								borderRadius: 3,
								position: "relative",
								bgcolor: "background.paper",
								overflow: "hidden",
							}}
						>
							<Typography variant="h5" fontWeight={800} mb={2} color="primary.main">
								Let’s connect
							</Typography>

							<Stack spacing={2.2}>
								<Box display="flex" gap={2} flexWrap="wrap">
									<TextField fullWidth placeholder="Your name" />
									<TextField fullWidth placeholder="Phone" />
								</Box>

								<Box display="flex" gap={2} flexWrap="wrap">
									<TextField fullWidth placeholder="Email" />
									<TextField fullWidth placeholder="Subject" />
								</Box>

								<TextField
									fullWidth
									placeholder="Message"
									multiline
									rows={4}
								/>

								<Button
									variant="contained"
									size="large"
									sx={{
										borderRadius: 2,
										alignSelf: "flex-start",
										px: 4,
									}}
								>
									Send Message <i className="ri-arrow-right-up-line" />
								</Button>
							</Stack>

							{/* BACK DECOR */}
							<Box
								sx={{
									position: "absolute",
									inset: 0,
									backgroundColor: "primary.main",
									opacity: 0.05,
									borderRadius: 3,
								}}
							/>
						</Card>
					</Box>

					{/* CONTACT INFO SIDE */}
					<Box flex="1 1 280px" minWidth={260}>
						<Stack spacing={3}>
							{contacts.map((item, i) => (
								<Box
									key={i}
									component="a"
									href={item.link}
									display="flex"
									alignItems="center"
									gap={2}
									sx={{
										textDecoration: "none",
										color: "inherit",
										position: "relative",
										"&:hover .iconFlip": {
											transform: "rotateY(180deg)",
										},
									}}
								>
									<Box
										className="iconFlip"
										width={64}
										height={64}
										borderRadius={2}
										display="flex"
										alignItems="center"
										justifyContent="center"
										border="1px solid"
										borderColor="divider"
										bgcolor="background.paper"
										sx={{
											transition: "0.5s",
										}}
									>
										<i className={item.icon} style={{ fontSize: 24 }} />
									</Box>

									<Box>
										<Typography fontSize={13} color="text.secondary">
											{item.label}
										</Typography>
										<Typography fontWeight={700}>
											{item.value}
										</Typography>
									</Box>
								</Box>
							))}
						</Stack>
					</Box>

				</Box>
			</Container>
		</Box>
	)
}
