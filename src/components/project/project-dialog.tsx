import React from "react";
import {
   Dialog,
   DialogContent,
   Typography,
   Button,
   Stack,
   Box,
   IconButton,
   type DialogProps,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

import { Project } from "../../types/project";

interface ProjectDialogProps extends Omit<DialogProps, "children"> {
   project: Project | null;
   onClose: () => void;
}

const Transition = React.forwardRef(function Transition(props: any, ref: React.Ref<unknown>) {
   return (
      <motion.div
         ref={ref}
         initial={{ opacity: 0, scale: 0.9, y: 20 }}
         animate={{ opacity: 1, scale: 1, y: 0 }}
         exit={{ opacity: 0, scale: 0.9, y: 20 }}
         transition={{ type: "spring", damping: 20, stiffness: 300 }}
         {...props}
      />
   );
});

export const ProjectDialog: React.FC<ProjectDialogProps> = ({
   project,
   open,
   onClose,
   ...other
}) => {
   if (!project) return null;

   return (
      <Dialog
         open={open}
         onClose={onClose}
         fullWidth
         maxWidth="lg"
         TransitionComponent={Transition}
         PaperProps={{
            sx: {
               bgcolor: "#0a0a0a",
               borderRadius: 4,
               border: "1px solid rgba(255,255,255,0.1)",
               backgroundImage: "none",
               overflow: "hidden",
            },
         }}
         {...other}
      >
         <DialogContent sx={{ p: 0, position: "relative" }}>
            <IconButton
               onClick={onClose}
               sx={{ position: "absolute", right: 16, top: 16, color: "white", zIndex: 10 }}
            >
               {/* حط أي Icon هنا زي CloseIcon */}✕
            </IconButton>

            <Stack direction={{ xs: "column", md: "row" }} spacing={0}>
               <Stack
                  spacing={2}
                  sx={{
                     p: 2,
                     width: { xs: "100%", md: "60%" },
                     maxHeight: "85vh",
                     overflowY: "auto",
                     "&::-webkit-scrollbar": { width: "4px" },
                     "&::-webkit-scrollbar-thumb": {
                        bgcolor: "rgba(255,255,255,0.1)",
                        borderRadius: "10px",
                     },
                  }}
               >
                  {project.media?.map((m) => (
                     <Box
                        key={m.id}
                        component="img"
                        src={m.source}
                        alt="Project Media"
                        sx={{
                           width: "100%",
                           borderRadius: 2,
                           display: "block",
                        }}
                     />
                  ))}
               </Stack>

               <Stack
                  justifyContent="space-between"
                  sx={{
                     p: 5,
                     width: { xs: "100%", md: "40%" },
                     color: "white",
                     position: "relative",
                  }}
               >
                  <Stack spacing={3}>
                     <Box>
                        <Typography variant="overline" sx={{ color: "#ff6b00", fontWeight: 800 }}>
                           {project.category_name}
                        </Typography>
                        <Typography variant="h3" sx={{ fontWeight: 900, mt: 1 }}>
                           {project.title}
                        </Typography>
                     </Box>

                     <Typography
                        variant="body1"
                        sx={{
                           color: "rgba(255,255,255,0.7)",
                           lineHeight: 1.8,
                           fontSize: "1.1rem",
                        }}
                     >
                        {project.description}
                     </Typography>

                     <Stack spacing={1} sx={{ pt: 2 }}>
                        <Typography
                           variant="caption"
                           sx={{ color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}
                        >
                           Client:{" "}
                           <span style={{ color: "#fff", marginLeft: "8px" }}>
                              {project.client_name}
                           </span>
                        </Typography>
                        <Typography
                           variant="caption"
                           sx={{ color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}
                        >
                           Role:{" "}
                           <span style={{ color: "#fff", marginLeft: "8px" }}>Lead Designer</span>
                        </Typography>
                     </Stack>
                  </Stack>

                  <Button
                     variant="contained"
                     component={motion.button}
                     whileHover={{ scale: 1.02 }}
                     whileTap={{ scale: 0.98 }}
                     sx={{
                        mt: 6,
                        bgcolor: "white",
                        color: "black",
                        fontWeight: 900,
                        borderRadius: 2,
                        py: 2,
                        fontSize: "1rem",
                        "&:hover": { bgcolor: "#f0f0f0" },
                     }}
                  >
                     Launch Case Study
                  </Button>
               </Stack>
            </Stack>
         </DialogContent>
      </Dialog>
   );
};
