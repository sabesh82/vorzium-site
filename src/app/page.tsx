"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Spinner from "./components/Spinner";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <Spinner />
    </div>
  );
}

{
  /*
  **redirect method
  import { redirect } from "next/navigation";

  export default function Home() {
  redirect("/home");
}
  */
}
