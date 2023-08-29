import { UnsplashUser } from "@/models/unsplash-user";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React, { cache } from "react";

interface PageProps {
  params: { username: string };
}

const getUser = async (username: string): Promise<UnsplashUser> => {
  const response = await fetch(
    `https://api.unsplash.com/users/${username}?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );

  if (response.status === 404) {
    console.log("404 error!");
    notFound();
  }
  return await response.json();
};

// used if you fetch data if you are not using fetch, such as axios
// const getUserCached = cache(getUser);

export const generateMetadata = async ({
  params: { username },
}: PageProps): Promise<Metadata> => {
  //use this instead of getUser if you use axios or some other fetching technique
  //   const user = await getUserCached(username);
  const user = await getUser(username);

  return {
    // filters out spaces, so if there is not first or last name it skips its and removes the blank space
    // if there is no first or last name we fallback to using the username
    title:
      ([user.first_name, user.last_name].filter(Boolean).join(" ") ||
        user.username) + " - Next.js 13.4 Image Gallery",
  };
};

const Page = async ({ params: { username } }: PageProps) => {
  //use this instead of getUser if you use axios or some other fetching technique
  //   const user = await getUserCached(username);
  const user = await getUser(username);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl">{user.username}</h1>
      <p className="bg-blue-100 max-w-xl rounded mb-8 p-3">
        This page uses <strong>generateMetadata</strong> to set the
        <strong>page title</strong> dynamically from the API response.
      </p>
      <p>First name: {user.first_name}</p>
      <p>Last name: {user.last_name}</p>
      <a
        href={"https://unsplash.com/" + user.username}
        className="text-blue-500"
      >
        Unsplash Profile
      </a>
    </div>
  );
};

export default Page;
