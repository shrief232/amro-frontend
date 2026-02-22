"use client";

import React, { useState, useEffect } from "react";
import { Box, Container, Stack, Button, CircularProgress, useTheme } from "@mui/material";
import { ProjectCard } from "../project/master-card";

const goldColor = "#a67c32";

interface Category {
    id: number;
    name: string;
    slug: string;
    dataFile: string;
}

interface Project {
    id: number;
    title: string;
    description: string;
    thumbnail: string;
    thumbnail_url?: string;
    category_name: string;
    category_slug: string;
    media: any[];
    client_name: string;
    date_completed: string | null;
}

interface CategoryData {
    category: Category;
    projects: Project[];
}

export default function PortfolioSection() {
    const theme = useTheme();
    const isDark = theme.palette.mode === "dark";
    const [activeSlug, setActiveSlug] = useState<string | null>(null);
    const [categories, setCategories] = useState<Category[]>([]);
    const [allProjects, setAllProjects] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadAllData = async () => {
            setLoading(true);
            try {
                const indexResponse = await fetch('/projects/index.json');
                const indexData = await indexResponse.json();
                setCategories(indexData.categories);

                if (indexData.categories && indexData.categories.length > 0) {
                    setActiveSlug(indexData.categories[0].slug);
                }

                const loadedProjects: Project[] = [];

                for (const cat of indexData.categories) {
                    try {
                        const response = await fetch(cat.dataFile);
                        const data: CategoryData = await response.json();
                        loadedProjects.push(...data.projects);
                    } catch (error) {
                        console.error(`Failed to load ${cat.name}:`, error);
                    }
                }

                setAllProjects(loadedProjects);
            } catch (error) {
                console.error("Failed to load projects:", error);
            } finally {
                setLoading(false);
            }
        };

        loadAllData();
    }, []);

    const filteredProjects = allProjects.filter(p => p.category_slug === activeSlug);

    return (
        <Box sx={{
            py: { xs: 6, md: 10 },
            bgcolor: isDark ? "#060606" : "#f8f8f8",
            transition: "background-color 0.3s ease",
        }}>
            <Container maxWidth="lg">
                <Stack
                    direction="row"
                    spacing={{ xs: 1, sm: 2 }}
                    justifyContent="center"
                    mb={{ xs: 4, md: 6 }}
                    flexWrap="wrap"
                    useFlexGap
                    sx={{ px: { xs: 1, sm: 0 } }}
                >
                    {categories.map((cat) => (
                        <FilterBtn
                            key={cat.id}
                            active={activeSlug === cat.slug}
                            onClick={() => setActiveSlug(cat.slug)}
                            label={cat.name}
                            isDark={isDark}
                        />
                    ))}
                </Stack>

                {loading ? (
                    <Stack alignItems="center" py={10}>
                        <CircularProgress sx={{ color: goldColor }} />
                    </Stack>
                ) : (
                    <Box
                        sx={{
                            display: "grid",
                            gridTemplateColumns: {
                                xs: "1fr",
                                sm: "repeat(2, 1fr)",
                                md: "repeat(3, 1fr)",
                                lg: "repeat(3, 1fr)",
                            },
                            gap: { xs: 1.5, sm: 2, md: 2.5 },
                            width: "100%",
                        }}
                    >
                        {filteredProjects.length > 0 ? (
                            filteredProjects.map((p, i) => (
                                <Box key={p.id} sx={{ breakInside: "avoid" }}>
                                    <ProjectCard project={p} index={i} />
                                </Box>
                            ))
                        ) : (
                            <Box
                                sx={{
                                    gridColumn: "1 / -1",
                                    textAlign: "center",
                                    py: 5,
                                    color: isDark ? "rgba(255,255,255,0.4)" : "rgba(0,0,0,0.4)",
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

const FilterBtn = ({ active, onClick, label, isDark }: {
    active: boolean;
    onClick: () => void;
    label: string;
    isDark: boolean;
}) => (
    <Button
        onClick={onClick}
        sx={{
            px: { xs: 2, sm: 3 },
            py: { xs: 0.8, sm: 1 },
            borderRadius: "30px",
            fontSize: { xs: "12px", sm: "13px" },
            fontWeight: 600,
            textTransform: "capitalize",
            fontFamily: "var(--font-syne)",
            color: active
                ? "#fff"
                : isDark
                    ? "rgba(255,255,255,0.5)"
                    : "rgba(0,0,0,0.5)",
            backgroundColor: active
                ? goldColor
                : "transparent",
            border: "1px solid",
            borderColor: active
                ? goldColor
                : isDark
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.1)",
            transition: "all 0.3s ease",
            "&:hover": {
                borderColor: goldColor,
                backgroundColor: active
                    ? `${goldColor}CC`
                    : isDark
                        ? `${goldColor}0D`
                        : `${goldColor}08`,
                color: "#fff",
            },
        }}
    >
        {label}
    </Button>
);