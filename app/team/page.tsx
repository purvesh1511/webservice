import InnerBanner from "@/components/InnerBanner";
import Testimonial from "@/components/Testimonial";
import Team from "@/components/Team";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Our Team - P3 Tech Website design and Development Company",
  description: "P3 Tech is a leading website design and development company, specializing in creating stunning and functional websites that drive business growth.",
};

export default function TeamPage() {
  return (
    <div className="body">
      <InnerBanner name="Our Team" />
      <Team teamSize={0} />
      <Testimonial />
    </div>
  );
}
