
import InnerBanner from "@/components/InnerBanner";
import Testimonial from "@/components/Testimonial";
import Project from "@/components/Project";


export default function ProjectPage() {
  return (
    <div className="body">
      <InnerBanner name="Projects" />
      <Project />
      <Testimonial />
    </div>
  );
}
