"use client";

import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import { FormEvent, useState } from "react";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState<UnsplashImage[] | null>(
    null
  );
  const [searchResultsLoading, setSearchResultsLoading] =
    useState<boolean>(false);
  const [searchResultsLoadingIsError, setSearchResultsLoadingIsError] =
    useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const query = formData.get("query")?.toString().trim();

    if (query) {
      try {
        setSearchResults(null);
        setSearchResultsLoadingIsError(false);
        setSearchResultsLoading(true);
        //   note: you cant use your env variables in the front end as it will be undefined!
        const response = await fetch("/api/search?query=" + query);
        const images: UnsplashImage[] = await response.json();
        setSearchResults(images);
      } catch (error) {
        console.error(error);
        setSearchResultsLoadingIsError(true);
      } finally {
        setSearchResultsLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <p className="bg-blue-100 max-w-xl rounded mb-8 p-3">
        This page fetches data <strong>client-side</strong> in order to not leak
        API credientials, the request is sent to a Next.js{" "}
        <strong>route handler</strong> that runs on the server. This route
        handler then fetches the data from the Unsplash API and returns it to
        the client.
      </p>
      <form onSubmit={handleSubmit} className="m-3 flex flex-row">
        <div className="flex flex-row items-center justify-between">
          <label htmlFor="query" className=" mr-2">
            Search User:
          </label>
          <input
            type="text"
            name="query"
            id="query"
            className="border p-1 rounded-tl rounded-bl"
            placeholder="computer, etc.."
          />
        </div>
        <button
          type="submit"
          disabled={searchResultsLoadingIsError}
          className="bg-blue-700 text-white px-2 rounded-tr rounded-br"
        >
          Search
        </button>
      </form>

      <div className="flex flex-col items-center">
        {searchResultsLoading && <h2>Loading...</h2>}
        {searchResultsLoadingIsError && (
          <p>Something went wrong. Please try again.</p>
        )}
        {searchResults?.length === 0 && (
          <p>Nothing found. Try a different query.</p>
        )}
      </div>

      {searchResults && (
        <div className="flex flex-row flex-wrap justify-center gap-2">
          {searchResults.map((image) => (
            <div key={image.urls.raw} className="w-[250px] h-[250px] flex">
              <Image
                src={image.urls.raw}
                width={250}
                height={250}
                alt={image.description}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
