"use client";

import React from "react";
import Link from "next/link";
import { Box, Container, Stack, Typography, styled, useTheme } from "@mui/material";
import Iconify from "../../../components/elements/iconify";

const goldColor = "#a67c32";

const FooterLink = styled(Link)(({ theme }) => ({
    color: theme.palette.mode === "dark" ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "0.3s",
    "&:hover": { color: goldColor }
}));

const SocialIcon = styled(Link)(({ theme }) => ({
    width: 40,
    height: 40,
    borderRadius: "12px",
    backgroundColor: theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.03)"
        : "rgba(0,0,0,0.03)",
    border: `1px solid ${goldColor}1A`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.mode === "dark"
        ? "rgba(255,255,255,0.7)"
        : "rgba(0,0,0,0.7)",
    transition: "0.3s",
    "&:hover": {
        backgroundColor: goldColor,
        color: "#fff",
        transform: "translateY(-3px)",
        boxShadow: `0 10px 20px ${goldColor}33`
    }
}));

export default function Footer1() {
    const currentYear = new Date().getFullYear();
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    return (
        <Box
            component="footer"
            sx={{
                position: "relative",
                pt: { xs: 8, md: 10 },
                pb: { xs: 8, md: 10 },
                bgcolor: isDark ? "#060606" : "#f5f5f5",
                overflow: "hidden",
                borderTop: `1px solid ${goldColor}1A`,
                transition: "background-color 0.3s ease",
            }}
        >
            <Container sx={{ position: "relative", zIndex: 1 }}>
                <Stack alignItems="center" textAlign="center" spacing={5}>
                    {/* Logo */}
                    <Link href="/" style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textDecoration: "none"
                    }}>
                        <Box
                            component="img"
                            src="/logo/amr-logo.png"
                            sx={{
                                width: { xs: 120, md: 150 },
                                height: "auto",
                                mb: 2,
                                filter: isDark
                                    ? "brightness(1.2)"
                                    : "brightness(0.8) invert(0)",
                            }}
                        />
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                fontFamily: "var(--font-syne)",
                                letterSpacing: "2px",
                                color: isDark ? "#fff" : "#111"
                            }}
                        >
                            AMR MANSOUR
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{
                                color: isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
                                textTransform: "uppercase",
                                letterSpacing: "3px",
                                fontSize: "0.7rem",
                                mt: 0.5
                            }}
                        >
                            Art Director & Designer
                        </Typography>
                    </Link>

                    {/* Navigation */}
                    <Stack
                        direction="row"
                        flexWrap="wrap"
                        justifyContent="center"
                        spacing={{ xs: 2, md: 4 }}
                    >
                        {["About", "Resume", "Services", "Portfolio", "Contact"].map((item) => (
                            <FooterLink key={item} href={`/#${item.toLowerCase()}`}>
                                {item}
                            </FooterLink>
                        ))}
                    </Stack>

                    {/* Social Links */}
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <SocialIcon href="https://facebook.com" target="_blank">
                            <Iconify icon="ri:facebook-fill" width={20} />
                        </SocialIcon>
                        <SocialIcon href="https://linkedin.com" target="_blank">
                            <Iconify icon="ri:linkedin-fill" width={20} />
                        </SocialIcon>
                        <SocialIcon href="https://instagram.com" target="_blank">
                            <Iconify icon="ri:instagram-fill" width={20} />
                        </SocialIcon>
                        <SocialIcon href="https://behance.net" target="_blank">
                            <Iconify icon="ri:behance-fill" width={20} />
                        </SocialIcon>
                    </Stack>

                    {/* Contact Info */}
                    <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={{ xs: 2, sm: 4 }}
                        sx={{
                            color: isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
                            fontSize: "0.9rem"
                        }}
                    >
                        <Typography>amr.mansour@example.com</Typography>
                        <Typography>+20 115 403 4782</Typography>
                        <Typography>Cairo, Egypt</Typography>
                    </Stack>

                    {/* Copyright */}
                    <Typography
                        variant="body2"
                        sx={{
                            color: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.3)",
                            fontSize: "0.85rem"
                        }}
                    >
                        © {currentYear} Amr Mansour. All Rights Reserved.
                    </Typography>
                </Stack>
            </Container>

            <Box
                sx={{
                    position: "absolute",
                    bottom: -100,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "80%",
                    height: 200,
                    background: `radial-gradient(circle, ${goldColor}${isDark ? '1A' : '0D'} 0%, transparent 70%)`,
                    filter: "blur(60px)",
                    zIndex: 0,
                    pointerEvents: "none",
                }}
            />
        </Box>
    );
}