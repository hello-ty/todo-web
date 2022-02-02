import Head from "next/head";
import Image from "next/image";
import clsx from "clsx";
import classes from "/src/styles/Home.module.css";

export function Header() {
  return (
    <header className={clsx("bg-white h-20 mt-12 p-5  w-screen")}>
      <figure className={clsx("relative", classes.image)}>
        <Image src="/qinlogo.svg" layout="fill" objectFit="contain" />
      </figure>
    </header>
  );
}
