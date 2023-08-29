import { UnsplashImage } from "@/models/unsplash-image";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

//page level
export const revalidate = 15;

export const metadata: Metadata = {
  title: "Incremental Static Regeneration - Next.js 13.4 Image Gallery",
};

const Page = async () => {
  const response = await fetch(
    "https://api.unsplash.com/photos/random/?client_id=" +
      process.env.UNSPLASH_ACCESS_KEY,
    {
      // fetch level
      // next: { revalidate: 0 },
    }
  );
  const image: UnsplashImage = await response.json();

  const WIDTH = Math.min(500, image.width);
  const HEIGHT = (WIDTH / image.width) * image.height;

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl">ISR</h2>
      <p className="bg-blue-100 max-w-xl rounded mb-8 p-3">
        This page uses <strong>Incremental Static Regeneration</strong>. A new
        image is fetched every 15 seconds (after refreshing the page) and then
        served from teh cache for that duration.
      </p>
      <Image
        src={image.urls.raw}
        width={WIDTH}
        height={HEIGHT}
        alt={image.description}
        className="rounded shadow"
      />
      by{" "}
      <Link href={"/users/" + image.user.username} className="text-blue-500">
        {image.user.username}
      </Link>
    </div>
  );
};

export default Page;
