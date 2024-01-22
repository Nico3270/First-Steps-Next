import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About',
  description: 'About page',
  keywords: ["Pagina de información","About", "Información"]
 };

export default function AboutPage() {
  return <span className="text-7xl">About Page</span>;
}
