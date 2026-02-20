"use client";

import React from "react";
import Link from "next/link";
import {
    AppBar,
    Toolbar,
    Box,
    Stack,
    IconButton,
    Container,
    styled,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import ThemeSwitch from "../../../components/elements/ThemeSwitch";
import Iconify from "../../../components/elements/iconify";
import { usePathname } from "next/navigation";
import OffCanvas from "../offCanvas";
import MobileMenu from "../mobileMenu";
import { PATHS } from "../../../routes/paths";

interface HeaderProps {
    scroll: boolean;
    isMobileMenu: boolean;
    handleMobileMenu: () => void;
    isOffCanvas: boolean;
    handleOffCanvas: () => void;
}

const goldColor = "#a67c32";

const NavLink = styled(Link)(({ theme }) => ({
    color: theme.palette.mode === "dark" ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.8)",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "1.2px",
    fontFamily: "var(--font-syne), sans-serif",
    transition: "0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    whiteSpace: "nowrap",
    "&:hover": {
        color: goldColor,
        letterSpacing: "2px",
    },
}));

export default function HeaderMuiUnified({
     scroll,
     isMobileMenu,
     handleMobileMenu,
     isOffCanvas,
     handleOffCanvas,
 }: HeaderProps) {
    const pathname = usePathname();
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isTablet = useMediaQuery(theme.breakpoints.down("lg"));

    const isInternalPage = pathname !== "/";

    const menuItems = [
        { name: "About", href: PATHS.about },
        { name: "Resume", href: PATHS.resume },
        { name: "Portfolio", href: PATHS.portfolio },
        { name: "Services", href: PATHS.services },
        { name: "Contact", href: PATHS.contact },
    ];

    const socialLinks = [
        { icon: "ri:facebook-circle-fill", url: "http://facebook.com" },
        { icon: "ri:linkedin-fill", url: "http://linkedin.com" },
        { icon: "ri:github-fill", url: "http://github.com" },
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        if (pathname === "/" && (href.startsWith("#") || href.startsWith("/#"))) {
            e.preventDefault();
            const targetId = href.replace("/", "");
            const element = document.querySelector(targetId);
            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    };

    return (
        <>
            <AppBar
                position="fixed"
                elevation={0}
                component={motion.header}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                sx={{
                    backgroundColor: "transparent",
                    backgroundImage: "none",
                    top: 0,
                    pt: scroll ? 1 : { xs: 1.5, md: 3 },
                    transition: "all 0.4s ease",
                    zIndex: 1100,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            px: { xs: 1.5, md: 2 } + " !important",
                            minHeight: { xs: "56px", md: "64px" } + " !important",
                            border: "1px solid",
                            borderColor: isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.05)",
                            borderRadius: { xs: "12px", md: "20px" },
                            backgroundColor: scroll
                                ? isDark
                                    ? "rgba(10, 10, 10, 0.8)"
                                    : "rgba(255, 255, 255, 0.8)"
                                : isDark
                                    ? "rgba(255,255,255,0.02)"
                                    : "rgba(0,0,0,0.02)",
                            backdropFilter: "blur(12px)",
                            transition: "0.4s all ease",
                        }}
                    >
                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={{ xs: 0.5, sm: 1, md: 2 }}
                            sx={{ flex: { xs: 1, sm: "auto" } }}
                        >
                            <IconButton
                                onClick={handleOffCanvas}
                                sx={{
                                    color: "inherit",
                                    p: { xs: 0.5, md: 1 },
                                    opacity: 0.7,
                                    "&:hover": { color: goldColor, opacity: 1 },
                                }}
                            >
                                <Iconify icon="solar:menu-dots-bold-duotone" width={isMobile ? 22 : 26} />
                            </IconButton>

                            <Link href="/" style={{ display: "flex" }}>
                                <Box
                                    component="img"
                                    src="/logo/amr-logo.png"
                                    sx={{
                                        width: { xs: 60, sm: 70, md: 90 },
                                        height: "auto",
                                        filter: isDark ? "brightness(1)" : "invert(1) brightness(0)",
                                        transition: "0.3s ease",
                                    }}
                                />
                            </Link>
                        </Stack>

                        {!isTablet && (
                            <Stack
                                direction="row"
                                spacing={{ md: 2, lg: 4 }}
                                sx={{
                                    display: { xs: "none", lg: "flex" }
                                }}
                            >
                                {menuItems.map((item) => (
                                    <NavLink
                                        key={item.name}
                                        href={item.href}
                                        onClick={(e) => handleScroll(e, item.href)}
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </Stack>
                        )}

                        <Stack
                            direction="row"
                            alignItems="center"
                            spacing={{ xs: 0.5, md: 1.5 }}
                            sx={{ flex: { xs: 1, sm: "auto" }, justifyContent: "flex-end" }}
                        >
                            {!isMobile && (
                                <Stack
                                    direction="row"
                                    spacing={1}
                                    sx={{
                                        mr: 1,
                                        display: { xs: "none", md: "flex" }
                                    }}
                                >
                                    {socialLinks.map((social, idx) => (
                                        <IconButton
                                            key={idx}
                                            component="a"
                                            href={social.url}
                                            target="_blank"
                                            sx={{
                                                color: "inherit",
                                                opacity: 0.5,
                                                "&:hover": { opacity: 1, color: goldColor },
                                            }}
                                        >
                                            <Iconify icon={social.icon} width={18} />
                                        </IconButton>
                                    ))}
                                </Stack>
                            )}

                            <ThemeSwitch />

                            {isTablet && (
                                <IconButton
                                    onClick={handleMobileMenu}
                                    sx={{
                                        ml: 0.5,
                                        bgcolor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)",
                                        borderRadius: "10px",
                                        color: goldColor,
                                    }}
                                >
                                    <Iconify icon="solar:hamburger-menu-linear" width={24} />
                                </IconButton>
                            )}
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>

            <OffCanvas isOffCanvas={isOffCanvas} handleOffCanvas={handleOffCanvas} />
            <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
        </>
    );
}