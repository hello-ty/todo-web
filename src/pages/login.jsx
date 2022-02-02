import Head from "next/head";
import { Header } from "src/components/Header";
import { HyperLink } from "src/components/HyperLink";

export default function Login() {
  return (
    <div>
      <Head>
        <title>TodoList</title>
      </Head>

      <Header />

      <HyperLink href="/" name="top" />
    </div>
  );
}
