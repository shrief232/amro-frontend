"use client";

import { Icon, IconProps } from "@iconify/react";
import { Box, BoxProps } from "@mui/material";
import { forwardRef } from "react";

interface Props extends BoxProps {
    icon: string;
    width?: number | string;
}

const Iconify = forwardRef<SVGElement, Props>(({ icon, width = 24, sx, ...other }, ref) => (
    <Box
        ref={ref}
        component={Icon}
        icon={icon}
        sx={{
            width,
            height: width,
            display: 'inline-flex',
            flexShrink: 0,
            ...sx
        }}
        {...other}
    />
));

Iconify.displayName = "Iconify";

export default Iconify;