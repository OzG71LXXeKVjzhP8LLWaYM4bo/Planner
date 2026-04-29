import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)"]);
const isAppRoute = createRouteMatcher(["/planner(.*)", "/api(.*)", "/trpc(.*)"]);

export default clerkMiddleware(async (auth, request) => {
  const hostname = request.headers.get("host")?.split(":")[0] ?? "";
  const isAppHost = hostname === "app.flowday.live";
  const isWwwHost = hostname === "www.flowday.live" || hostname === "flowday.live";

  if (isAppHost && request.nextUrl.pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/planner";
    await auth.protect();
    return NextResponse.rewrite(url);
  }

  if (isWwwHost && isAppRoute(request)) {
    const url = request.nextUrl.clone();
    url.hostname = "app.flowday.live";
    url.protocol = "https";
    return NextResponse.redirect(url);
  }

  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
