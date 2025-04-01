import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  title: string;
  href: string;
};
export default function LinkComponent({ title, href }: Props) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`${
        path === href ? "text-black" : "text-white"
      } font-bold text-2xl`}
    >
      {title}
      {path === href ? "😀" : ""}
    </Link>
  );
}
