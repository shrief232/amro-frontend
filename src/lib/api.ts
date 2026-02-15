import instance, { type AxiosResponse, type AxiosRequestConfig } from "axios";
import { CONFIG } from "../global-config";
import { endpoints } from "./endpoints";

// ----------------------------------------------------------------------

const http = instance.create({
   baseURL: CONFIG.serverUrl,
   headers: { "Content-Type": "application/json" },
   withCredentials: true,
});

http.interceptors.response.use(
   (response) => response,
   (error) => Promise.reject(error.response?.data || "Server Error"),
);

export interface Response {
   status: number;
   message: string;
   data: any;
}

export const BASE_URL = CONFIG.serverUrl;

export default class Api {
   private static async run(request: AxiosRequestConfig): Promise<any> {
      const { data } = await http.request(request);
      return data;
   }

   private static async list(url: string, params?: any) {
      return await this.run({ method: "GET", url, params });
   }

   private static async retrieve(url: string) {
      return await this.run({ method: "GET", url });
   }

   private static async create(url: string, data: any) {
      return await this.run({ method: "POST", url, data });
   }

   // ----------------------------------------------------------------------

   /**
    * Portfolio Section Actions
    */
   public static project = {
      list: async (category?: string): Promise<any[]> =>
         await this.list(endpoints.project.root, { category }),

      retrieve: async (id: string | number): Promise<any> =>
         await this.retrieve(endpoints.project.details(String(id))),
   };

   public static category = {
      list: async (category?: string): Promise<any[]> =>
         await this.list(endpoints.category.root, { category }),

      retrieve: async (id: string | number): Promise<any> =>
         await this.retrieve(endpoints.category.details(String(id))),
   };

   public static contact = {
      create: async (data: any): Promise<any> => await this.create(endpoints.contact.root, data),
   };
}
