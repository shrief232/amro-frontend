"use client"

import Link from "next/link"
import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    Card,
    CardMedia
} from "@mui/material"

const blogs = [
    {
        title: "5 UI/UX Trends to Watch in 2026",
        desc: "Stay ahead of the curve with these emerging trends in UI/UX design.",
        date: "March 28, 2026 • 3 min read",
        category: "App Design",
        image: "/assets/imgs/blog/blog-1/img-1.png",
    },
    {
        title: "The Importance of User Research",
        desc: "Stay ahead of the curve with these emerging trends in UI/UX design.",
        date: "March 28, 2026 • 3 min read",
        category: "Branding",
        image: "/assets/imgs/blog/blog-1/img-2.png",
    },
    {
        title: "The Role of Color Psychology",
        desc: "Stay ahead of the curve with these emerging trends in UI/UX design.",
        date: "March 28, 2026 • 3 min read",
        category: "Mockup",
        image: "/assets/imgs/blog/blog-1/img-3.png",
    },
]

export default function Blog1() {
    return (
        <Box py={14}>
            <Container>

                {/* HEADER */}
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="space-between"
                    alignItems={{ xs: "flex-start", md: "flex-end" }}
                    spacing={3}
                    mb={6}
                >
                    <Box>
                        <Typography variant="h4" fontWeight={800} color="primary.main" mb={1}>
                            Recent Blog
                        </Typography>

                        <Typography color="text.secondary">
                            Explore the insights and trends shaping our industry
                        </Typography>
                    </Box>

                    <Button
                        component={Link}
                        href="/blog-list"
                        variant="contained"
                        endIcon={<i className="ri-arrow-right-up-line" />}
                        sx={{ borderRadius: 3, px: 3 }}
                    >
                        View more
                    </Button>
                </Stack>

                {/* BLOG LIST */}
                <Box
                    display="flex"
                    flexWrap="wrap"
                    gap={4}
                >
                    {blogs.map((blog, i) => (
                        <Box
                            key={i}
                            flex="1 1 320px"
                            minWidth={280}
                        >
                            <BlogCard {...blog} />
                        </Box>
                    ))}
                </Box>

            </Container>
        </Box>
    )
}

/* ================= CARD ================= */

function BlogCard({ title, desc, date, category, image }: any) {
    return (
        <Card
            sx={{
                borderRadius: 4,
                overflow: "hidden",
                bgcolor: "transparent",
                boxShadow: "none",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover img": {
                    transform: "scale(1.1)",
                },
            }}
        >

            {/* IMAGE */}
            <Box position="relative" borderRadius={3} overflow="hidden">
                <CardMedia
                    component="img"
                    image={image}
                    alt={title}
                    sx={{
                        height: 260,
                        transition: "0.4s ease",
                    }}
                />

                {/* CATEGORY */}
                <Button
                    size="small"
                    component={Link}
                    href="/blog-details"
                    sx={{
                        position: "absolute",
                        bottom: 12,
                        left: 12,
                        bgcolor: "primary.main",
                        color: "white",
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: 600,
                        px: 2,
                        "&:hover": { bgcolor: "primary.dark" },
                    }}
                >
                    {category}
                </Button>

                {/* FLOAT ICON */}
                <Box
                    component={Link}
                    href="/blog-details"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 56,
                        height: 56,
                        borderRadius: "50%",
                        bgcolor: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        opacity: 0,
                        transition: "0.25s",
                        ".MuiCard-root:hover &": {
                            opacity: 1,
                        },
                    }}
                >
                    <i className="ri-arrow-right-up-line" />
                </Box>
            </Box>

            {/* CONTENT */}
            <Stack spacing={1.3} textAlign="center" mt={3}>
                <Typography fontSize={13} color="text.secondary">
                    {date}
                </Typography>

                <Typography fontWeight={700}>
                    {title}
                </Typography>

                <Typography color="text.secondary" fontSize={14}>
                    {desc}
                </Typography>
            </Stack>

        </Card>
    )
}
