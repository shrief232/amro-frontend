"use client";

import React, { useState, useEffect } from "react";
import { Box, Container, Stack, Button, CircularProgress } from "@mui/material";
import { usePortfolio } from "../../hooks/use-portfolio";
import Api from "../../lib/api";
import { ProjectCard } from "../project/master-card";

// ================= TYPES =================
interface Category {
   id: number;
   name: string;
   slug: string;
}

export default function PortfolioSection() {
   const [activeSlug, setActiveSlug] = useState<string>("all");
   const [categories, setCategories] = useState<Category[]>([]);
   const { projects, loading } = usePortfolio(activeSlug === "all" ? undefined : activeSlug);

   useEffect(() => {
      const getCats = async () => {
         try {
            const res = await Api.category.list();
            setCategories(res);
         } catch (e) {
            console.error("Failed to fetch categories:", e);
         }
      };
      getCats();
   }, []);

   return (
      <Box sx={{ py: 10, bgcolor: "#060606" }}>
         <Container>
            {/* Dynamic Filter Buttons */}
            <Stack
               direction="row"
               spacing={2}
               justifyContent="center"
               mb={6}
               flexWrap="wrap"
               useFlexGap
            >
               <FilterBtn
                  active={activeSlug === "all"}
                  onClick={() => setActiveSlug("all")}
                  label="All"
               />
               {categories.map((cat) => (
                  <FilterBtn
                     key={cat.id}
                     active={activeSlug === cat.slug}
                     onClick={() => setActiveSlug(cat.slug)}
                     label={cat.name}
                  />
               ))}
            </Stack>

            {/* Content Area */}
            {loading ? (
               <Stack alignItems="center" py={10}>
                  <CircularProgress sx={{ color: "#8B5CF6" }} />
               </Stack>
            ) : (
               <Box
                   sx={{
                       display: "grid",
                       gridTemplateColumns: {
                           xs: "1fr",
                           md: "1fr 1fr",
                           lg: "1fr 1fr 1fr"
                       },
                       gap: 2,
                       width: "100%",
                   }}
               >
                  {projects.length > 0 ? (
                     projects.map((p, i) => (
                        <Box key={p.id} sx={{ breakInside: "avoid", mb: 3 }}>
                           <ProjectCard project={p} index={i} />
                        </Box>
                     ))
                  ) : (
                     <Box
                        sx={{
                           gridColumn: "1 / -1",
                           textAlign: "center",
                           py: 5,
                           color: "rgba(255,255,255,0.4)",
                        }}
                     >
                        No projects found in this category.
                     </Box>
                  )}
               </Box>
            )}
         </Container>
      </Box>
   );
}

// ================= STYLED COMPONENTS =================

interface FilterBtnProps {
   active: boolean;
   onClick: () => void;
   label: string;
}

const FilterBtn = ({ active, onClick, label }: FilterBtnProps) => (
   <Button
      onClick={onClick}
      sx={{
         px: 3,
         py: 1,
         borderRadius: "12px",
         fontSize: "13px",
         fontWeight: 600,
         textTransform: "capitalize",
         fontFamily: "var(--font-syne)",
         color: active ? "#fff" : "rgba(255,255,255,0.4)",
         backgroundColor: active ? "#8B5CF6" : "rgba(255,255,255,0.02)",
         border: "1px solid",
         borderColor: active ? "#8B5CF6" : "rgba(255,255,255,0.1)",
         transition: "all 0.3s ease",
         "&:hover": {
            borderColor: "#8B5CF6",
            backgroundColor: active ? "#7c3aed" : "rgba(139, 92, 246, 0.05)",
            color: "#fff",
         },
      }}
   >
      {label}
   </Button>
);
