import { requestScrollToSection } from "@/lib/siteNav";
import { useCallback } from "react";
import { useLocation } from "wouter";

export function useGoToHomeSection() {
  const [loc, navigate] = useLocation();

  return useCallback(
    (sectionId: string) => {
      const path = loc.split("?")[0] || "/";
      if (path === "/" || path === "") {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      } else {
        requestScrollToSection(sectionId);
        navigate("/");
      }
    },
    [loc, navigate],
  );
}
