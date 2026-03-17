export interface Actualite {
  id: number;
  slug: string;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  featured_media: number;
  categories: number[];
  yoast_head_json?: {
    og_image?: Array<{
      url: string;
      width?: number;
      height?: number;
      type?: string;
    }>;
  };
}
