import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";

/**
 * PUBLIC_INTERFACE
 * links: Global links for fonts. Route components can add additional CSS via their own links().
 */
export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

/**
 * PUBLIC_INTERFACE
 * Layout: Root HTML skeleton for the app. Ensures <Links/> is rendered so route-provided CSS loads.
 */
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        {/* Note: Any route-specific scripts (like /assets/app.js) should be added by the route via useEffect.
            We keep <Scripts /> here to inject Remix's scripts. */}
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/**
 * PUBLIC_INTERFACE
 * App: Root outlet for nested routes.
 */
export default function App() {
  return <Outlet />;
}
