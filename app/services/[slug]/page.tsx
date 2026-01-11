import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InnerBanner from "@/components/InnerBanner";
import Testimonial from "@/components/Testimonial";
import ServiceDetail from "@/components/ServiceDetail";

const slugToName = async ({ slug }: { slug: string }) => {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params; // ✅ unwrap params
  const slugName = await slugToName({ slug });

  return (
    <div className="body">
      <Header />
      <InnerBanner name={slugName} />
      <ServiceDetail slug={slug} />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}
