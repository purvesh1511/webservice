import { NextRequest, NextResponse } from "next/server";
import { teams } from "./data";

export async function GET(request: NextRequest) {
    return NextResponse.json(teams);
}