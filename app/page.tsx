import Hero from "@/components/Hero";
import Fact from "@/components/Fact";
import About from "@/components/About";
import Service from "@/components/Service";
import Feature from "@/components/Feature";
import Project from "@/components/Project";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="body">
      <Hero />
      <Fact />
      <About />
      <Service />
      <Feature />
      <Project />
      <Team teamSize={3}/>
      <Testimonial />
    </div>
  );
}
