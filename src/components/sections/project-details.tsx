"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Box, Container, Typography, Stack, CircularProgress, Divider } from "@mui/material";
import Api from "../../lib/api";
import { CONFIG } from "../../global-config";

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
      fetchProject();
   }, [id]);

   if (loading)
      return (
         <Stack
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: "100vh", bgcolor: "#060606" }}
         >
            <CircularProgress sx={{ color: "#8B5CF6" }} />
         </Stack>
      );

   if (!project) return <Typography>Project not found</Typography>;

   return (
      <Box sx={{ bgcolor: "#060606", minHeight: "100vh", color: "white", pb: 10 }}>
         {/* 1. Hero Section */}
         <Box sx={{ pt: 15, pb: 10, textAlign: "center" }}>
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
                        fontSize: { xs: "3rem", md: "5rem" },
                        fontFamily: "var(--font-syne)",
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
                     }}
                  >
                     {project.description}
                  </Typography>
               </Stack>
            </Container>
         </Box>

         {/* 2. Project Info Bar (Clean Stack Version) */}
         <Container sx={{ mb: 10 }}>
            <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />
            <Stack
               direction={{ xs: "column", md: "row" }}
               spacing={{ xs: 4, md: 10 }}
               sx={{ py: 5, px: 2 }}
               justifyContent="center"
               alignItems={{ xs: "flex-start", md: "center" }}
            >
               <InfoItem label="Client" value={project.client_name || "Personal Project"} />
               <InfoItem
                  label="Date"
                  value={new Date(project.date_completed).getFullYear().toString()}
               />
               <InfoItem label="Category" value={project.category_name} />
            </Stack>
            <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />
         </Container>

         {/* 3. Media Gallery (Vertical Stack) */}
         <Container maxWidth="lg">
            <Stack spacing={6}>
               {project.media?.map((item: any) => (
                  <Box
                     key={item.id}
                     sx={{
                        width: "100%",
                        borderRadius: "32px",
                        overflow: "hidden",
                        boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
                        border: "1px solid rgba(255,255,255,0.05)",
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
                              display: "block",
                              transition: "transform 0.5s ease-in-out",
                              "&:hover": { scale: 1.02 },
                           }}
                        />
                     ) : (
                        <Box sx={{ p: 5, textAlign: "center", bgcolor: "#111" }}>
                           <Typography>Video Content</Typography>
                        </Box>
                     )}
                  </Box>
               ))}
            </Stack>
         </Container>
      </Box>
   );
}

const InfoItem = ({ label, value }: { label: string; value: string }) => (
   <Stack spacing={0.5}>
      <Typography
         variant="caption"
         sx={{ color: "#8B5CF6", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1 }}
      >
         {label}
      </Typography>
      <Typography variant="h6" sx={{ fontWeight: 800, fontSize: "1.1rem" }}>
         {value}
      </Typography>
   </Stack>
);
