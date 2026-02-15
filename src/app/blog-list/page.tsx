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
    CardMedia,
    CardContent,
    Pagination,
    TextField,
    Paper
} from "@mui/material"

const BLOGS = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title:
        i % 2 === 0
            ? "5 UI/UX Trends to Watch in 2026"
            : i % 3 === 0
                ? "The Role of Color Psychology"
                : "The Importance of User Research",
    tag: i % 2 === 0 ? "App Design" : i % 3 === 0 ? "Mockup" : "Branding",
    img: `/assets/imgs/blog/blog-1/img-${i + 1}.png`
}))

export default function BlogList() {
    return (
        <Layout headerStyle={1} footerStyle={1}>

            {/* HEADER */}
            <Box pt={16}>
                <Container>
                    <Stack alignItems="center" textAlign="center" spacing={2}>

                        <Button variant="contained" size="small">
                            Recent Blog
                        </Button>

                        <Typography variant="h3" fontWeight={800}>
                            Explore the{" "}
                            <Box component="span" color="primary.main">
                                insights and trends shaping
                            </Box>{" "}
                            our industry
                        </Typography>

                        <Typography color="text.secondary" maxWidth={720}>
                            Discover key insights and emerging trends shaping the future of design:
                            a detailed look at how innovation is reshaping our industry.
                        </Typography>

                    </Stack>
                </Container>
            </Box>

            {/* BLOG GRID USING STACK */}
            <Box py={12}>
                <Container>

                    <Stack
                        direction="row"
                        flexWrap="wrap"
                        gap={4}
                        justifyContent="center"
                    >
                        {BLOGS.map((post) => (
                            <Card
                                key={post.id}
                                sx={{
                                    width: { xs: "100%", sm: "48%", md: "31%" },
                                    borderRadius: 4,
                                    overflow: "hidden",
                                    position: "relative"
                                }}
                            >

                                <Box position="relative">
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image={post.img}
                                    />

                                    <Button
                                        size="small"
                                        variant="contained"
                                        sx={{
                                            position: "absolute",
                                            bottom: 12,
                                            left: 12,
                                            fontSize: 12,
                                            borderRadius: 2
                                        }}
                                    >
                                        {post.tag}
                                    </Button>
                                </Box>

                                <CardContent sx={{ textAlign: "center" }}>
                                    <Typography variant="caption">
                                        March 28, 2026 • 3 min read
                                    </Typography>

                                    <Typography fontWeight={700} mt={1}>
                                        {post.title}
                                    </Typography>

                                    <Typography color="text.secondary" fontSize={14}>
                                        Stay ahead of the curve with these emerging trends in UI/UX design.
                                    </Typography>

                                    <Button
                                        component={Link}
                                        href="/blog-details"
                                        size="small"
                                        sx={{ mt: 2 }}
                                    >
                                        Read More →
                                    </Button>
                                </CardContent>

                            </Card>
                        ))}
                    </Stack>

                </Container>
            </Box>

            {/* PAGINATION */}
            <Box pb={12}>
                <Container>
                    <Stack alignItems="center">
                        <Pagination count={3} shape="rounded" />
                    </Stack>
                </Container>
            </Box>

            {/* STATS */}
            <Box py={10} bgcolor="#f7f7f9">
                <Container>
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        justifyContent="space-between"
                        spacing={4}
                        textAlign="center"
                    >
                        {[
                            { label: "Years Experience", value: "12+" },
                            { label: "Projects Completed", value: "250+" },
                            { label: "Happy Clients", value: "680+" },
                            { label: "Awards Won", value: "18+" }
                        ].map((stat, i) => (
                            <Stack key={i} spacing={1}>
                                <Typography variant="h3" fontWeight={800}>
                                    {stat.value}
                                </Typography>
                                <Typography color="text.secondary">
                                    {stat.label}
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>
                </Container>
            </Box>

            {/* CONTACT */}
            <Box py={16} bgcolor="#0f1220" color="white">
                <Container>

                    <Typography variant="h3" fontWeight={800} mb={2}>
                        Get in Touch
                    </Typography>

                    <Typography color="gray.400" maxWidth={720} mb={6}>
                        I’m always excited to take on new projects and collaborate with innovative minds.
                        If you have a project or just want to chat — reach out!
                    </Typography>

                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={6}
                    >

                        {/* INFO */}
                        <Stack width={{ xs: "100%", md: 320 }} spacing={3}>
                            <Typography>📞 +1-234-567-8901</Typography>
                            <Typography>📧 contact@william.design</Typography>
                            <Typography>📍 Joaville CA</Typography>
                        </Stack>

                        {/* FORM */}
                        <Box flex={1}>
                            <Stack spacing={3}>

                                <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                                    <TextField fullWidth label="Your Name" />
                                    <TextField fullWidth label="Email" />
                                </Stack>

                                <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
                                    <TextField fullWidth label="Phone" />
                                    <TextField fullWidth label="Subject" />
                                </Stack>

                                <TextField multiline rows={5} label="Message" />

                                <Button variant="contained" size="large">
                                    Send Message →
                                </Button>

                            </Stack>
                        </Box>

                    </Stack>

                </Container>
            </Box>

        </Layout>
    )
}
