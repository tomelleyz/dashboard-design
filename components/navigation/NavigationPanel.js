import { useState } from "react";
import { motion } from "framer-motion";
import NavigationMenu from "./NavigationMenu";

export default function NavigationPanel() {
  const [isNavigationPanelExpanded, setIsNavigationPanelExpanded] =
    useState(true);

  return (
    <motion.section
      className="sticky top-0 hidden h-full flex-col overflow-y-auto overflow-x-hidden bg-pink-400 transition-all duration-300 lg:flex"
      initial={false}
      animate={{
        width: isNavigationPanelExpanded ? "280px" : "114px",
        padding: isNavigationPanelExpanded
          ? "30px 3rem 3rem"
          : "30px 2rem 3rem",
      }}
      transition={{ type: "tween", duration: 0 }}
    >
      <NavigationMenu
        isNavigationPanelExpanded={isNavigationPanelExpanded}
        setIsNavigationPanelExpanded={setIsNavigationPanelExpanded}
      />
    </motion.section>
  );
}
