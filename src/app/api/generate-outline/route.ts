import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const request = await req.json();

    const { platform, postType, language, about, link, keywords, } = request;

    // const dto = {
    //     format: platform,
    //     content_type: postType,
    //     language: language,
    //     content_about: about,
    //     link: link,
    //     keywords_of_content: keywords,
    // }

    // const apiUrl = "https://api.contentwriter.io/api/v1/generate-content"
    // const res = await fetch(apiUrl, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json'
    //     },
    //     body: JSON.stringify(dto),
    // });

    const result = {
        statusCode: 200,
        message: "Success",
        data: {
            id: 'c819ad6f-61d5-4482-84af-45f4471ba2de',
            platform,
            postType,
            language,
            about,
            link,
            keywords,
        }
    }

    return NextResponse.json(result);
}