import InnerBanner from "@/components/InnerBanner";
import Contact from "@/components/Contact";
import Map from "@/components/Map";


export default function ContactPage() {
  return (
    <div className="body">
      <InnerBanner name="Contact Us" />
      <Contact />
      <Map />
    </div>
  );
}
