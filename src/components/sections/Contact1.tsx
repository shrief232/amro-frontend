"use client";

import { useState } from "react";
import Link from "next/link";
import {
   Box,
   Container,
   Typography,
   Stack,
   TextField,
   Button,
   Card,
   Snackbar,
   Alert,
   CircularProgress,
} from "@mui/material";
import Iconify from "../elements/iconify";
import Api from "../../lib/api";

const contacts = [
   {
      label: "Phone Number",
      value: "+20 123 456 7890",
      icon: "solar:phone-calling-bold-duotone",
      link: "tel:+201234567890",
   },
   {
      label: "Email Address",
      value: "amr@example.com",
      icon: "solar:letter-bold-duotone",
      link: "mailto:amr@example.com",
   },
   {
      label: "LinkedIn",
      value: "Amr El-Hoot",
      icon: "mdi:linkedin",
      link: "https://linkedin.com/in/yourprofile",
   },
   {
      label: "Location",
      value: "Cairo, Egypt",
      icon: "solar:map-point-bold-duotone",
      link: "#",
   },
];

export default function Contact1() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
   });

   const [loading, setLoading] = useState(false);
   const [status, setStatus] = useState<{ type: "success" | "error"; msg: string } | null>(null);

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      // --- Client-side Validation ---
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\+?[1-9]\d{6,14}$/;

      if (!emailRegex.test(formData.email)) {
         setStatus({ type: "error", msg: "Please enter a valid email address." });
         return;
      }

      if (formData.phone && !phoneRegex.test(formData.phone)) {
         setStatus({
            type: "error",
            msg: "Please enter a valid phone number with country code (e.g., +1234567890).",
         });
         return;
      }

      setLoading(true);
      try {
         await Api.contact.create(formData);

         setStatus({
            type: "success",
            msg: "Your message has been sent successfully! I'll get back to you shortly.",
         });
         setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } catch (err: any) {
         const backendError =
            err.response?.data?.phone ||
            err.response?.data?.email ||
            "Something went wrong. Please try again later.";
         setStatus({
            type: "error",
            msg: typeof backendError === "string" ? backendError : "Invalid data provided.",
         });
      } finally {
         setLoading(false);
      }
   };

   return (
      <Box
         id="contact"
         py={{ xs: 12, md: 18 }}
         position="relative"
         bgcolor="#060606"
         component="form"
         onSubmit={handleSubmit}
         noValidate
      >
         <Container sx={{ position: "relative", zIndex: 2 }}>
            {/* HEADER */}
            <Stack
               spacing={2}
               mb={8}
               alignItems={{ xs: "center", md: "flex-start" }}
               sx={{ textAlign: { xs: "center", md: "left" } }}
            >
               <Typography
                  variant="overline"
                  sx={{ color: "#8B5CF6", fontWeight: 800, letterSpacing: 3 }}
               >
                  CONTACT ME
               </Typography>
               <Typography
                  variant="h2"
                  sx={{ fontWeight: 900, fontFamily: "var(--font-syne)", lineHeight: 1.1 }}
               >
                  Let’s Start a <span style={{ color: "#8B5CF6" }}>Project</span> Together
               </Typography>
               <Typography
                  sx={{ color: "rgba(255,255,255,0.6)", maxWidth: 600, fontSize: "1.1rem" }}
               >
                  I'm always excited to take on new projects and collaborate with innovative minds.
                  Send me a message and I'll get back to you within 24 hours.
               </Typography>
            </Stack>

            <Box display="flex" flexDirection={{ xs: "column", lg: "row" }} gap={8}>
               {/* LEFT SIDE: INFO */}
               <Box flex="1">
                  <Stack spacing={4}>
                     {contacts.map((item, i) => (
                        <Stack
                           key={i}
                           direction="row"
                           spacing={3}
                           alignItems="center"
                           component={Link}
                           href={item.link}
                           sx={{
                              textDecoration: "none",
                              color: "inherit",
                              "&:hover .icon-box": {
                                 transform: "scale(1.1) rotate(5deg)",
                              },
                           }}
                        >
                           <Box
                              className="icon-box"
                              sx={{
                                 width: 64,
                                 height: 64,
                                 borderRadius: "20px",
                                 bgcolor: "rgba(139, 92, 246, 0.1)",
                                 display: "flex",
                                 alignItems: "center",
                                 justifyContent: "center",
                                 transition: "0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                              }}
                           >
                              <Iconify icon={item.icon} width={28} sx={{ color: "#8B5CF6" }} />
                           </Box>
                           <Box>
                              <Typography
                                 variant="caption"
                                 sx={{
                                    color: "rgba(255,255,255,0.4)",
                                    fontWeight: 600,
                                    textTransform: "uppercase",
                                    letterSpacing: 1,
                                 }}
                              >
                                 {item.label}
                              </Typography>
                              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                 {item.value}
                              </Typography>
                           </Box>
                        </Stack>
                     ))}
                  </Stack>
               </Box>

               {/* RIGHT SIDE: FORM */}
               <Box flex="1.2">
                  <Card
                     sx={{
                        bgcolor: "#0F0F0F",
                        p: { xs: 3, md: 5 },
                        borderRadius: "32px",
                        border: "1px solid rgba(255,255,255,0.05)",
                        position: "relative",
                        overflow: "visible",
                     }}
                  >
                     <Stack spacing={3}>
                        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                           <StyledTextField
                              label="Full Name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              fullWidth
                           />
                           <StyledTextField
                              label="Email Address"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              fullWidth
                           />
                        </Stack>
                        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
                           <StyledTextField
                              label="Phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              fullWidth
                              placeholder="01xxxxxxxxx"
                           />
                           <StyledTextField
                              label="Subject"
                              name="subject"
                              value={formData.subject}
                              onChange={handleChange}
                              required
                              fullWidth
                           />
                        </Stack>
                        <StyledTextField
                           label="How can I help you?"
                           name="message"
                           value={formData.message}
                           onChange={handleChange}
                           multiline
                           rows={4}
                           required
                           fullWidth
                        />

                        <Button
                           type="submit"
                           variant="contained"
                           disabled={loading}
                           sx={{
                              bgcolor: "#8B5CF6",
                              py: 2,
                              borderRadius: "15px",
                              fontWeight: 800,
                              fontSize: "1rem",
                              textTransform: "none",
                              "&:hover": { bgcolor: "#7C3AED" },
                              transition: "all 0.3s ease",
                           }}
                        >
                           {loading ? (
                              <CircularProgress size={24} color="inherit" />
                           ) : (
                              "Send Message"
                           )}
                        </Button>
                     </Stack>
                  </Card>
               </Box>
            </Box>
         </Container>

         {/* BACKGROUND DECORATION */}
         <Typography
            sx={{
               position: "absolute",
               bottom: -50,
               left: "50%",
               transform: "translateX(-50%)",
               fontSize: { xs: 100, md: 200 },
               fontWeight: 900,
               color: "rgba(255,255,255,0.02)",
               whiteSpace: "nowrap",
               pointerEvents: "none",
               zIndex: 1,
            }}
         >
            AMR.DESIGN
         </Typography>

         <Snackbar
            open={!!status}
            autoHideDuration={6000}
            onClose={() => setStatus(null)}
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
         >
            <Alert
               onClose={() => setStatus(null)}
               severity={status?.type === "success" ? "success" : "error"}
               variant="filled"
               sx={{ borderRadius: "12px", fontWeight: 600 }}
            >
               {status?.msg}
            </Alert>
         </Snackbar>
      </Box>
   );
}

const StyledTextField = (props: any) => (
   <TextField
      {...props}
      variant="filled"
      InputProps={{
         disableUnderline: true,
         sx: {
            borderRadius: "15px",
            bgcolor: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.05)",
            color: "white",
            fontSize: "0.95rem",
         },
      }}
      InputLabelProps={{
         sx: { color: "rgba(255,255,255,0.4)", "&.Mui-focused": { color: "#8B5CF6" } },
      }}
      sx={{
         "& .MuiFilledInput-root:hover": { bgcolor: "rgba(255,255,255,0.05)" },
         "& .MuiFilledInput-root.Mui-focused": {
            border: "1px solid #8B5CF6",
            bgcolor: "rgba(255,255,255,0.04)",
         },
      }}
   />
);
