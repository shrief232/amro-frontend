"use client";

import React, { createContext, useMemo, useState, useEffect, useContext, ReactNode } from "react";
import { ThemeProvider, createTheme, Theme } from "@mui/material/styles";
import { getDesignTokens } from "../theme/theme";

interface IColorModeContext {
    toggleColorMode: () => void;
    mode: 'light' | 'dark';
}

export const ColorModeContext = createContext<IColorModeContext>({
    toggleColorMode: () => {},
    mode: 'dark'
});

export const ColorModeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<'light' | 'dark'>('dark');

    useEffect(() => {
        const savedMode = localStorage.getItem("themeMode") as 'light' | 'dark' | null;
        if (savedMode) {
            setMode(savedMode);
        }
    }, []);

    const colorMode = useMemo(() => ({
        mode,
        toggleColorMode: () => {
            setMode((prev) => {
                const nextMode = prev === 'light' ? 'dark' : 'light';
                localStorage.setItem("themeMode", nextMode);
                return nextMode;
            });
        },
    }), [mode]);

    const theme: Theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                 {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};

export const useColorMode = () => useContext(ColorModeContext);