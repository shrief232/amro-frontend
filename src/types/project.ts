export interface ProjectMedia {
   id: number;
   media_type: "image" | "video";
   source: string;
   order: number;
}

export interface Category {
   id: number;
   name: string;
   slug: string;
}

export interface Project {
   id: number;
   title: string;
   description: string;
   thumbnail: string;
   category_name: string;
   category_slug: string;
   media: {
      id: number;
      media_type: string;
      source: string;
      order: number;
   }[];
   client_name: string;
   date_completed: string | null;
   created_at?: string;
}

export interface APIResponse<T> {
   data: T;
   message?: string;
   status: number;
}
