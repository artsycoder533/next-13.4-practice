import SearchPage from "./SearchPage";
export const metadata = {
  title: "Search - Next.js 13.4 Image Gallery",
};

const Page = () => {
  // this serves as a wrapper for our client so that we can declare metadata here and only server components can do that
  return <SearchPage />;
};

export default Page;
