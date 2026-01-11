import { time } from "console";
import { services } from "./data";

export async function GET(request: Request) {
    return new Response(JSON.stringify(services));
}
