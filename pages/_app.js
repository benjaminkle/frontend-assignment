import "../styles/globals.css";
import Link from "next/link";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <nav className="navbar">
        <Link href="/" className="btn btn-outline">
          Home
        </Link>
        <Link href="/about" className="btn btn-outline">
          About
        </Link>
        <Link href="/features" className="btn btn-outline">
          Features
        </Link>
      </nav>

      <Component {...pageProps} />

      <footer className="footer">© 2025 Khoa Le. All Right Reserved</footer>
    </div>
  );
}
