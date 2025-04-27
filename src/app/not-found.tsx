"use client";

import React from "react";
import { Button } from "@/components/ui";
import Link from "next/link";

function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="animate-bounce text-8xl font-bold text-black">404</h1>
      <p className="my-4 text-xl text-gray-600">
        Oops! The page you are looking for does not exist.
      </p>
      <Button asChild>
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  );
}

export default NotFound;
