import { Link } from "@remix-run/react";
import type { V2_MetaFunction } from "@remix-run/cloudflare";
import styles from '~/styles/home.css'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export const meta: V2_MetaFunction = () => {
  return [{ title: "Pláticas Mich" }];
};

export default function Index() {
  return (
    <div className="home">
      <header>
        <h1 className="titulo">Mis pláticas:</h1>
      </header> 
      <ul>
        <Link to="/slides">* El fracaso como motor del cambio</Link>
      </ul>
    </div>
  );
}
