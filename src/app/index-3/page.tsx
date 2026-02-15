"use client"

import Layout from "../../components/layout/Layout"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    Paper,
    Avatar,
    TextField,
    Card,
    CardMedia,
    CardContent,
} from "@mui/material"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    autoplay: { delay: 4000 },
    breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
    },
}

const swiperOptions2 = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    loop: true,
    autoplay: { delay: 4000 },
    pagination: { clickable: true },
}

export default function Home3() {
    return (
        <Layout headerStyle={3} footerStyle={3}>

            {/* HERO */}
            <Box py={12} bgcolor="#0f1220">
                <Container>
                    <Stack direction={{ xs: "column", md: "row" }} spacing={6}>

                        {/* LEFT */}
                        <Stack spacing={3} maxWidth={360}>
                            <Box position="relative">
                                <Box component="img" src="/assets/imgs/home-page-3/hero/img-1.png" borderRadius={4} width="100%" />
                                <Box
                                    component="img"
                                    src="/assets/imgs/home-page-3/hero/signature.png"
                                    position="absolute"
                                    bottom={-40}
                                    left="50%"
                                    sx={{ transform: "translateX(-50%)" }}
                                />
                            </Box>

                            <Stack spacing={1}>
                                <Typography>📞 +1-234-567-8901</Typography>
                                <Typography>📧 meisa.rosie@gmail.com</Typography>
                                <Typography>💬 meisa.rosie</Typography>
                                <Typography>📍 Joaville CA</Typography>
                            </Stack>
                        </Stack>

                        {/* RIGHT */}
                        <Stack spacing={3} flex={1}>
                            <Typography color="primary">Shaping Narratives, Igniting Minds</Typography>

                            <Typography variant="h3" fontWeight={800}>
                                Crafting Stories <span style={{ color: "#aaa" }}>with Passion</span>
                            </Typography>

                            <Typography color="text.secondary">
                                Welcome to the creative world of Meisa Rosie...
                            </Typography>

                            <Stack direction="row" spacing={2}>
                                <Button variant="contained">Download CV</Button>
                                <Button variant="outlined">Hire me</Button>
                            </Stack>
                        </Stack>

                    </Stack>
                </Container>
            </Box>

            {/* TYPICAL WORKS */}
            <Box py={10}>
                <Container>
                    <Typography variant="h4" mb={3}>Typical Works</Typography>

                    <Stack spacing={3}>
                        {[1,2,3].map(i => (
                            <Paper key={i} sx={{ p: 3, borderRadius: 4 }}>
                                <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                                    <Box component="img" src={`/assets/imgs/home-page-3/typical/img-${i}.png`} width={260} borderRadius={3} />

                                    <Stack spacing={1}>
                                        <Typography variant="caption">202{i}</Typography>
                                        <Typography fontWeight={700}>Reflections of Tomorrow</Typography>
                                        <Typography color="text.secondary">
                                            Thought-provoking novel exploring identity and freedom.
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Paper>
                        ))}
                    </Stack>
                </Container>
            </Box>

            {/* SERVICES */}
            <Box py={10} bgcolor="#fafafa">
                <Container>
                    <Typography variant="h4" mb={3}>My Services</Typography>

                    <Stack spacing={3}>
                        {[
                            "Writing: Novels & Poetry",
                            "Articles & Blog Content",
                            "Proofreading & Editing",
                            "SEO Writing"
                        ].map(service => (
                            <Paper key={service} sx={{ p: 3, borderRadius: 4 }}>
                                <Stack direction="row" spacing={2}>
                                    <Avatar sx={{ bgcolor: "primary.main" }}>✍️</Avatar>
                                    <Stack>
                                        <Typography fontWeight={700}>{service}</Typography>
                                        <Typography color="text.secondary">
                                            High-quality storytelling tailored to your audience.
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Paper>
                        ))}
                    </Stack>
                </Container>
            </Box>

            {/* BLOG SWIPER */}
            <Box py={10}>
                <Container>
                    <Typography variant="h4" mb={3}>From Blog</Typography>

                    <Swiper {...swiperOptions2}>
                        {[1,2,3].map(i => (
                            <SwiperSlide key={i}>
                                <Paper sx={{ p: 3, borderRadius: 4 }}>
                                    <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                                        <Stack>
                                            <Typography color="primary">Inspiration</Typography>
                                            <Typography fontWeight={700}>
                                                The Power of Storytelling
                                            </Typography>
                                            <Typography color="text.secondary">
                                                Tips to build engaging narratives.
                                            </Typography>
                                        </Stack>

                                        <Box component="img" src={`/assets/imgs/home-page-3/blog/img-1.png`} width={220} borderRadius={3} />
                                    </Stack>
                                </Paper>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>
            </Box>

            {/* TESTIMONIALS */}
            <Box py={10} bgcolor="#fafafa">
                <Container>
                    <Typography variant="h4" mb={3}>Testimonials</Typography>

                    <Swiper {...swiperOptions}>
                        {[1,2,3].map(i => (
                            <SwiperSlide key={i}>
                                <Paper sx={{ p: 3, borderRadius: 4 }}>
                                    <Stack spacing={2}>
                                        <Avatar src={`/assets/imgs/home-page-3/testimonials/author-${i}.png`} />
                                        <Typography>
                                            "Meisa's writing is simply magical."
                                        </Typography>
                                        <Typography color="primary">
                                            John Doe — Author
                                        </Typography>
                                    </Stack>
                                </Paper>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Container>
            </Box>

            {/* CONTACT */}
            <Box py={12}>
                <Container>
                    <Typography variant="h4" mb={3}>Contact Me</Typography>

                    <Stack spacing={3} maxWidth={700}>
                        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                            <TextField fullWidth label="Your Name" />
                            <TextField fullWidth label="Phone" />
                        </Stack>

                        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                            <TextField fullWidth label="Email" />
                            <TextField fullWidth label="Subject" />
                        </Stack>

                        <TextField fullWidth multiline rows={4} label="Message" />

                        <Button variant="contained" size="large">
                            Send Message
                        </Button>
                    </Stack>
                </Container>
            </Box>

        </Layout>
    )
}
