import InnerBanner from "@/components/InnerBanner";
import ServiceDetail from "@/components/ServiceDetail";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Detail - P3 Tech Website design and Development Company",
  description: "P3 Tech is a leading website design and development company, specializing in creating stunning and functional websites that drive business growth.",
};

const slugToName = async ({ slug }: { slug: string }) => {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params; // ✅ unwrap params
  const slugName = await slugToName({ slug });

  return (
    <div className="body">
      <InnerBanner name={slugName} />
      <ServiceDetail slug={slug} />
    </div>
  );
}
