import InnerBanner from "@/components/InnerBanner";
import Testimonial from "@/components/Testimonial";
import Cms from "@/components/Cms";


export default function TermPage() {
  return (
    <div className="body">
      <InnerBanner name="Terms & Conditions" />
      <Cms id={2} />
      <Testimonial />
    </div>
  );
}
