"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LandingRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push("/chat-health");
  }, []);

  return null;
}
