"use client";

import React from "react";
import Link from "next/link";
import { Drawer, Box, Stack, Typography, IconButton, Divider, styled } from "@mui/material";
import { motion } from "framer-motion";
import Iconify from "../../components/elements/iconify";

interface OffCanvasProps {
    isOffCanvas: boolean;
    handleOffCanvas: () => void;
}

const goldColor = "#a67c32"; // اللون الذهبي الجديد

const containerVariants = {
    open: {
        transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const itemVariants = {
    open: { x: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } },
    closed: { x: -20, opacity: 0 },
};

const SocialIconButton = styled(motion.a)(({ theme }) => ({
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "14px",
    color: "rgba(255,255,255,0.6)",
    backgroundColor: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.05)",
    transition: "all 0.3s ease",
    "&:hover": {
        backgroundColor: goldColor, // تغيير هنا
        color: "#fff",
        borderColor: goldColor, // تغيير هنا
        boxShadow: `0 8px 20px ${goldColor}4D`, // تغيير هنا مع شفافية
    },
}));

export default function OffCanvas({ isOffCanvas, handleOffCanvas }: OffCanvasProps) {
    return (
        <Drawer
            anchor="left"
            open={isOffCanvas}
            onClose={handleOffCanvas}
            PaperProps={{
                sx: {
                    width: { xs: "100%", sm: 380 },
                    backgroundColor: "#060606",
                    color: "#fff",
                    p: 0,
                    backgroundImage: "none",
                    borderRight: `1px solid ${goldColor}1A`, // تغيير هنا (10% شفافية)
                },
            }}
        >
            <Stack
                component={motion.div}
                variants={containerVariants}
                initial="closed"
                animate={isOffCanvas ? "open" : "closed"}
                height="100%"
                sx={{ p: 5, position: "relative", overflow: "hidden" }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        top: -50,
                        right: -50,
                        width: 200,
                        height: 200,
                        backgroundColor: goldColor, // تغيير هنا
                        filter: "blur(120px)",
                        opacity: 0.1,
                        zIndex: 0,
                    }}
                />

                {/* HEADER */}
                <Stack
                    component={motion.div}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ zIndex: 1 }}
                    variants={itemVariants}
                >
                    <Box>
                        <Typography variant="h5" fontWeight={800} sx={{ letterSpacing: -0.5 }}>
                            Amr{" "}
                            <Box component="span" sx={{ color: goldColor }}> {/* تغيير هنا */}
                                Mansour
                            </Box>
                        </Typography>
                        <Typography
                            variant="caption"
                            sx={{
                                color: "rgba(255,255,255,0.3)",
                                textTransform: "uppercase",
                                letterSpacing: 2,
                            }}
                        >
                            Creative Developer
                        </Typography>
                    </Box>

                    <IconButton
                        onClick={handleOffCanvas}
                        sx={{
                            backgroundColor: "rgba(255,255,255,0.03)",
                            borderRadius: "12px",
                            p: 1.2,
                            color: "white",
                            transition: "0.3s",
                            "&:hover": {
                                backgroundColor: "rgba(211, 47, 47, 0.1)",
                                color: "#ff4d4d",
                                transform: "rotate(90deg)",
                            },
                        }}
                    >
                        <Iconify icon="solar:close-circle-linear" width={24} />
                    </IconButton>
                </Stack>

                <Divider
                    sx={{ my: 4, borderStyle: "dashed", borderColor: "rgba(255,255,255,0.1)" }}
                    variants={itemVariants}
                    component={motion.hr}
                />

                {/* CONTENT SECTION */}
                <Stack spacing={4} sx={{ zIndex: 1 }}>
                    <Box variants={itemVariants} component={motion.div}>
                        <Typography
                            variant="overline"
                            sx={{ color: goldColor, fontWeight: 700, mb: 1, display: "block" }} // تغيير هنا
                        >
                            About Me
                        </Typography>
                        <Typography
                            sx={{
                                color: "rgba(255,255,255,0.5)",
                                lineHeight: 1.8,
                                fontSize: "0.95rem",
                                fontWeight: 300,
                            }}
                        >
                            I craft high-end digital experiences where <br />
                            <b style={{ color: "#fff" }}>Performance</b> meets{" "}
                            <b style={{ color: "#fff" }}>Aesthetics</b>.
                        </Typography>
                    </Box>

                    {/* CONTACT INFO */}
                    <Stack spacing={3} variants={itemVariants} component={motion.div}>
                        <ContactItem
                            icon="solar:phone-calling-linear"
                            label="Phone"
                            value="+20 115 403 4782"
                        />
                        <ContactItem icon="solar:letter-linear" label="Email" value="mohyamr@gmail.com" />
                        <ContactItem icon="solar:map-point-linear" label="Location" value="Giza, Egypt" />
                    </Stack>
                </Stack>

                <Divider
                    sx={{ my: 4, borderStyle: "dashed", borderColor: "rgba(255,255,255,0.1)" }}
                    variants={itemVariants}
                    component={motion.hr}
                />

                <Stack spacing={2.5} variants={itemVariants} component={motion.div}>
                    <Typography
                        variant="subtitle2"
                        sx={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}
                    >
                        Let's Connect
                    </Typography>

                    <Stack direction="row" spacing={2}>
                        <SocialIcon href="https://facebook.com" icon="ri:facebook-fill" />
                        <SocialIcon href="https://linkedin.com" icon="ri:linkedin-fill" />
                        <SocialIcon href="https://github.com" icon="ri:github-fill" />
                        <SocialIcon href="https://twitter.com" icon="ri:twitter-x-fill" />
                    </Stack>
                </Stack>

                {/* FOOTER TEXT */}
                <Box
                    sx={{ mt: "auto", pt: 4, zIndex: 1 }}
                    variants={itemVariants}
                    component={motion.div}
                >
                    <Typography
                        variant="caption"
                        sx={{
                            color: "rgba(255,255,255,0.2)",
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                        }}
                    >
                        <Iconify icon="solar:copyright-linear" width={14} />
                        2026 Crafted with ❤️ by Amr
                    </Typography>
                </Box>
            </Stack>
        </Drawer>
    );
}

/* ================= HELPERS ================= */

function ContactItem({ icon, label, value }: { icon: string; label: string; value: string }) {
    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <Box
                sx={{
                    width: 40,
                    height: 40,
                    borderRadius: "10px",
                    backgroundColor: `${goldColor}0D`, // تغيير هنا (5% شفافية)
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: goldColor, // تغيير هنا
                }}
            >
                <Iconify icon={icon} width={20} />
            </Box>
            <Stack spacing={0.2}>
                <Typography
                    variant="caption"
                    sx={{
                        color: "rgba(255,255,255,0.3)",
                        textTransform: "uppercase",
                        fontSize: "9px",
                        fontWeight: 700,
                        letterSpacing: 1,
                    }}
                >
                    {label}
                </Typography>
                <Typography variant="body2" fontWeight={500} sx={{ color: "rgba(255,255,255,0.85)" }}>
                    {value}
                </Typography>
            </Stack>
        </Stack>
    );
}

function SocialIcon({ href, icon }: { href: string; icon: string }) {
    return (
        <SocialIconButton
            href={href}
            target="_blank"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <Iconify icon={icon} width={22} />
        </SocialIconButton>
    );
}