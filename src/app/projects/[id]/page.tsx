"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Box, Container, Typography, Stack, Divider } from "@mui/material";
import Api from "../../../lib/api";
import { CONFIG } from "../../../global-config";
import Layout from "@/src/components/layout/layout";

export default function ProjectDetails() {
   const { id } = useParams();
   const [project, setProject] = useState<any>(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchProject = async () => {
         try {
            const data = await Api.project.retrieve(id as string);
            setProject(data);
         } catch (err) {
            console.error("Error fetching project:", err);
         } finally {
            setLoading(false);
         }
      };
      if (id) fetchProject();
   }, [id]);

   if (loading) return null;

   if (!project)
      return (
         <Layout headerStyle={1} footerStyle={1}>
            <Box sx={{ py: 20, textAlign: "center", color: "white" }}>
               <Typography variant="h4">Project not found</Typography>
            </Box>
         </Layout>
      );

   return (
      <Layout headerStyle={1} footerStyle={1}>
         <Box sx={{ bgcolor: "#060606", minHeight: "100vh", color: "white", pb: 10 }}>
            <Box sx={{ pt: { xs: 15, md: 25 }, pb: 10, textAlign: "center" }}>
               <Container maxWidth="md">
                  <Stack spacing={2} alignItems="center">
                     <Typography
                        variant="overline"
                        sx={{ color: "#8B5CF6", fontWeight: 800, letterSpacing: 3 }}
                     >
                        {project.category_name}
                     </Typography>
                     <Typography
                        variant="h1"
                        sx={{
                           fontWeight: 900,
                           fontSize: { xs: "2.5rem", md: "5rem" },
                           fontFamily: "var(--font-syne)",
                           lineHeight: 1.1,
                        }}
                     >
                        {project.title}
                     </Typography>
                     <Typography
                        variant="h6"
                        sx={{
                           color: "rgba(255,255,255,0.6)",
                           fontWeight: 400,
                           lineHeight: 1.8,
                           maxWidth: "700px",
                           mt: 3,
                        }}
                     >
                        {project.description}
                     </Typography>
                  </Stack>
               </Container>
            </Box>

            {/* 2. Project Info Bar */}
            <Container sx={{ mb: 10 }}>
               <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />
               <Stack
                  direction={{ xs: "column", md: "row" }}
                  spacing={{ xs: 4, md: 10 }}
                  sx={{ py: 6, px: 2 }}
                  justifyContent="center"
                  alignItems={{ xs: "flex-start", md: "center" }}
               >
                  <InfoItem label="Client" value={project.client_name || "Personal Project"} />
                  <InfoItem
                     label="Date"
                     value={
                        project.date_completed
                           ? new Date(project.date_completed).getFullYear().toString()
                           : "2026"
                     }
                  />
                  <InfoItem label="Category" value={project.category_name} />
               </Stack>
               <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />
            </Container>

            {/* 3. Media Gallery */}
            <Container maxWidth="lg">
               <Stack spacing={8}>
                  {project.media?.map((item: any) => (
                     <Box
                        key={item.id}
                        sx={{
                           width: "100%",
                           borderRadius: "32px",
                           overflow: "hidden",
                           boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
                           border: "1px solid rgba(255,255,255,0.05)",
                           bgcolor: "#0A0A0A",
                        }}
                     >
                        {item.media_type === "image" ? (
                           <Box
                              component="img"
                              src={
                                 item.source?.startsWith("http")
                                    ? item.source
                                    : `${CONFIG.serverUrl}${item.source}`
                              }
                              sx={{
                                 width: "100%",
                                 height: "auto",
                                 display: "block",
                                 transition: "transform 0.8s cubic-bezier(0.2, 0, 0.2, 1)",
                                 "&:hover": { scale: 1.03 },
                              }}
                           />
                        ) : (
                           <Box sx={{ p: 10, textAlign: "center" }}>
                              <Typography color="gray">Video Player Placeholder</Typography>
                           </Box>
                        )}
                     </Box>
                  ))}
               </Stack>
            </Container>
         </Box>
      </Layout>
   );
}

const InfoItem = ({ label, value }: { label: string; value: string }) => (
   <Stack spacing={1}>
      <Typography
         variant="caption"
         sx={{ color: "#8B5CF6", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2 }}
      >
         {label}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 800, fontSize: "1.2rem", color: "#fff" }}>
         {value}
      </Typography>
   </Stack>
);
