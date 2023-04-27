import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from './styles/global.css'
import { AppProvider } from "./context";
import { Layout } from '~/components/Layout'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
          <AppProvider>
            <Layout>
              <Outlet />
            </Layout>
          </AppProvider>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
      </body>
    </html>
  );
}
