"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    // If user is not admin, redirect
    if (user && user.publicMetadata.role !== "admin") {
      router.push("/dashboard"); // or some "forbidden" page
    }
  }, [user, router]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <p>Only admins can see this content.</p>
    </div>
  );
}
