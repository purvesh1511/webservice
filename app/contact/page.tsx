import InnerBanner from "@/components/InnerBanner";
import Contact from "@/components/Contact";
import Map from "@/components/Map";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - P3 Tech Website design and Development Company",
  description: "P3 Tech is a leading website design and development company, specializing in creating stunning and functional websites that drive business growth.",
};


export default function ContactPage() {
  return (
    <div className="body">
      <InnerBanner name="Contact Us" />
      <Contact />
      <Map />
    </div>
  );
}
