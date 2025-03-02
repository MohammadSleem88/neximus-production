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
      <h1 className="text-3xl font-extrabold text-pink-500 uppercase mb-6">
        Admin
      </h1>
      <p className="text-gray-300 text-lg leading-relaxed mb-4">
        Admin team. Access internal tools, project management features, and
        more.
      </p>
      {/* Additional UI or features can go here */}
    </div>
  );
}
