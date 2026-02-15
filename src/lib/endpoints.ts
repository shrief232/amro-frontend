export const endpoints = {
   project: {
      root: "/api/projects/",
      details: (id: string | number) => `/api/projects/${id}/`,
   },
   category: {
      root: "/api/categories/",
      details: (id: string | number) => `/api/categories/${id}/`,
   },

   contact: {
      root: "/api/contact/",
   },
} as const;
