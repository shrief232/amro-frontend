import { useState, useEffect } from "react";
import Api from "../lib/api";
import { Project } from "@/src/types/project";

export function usePortfolio(categorySlug?: string) {
   const [projects, setProjects] = useState<Project[]>([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const fetchData = async () => {
         setLoading(true);
         try {
            const res = await Api.project.list(categorySlug);
            setProjects(res);
         } catch (error) {
            setProjects([]);
         } finally {
            setLoading(false);
         }
      };
      fetchData();
   }, [categorySlug]);

   return { projects, loading };
}
