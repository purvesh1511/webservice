import InnerBanner from "@/components/InnerBanner";
import Testimonial from "@/components/Testimonial";
import Cms from "@/components/Cms";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support - P3 Tech Website design and Development Company",
  description: "P3 Tech is a leading website design and development company, specializing in creating stunning and functional websites that drive business growth.",
};


export default function SupportPage() {
  return (
    <div className="body">
      <InnerBanner name="Support" />
      <Cms id={5} />
      <Testimonial />
    </div>
  );
}
