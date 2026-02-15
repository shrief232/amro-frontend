"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Stack, styled } from '@mui/material';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const HoverItem = styled(Box)(({ theme }) => ({
    position: 'relative',
    cursor: 'pointer',
    padding: '0',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    '&:hover .reveal-text': { color: '#A8FF53' }
}));

export default function SmartHoverImage({ title, author, date, img }: any) {
    const [isHovered, setIsHovered] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        mouseX.set(e.clientX + 15);
        mouseY.set(e.clientY + 15);
    };

    return (
        <HoverItem
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/*<Typography className="reveal-text" variant="h4" fontWeight={700} sx={{ transition: '0.3s' }}>*/}
            {/*    {title}*/}
            {/*</Typography>*/}

            {/* الـ Reveal Card اللي بيلحق الماوس */}
            {isHovered && (
                <motion.div
                    style={{
                        position: 'fixed',
                        left: x,
                        top: y,
                        pointerEvents: 'none',
                        zIndex: 9999,
                        width: 300,
                        height: 400,
                        overflow: 'hidden',
                        borderRadius: '15px',
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            p: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                        }}
                    >
                        <Stack spacing={1} sx={{ bgcolor: 'rgba(0,0,0,0.6)', p: 2, borderRadius: 2, backdropFilter: 'blur(5px)' }}>
                            <Typography variant="caption" sx={{ color: '#A8FF53' }}>By {author} • {date}</Typography>
                            <Typography variant="h6">{title}</Typography>
                        </Stack>
                    </Box>
                </motion.div>
            )}
        </HoverItem>
    );
}