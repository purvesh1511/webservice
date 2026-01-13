import Service from "@/components/Service";
import InnerBanner from "@/components/InnerBanner";
import Testimonial from "@/components/Testimonial";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - P3 Tech Website design and Development Company",
  description: "P3 Tech is a leading website design and development company, specializing in creating stunning and functional websites that drive business growth.",
};



export default function ServicePage() {
  return (
    <div className="body">
      <InnerBanner name="Services" />
      <Service />
      <Testimonial />
    </div>
  );
}
