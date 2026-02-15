// layout.tsx
"use client";
import { Inter } from "next/font/google";
import { CacheProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import createEmotionCache from '../theme/emotion-cash';
import { ColorModeProvider } from "../context/color-mode-context";

const inter = Inter({ subsets: ["latin"] });
const cache = createEmotionCache();

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <CacheProvider value={cache}>
                    <ColorModeProvider>
                        <CssBaseline />
                        {children}
                    </ColorModeProvider>
                </CacheProvider>
            </body>
        </html>
    );
}