"use client";

import React, { useState } from "react";
import { Box, Typography, Stack, Container, styled, Dialog, IconButton, Divider, useTheme } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import Iconify from "../../components/elements/iconify";

const goldColor = "#a67c32";

const CardWrapper = styled(motion.div)(({ theme }) => ({
   padding: "24px",
   borderRadius: "20px",
   backgroundColor: theme.palette.mode === "dark"
       ? "rgba(255, 255, 255, 0.03)"
       : "rgba(0, 0, 0, 0.02)",
   backdropFilter: "blur(10px)",
   border: `1px solid ${goldColor}1A`,
   position: "relative",
   width: "100%",
   cursor: "pointer",
   transition: "0.3s all ease-in-out",
   boxShadow: theme.palette.mode === "dark"
       ? `0 4px 20px ${goldColor}0D`
       : `0 4px 20px ${goldColor}0D`,
   "&:hover": {
      borderColor: `${goldColor}80`,
      backgroundColor: theme.palette.mode === "dark"
          ? `${goldColor}0D`
          : `${goldColor}08`,
      transform: "translateX(10px)",
      boxShadow: theme.palette.mode === "dark"
          ? `0 8px 30px ${goldColor}26`
          : `0 8px 30px ${goldColor}1A`,
   },
}));

const TimelineLine = styled(Box)({
   position: "absolute",
   left: "7px",
   top: "30px",
   bottom: "-30px",
   width: "1px",
   background: `linear-gradient(to bottom, ${goldColor} 0%, ${goldColor}00 100%)`,
});

const resumeData = [
   {
      type: "work",
      title: "Art Director / Designer",
      company: "GU University (Bahrain) - Full Time Remote",
      period: "2024 - Present",
      details: "Leading creative direction for 2D, outdoor, and social media projects. Responsible for finalizing high-end visual designs.",
   },
   {
      type: "work",
      title: "Art Director / Designer",
      company: "Qaaf Coffee (KSA) - Remote Part Time",
      period: "2023 - 2024",
      details: "Specialized in 2D/3D branding, packaging, sticker design, and social media visual identity.",
   },
   {
      type: "work",
      title: "Art Director",
      company: "Media Link One",
      period: "2020 - 2024",
      details: "As Art Director (2D - 3D - Motion 2D - Motion 3D) Finalizer. Managing creative workflows and project delivery.",
   },
   {
      type: "work",
      title: "Senior Graphic Designer",
      company: "Alam Rakmi",
      period: "2019 - 2020",
      details: "Senior role focusing on 2D, 3D, and Motion graphics as a Finalizer.",
   },
   {
      type: "work",
      title: "3D Visualizer - Events",
      company: "Work at Taco Network",
      period: "2019",
      details: "Designing immersive 3D environments and visualizations for large-scale events.",
   },
   {
      type: "education",
      title: "Bachelor of Graphic Design",
      company: "Higher Institute for Applied Arts",
      period: "May 2017",
      details: "The Higher Institute For Applied Arts - 5th Compound - New Cairo. \nTotal Grade: Very Good. \nGraduation Project: Excellent.",
   },
   {
      type: "work",
      title: "Info Graphic / 3D Production",
      company: "Media Production City",
      period: "2014 - 2015",
      details: "Worked/Trained in Info-graphic video motion, scripts, scenarios, character sketches, and After Effects production.",
   },
];

