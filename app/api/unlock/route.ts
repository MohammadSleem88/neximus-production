// app/api/unlock/route.ts
import { NextResponse } from "next/server";

/**
 * POST { username, password }
 * On success, sets an httpOnly cookie "site_access=granted"
 */
export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    // Hardcoded per your request:
    const ok = username === "mo" && password === "asd.12345";

    if (!ok) {
      return NextResponse.json({ ok: false, message: "Invalid credentials" }, { status: 401 });
    }

    const res = NextResponse.json({ ok: true });

    // 14 days access token
    res.cookies.set("site_access", "granted", {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 14,
    });

    return res;
  } catch {
    return NextResponse.json({ ok: false, message: "Bad request" }, { status: 400 });
  }
}
