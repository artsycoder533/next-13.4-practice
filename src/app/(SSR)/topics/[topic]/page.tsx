import { UnsplashImage } from "@/models/unsplash-image";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

// export const revalidate = 0;

// when the project builds we wont be able to access any dynamic values besides what we get from generateStaticParams
// export const dynamicParams = false;

interface PageProps {
  params: { topic: string };
  // must be spelled like this!
  searchParams: { [key: string]: string | string[] | undefined };
}

export const generateMetadata = ({
  params: { topic },
}: PageProps): Metadata => {
  return {
    title: topic + " - Next.js 13.4 Image Gallery",
  };
};

export const generateStaticParams = () => {
  return ["money", "fitness", "coding"].map((topic) => ({ topic }));
};

const Page = async ({ params: { topic } }: PageProps) => {
  // returns 30 random images for whatever topic we pass into the url
  const response = await fetch(
    `https://api.unsplash.com/photos/random/?query=${topic}&count=30&client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );
  const images: UnsplashImage[] = await response.json();

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl">{topic}</h1>
      <p className="bg-blue-100 max-w-xl rounded mb-8 p-3">
        This page uses <strong>generateStaticParams</strong> to render and cache
        static pages at build time, even though the URL has a dynamic parameter.
        Pages that are not included in generateStaticParams will be fetched &
        rendered on first access and then{" "}
        <strong>cached for subsequent requests</strong> (this can be disabled).
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-2">
        {images.map((image) => (
          <div key={image.urls.raw} className="w-[250px] h-[250px] flex">
            <Image
              src={image.urls.raw}
              alt={image.description}
              width={250}
              height={250}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
