"use client"

import Link from "next/link"
import { Box, Container, Typography } from "@mui/material"

export default function Service1() {
    return (
        <Box className="section-service-1" pt={12} pb={12}>

            <Container>

                {/* HEADER */}
                <Box display="flex" flexWrap="wrap" alignItems="flex-end" gap={4}>

                    <Box flex="1 1 600px">
                        <Typography variant="h3" className="ds-3 text-primary-1" mt={3} mb={2}>
                            What do I offer?
                        </Typography>

                        <Typography className="fs-5 fw-medium text-200">
                            My journey started with a fascination for design and technology,
                            <br />
                            leading me to specialize in UI/UX design
                        </Typography>
                    </Box>

                    <Box>
                        <Link href="/#contact" className="btn btn-gradient mt-5">
                            Get a Quote
                            <i className="ri-arrow-right-up-line" />
                        </Link>
                    </Box>

                </Box>

                {/* SERVICES LIST */}
                <Box mt={6} display="flex" flexDirection="column">

                    {[
                        {
                            number: "01.",
                            title: "UI/UX Design",
                            desc: "Designing visually stunning and user-friendly interfaces for web and mobile applications.",
                            img: "assets/imgs/services/services-1/img-1.png",
                        },
                        {
                            number: "02.",
                            title: "Mobile App Design",
                            desc: "Designing intuitive and appealing mobile applications for both iOS and Android platforms.",
                            img: "assets/imgs/services/services-1/img-2.png",
                        },
                        {
                            number: "03.",
                            title: "Brand Identity Design",
                            desc: "Developing cohesive visual branding that resonates with your target audience.",
                            img: "assets/imgs/services/services-1/img-3.png",
                        },
                        {
                            number: "04.",
                            title: "Web Development",
                            desc: "Crafting responsive and engaging websites that align with your brand and business goals.",
                            img: "assets/imgs/services/services-1/img-4.png",
                        },
                    ].map((service, i) => (
                        <ServiceRow key={i} {...service} last={i === 3} />
                    ))}

                </Box>

            </Container>

        </Box>
    )
}
function ServiceRow({ number, title, desc, img, last }: any) {
    return (
        <Box
            className="single-service-card-1 tg-img-reveal-item"
            data-fx={1}
            data-img={img}
            borderTop="1px solid rgba(255,255,255,0.12)"
            borderBottom={last ? "1px solid rgba(255,255,255,0.12)" : "none"}
            p={3}
            width="100%"
        >

            <Box display="flex" flexWrap="wrap" alignItems="center" gap={3}>

                {/* TITLE */}
                <Box flex="1 1 420px">
                    <Typography variant="h3" className="service-card-title mb-0">
                        <Link href="/work-single">
                            <span className="service-number">{number}</span>
                            {" "}
                            {title}
                        </Link>
                    </Typography>
                </Box>

                {/* TEXT + ICON */}
                <Link href="#" className="d-flex align-items-center w-100">

                    <Box flex="1 1 420px" pl={{ lg: 10 }}>

                        <Typography className="service-card-text my-3">
                            {desc.split("<br />")[0]}
                            <br />
                            {desc.split("<br />")[1]}
                        </Typography>

                    </Box>

                    <Box className="service-card-icon icon-shape icon-md rounded-circle border ms-auto">
                        <i className="ri-arrow-right-up-line" />
                    </Box>

                </Link>

            </Box>

        </Box>
    )
}
