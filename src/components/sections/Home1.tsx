"use client";

import Link from "next/link";
import { Box, Container, Typography, Button, Stack, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Iconify from "../../components/elements/iconify";

const START_DELAY = 2.6;

export default function Home1() {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    return (
        <Box
            component="section"
            sx={{
                position: "relative",
                pt: { xs: 12, md: 22 },
                pb: { xs: 8, md: 16 },
                overflow: "hidden",
                backgroundColor: isDark ? "#060606" : "#ffffff",
            }}
        >
            {/* Ambient Glow */}
            <Box
                sx={{
                    position: "absolute",
                    top: "10%",
                    right: { xs: "-20%", md: "0%" },
                    width: { xs: 320, md: 620 },
                    height: { xs: 320, md: 620 },
                    bgcolor: "#8B5CF6",
                    filter: "blur(180px)",
                    opacity: isDark ? 0.1 : 0.05,
                    borderRadius: "50%",
                    zIndex: 0,
                }}
            />

            <Container sx={{ position: "relative", zIndex: 2 }}>
                <Stack
                    direction={{ xs: "column-reverse", md: "row" }}
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={{ xs: 6, md: 10 }}
                >
                    {/* LEFT CONTENT */}
                    <Stack
                        flex={1.25}
                        spacing={{ xs: 3, md: 4 }}
                        component={motion.div}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.1, delay: START_DELAY, ease: "easeOut" }}
                        sx={{
                            textAlign: { xs: "center", md: "left" },
                            fontFamily: '"AmrFont", sans-serif'
                        }}
                    >
                        {/* Role Label */}
                        <Stack
                            direction="row"
                            spacing={1.5}
                            alignItems="center"
                            justifyContent={{ xs: "center", md: "flex-start" }}
                        >
                            <Box
                                sx={{
                                    width: 34,
                                    height: 2,
                                    bgcolor: "#8B5CF6",
                                    display: { xs: "none", md: "block" },
                                }}
                            />
                            <Typography
                                variant="overline"
                                sx={{
                                    color: "#8B5CF6",
                                    fontWeight: 800,
                                    letterSpacing: "0.28em",
                                    fontSize: "0.72rem",
                                    textTransform: "uppercase",
                                    fontFamily: '"AmrFont", sans-serif'
                                }}
                            >
                                Senior Graphic Designer · Art Director
                            </Typography>
                        </Stack>

                        {/* HEADLINE */}
                        <Typography
                            variant="h1"
                            sx={{
                                fontWeight: 900,
                                fontSize: { xs: "2.9rem", sm: "3.7rem", md: "4.9rem" },
                                lineHeight: { xs: 1.08, md: 0.98 },
                                letterSpacing: "-0.035em",
                                color: isDark ? "#ffffff" : "#111111",
                                textTransform: "uppercase",
                                fontFamily: '"AmrFont", sans-serif, roboto-extra-bold'

                            }}
                        >
                            Designing <br />
                            <Box
                                component="span"
                                sx={{
                                    color: "transparent",
                                    fontFamily: '"AmrFont", sans-serif',
                                    fontWeight: 400,
                                    WebkitTextStroke: isDark
                                        ? "1px rgba(255,255,255,0.35)"
                                        : "1px rgba(0,0,0,0.35)",
                                }}
                            >
                                Bold Brand
                            </Box>{" "}
                            <br />
                            Experiences.
                        </Typography>

                        {/* DESCRIPTION */}
                        <Typography
                            sx={{
                                color: isDark ? "rgba(255,255,255,0.55)" : "text.secondary",
                                fontSize: { xs: "1rem", md: "1.12rem" },
                                maxWidth: 580,
                                lineHeight: 1.75,
                                mx: { xs: "auto", md: 0 },
                                fontWeight: 400,
                                fontFamily: '"AmrFont", sans-serif'
                            }}
                        >
                            I craft premium visual identities, brand systems, motion graphics, and 2D/3D
                            experiences that elevate brands, strengthen recognition, and create lasting
                            emotional impact across digital, print, and immersive platforms.
                        </Typography>

                        {/* CTA BUTTONS */}
                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            spacing={2.2}
                            justifyContent={{ xs: "center", md: "flex-start" }}
                        >
                            <Button
                                component={Link}
                                href="/assets/resume.pdf"
                                variant="contained"
                                size="large"
                                sx={{
                                    bgcolor: "#8B5CF6",
                                    px: 5.5,
                                    py: 1.9,
                                    borderRadius: "14px",
                                    fontWeight: 800,
                                    fontSize: "0.95rem",
                                    textTransform: "none",
                                    boxShadow: "0 12px 28px rgba(139, 92, 246, 0.28)",
                                    "&:hover": { bgcolor: "#7c3aed" },
                                }}
                                endIcon={<Iconify icon="solar:download-minimalistic-linear" />}
                            >
                                Download CV
                            </Button>

                            <Button
                                component={Link}
                                href="#contact"
                                variant="outlined"
                                size="large"
                                sx={{
                                    borderColor: "rgba(139, 92, 246, 0.45)",
                                    color: isDark ? "#ffffff" : "#111111",
                                    px: 5.5,
                                    py: 1.9,
                                    borderRadius: "14px",
                                    fontWeight: 700,
                                    textTransform: "none",
                                    "&:hover": {
                                        borderColor: "#8B5CF6",
                                        bgcolor: "rgba(139, 92, 246, 0.06)",
                                    },
                                }}
                            >
                                Start a Project
                            </Button>
                        </Stack>

                        {/* TOOLS */}
                        <Stack
                            direction="row"
                            spacing={{ xs: 3, md: 4 }}
                            justifyContent={{ xs: "center", md: "flex-start" }}
                            sx={{
                                pt: { xs: 2.5, md: 4 },
                                opacity: 0.6,
                            }}
                        >
                            {[
                                "adobephotoshop",
                                "adobeillustrator",
                                "adobeaftereffects",
                                "cinema4d",
                                "blender",
                                "figma",
                            ].map((icon) => (
                                <Iconify key={icon} icon={`simple-icons:${icon}`} width={24} />
                            ))}
                        </Stack>
                    </Stack>

                    {/* RIGHT IMAGE */}
                    <Stack
                        flex={1}
                        alignItems="center"
                        component={motion.div}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: START_DELAY + 0.2 }}
                    >
                        <Box sx={{ position: "relative" }}>
                            <Box
                                component="img"
                                src="/personal/Amr_Hero.png"
                                alt="Amr Mansour — Senior Graphic Designer & Art Director"
                                sx={{
                                    maxWidth: { xs: 320, sm: 420, md: 540 },
                                    width: "100%",
                                    height: "auto",
                                    zIndex: 2,
                                    position: "relative",
                                    filter: "drop-shadow(0 25px 60px rgba(0,0,0,0.45))",
                                }}
                            />

                            {/* Glow Halo */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    width: "85%",
                                    height: "85%",
                                    borderRadius: "50%",
                                    background:
                                        "radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)",
                                    zIndex: 1,
                                }}
                            />
                        </Box>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
}
