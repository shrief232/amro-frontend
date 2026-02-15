"use client"

import Layout from "../../components/layout/Layout"
import Link from "next/link"
import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    Card,
    CardContent,
    CardMedia,
    Divider
} from "@mui/material"

const services = [
    {
        title: "UI/UX Design",
        image: "/assets/imgs/services-list/img-1.png",
        items: [
            ["User Research", "Conducting thorough user research through surveys, interviews, and usability studies."],
            ["Wireframing & Prototyping", "Designing detailed wireframes and interactive prototypes."],
            ["User Testing", "Gathering feedback and improving experience."]
        ]
    },
    {
        title: "Mobile App Design",
        image: "/assets/imgs/services-list/img-2.png",
        items: [
            ["Cross-Platform Design", "Creating smooth iOS & Android designs."],
            ["Interactive Prototypes", "Demonstrating app functionality early."],
            ["Consistent Branding", "Keeping strong brand identity."]
        ]
    },
    {
        title: "Brand Identity Design",
        image: "/assets/imgs/services-list/img-3.png",
        items: [
            ["Logo Design", "Creating memorable brand logos."],
            ["Brand Guidelines", "Typography, colors, and consistency."],
            ["Visual Assets", "Business cards, letterheads, assets."]
        ]
    },
    {
        title: "Web Development",
        image: "/assets/imgs/services-list/img-4.png",
        items: [
            ["Front-End Dev", "Modern responsive UI development."],
            ["Back-End Dev", "Server logic & databases."],
            ["CMS Integration", "WordPress & custom CMS solutions."]
        ]
    }
]

export default function Services() {
    return (
        <Layout headerStyle={1} footerStyle={1}>

            <Box py={{ xs: 10, md: 16 }} bgcolor="#f7f7fb">

                <Container maxWidth="lg">

                    {/* HEADER */}
                    <Stack textAlign="center" mb={10} spacing={2}>
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: "999px",
                                px: 3,
                                textTransform: "uppercase",
                                fontWeight: 600
                            }}
                        >
                            My Services
                        </Button>

                        <Typography fontSize={{ xs: 28, md: 42 }} fontWeight={800}>
                            Transforming Ideas{" "}
                            <Box component="span" color="text.secondary">
                                into Intuitive Designs
                            </Box>{" "}
                            for Engaging User{" "}
                            <Box component="span" color="text.secondary">
                                Experiences
                            </Box>
                        </Typography>

                        <Typography color="text.secondary" maxWidth={760} mx="auto">
                            With expertise in mobile app and web design, I transform ideas into visually
                            stunning and user-friendly interfaces that captivate and retain users.
                        </Typography>
                    </Stack>

                    {/* SERVICE CARDS */}
                    <Stack spacing={6}>
                        {services.map((service, i) => (
                            <Card
                                key={i}
                                sx={{
                                    borderRadius: 4,
                                    p: { xs: 2, md: 4 },
                                    display: "flex",
                                    gap: 4,
                                    flexDirection: { xs: "column", md: "row" },
                                    bgcolor: "#fff",
                                    boxShadow: "0 20px 60px rgba(0,0,0,.08)"
                                }}
                            >
                                {/* IMAGE */}
                                <CardMedia
                                    component="img"
                                    image={service.image}
                                    sx={{
                                        width: { xs: "100%", md: 320 },
                                        borderRadius: 3,
                                        objectFit: "cover"
                                    }}
                                />

                                {/* CONTENT */}
                                <CardContent sx={{ p: 0, flex: 1 }}>

                                    <Stack direction="row" justifyContent="space-between" mb={2}>
                                        <Box>
                                            <Typography fontWeight={700} fontSize={22}>
                                                {service.title}
                                            </Typography>
                                            <Typography fontSize={14} color="text.secondary">
                                                Creative. Unique. Reality.
                                            </Typography>
                                        </Box>

                                        <Button variant="outlined" sx={{ borderRadius: "50%" }}>
                                            ↗
                                        </Button>
                                    </Stack>

                                    <Divider sx={{ my: 2 }} />

                                    <Stack spacing={2}>
                                        {service.items.map(([title, desc], index) => (
                                            <Stack key={index} direction={{ xs: "column", md: "row" }} spacing={2}>
                                                <Typography fontWeight={600} textTransform="uppercase" minWidth={180}>
                                                    {title}
                                                </Typography>
                                                <Typography color="text.secondary">
                                                    {desc}
                                                </Typography>
                                            </Stack>
                                        ))}
                                    </Stack>

                                </CardContent>
                            </Card>
                        ))}
                    </Stack>

                </Container>
            </Box>

        </Layout>
    )
}
