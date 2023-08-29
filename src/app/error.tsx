"use client";
import React from "react";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorPageProps) => {
  return (
    <div>
      <h1>Oops!!</h1>
      <p>Something went wrong!</p>
      <button
        className="px-4 py-2  bg-blue-800 text-white"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;
