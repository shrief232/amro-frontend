// theme/theme.ts
import { createTheme, ThemeOptions } from "@mui/material/styles";

export const getDesignTokens = (mode: "light" | "dark"): ThemeOptions => ({
    palette: {
        mode,

        primary: {
            main: "#A8FF53",
            contrastText: "#000",
        },

        background: {
            default: mode === "dark" ? "#0A0A0A" : "#F4F4F4",
            paper: mode === "dark" ? "#121212" : "#FFFFFF",
        },

        text: {
            primary: mode === "dark" ? "#FFFFFF" : "#000000",
            secondary: mode === "dark"
                ? "rgba(255,255,255,0.65)"
                : "rgba(0,0,0,0.65)",
        },

        divider: mode === "dark"
            ? "rgba(255,255,255,0.08)"
            : "rgba(0,0,0,0.08)",
    },

    typography: {
        fontFamily: `"AmrFont", "Roboto Condensed", "Inter", sans-serif`,

        h1: {
            fontWeight: 900,
            letterSpacing: "-0.045em",
            lineHeight: 1.02,
        },

        h2: {
            fontWeight: 800,
            letterSpacing: "-0.035em",
            lineHeight: 1.08,
        },

        h3: {
            fontWeight: 700,
            letterSpacing: "-0.025em",
            lineHeight: 1.12,
        },

        h4: {
            fontWeight: 600,
            letterSpacing: "-0.015em",
            lineHeight: 1.2,
        },

        h5: {
            fontWeight: 500,
            lineHeight: 1.3,
        },

        h6: {
            fontWeight: 400,
            lineHeight: 1.4,
        },

        body1: {
            fontWeight: 400,
            lineHeight: 1.75,
            letterSpacing: "0.002em",
        },

        body2: {
            fontWeight: 300,
            lineHeight: 1.7,
            letterSpacing: "0.004em",
        },

        overline: {
            fontWeight: 700,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            fontSize: "0.72rem",
        },

        button: {
            textTransform: "none",
            fontWeight: 700,
            letterSpacing: "0.01em",
        },
    },

    shape: {
        borderRadius: 18,
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 999,
                    paddingInline: 22,
                    paddingBlock: 10,
                    fontWeight: 700,
                    boxShadow: "none",
                },

                containedPrimary: {
                    boxShadow: "0 10px 30px rgba(168,255,83,0.18)",
                    "&:hover": {
                        boxShadow: "0 12px 40px rgba(168,255,83,0.25)",
                    },
                },
            },
        },

        MuiTypography: {
            styleOverrides: {
                root: {
                    fontSmoothing: "antialiased",
                },
            },
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none",
                },
            },
        },
    },
});
