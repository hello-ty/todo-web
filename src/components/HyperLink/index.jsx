import Link from "next/link";

export function HyperLink(props) {
  return (
    <Link href={props.href}>
      <a>{props.name}</a>
    </Link>
  );
}
