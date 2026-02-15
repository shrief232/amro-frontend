"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AddClassBody from "../elements/AddClassBody";
import BackToTop from "../elements/BackToTop";
import DataBg from "../elements/DataBg";
import ImageHoverEffects from "../elements/ImageHoverEffects";
import Breadcrumb from "./Breadcrumb";
import { LogoLoader } from "../project/logo-loader";

// Footers
import Footer1 from "./footer/Footer1";
import Footer2 from "./footer/Footer2";
import Footer3 from "./footer/Footer3";

import HeaderMuiUnified from "./header/Header1";
import "../../app/global.css";
import {Box} from "@mui/material";

interface LayoutProps {
   headerStyle?: number;
   footerStyle?: number;
   children?: React.ReactNode;
   breadcrumbTitle?: string;
}

export default function Layout({ footerStyle, breadcrumbTitle, children }: LayoutProps) {
   const [scroll, setScroll] = useState<boolean>(false);
   const [isMobileMenu, setMobileMenu] = useState<boolean>(false);
   const [isOffCanvas, setOffCanvas] = useState<boolean>(false);
   const [isLoading, setIsLoading] = useState<boolean>(true);

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
             {/* --- Global Vertical Watermark Start --- */}
             <Box
                 sx={{
                    position: "fixed",
                    top: "50%",
                    right: { xs: "-110px", md: "-70px" },
                    transform: "translateY(-50%) rotate(-90deg)",
                    zIndex: 10,
                    pointerEvents: "none",
                    opacity: 0.04,
                    width: "450px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                 }}
             >
                <img
                    src="/logo/amr-logo.png"
                    alt="Amr Mansour"
                    style={{
                       width: "100%",
                       height: "auto",
                       objectFit: "contain",
                       filter: "grayscale(1)",
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

             {footerStyle === 2 ? <Footer2 /> : footerStyle === 3 ? <Footer3 /> : <Footer1 />}

             <BackToTop />
          </motion.div>
       </>
   );
}
