import Link from "next/link";

export default function MenuLinkMobile({ title, children, ...props }) {
  return (
    <Link
      className="group flex items-center gap-x-4 text-base text-black-500 transition-all hover:font-semibold hover:text-pink-500"
      {...props}
    >
      {children}
      <span className="shrink-0">{title}</span>
    </Link>
  );
}
