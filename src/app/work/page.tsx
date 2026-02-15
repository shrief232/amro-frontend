"use client";

import React from "react";
import {
   Box,
   Container,
   Typography,
   Button,
   TextField,
   Stack,
   CircularProgress,
   TextFieldProps,
} from "@mui/material";
import { motion } from "framer-motion";
import Layout from "../../components/layout/layout";
import { usePortfolio } from "../../hooks/use-portfolio";
import { ProjectCard } from "../../components/project/master-card";

// ================= TYPES =================
interface Project {
   id: number;
   title: string;
   thumbnail: string;
   category_name: string;
   category_slug: string;
}

export default function WorkPage() {
   const { projects, loading } = usePortfolio();

   return (
      <Layout headerStyle={1} footerStyle={1}>
         <Box sx={{ bgcolor: "#060606", color: "#fff", minHeight: "100vh" }}>
            {/* ================= HERO SECTION ================= */}
            <Box
               py={{ xs: 10, md: 15 }}
               sx={{ background: "radial-gradient(circle at 50% -20%, #1e1b4b 0%, #060606 80%)" }}
            >
               <Container maxWidth="md">
                  <Stack alignItems="center" spacing={3} textAlign="center">
                     <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                        <Typography
                           variant="overline"
                           sx={{
                              color: "#8B5CF6",
                              fontWeight: 900,
                              letterSpacing: 4,
                              display: "block",
                           }}
                        >
                           Selected Portfolio
                        </Typography>
                        <Typography
                           variant="h2"
                           sx={{ fontFamily: "var(--font-syne)", fontWeight: 800, mt: 2 }}
                        >
                           Crafting Digital <span style={{ color: "#8B5CF6" }}>Experiences</span>
                        </Typography>
                        <Typography
                           sx={{ color: "rgba(255,255,255,0.6)", mt: 2, fontSize: "1.1rem" }}
                        >
                           A collection of visual stories, 3D explorations, and branding identities
                           built with passion and precision.
                        </Typography>
                     </motion.div>
                  </Stack>
               </Container>
            </Box>

            {/* ================= CONTENT SECTION ================= */}
            <Container sx={{ mt: -5, pb: 12 }}>
               {loading ? (
                  <Stack alignItems="center" py={10}>
                     <CircularProgress sx={{ color: "#8B5CF6" }} />
                  </Stack>
               ) : (
                  <>
                     {projects && projects.length > 0 ? (
                        <Box
                           sx={{
                              columnCount: { xs: 1, md: 2 },
                              columnGap: 3,
                              width: "100%",
                           }}
                        >
                           {projects.map((project, index) => (
                              <Box
                                 key={project.id}
                                 sx={{
                                    breakInside: "avoid",
                                    mb: 3,
                                    display: "inline-block",
                                    width: "100%",
                                 }}
                              >
                                 <ProjectCard project={project} index={index} />
                              </Box>
                           ))}
                        </Box>
                     ) : (
                        <Typography textAlign="center" color="rgba(255,255,255,0.5)" py={10}>
                           No projects found. Check your API or Dashboard.
                        </Typography>
                     )}
                  </>
               )}
            </Container>

            {/* ================= STATS BAR ================= */}
            <Box
               sx={{
                  py: 8,
                  borderY: "1px solid rgba(255,255,255,0.05)",
                  bgcolor: "rgba(255,255,255,0.02)",
               }}
            >
               <Container>
                  <Stack
                     direction={{ xs: "column", sm: "row" }}
                     spacing={4}
                     justifyContent="space-around"
                     alignItems="center"
                  >
                     <Stat value="08+" label="Years Experience" />
                     <Stat value="120+" label="Projects Done" />
                     <Stat value="45+" label="Happy Clients" />
                     <Stat value="12+" label="Global Awards" />
                  </Stack>
               </Container>
            </Box>

            {/* ================= CONTACT SECTION ================= */}
            <Box py={15} id="contact">
               <Container>
                  <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 8, md: 10 }}>
                     <Stack flex={1} spacing={3}>
                        <Typography
                           variant="h3"
                           sx={{ fontFamily: "var(--font-syne)", fontWeight: 800 }}
                        >
                           Let's build something{" "}
                           <span style={{ color: "#8B5CF6" }}>extraordinary</span>
                        </Typography>
                        <Typography sx={{ color: "rgba(255,255,255,0.5)", maxWidth: 450 }}>
                           Have a vision? I have the tools to make it visual. Reach out for
                           collaborations or inquiries.
                        </Typography>
                        <Stack spacing={4} sx={{ mt: 2 }}>
                           <ContactItem label="Email" value="hello@elhoot.design" />
                           <ContactItem label="Current Location" value="Cairo, Egypt" />
                        </Stack>
                     </Stack>

                     <Stack
                        flex={1.2}
                        spacing={4}
                        sx={{
                           p: { xs: 3, md: 6 },
                           borderRadius: 4,
                           bgcolor: "rgba(255,255,255,0.01)",
                           border: "1px solid rgba(255,255,255,0.05)",
                        }}
                     >
                        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                           <CustomField label="Name" placeholder="Your name" fullWidth />
                           <CustomField label="Email" placeholder="Your email" fullWidth />
                        </Stack>
                        <CustomField
                           label="Message"
                           placeholder="Tell me about your project"
                           multiline
                           rows={4}
                           fullWidth
                        />
                        <Button
                           variant="contained"
                           sx={{
                              bgcolor: "#8B5CF6",
                              py: 2,
                              borderRadius: "12px",
                              fontWeight: 700,
                              "&:hover": { bgcolor: "#7c3aed" },
                           }}
                        >
                           Send Proposal
                        </Button>
                     </Stack>
                  </Stack>
               </Container>
            </Box>
         </Box>
      </Layout>
   );
}

/* ================= REUSABLE STACK COMPONENTS ================= */

function Stat({ value, label }: { value: string; label: string }) {
   return (
      <Stack textAlign="center" spacing={1} minWidth={150}>
         <Typography
            variant="h3"
            sx={{ fontWeight: 900, color: "#fff", fontFamily: "var(--font-syne)" }}
         >
            {value}
         </Typography>
         <Typography
            sx={{
               color: "#8B5CF6",
               fontWeight: 700,
               fontSize: "0.8rem",
               textTransform: "uppercase",
               letterSpacing: 1,
            }}
         >
            {label}
         </Typography>
      </Stack>
   );
}

function ContactItem({ label, value }: { label: string; value: string }) {
   return (
      <Stack spacing={0.5}>
         <Typography
            sx={{
               color: "rgba(255,255,255,0.4)",
               fontSize: "0.8rem",
               fontWeight: 700,
               textTransform: "uppercase",
            }}
         >
            {label}
         </Typography>
         <Typography variant="h6" sx={{ color: "#fff", fontWeight: 600 }}>
            {value}
         </Typography>
      </Stack>
   );
}

interface CustomFieldProps extends Omit<TextFieldProps, "variant"> {
   label: string;
}

const CustomField = ({ label, ...props }: CustomFieldProps) => (
   <Stack spacing={1} width="100%">
      <Typography sx={{ fontSize: "0.9rem", fontWeight: 600, color: "rgba(255,255,255,0.8)" }}>
         {label}
      </Typography>
      <TextField
         {...props}
         variant="standard"
         InputProps={{
            disableUnderline: false,
            sx: {
               color: "#fff",
               pb: 1,
               "&:before": { borderBottomColor: "rgba(255,255,255,0.1)" },
               "&:after": { borderBottomColor: "#8B5CF6" },
            },
         }}
         sx={{ "& label": { display: "none" } }}
      />
   </Stack>
);
