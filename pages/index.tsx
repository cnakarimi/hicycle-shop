import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Link href="/products">
      <a>products</a>
    </Link>
  );
}
