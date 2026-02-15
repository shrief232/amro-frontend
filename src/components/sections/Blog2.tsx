"use client"

import Link from "next/link"
import {
    Box,
    Container,
    Typography,
    Stack,
    Card,
    CardMedia,
    Button
} from "@mui/material"

const blogs = [
    {
        title: "Optimize Your Web Application for Speed",
        desc: "Stay ahead of the curve with these emerging trends in UI/UX design.",
        date: "March 28, 2026 • 3 min read",
        category: "CEO",
        image: "/assets/imgs/home-page-2/blog/img-1.png",
    },
    {
        title: "Best Practices for Secure Web Development",
        desc: "Stay ahead of the curve with these emerging trends in UI/UX design.",
        date: "March 28, 2026 • 3 min read",
        category: "Development",
        image: "/assets/imgs/home-page-2/blog/img-2.png",
    },
    {
        title: "10 JavaScript Frameworks for Web Development in 2026",
        desc: "Stay ahead of the curve with these emerging trends in UI/UX design.",
        date: "March 28, 2026 • 3 min read",
        category: "Trending",
        image: "/assets/imgs/home-page-2/blog/img-3.png",
    },
]

export default function Blog2() {
    return (
        <Box py={10}>
            <Container>

                {/* HEADER */}
                <Stack alignItems="center" spacing={1} mb={6} textAlign="center">
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Box
                            width={6}
                            height={6}
                            borderRadius="50%"
                            bgcolor="primary.main"
                        />
                        <Typography fontWeight={600} color="primary.main">
                            Latest Posts
                        </Typography>
                    </Stack>

                    <Typography variant="h4" fontWeight={800}>
                        From Blog
                    </Typography>
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
                borderRadius: "16px 16px 6px 6px",
                overflow: "hidden",
                boxShadow: "none",
                bgcolor: "transparent",
                cursor: "pointer",
                transition: "0.3s",
                "&:hover img": {
                    transform: "scale(1.08)",
                },
            }}
        >

            {/* IMAGE */}
            <Box position="relative" borderRadius={2} overflow="hidden">
                <CardMedia
                    component="img"
                    image={image}
                    sx={{
                        height: 260,
                        transition: "0.35s ease",
                    }}
                />

                {/* CATEGORY TAG */}
                <Button
                    size="small"
                    component={Link}
                    href="#"
                    sx={{
                        position: "absolute",
                        bottom: 12,
                        left: 12,
                        bgcolor: "white",
                        color: "black",
                        fontSize: 12,
                        fontWeight: 700,
                        borderRadius: 1.5,
                        px: 1.6,
                        py: 0.4,
                        textTransform: "none",
                    }}
                >
                    {category}
                </Button>

                {/* CENTER ICON */}
                <Box
                    component={Link}
                    href="#"
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 52,
                        height: 52,
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
            <Stack textAlign="center" spacing={1} mt={3}>
                <Typography fontSize={12} color="text.secondary">
                    {date}
                </Typography>

                <Typography fontWeight={700} fontSize={16}>
                    {title}
                </Typography>

                <Typography fontSize={13} color="text.secondary">
                    {desc}
                </Typography>
            </Stack>

        </Card>
    )
}
