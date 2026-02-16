"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Box, Container, Typography, Stack, Divider, useTheme } from "@mui/material";
import Layout from "@/src/components/layout/layout";

const goldColor = "#a67c32";

interface Project {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    thumbnail_url?: string;
    category_name: string;
    category_slug: string;
    client_name: string;
    date_completed: string | null;
    media: {
        id: number;
        media_type: string;
        source: string;
        order: number;
    }[];
}

export default function ProjectDetails() {
    const { id } = useParams();
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";

    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProject = async () => {
            setLoading(true);
            try {
                const indexResponse = await fetch('/projects/index.json');
                const indexData = await indexResponse.json();

                for (const cat of indexData.categories) {
                    try {
                        const response = await fetch(cat.dataFile);
                        const categoryData = await response.json();

                        const foundProject = categoryData.projects.find(
                            (p: Project) => p.id.toString() === id
                        );

                        if (foundProject) {
                            setProject(foundProject);
                            break;
                        }
                    } catch (error) {
                        console.error(`Error loading ${cat.name}:`, error);
                    }
                }
            } catch (error) {
                console.error("Failed to load project:", error);
            } finally {
                setLoading(false);
            }
        };

        if (id) loadProject();
    }, [id]);

    if (loading) return null;

    if (!project) {
        return (
            <Layout headerStyle={1} footerStyle={1}>
                <Box sx={{
                    py: 20,
                    textAlign: "center",
                    color: isDark ? "#fff" : "#111",
                    bgcolor: isDark ? "#060606" : "#f8f8f8",
                    minHeight: "100vh",
                    transition: "all 0.3s ease",
                }}>
                    <Typography variant="h4">Project not found</Typography>
                </Box>
            </Layout>
        );
    }

    return (
        <Layout headerStyle={1} footerStyle={1}>
            <Box sx={{
                bgcolor: isDark ? "#060606" : "#f8f8f8",
                minHeight: "100vh",
                color: isDark ? "#fff" : "#111",
                pb: 10,
                transition: "all 0.3s ease",
            }}>
                {/* Hero Section */}
                <Box sx={{ pt: { xs: 15, md: 25 }, pb: 10, textAlign: "center" }}>
                    <Container maxWidth="md">
                        <Stack spacing={2} alignItems="center">
                            <Typography
                                variant="overline"
                                sx={{ color: goldColor, fontWeight: 800, letterSpacing: 3 }}
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
                                    color: isDark ? "#fff" : "#111",
                                }}
                            >
                                {project.title}
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: isDark ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)",
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

                {/* Project Info Bar */}
                <Container sx={{ mb: 10 }}>
                    <Divider sx={{
                        borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
                    }} />
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={{ xs: 4, md: 10 }}
                        sx={{ py: 6, px: 2 }}
                        justifyContent="center"
                        alignItems={{ xs: "flex-start", md: "center" }}
                    >
                        <InfoItem label="Client" value={project.client_name || "Personal Project"} isDark={isDark} />
                        <InfoItem
                            label="Date"
                            value={
                                project.date_completed
                                    ? new Date(project.date_completed).getFullYear().toString()
                                    : "2026"
                            }
                            isDark={isDark}
                        />
                        <InfoItem label="Category" value={project.category_name} isDark={isDark} />
                    </Stack>
                    <Divider sx={{
                        borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
                    }} />
                </Container>

                {/* Media Gallery */}
                <Container maxWidth="lg">
                    <Stack spacing={8}>
                        {project.media?.map((item) => (
                            <Box
                                key={item.id}
                                sx={{
                                    width: "100%",
                                    borderRadius: "32px",
                                    overflow: "hidden",
                                    boxShadow: isDark
                                        ? `0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px ${goldColor}1A inset`
                                        : `0 40px 80px rgba(0,0,0,0.1), 0 0 0 1px ${goldColor}1A inset`,
                                    bgcolor: isDark ? "#0A0A0A" : "#ffffff",
                                    transition: "all 0.5s ease",
                                    "&:hover": {
                                        boxShadow: isDark
                                            ? `0 50px 100px rgba(0,0,0,0.7), 0 0 0 1px ${goldColor}33 inset`
                                            : `0 50px 100px rgba(0,0,0,0.15), 0 0 0 1px ${goldColor}33 inset`,
                                    }
                                }}
                            >
                                {item.media_type === "image" ? (
                                    <Box
                                        component="img"
                                        src={item.source}
                                        alt={`${project.title} - ${item.order + 1}`}
                                        sx={{
                                            width: "100%",
                                            height: "auto",
                                            display: "block",
                                            transition: "transform 0.8s cubic-bezier(0.2, 0, 0.2, 1)",
                                            "&:hover": { transform: "scale(1.03)" },
                                        }}
                                    />
                                ) : (
                                    <Box sx={{
                                        position: "relative",
                                        width: "100%",
                                        aspectRatio: "16/9",
                                        bgcolor: isDark ? "#0A0A0A" : "#f5f5f5",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        {item.source.includes('youtube') || item.source.includes('youtu.be') ? (
                                            <iframe
                                                src={item.source.replace('watch?v=', 'embed/')}
                                                title={`${project.title} video`}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    border: 'none'
                                                }}
                                                allowFullScreen
                                            />
                                        ) : item.source.includes('vimeo') ? (
                                            <iframe
                                                src={item.source.replace('vimeo.com', 'player.vimeo.com/video')}
                                                title={`${project.title} video`}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    border: 'none'
                                                }}
                                                allowFullScreen
                                            />
                                        ) : (
                                            <Typography color="gray" sx={{ p: 5, textAlign: 'center' }}>
                                                🎥 Video Player - {item.source}
                                            </Typography>
                                        )}
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

const InfoItem = ({ label, value, isDark }: { label: string; value: string; isDark: boolean }) => (
    <Stack spacing={1}>
        <Typography
            variant="caption"
            sx={{ color: goldColor, fontWeight: 700, textTransform: "uppercase", letterSpacing: 2 }}
        >
            {label}
        </Typography>
        <Typography variant="h6" sx={{
            fontWeight: 800,
            fontSize: "1.2rem",
            color: isDark ? "#fff" : "#111"
        }}>
            {value}
        </Typography>
    </Stack>
);