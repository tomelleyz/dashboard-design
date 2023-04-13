import {
  fadeInAndShowWithDelay,
  fadeOutAndHide,
} from "@/utils/animation-properties";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MenuLink({
  title,
  isNavigationPanelExpanded,
  children,
  ...props
}) {
  return (
    <Link
      className="group flex items-center gap-x-4 text-base text-black-500 transition-all hover:font-semibold hover:text-pink-500"
      aria-label={title}
      title={isNavigationPanelExpanded ? "" : title}
      {...props}
    >
      {children}
      <motion.span
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
