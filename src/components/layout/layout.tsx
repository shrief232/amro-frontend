"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AddClassBody from "../elements/AddClassBody";
import BackToTop from "../elements/BackToTop";
import DataBg from "../elements/DataBg";
import ImageHoverEffects from "../elements/ImageHoverEffects";
import Breadcrumb from "./Breadcrumb";
import { LogoLoader } from "../project/logo-loader";

import Footer1 from "./footer/Footer1";

import HeaderMuiUnified from "./header/Header1";
import "../../app/global.css";
import {Box, useMediaQuery, useTheme} from "@mui/material";

const goldColor = "#a67c32";

interface LayoutProps {
    headerStyle?: number;
    footerStyle?: number;
    children?: React.ReactNode;
    breadcrumbTitle?: string;
}

export default function Layout({ breadcrumbTitle, children }: LayoutProps) {
    const [scroll, setScroll] = useState<boolean>(false);
    const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
    const [isOffCanvas, setOffCanvas] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.down("md"));

    const handleMobileMenu = () => {
        const nextState = !isMobileMenu;
        setMobileMenu(nextState);
        if (typeof document !== "undefined") {
            if (nextState) {
                document.body.classList.add("mobile-menu-active");
            } else {
                document.body.classList.remove("mobile-menu-active");
            }
        }
    };

    const handleOffCanvas = () => {
        setOffCanvas(!isOffCanvas);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2800);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
        };
    }, []);

    useEffect(() => {
        const initWow = async () => {
            try {
                const WOW = (await import("wowjs")).default;
                new (WOW as any)({ live: false }).init();
            } catch (error) {
                console.log("WOW.js could not be initialized", error);
            }
        };
        initWow();
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && <LogoLoader key="main-loader" />}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.8 }}
            >
                {/* --- Global Vertical Watermark Start - Responsive --- */}
                <Box
                    sx={{
                        position: "fixed",
                        top: "50%",
                        right: {
                            xs: "-140px",
                            sm: "-120px",
                            md: "-100px",
                            lg: "-70px"
                        },
                        transform: "translateY(-50%) rotate(-90deg)",
                        zIndex: 10,
                        pointerEvents: "none",
                        opacity: { xs: 0.05, sm: 0.08, md: 0.1 }, // زودت الشفافية
                        width: { xs: "350px", sm: "400px", md: "450px" },
                        display: { xs: isMobile ? "flex" : "flex", md: "flex" },
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box
                        component="img"
                        src="/logo/amr-logo.png"
                        alt="Amr Mansour"
                        sx={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain",
                            filter: isDark
                                ? "grayscale(1) brightness(0.8) opacity(0.5)"
                                : "brightness(0) saturate(100%) invert(75%) sepia(80%) saturate(300%) hue-rotate(340deg) opacity(0.7)",
                        }}
                    />
                </Box>
                {/* --- Global Vertical Watermark End --- */}

                <div id="top" />
                <AddClassBody />
                <DataBg />
                <ImageHoverEffects />

                <HeaderMuiUnified
                    scroll={scroll}
                    isMobileMenu={isMobileMenu}
                    handleMobileMenu={handleMobileMenu}
                    isOffCanvas={isOffCanvas}
                    handleOffCanvas={handleOffCanvas}
                />

                <main className="main">
                    {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}
                    {children}
                </main>

                <Footer1 />
                <BackToTop />
            </motion.div>
        </>
    );
}