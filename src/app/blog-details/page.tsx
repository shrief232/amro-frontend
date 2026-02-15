"use client"

import Layout from "../../components/layout/Layout"
import Link from "next/link"
import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    Paper,
    TextField,
    Card,
    CardMedia,
    CardContent
} from "@mui/material"

export default function BlogDetails() {
    return (
        <Layout headerStyle={1} footerStyle={1}>

            {/* ARTICLE HEADER */}
            <Box py={{ xs: 10, md: 14 }}>
                <Container>
                    <Stack alignItems="center" textAlign="center" spacing={2}>

                        <Button variant="contained" size="small">
                            Design Trend
                        </Button>

                        <Typography variant="h3" fontWeight={800}>
                            How to Create a Seamless Mobile Experience
                        </Typography>

                        <Typography color="text.secondary" maxWidth={720}>
                            A great mobile experience can significantly enhance user satisfaction,
                            increase engagement, and boost your app’s success.
                        </Typography>

                    </Stack>

                    <Box
                        component="img"
                        src="/assets/imgs/blog/blog-1/img-background.png"
                        width="100%"
                        borderRadius={4}
                        mt={6}
                    />
                </Container>
            </Box>

            {/* BLOG BODY */}
            <Box pb={14}>
                <Container>

                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={6}
                        alignItems="flex-start"
                    >

                        {/* CONTENT */}
                        <Box flex={1}>
                            <Stack spacing={3}>

                                <Typography variant="h5" fontWeight={700}>
                                    Prioritize User-Centric Design
                                </Typography>

                                <Typography color="text.secondary">
                                    Conduct thorough user research to understand your target audience’s needs...
                                </Typography>

                                <Typography variant="h6" fontWeight={600}>
                                    Simplify Navigation
                                </Typography>

                                <Typography color="text.secondary">
                                    Design a clean and intuitive navigation structure...
                                </Typography>

                                {/* IMAGE GROUP */}
                                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={4}>
                                    <Box
                                        component="img"
                                        src="/assets/imgs/blog/blog-1/img-10.png"
                                        flex={1}
                                        borderRadius={3}
                                    />

                                    <Stack spacing={2} minWidth={180}>
                                        <Box component="img" src="/assets/imgs/blog/blog-1/img-11.png" borderRadius={3} />
                                        <Box component="img" src="/assets/imgs/blog/blog-1/img-12.png" borderRadius={3} />
                                    </Stack>
                                </Stack>

                                {/* CONCLUSION */}
                                <Paper sx={{ p: 4, borderRadius: 4, mt: 4 }}>
                                    <Typography variant="h5" fontWeight={700}>
                                        Conclusion
                                    </Typography>

                                    <Typography color="text.secondary" mt={2}>
                                        Creating a seamless mobile experience requires a user-centric approach,
                                        performance optimization, responsive design, and strong security.
                                    </Typography>
                                </Paper>

                            </Stack>
                        </Box>

                        {/* SIDEBAR */}
                        <Box width={{ xs: "100%", md: 280 }} flexShrink={0}>
                            <Stack spacing={3}>

                                <Paper sx={{ p: 3, borderRadius: 4 }}>
                                    <Stack spacing={1}>
                                        <Typography>⏱ 16 mins to read</Typography>
                                        <Typography>📅 Nov 21, 2026</Typography>
                                        <Typography>
                                            By <strong>Alonso</strong>
                                        </Typography>
                                    </Stack>
                                </Paper>

                                <Paper sx={{ p: 3, borderRadius: 4 }}>
                                    <Typography fontWeight={600} mb={2}>
                                        Share
                                    </Typography>

                                    <Stack direction="row" spacing={2}>
                                        <Button size="small">FB</Button>
                                        <Button size="small">X</Button>
                                        <Button size="small">IG</Button>
                                    </Stack>
                                </Paper>

                            </Stack>
                        </Box>

                    </Stack>

                </Container>
            </Box>

            {/* RELATED POSTS */}
            <Box py={10}>
                <Container>

                    <Stack direction="row" justifyContent="space-between" mb={4}>
                        <Typography variant="h4">Related Posts</Typography>
                        <Button component={Link} href="#">View more</Button>
                    </Stack>

                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={4}
                    >
                        {[1, 2, 3].map(i => (
                            <Card key={i} sx={{ borderRadius: 4, flex: 1 }}>
                                <CardMedia
                                    component="img"
                                    height="220"
                                    image={`/assets/imgs/blog/blog-1/img-${i}.png`}
                                />
                                <CardContent>
                                    <Typography variant="caption">
                                        March 28, 2026 • 3 min read
                                    </Typography>

                                    <Typography fontWeight={700} mt={1}>
                                        UI/UX Trends {i}
                                    </Typography>

                                    <Typography color="text.secondary" fontSize={14}>
                                        Stay ahead with emerging design trends.
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Stack>

                </Container>
            </Box>

            {/* CONTACT */}
            <Box py={14} bgcolor="#0f1220">
                <Container>

                    <Typography variant="h3" fontWeight={800} mb={3}>
                        Get in Touch
                    </Typography>

                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={6}
                    >

                        {/* INFO */}
                        <Box width={{ xs: "100%", md: 320 }}>
                            <Stack spacing={3}>
                                <Typography>📞 +1-234-567-8901</Typography>
                                <Typography>📧 contact@william.design</Typography>
                                <Typography>📍 Joaville CA</Typography>
                            </Stack>
                        </Box>

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

                                <TextField fullWidth multiline rows={5} label="Message" />

                                <Button variant="contained" size="large">
                                    Send Message
                                </Button>

                            </Stack>
                        </Box>

                    </Stack>

                </Container>
            </Box>

        </Layout>
    )
}
