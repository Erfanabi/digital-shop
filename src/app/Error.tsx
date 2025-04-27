"use client";

import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";

function ErrorPage({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="mt-20 flex flex-col items-center justify-center">
      <h2 className="text-xl">{error.message}</h2>
      <div className="mt-6 flex justify-between gap-10">
        <Button variant="secondary" onClick={() => reset()}>
          Try again
        </Button>
        <Button onClick={() => router.push("/")}>Home</Button>
      </div>
    </div>
  );
}

export default ErrorPage;
