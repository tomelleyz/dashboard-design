import Link from "next/link";
import { useRouter } from "next/router";

export default function MenuLinkMobile({ title, children, ...props }) {
  const router = useRouter();
  return (
    <Link
      className={`group flex items-center gap-x-4 text-base transition-all hover:font-semibold hover:text-pink-500 ${
        router.pathname === props.href
          ? "font-semibold text-pink-500"
          : "font-normal text-black-500"
      }`}
      {...props}
    >
      {children}
      <span className="shrink-0">{title}</span>
    </Link>
  );
}
