"use client"

import Link from "next/link"
import dynamic from "next/dynamic"
import {
    Box,
    Container,
    Typography,
    Button,
    Paper
} from "@mui/material"

const PortfolioFilter = dynamic(() => import("../elements/PortfolioFilter"), {
    ssr: false,
})

export default function Projects1() {
    return (
        <>
            {/* HEADER SECTION */}
            <Box
                id="projects"
                sx={{
                    position: "relative",
                    pt: "120px",
                    pb: 6,
                    backgroundColor: "#0a0a0a",
                }}
            >
                <Container>

                    <Box
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            alignItems: "flex-end",
                            gap: 3,
                        }}
                    >

                        {/* LEFT */}
                        <Box sx={{ flex: "1 1 520px" }}>
                            <Typography className="ds-3 text-primary-1" mt={3} mb={3}>
                                My Latest Works
                            </Typography>

                            <Typography fontSize={18} color="text.secondary" fontWeight={500}>
                                I believe that working hard and trying to learn every day will
                                <br />
                                make me improve in satisfying my customers.
                            </Typography>
                        </Box>

                        {/* RIGHT BUTTON */}
                        <Box sx={{ flexShrink: 0 }}>
                            <Button
                                component={Link}
                                href="/work"
                                className="btn btn-gradient d-none d-xl-block"
                                sx={{
                                    mt: { xs: 3, lg: 0 },
                                    display: { xs: "none", xl: "inline-flex" }
                                }}
                            >
                                View All Projects
                                <i className="ri-arrow-right-up-line" />
                            </Button>
                        </Box>

                    </Box>

                </Container>
            </Box>

            {/* FILTER SECTION */}
            <Box
                className="fillter-project"
                sx={{
                    backgroundColor: "#0a0a0a",
                    backgroundImage:
                        "url('/assets/imgs/projects/projects-1/background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <PortfolioFilter />
            </Box>

            {/* VIEW ALL BUTTON BOTTOM */}
            <Box sx={{ overflow: "hidden" }}>
                <Box
                    sx={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        pt: 1,
                        pb: "160px",
                        backgroundColor: "#0a0a0a",
                    }}
                >

                    {/* BUTTON */}
                    <Box
                        component={Link}
                        href="/work"
                        className="icon_hover icon-shape icon_150 border-linear-2 rounded-circle hover-up"
                        sx={{
                            position: "relative",
                            zIndex: 1,
                            width: 150,
                            height: 150,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "#fff",
                            textDecoration: "none",
                            overflow: "hidden",
                        }}
                    >

                        {/* INNER GRADIENT DOT */}
                        <Box
                            className="icon-shape icon-md bg-linear-2 rounded-circle"
                            sx={{
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                            }}
                        />

                        {/* TEXT */}
                        <Typography
                            fontSize={14}
                            fontWeight={700}
                            textTransform="capitalize"
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            View All <i className="ri-arrow-right-up-line" />
                        </Typography>

                    </Box>

                    {/* ELLIPSE */}
                    <Box
                        className="ellipse"
                        sx={{
                            position: "absolute",
                            bottom: 0,
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 0,
                        }}
                    />

                </Box>
            </Box>
        </>
    )
}
