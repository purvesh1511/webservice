import InnerBanner from "@/components/InnerBanner";
import Testimonial from "@/components/Testimonial";
import Cms from "@/components/Cms";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Terms & Conditions - P3 Tech Website design and Development Company",
  description: "P3 Tech is a leading website design and development company, specializing in creating stunning and functional websites that drive business growth.",
};

export default function TermPage() {
  return (
    <div className="body">
      <InnerBanner name="Terms & Conditions" />
      <Cms id={2} />
      <Testimonial />
    </div>
  );
}
