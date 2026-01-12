import Service from "@/components/Service";
import InnerBanner from "@/components/InnerBanner";
import Testimonial from "@/components/Testimonial";


export default function ServicePage() {
  return (
    <div className="body">
      <InnerBanner name="Services" />
      <Service />
      <Testimonial />
    </div>
  );
}
