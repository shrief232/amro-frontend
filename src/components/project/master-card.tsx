"use client";

import { Box, Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { Project } from "../../types/project";

const goldColor = "#a67c32";

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
    // ده اللون اللي هيملأ الفراغات لو الصورة مش مربعة، خليه نفس لون خلفية الموقع عندك
    backgroundColor: "#111",
    boxShadow: `0 8px 16px ${goldColor}1A, 0 0 0 1px ${goldColor}1A inset`,
    aspectRatio: "1/1", // عشان كلهم يبقوا نفس الطول والعرض بالظبط
    width: "100%",
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    "&:hover": {
        boxShadow: `0 12px 28px ${goldColor}33, 0 0 0 1px ${goldColor}4D inset`,
    }
});

export const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
    const imageUrl = project.thumbnail || "/placeholder-image.jpg";

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
                            // السر هنا: يملأ 100% من المساحة المتاحة له دون قص
                            maxWidth: "100%",
                            maxHeight: "100%",
                            width: "auto",
                            height: "auto",
                            objectFit: "contain",
                            display: "block",
                        }}
                        onError={(e) => {
                            e.currentTarget.src = "/placeholder-image.jpg";
                        }}
                    />

                    {/* Overlay بيظهر بس في الهوفر عشان يدي روح للكارت */}
                    <Box
                        component={motion.div}
                        variants={{
                            hover: { opacity: 1 },
                        }}
                        initial={{ opacity: 0 }}
                        sx={{
                            position: "absolute",
                            inset: 0,
                            bgcolor: `${goldColor}15`, // شفافية خفيفة جداً
                            pointerEvents: "none",
                        }}
                    />
                </ImageContainer>

                <Box
                    sx={{
                        mt: 1.5,
                        px: 0.5,
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
                                fontSize: "10px",
                            }}
                        >
                            {project.category_name}
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: "#fff",
                                fontWeight: 600,
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
                            hover: {
                                x: 3,
                                backgroundColor: goldColor,
                                boxShadow: `0 4px 12px ${goldColor}4D`,
                            },
                        }}
                        style={{
                            width: "32px",
                            height: "32px",
                            borderRadius: "50%",
                            border: `1px solid ${goldColor}33`,
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