import { NextResponse } from "next/server";

export async function middleware(req) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/profile")) {
    let strCookies = "";
    req.cookies.getAll().forEach((item) => {
      strCookies += `${item?.name}=${item?.value}; `;
    });
    const { data } = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/profile`, {
      method: "GET",
      credentials: "include",
      headers: {
        Cookies: strCookies,
      },
    }).then((res) => res.json);
    const { user } = data || {};
    if (!user) return NextResponse.redirect(new URL("/auth", req.url));
  }
  if (pathname.startsWith("/admin")) {
    console.log("this is admin request");
  }
}

export const config = {
  matcher: ["/admin/:path*", "/profile/:path*"],
};
