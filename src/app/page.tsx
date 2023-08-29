export default function Home() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="bg-blue-100 max-w-xl rounded mb-8 p-3">
        <p>
          This is a simple project to showcase and learn the new{" "}
          <strong>Next.js App Directory</strong> and its features, including:
        </p>
        <ul className="list-disc list-inside py-2">
          <li>Static and dynamic server-side rendering</li>
          <li>Incremental static regeneration</li>
          <li>Client-side rendering</li>
          <li>Route handlers (API endpoints)</li>
          <li>Meta-data API</li>
          <li>and more</li>
        </ul>

        <p>
          Every page uses a different apprach to{" "}
          <strong>fetching and caching</strong>. Click the links in the navbar
          to try them out.
        </p>
      </div>
      <div className="bg-gray-200 max-w-xl rounded mb-8 p-3 space-y-2">
        <p>
          Note: In order to load the data on this site, you need to get a{" "}
          <a className="text-blue-500 underline">
            free API key from Unsplash API
          </a>{" "}
          and add it to your{" "}
          <span className="text-pink-700 text-sm">.env.local </span>file as{" "}
          <span className="text-pink-700 text-sm">UNSPLASH_ACCESS_KEY</span>.
        </p>
        <p>
          Unsplash has a free quota of 50 requests per hour so you might start
          getting errors if you try too often.
        </p>
      </div>
    </div>
  );
}
