import InnerBanner from "@/components/InnerBanner";
import Testimonial from "@/components/Testimonial";
import Career from "@/components/Career";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career - P3 Tech Website design and Development Company",
  description: "P3 Tech is a leading website design and development company, specializing in creating stunning and functional websites that drive business growth.",
};

export default function CareerPage() {
  return (
    <div className="body">
      <InnerBanner name="Career" />
      <Career />
      <Testimonial />
    </div>
  );
}
