import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h2>404 Not Found!</h2>
      <p>User does not exist!</p>
      <Link href="/" className="text-blue-500 border p-2">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
