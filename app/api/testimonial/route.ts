import { NextResponse } from "next/server";
import { testimonials } from "./data";

export async function GET(request: Request) {
    return NextResponse.json(testimonials);
}