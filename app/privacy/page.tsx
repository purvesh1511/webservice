import InnerBanner from "@/components/InnerBanner";
import Testimonial from "@/components/Testimonial";
import Cms from "@/components/Cms";


export default function TermPage() {
  return (
    <div className="body">
      <InnerBanner name="Privacy Policy" />
      <Cms id={1} />
      <Testimonial />
    </div>
  );
}
