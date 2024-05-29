
import FakeData from "@/data/__all_config.json"
import { NextResponse } from "next/server";
export async function GET(req: Request) {

    const data = FakeData.slice(0, 5);
    return NextResponse.json(data);
}