"use client";

import React from "react";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Container, Typography, Stack, Rating, styled } from "@mui/material";

// إعدادات السوايبر
const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    autoplay: { delay: 4000 },
    pagination: { clickable: true, el: ".custom-swiper-pagination" },
    breakpoints: {
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 2 },
    },
};

// تصميم كارت التقييم
const TestimonialCard = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "24px",
    border: "2px solid #f3f4f6",
    position: "relative",
    transition: "transform 0.3s ease",
    "&:hover": {
        transform: "translateY(-5px)",
    },
    [theme.breakpoints.up("md")]: {
        padding: "56px",
    },
}));

export default function Testimonials1() {
    const testimonials = [
        {
            id: 1,
            logo: "/assets/imgs/testimonials/testimonials-1/logo-1.png",
            avatar: "/assets/imgs/testimonials/testimonials-1/avatar-1.png",
            name: "John Doe",
            role: "Head of Legal and Compliance, Tech Innovators",
            text: "“Working with William was an absolute pleasure. His attention to detail and user-focused design approach significantly improved our product's usability”",
            rating: 4,
        },
        {
            id: 2,
            logo: "/assets/imgs/testimonials/testimonials-1/logo-2.png",
            avatar: "/assets/imgs/testimonials/testimonials-1/avatar-2.png",
            name: "John Doe",
            role: "Head of Legal and Compliance, Tech Innovators",
            text: "“Working with William was an absolute pleasure. His attention to detail and user-focused design approach significantly improved our product's usability”",
            rating: 5,
        },
        // كرر البيانات هنا حسب الحاجة
    ];

    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                py: { xs: 10, md: 15 },
                bgcolor: "#0A0A0A", // bg-900
                overflow: "hidden",
            }}
        >
            <Container maxWidth="lg">
                <Stack direction="row">
                    <Box sx={{ width: { xs: "100%", lg: "66.6%" }, zIndex: 2 }}>
                        {/* Header */}
                        <Typography variant="h3" sx={{ color: "#A8FF53", fontWeight: "bold", mb: 2 }}>
                            Client's Testimonials
                        </Typography>
                        <Typography variant="h6" sx={{ color: "rgba(255,255,255,0.7)", fontWeight: 400, mb: 8 }}>
                            I believe that working hard and trying to learn every day will make me
                            <br />
                            improve in satisfying my customers.
                        </Typography>

                        {/* Slider */}
                        <Box sx={{ mt: 8, ".swiper": { overflow: "visible" } }}>
                            <Swiper {...swiperOptions}>
                                {testimonials.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <TestimonialCard>
                                            <Box sx={{ mb: 4 }}>
                                                <img src={item.logo} alt="brand-logo" style={{ height: "30px" }} />
                                            </Box>

                                            <Rating
                                                value={item.rating}
                                                readOnly
                                                sx={{ mb: 4, color: "#A8FF53", "& .MuiRating-iconEmpty": { color: "#D1D5DB" } }}
                                            />

                                            <Typography variant="h6" sx={{ color: "#111", mb: 5, lineHeight: 1.5 }}>
                                                {item.text}
                                            </Typography>

                                            <Link href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
                                                <Box
                                                    component="img"
                                                    src={item.avatar}
                                                    sx={{ width: 65, height: 65, borderRadius: "50%", mr: 2 }}
                                                />
                                                <Box>
                                                    <Typography variant="subtitle1" sx={{ color: "#111", fontWeight: "bold", mb: 0 }}>
                                                        {item.name}
                                                    </Typography>
                                                    <Typography variant="caption" sx={{ color: "#666" }}>
                                                        - {item.role}
                                                    </Typography>
                                                </Box>
                                            </Link>

                                            {/* Quote Icon */}
                                            <Box sx={{ position: "absolute", top: 40, right: 40, opacity: 0.2 }}>
                                                <svg width={52} height={52} viewBox="0 0 52 52" fill="none">
                                                    <path d="M0 29.7144H11.1428L3.71422 44.5715H14.8571L22.2857 29.7144V7.42871H0V29.7144Z" fill="#D1D5DB" />
                                                    <path d="M29.7148 7.42871V29.7144H40.8577L33.4291 44.5715H44.5719L52.0005 29.7144V7.42871H29.7148Z" fill="#D1D5DB" />
                                                </svg>
                                            </Box>
                                        </TestimonialCard>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            {/* Pagination Container */}
                            <Box className="custom-swiper-pagination" sx={{ mt: 4, textAlign: "center" }} />
                        </Box>
                    </Box>
                </Stack>
            </Container>

            {/* Background Decorator (Man Image & Ribbon) */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 0,
                    right: "10%",
                    display: { xs: "none", lg: "block" },
                    zIndex: 1,
                }}
            >
                <Box sx={{ position: "relative" }}>
                    <Box component="img" src="/assets/imgs/testimonials/testimonials-1/man.png" sx={{ position: "relative", zIndex: 2 }} />
                    <Box
                        component="img"
                        className="ribbonRotate"
                        src="/assets/imgs/testimonials/testimonials-1/decorate.png"
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 1,
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}