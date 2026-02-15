"use client";

import { Box, Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
import { CONFIG } from "../../global-config";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";

interface Project {
    id: number | string;
    thumbnail: string;
    title: string;
    category_name: string;
}

const CardWrapper = styled(motion.div)({
    position: "relative",
    width: "100%",
    cursor: "pointer",
    marginBottom: "16px",
});

const ImageContainer = styled(Box)({
    position: "relative",
    borderRadius: "16px",
    overflow: "hidden",
    backgroundColor: "#1A1A1A",
    boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
    aspectRatio: "1/1",
    width: "100%",
    height: "auto",
});

export const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const imageUrl = project.thumbnail?.startsWith("http")
        ? project.thumbnail
        : `${CONFIG.serverUrl}${project.thumbnail}`;

    return (
        <Link href={`/projects/${project.id}`} style={{ textDecoration: "none" }}>
            <CardWrapper
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover="hover"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
                <ImageContainer>
                    <motion.img
                        src={imageUrl}
                        alt={project.title}
                        variants={{
                            hover: { scale: 1.05 },
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            display: "block",
                        }}
                    />

                    <Box
                        component={motion.div}
                        variants={{
                            hover: { opacity: 1 },
                        }}
                        initial={{ opacity: 0 }}
                        sx={{
                            position: "absolute",
                            inset: 0,
                            bgcolor: "rgba(139, 92, 246, 0.15)",
                            mixBlendMode: "overlay",
                        }}
                    />
                </ImageContainer>

                <Box
                    sx={{
                        mt: 1.5,  // 2 -> 1.5
                        px: 0.5,  // 1 -> 0.5
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Box sx={{ maxWidth: "calc(100% - 45px)" }}>
                        <Typography
                            variant="caption"
                            sx={{
                                color: "rgba(255,255,255,0.5)",
                                fontWeight: 600,
                                letterSpacing: 1,
                                textTransform: "uppercase",
                                display: "block",
                                mb: 0.2,
                                fontSize: "10px",  // 11px -> 10px
                            }}
                        >
                            {project.category_name}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#fff",
                                fontWeight: 600,  // 700 -> 600
                                fontFamily: "var(--font-syne)",
                                fontSize: "15px",
                                lineHeight: 1.2,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {project.title}
                        </Typography>
                    </Box>
                    <motion.div
                        variants={{
                            hover: { x: 3, backgroundColor: "#8B5CF6" },
                        }}
                        style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            border: "1px solid rgba(255,255,255,0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 0.3s ease",
                            flexShrink: 0,
                        }}
                    >
                        <ArrowForwardIcon sx={{ color: "#fff", fontSize: "16px" }} />
                    </motion.div>
                </Box>
            </CardWrapper>
        </Link>
    );
};