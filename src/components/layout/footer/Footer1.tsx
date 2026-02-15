"use client";

import React from "react";
import Link from "next/link";
import { Box, Container, Stack, Typography, styled } from "@mui/material";

const FooterLink = styled(Link)(({ theme }) => ({
    color: "inherit",
    textDecoration: "none",
    fontSize: "1.1rem",
    transition: "0.3s",
    "&:hover": { color: "#A8FF53" }
}));

export default function Footer1() {
    return (
        <Box
            component="footer"
            sx={{
                position: "relative",
                pt: 8, pb: 8,
                bgcolor: "#0D0D0D", // bg-secondary-1
                overflow: "hidden"
            }}
        >
            <Container sx={{ position: "relative", zIndex: 1 }}>
                <Stack alignItems="center" textAlign="center" spacing={4}>
                    {/* Logo */}
                    <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none", color: "#fff" }}>
                        <Box component="img" src="/assets/imgs/footer-1/logo.svg" sx={{ width: 32 }} />
                        <Typography variant="h5" fontWeight={700} sx={{ ml: 1.5 }}>
                            william.design
                        </Typography>
                    </Link>

                    {/* Navigation */}
                    <Stack
                        direction="row"
                        flexWrap="wrap"
                        justifyContent="center"
                        spacing={{ xs: 2, md: 4 }}
                        sx={{ color: "rgba(255,255,255,0.7)" }}
                    >
                        {["Home", "Services", "Portfolio", "Pricing", "Blog", "Contact"].map((item) => (
                            <FooterLink key={item} href={item === "Home" ? "/" : `/${item.toLowerCase()}`}>
                                {item}
                            </FooterLink>
                        ))}
                    </Stack>

                    {/* Copyright */}
                    <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.5)" }}>
                        © {new Date().getFullYear()} All Rights Reserved by{" "}
                        <Link href="#" style={{ color: "#A8FF53", textDecoration: "none" }}>
                            William.design
                        </Link>
                    </Typography>
                </Stack>
            </Container>

            {/* Background Image Overlay */}
            <Box
                sx={{
                    position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
                    zIndex: 0, opacity: 0.1, pointerEvents: "none",
                    backgroundImage: "url(/assets/imgs/footer-1/background.png)",
                    backgroundSize: "cover"
                }}
            />
        </Box>
    );
}