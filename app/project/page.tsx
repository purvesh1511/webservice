
import InnerBanner from "@/components/InnerBanner";
import Testimonial from "@/components/Testimonial";
import Project from "@/components/Project";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - P3 Tech Website design and Development Company",
  description: "P3 Tech is a leading website design and development company, specializing in creating stunning and functional websites that drive business growth.",
};

export default function ProjectPage() {
  return (
    <div className="body">
      <InnerBanner name="Projects" />
      <Project />
      <Testimonial />
    </div>
  );
}
