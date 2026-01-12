import Fact from "@/components/Fact";
import About from "@/components/About";
import Feature from "@/components/Feature";
import Team from "@/components/Team";
import InnerBanner from "@/components/InnerBanner";


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
