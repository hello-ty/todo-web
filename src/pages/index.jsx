import Head from "next/head";
import Image from "next/image";
import clsx from "clsx";
import classes from "/src/styles/Home.module.css";
import { Main } from "/src/components/Main/";
import { Header } from "src/components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TodoList</title>
      </Head>

      <Header />

      <Main />
    </div>
  );
}
