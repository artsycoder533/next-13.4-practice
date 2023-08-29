import { UnsplashImage } from "@/models/unsplash-image";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Static Fetching - Next.js 13.4 Image Gallery",
};

const Page = async () => {
  const response = await fetch(
    "https://api.unsplash.com/photos/random/?client_id=" +
      process.env.UNSPLASH_ACCESS_KEY
  );
  const image: UnsplashImage = await response.json();

  const WIDTH = Math.min(500, image.width);
  const HEIGHT = (WIDTH / image.width) * image.height;

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl">Static Rendering</h2>
      <p className="bg-blue-100 max-w-xl rounded mb-8 p-3">
        This page <strong>fetches and caches data at build time</strong>. Even
        tough the Unsplash API always returns a new image, we see the same image
        after refreshing the page until we compile the project again.
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
