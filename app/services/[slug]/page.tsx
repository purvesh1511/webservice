import InnerBanner from "@/components/InnerBanner";
import ServiceDetail from "@/components/ServiceDetail";

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
