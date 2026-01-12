import InnerBanner from "@/components/InnerBanner";
import Testimonial from "@/components/Testimonial";
import Career from "@/components/Career";

export default function CareerPage() {
  return (
    <div className="body">
      <InnerBanner name="Career" />
      <Career />
      <Testimonial />
    </div>
  );
}
