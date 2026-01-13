import Fact from "@/components/Fact";
import About from "@/components/About";
import Feature from "@/components/Feature";
import Team from "@/components/Team";
import InnerBanner from "@/components/InnerBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - P3 Tech Website design and Development Company",
  description: "P3 Tech is a leading website design and development company, specializing in creating stunning and functional websites that drive business growth.",
};

export default function AboutPage() {
  return (
    <div className="body">
      <InnerBanner name="About Us" />
      <Fact />
      <About />
      <Feature />
      <Team />
    </div>
  );
}
