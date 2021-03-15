export interface PortfolioData {
  name: string;
  url?: string;
  image: { thumbnail: string; base: string };
  description: string;
  tech?: {
    name: string;
    icon?: string;
  }[];
  features?: string[];
}
