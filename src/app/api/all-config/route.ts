
import FakeData from "@/data/__all_config.json"
import { NextResponse } from "next/server";
export async function GET(req: Request) {

    const { searchParams, } = new URL(req.url)
    const page = searchParams.get('page')


    const fakedata = FakeData;
    const pageInt = parseInt(page ? page : '0');
    const take = 5
    const skip = (5 * pageInt) - 1 < 0 ? 0 : (5 * pageInt) - 1;
    const data = fakedata.slice(skip, skip + take);

    return NextResponse.json(data);
}