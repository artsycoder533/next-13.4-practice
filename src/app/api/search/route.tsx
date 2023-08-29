import { UnsplashSearchResponse } from "@/models/unsplash-image";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) {
    // 400 means invalid/bad request
    return NextResponse.json({ error: "No query provided" }, { status: 400 });
  }

  const response = await fetch(
    `https://api.unsplash.com/search/photos/?query=${query}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const { results }: UnsplashSearchResponse = await response.json();

  return NextResponse.json(results);
};

export const PATCH = async (request: Request) => {};

export const DELETE = async (request: Request) => {};
