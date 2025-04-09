export function middleware(req) {
  const url = req.url;
  const pathname = req.nextUrl.pathname;

  if (pathname.startsWith("/profile")) {
    console.log("this is profile request");
  }
  if (pathname.startsWith("/admin")) {
    console.log("this is admin request");
  }
}

export const config = {
  matcher: ["/admin", "/profile"],
};