export default function ExperienceSection() {
   const [selectedItem, setSelectedItem] = useState<any>(null);
   const theme = useTheme();
   const isDark = theme.palette.mode === "dark";

   const workItems = resumeData.filter((item) => item.type === "work");
   const eduItems = resumeData.filter((item) => item.type === "education");

   return (
       <Box
           sx={{
              py: 15,
              bgcolor: isDark ? "#050505" : "#f8f8f8",
              position: "relative",
              overflow: "hidden",
           }}
           id="resume"
       >
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
             {/* Header */}
             <Stack spacing={2} sx={{ mb: 10, textAlign: "center" }}>
                <Typography
                    variant="overline"
                    sx={{ color: goldColor, fontWeight: 900, letterSpacing: 4 }}
                >
                   Resume
                </Typography>
                <Typography
                    variant="h2"
                    fontWeight={900}
                    sx={{
                       color: isDark ? "#fff" : "#111",
                    }}
                >
                   Education & <span style={{ color: goldColor }}>Experience</span>
                </Typography>
             </Stack>

             <Stack
                 direction={{ xs: "column", md: "row" }}
                 spacing={8}
                 justifyContent="center"
                 alignItems="flex-start"
             >
                {/* Education Column */}
                <Stack spacing={4} sx={{ flex: 1, width: "100%" }}>
                   <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                      <Iconify icon="solar:history-bold-duotone" width={32} color={goldColor} />
                      <Typography
                          variant="h4"
                          fontWeight={900}
                          sx={{ color: isDark ? "#fff" : "#111" }}
                      >
                         Education
                      </Typography>
                   </Stack>
                   {eduItems.map((item, index) => (
                       <TimelineItem
                           key={index}
                           data={item}
                           isLast={index === eduItems.length - 1}
                           onOpen={() => setSelectedItem(item)}
                           isDark={isDark}
                       />
                   ))}
                </Stack>

                {/* Experience Column */}
                <Stack spacing={4} sx={{ flex: 1, width: "100%" }}>
                   <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                      <Iconify icon="solar:case-round-bold-duotone" width={32} color={goldColor} />
                      <Typography
                          variant="h4"
                          fontWeight={900}
                          sx={{ color: isDark ? "#fff" : "#111" }}
                      >
                         Experience
                      </Typography>
                   </Stack>
                   {workItems.map((item, index) => (
                       <TimelineItem
                           key={index}
                           data={item}
                           isLast={index === workItems.length - 1}
                           onOpen={() => setSelectedItem(item)}
                           isDark={isDark}
                       />
                   ))}
                </Stack>
             </Stack>
          </Container>

          {/* Lightbox Dialog */}
          <AnimatePresence>
             {selectedItem && (
                 <Dialog
                     fullWidth
                     maxWidth="xs"
                     open={!!selectedItem}
                     onClose={() => setSelectedItem(null)}
                     PaperProps={{
                        sx: {
                           bgcolor: isDark ? "#0A0A0A" : "#ffffff",
                           borderRadius: "24px",
                           border: `1px solid ${goldColor}4D`,
                           boxShadow: isDark
                               ? `0 20px 40px ${goldColor}33, 0 0 0 1px ${goldColor}1A inset`
                               : `0 20px 40px ${goldColor}26, 0 0 0 1px ${goldColor}1A inset`,
                           p: 4,
                           color: isDark ? "#fff" : "#111",
                        },
                     }}
                 >
                    <IconButton
                        onClick={() => setSelectedItem(null)}
                        sx={{
                           position: "absolute",
                           right: 16,
                           top: 16,
                           color: isDark ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"
                        }}
                    >
                       <Iconify icon="solar:close-circle-bold" width={28} />
                    </IconButton>

                    <Typography variant="caption" sx={{ color: goldColor, fontWeight: 800 }}>
                       {selectedItem.period}
                    </Typography>
                    <Typography variant="h5" fontWeight={900} sx={{ mt: 1 }}>
                       {selectedItem.title}
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        sx={{
                           color: isDark ? "rgba(255,255,255,0.5)" : "rgba(0,0,0,0.5)",
                           mb: 3
                        }}
                    >
                       {selectedItem.company}
                    </Typography>
                    <Divider sx={{ borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)", mb: 3 }} />
                    <Typography
                        variant="body1"
                        sx={{
                           color: isDark ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.7)",
                           lineHeight: 1.8,
                           whiteSpace: "pre-line"
                        }}
                    >
                       {selectedItem.details}
                    </Typography>
                 </Dialog>
             )}
          </AnimatePresence>
       </Box>
   );
}

function TimelineItem({ data, isLast, onOpen, isDark }: any) {
   return (
       <Stack direction="row" spacing={3} sx={{ position: "relative", width: "100%" }}>
          {/* Dot & Line */}
          <Box sx={{ position: "relative", flexShrink: 0 }}>
             <Box
                 sx={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "50%",
                    bgcolor: goldColor,
                    boxShadow: `0 0 20px ${goldColor}, 0 4px 10px ${goldColor}4D`,
                    zIndex: 2,
                    position: "relative",
                    mt: "28px"
                 }}
             />
             {!isLast && <TimelineLine />}
          </Box>

          <CardWrapper
              onClick={onOpen}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
          >
             <Stack spacing={1}>
                <Typography
                    variant="h6"
                    fontWeight={800}
                    sx={{
                       color: isDark ? "#fff" : "#111",
                       lineHeight: 1.2
                    }}
                >
                   {data.title}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                       color: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.5)"
                    }}
                >
                   {data.company}
                </Typography>

                <Box sx={{
                   mt: 1,
                   px: 1.5,
                   py: 0.5,
                   width: "fit-content",
                   borderRadius: "100px",
                   border: `1px solid ${goldColor}33`,
                   bgcolor: isDark ? `${goldColor}0D` : `${goldColor}08`,
                   boxShadow: `0 2px 8px ${goldColor}1A`,
                }}>
                   <Typography variant="caption" sx={{ color: goldColor, fontWeight: 700 }}>
                      {data.period}
                   </Typography>
                </Box>
             </Stack>
          </CardWrapper>
       </Stack>
   );
}