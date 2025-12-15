import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("image");

    if (!file) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const response = await fetch("https://api.runwayml.com/v1/generations", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RUNWAY_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gen3",
        prompt_image: buffer.toString("base64"),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json({ error: data }, { status: 500 });
    }

    return NextResponse.json({ id: data.id });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
                             }
