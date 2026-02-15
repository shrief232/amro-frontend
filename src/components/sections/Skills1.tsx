"use client"

import Link from "next/link"
import CountUp from "react-countup"
import { Box, Container, Typography, Paper } from "@mui/material"

export default function Skills1() {
    return (
        <Box className="section-skills-1 bg-900" py={10} position="relative">

            <Container>

                {/* HEADER */}
                <Box textAlign="center" mb={7}>
                    <Typography variant="h3" className="text-primary-1" mb={2}>
                        My Skills
                    </Typography>

                    <Typography className="text-200">
                        I thrive on turning complex problems into simple, beautiful
                        <br />
                        solutions that enhance user satisfaction.
                    </Typography>
                </Box>

                {/* SKILLS */}
                <Box
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="center"
                    gap={4}
                    mb={7}
                >

                    {skills.map((skill, i) => (
                        <Box key={i} flex="1 1 150px" maxWidth={160} textAlign="center">

                            <Paper
                                elevation={0}
                                sx={{
                                    p: 3,
                                    borderRadius: 3,
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    bgcolor: "transparent",
                                    transition: "0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        borderColor: "#A8FF53",
                                    },
                                }}
                            >

                                <Box mb={3}>
                                    <Box
                                        component="img"
                                        src={skill.icon}
                                        alt={skill.name}
                                        sx={{ width: 48, height: 48 }}
                                    />
                                </Box>

                                <Typography fontWeight={700} fontSize={24}>
                                    <CountUp enableScrollSpy end={skill.value} />%
                                </Typography>

                                <Typography
                                    className="text-400"
                                    fontSize={13}
                                    mt={0.5}
                                    textTransform="uppercase"
                                >
                                    {skill.name}
                                </Typography>

                            </Paper>

                        </Box>
                    ))}

                </Box>

                {/* FOOTER */}
                <Box textAlign="center">

                    <Typography className="text-200" mb={1}>
                        In addition, I have some programming knowledge such as:
                    </Typography>

                    <Box display="flex" justifyContent="center" gap={1} flexWrap="wrap">

                        {programming.map((item, i) => (
                            <Link key={i} href="#" className="fs-5 fw-bold">
                                {item}
                            </Link>
                        ))}

                    </Box>

                </Box>

            </Container>

        </Box>
    )
}

/* DATA */
const skills = [
    { name: "Figma", value: 98, icon: "/assets/imgs/skills/skills-1/icon-1.png" },
    { name: "Adobe XD", value: 82, icon: "/assets/imgs/skills/skills-1/icon-2.png" },
    { name: "Illustrator", value: 76, icon: "/assets/imgs/skills/skills-1/icon-3.png" },
    { name: "Sketch", value: 58, icon: "/assets/imgs/skills/skills-1/icon-4.png" },
    { name: "Photoshop", value: 60, icon: "/assets/imgs/skills/skills-1/icon-5.png" },
    { name: "Webflow", value: 72, icon: "/assets/imgs/skills/skills-1/icon-6.png" },
    { name: "Framer", value: 93, icon: "/assets/imgs/skills/skills-1/icon-7.png" },
]

const programming = [
    "HTML,",
    "CSS,",
    "JavaScript,",
    "Bootstrap,",
    "TailwindCSS",
]
