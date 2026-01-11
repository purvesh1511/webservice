import { NextResponse } from "next/server";
import { services } from "../data";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const { slug } = await params;

  // FIND service by slug (LAST ROUTE POINT)
  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return NextResponse.json(
      { message: "Service not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(service);
}
