"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { Box, Container, Typography, Stack, Button, useTheme, CardMedia } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Iconify from "../../components/elements/iconify";
import { LogoLoader } from "../../components/project/logo-loader";

const PRIMARY_COLOR = "#ff6b00";

export default function HomeAbout() {
   const theme = useTheme();
   const isDark = theme.palette.mode === "dark";
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setIsLoading(false);
      }, 2500);
      return () => clearTimeout(timer);
   }, []);

   return (
      <>
         <AnimatePresence>{isLoading && <LogoLoader key="loader" />}</AnimatePresence>
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 0 : 1 }}
            transition={{ duration: 1 }}
         >
            <Box
               component="section"
               id="about"
               sx={{ position: "relative", pt: 16, pb: 4, overflow: "hidden" }}
            >
               <Container maxWidth="lg">
                  <Box
                     component={motion.div}
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 1, ease: "circOut" }}
                     sx={{
                        border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
                        borderRadius: 4,
                        position: "relative",
                        overflow: "hidden",
                        backdropFilter: "blur(10px)",
                        background: isDark
                           ? "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0) 100%)"
                           : "#fff",
                     }}
                  >
                     <Box sx={{ px: { xs: 3, md: 8 }, py: { xs: 8, md: 10 } }}>
                        <Stack
                           direction={{ xs: "column", md: "row" }}
                           spacing={8}
                           alignItems="center"
                        >
                           {/* LEFT SIDE: IMAGE */}
                           <Box sx={{ flex: 1, position: "relative" }}>
                              <Box
                                 component={motion.div}
                                 whileHover={{ scale: 1.02 }}
                                 sx={{
                                    position: "relative",
                                    zIndex: 2,
                                    borderRadius: 3,
                                    overflow: "hidden",
                                 }}
                              >
                                 <CardMedia
                                    component="img"
                                    image="/personal/Amr_Hero.png"
                                    alt="Amr"
                                    sx={{
                                       width: "100%",
                                       maxWidth: 460,
                                       height: "auto",
                                       display: "block",
                                       mx: "auto",
                                       filter: isDark ? "grayscale(0.3) contrast(1.1)" : "none",
                                       borderRadius: 2,
                                    }}
                                 />
                              </Box>
                              <Box
                                 sx={{
                                    position: "absolute",
                                    inset: -20,
                                    border: `2px solid ${PRIMARY_COLOR}`,
                                    opacity: 0.1,
                                    borderRadius: 4,
                                    zIndex: 1,
                                 }}
                              />
                           </Box>

                           {/* RIGHT SIDE: CONTENT */}
                           <Stack flex={1.2} spacing={3}>
                              <Stack direction="row" spacing={1} alignItems="center">
                                 <Typography
                                    sx={{
                                       color: PRIMARY_COLOR,
                                       fontFamily: "monospace",
                                       fontWeight: 700,
                                    }}
                                 >
                                    &lt;h2&gt;
                                 </Typography>
                                 <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 500, letterSpacing: 1 }}
                                 >
                                    About Me
                                 </Typography>
                                 <Typography
                                    sx={{
                                       color: PRIMARY_COLOR,
                                       fontFamily: "monospace",
                                       fontWeight: 700,
                                    }}
                                 >
                                    &lt;/h2&gt;
                                 </Typography>
                              </Stack>

                              <Typography
                                 variant="h3"
                                 sx={{
                                    fontWeight: 900,
                                    lineHeight: 1.2,
                                    fontFamily: "var(--font-syne)",
                                 }}
                              >
                                 Transforming Ideas Into <br />
                                 <Box
                                    component="span"
                                    sx={{
                                       color: PRIMARY_COLOR,
                                       textDecoration: "underline",
                                       textDecorationColor: "rgba(255,107,0,0.2)",
                                       textUnderlineOffset: "8px",
                                    }}
                                 >
                                    {" "}
                                    Visual Stories{" "}
                                 </Box>
                              </Typography>

                              <Typography
                                 sx={{
                                    color: isDark ? "rgba(255,255,255,0.5)" : "text.secondary",
                                    fontSize: "1.1rem",
                                    lineHeight: 1.8,
                                    fontWeight: 300,
                                 }}
                              >
                                 I bridge the gap between design and technology. With a focus on
                                 aesthetic balance and functional precision, I help brands build
                                 digital experiences that resonate.
                              </Typography>

                              <Box sx={{ py: 2 }}>
                                 <Marquee speed={30} gradient={false} pauseOnHover>
                                    <Stack direction="row" spacing={4} sx={{ pr: 4 }}>
                                       {[
                                          "Photoshop",
                                          "After Effects",
                                          "Figma",
                                          "Motion Design",
                                          "Branding",
                                       ].map((skill) => (
                                          <Typography
                                             key={skill}
                                             sx={{
                                                fontWeight: 800,
                                                fontSize: "0.8rem",
                                                textTransform: "uppercase",
                                                letterSpacing: 2,
                                                color: isDark
                                                   ? "rgba(255,255,255,0.2)"
                                                   : "rgba(0,0,0,0.2)",
                                             }}
                                          >
                                             • {skill}
                                          </Typography>
                                       ))}
                                    </Stack>
                                 </Marquee>
                              </Box>

                              <Stack direction="row" spacing={3} alignItems="center">
                                 <Button
                                    component={Link}
                                    href="/assets/resume.pdf"
                                    variant="outlined"
                                    sx={{
                                       borderColor: PRIMARY_COLOR,
                                       color: isDark ? "#fff" : "#000",
                                       px: 4,
                                       py: 1.5,
                                       borderRadius: 10,
                                       "&:hover": {
                                          borderColor: PRIMARY_COLOR,
                                          bgcolor: "rgba(255,107,0,0.05)",
                                       },
                                    }}
                                 >
                                    Download CV
                                 </Button>
                                 <Stack
                                    direction="row"
                                    spacing={1}
                                    component={Link}
                                    href="#contact"
                                    sx={{
                                       color: PRIMARY_COLOR,
                                       textDecoration: "none",
                                       fontWeight: 700,
                                       fontSize: "0.9rem",
                                    }}
                                 >
                                    <Typography variant="body2" sx={{ fontWeight: 800 }}>
                                       Let's Talk
                                    </Typography>
                                    <Iconify icon="solar:arrow-right-linear" width={18} />
                                 </Stack>
                              </Stack>
                           </Stack>
                        </Stack>
                     </Box>
                  </Box>
               </Container>

               {isDark && (
                  <Box
                     sx={{
                        position: "absolute",
                        top: "20%",
                        right: "-5%",
                        width: "400px",
                        height: "400px",
                        background: `radial-gradient(circle, ${PRIMARY_COLOR}15 0%, transparent 70%)`,
                        filter: "blur(60px)",
                        zIndex: -1,
                     }}
                  />
               )}
            </Box>
         </motion.div>
      </>
   );
}
