import {
  fadeInAndShowWithDelay,
  fadeOutAndHide,
} from "@/utils/animation-properties";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

export default function MenuLink({
  title,
  isNavigationPanelExpanded,
  children,
  ...props
}) {
  const router = useRouter();

  return (
    <Link
      className={`group flex items-center gap-x-4 text-base transition-all hover:font-semibold hover:text-pink-500 ${
        router.pathname === props.href
          ? "font-semibold text-pink-500"
          : "font-normal text-black-500"
      }`}
      aria-label={title}
      title={isNavigationPanelExpanded ? "" : title}
      {...props}
    >
      {children}
      <motion.span
        initial={false}
        animate={
          isNavigationPanelExpanded ? fadeInAndShowWithDelay : fadeOutAndHide
        }
        className="shrink-0"
      >
        {title}
      </motion.span>
    </Link>
  );
}
