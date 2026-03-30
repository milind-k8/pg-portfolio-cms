import React from "react";
import * as Decor from "./BackgroundDecor";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "hero" | "page" | "first" | "footer" | "default";
  width?: "narrow" | "wide" | "default";
  decorations?: 
    | "floral-v1" | "floral-v2" | "floral-v3" | "floral-v4" 
    | "leaf-v1" | "leaf-v2" 
    | "mixed-v1" | "none";
}

export default function Section({
  children,
  className = "",
  id,
  variant = "default",
  width = "default",
  decorations = "none",
}: SectionProps) {
  // Map variant to CSS class
  const sectionClass = variant === "hero" ? "section-hero" : "section";
  const variantClass = variant !== "default" && variant !== "hero" ? variant : "";
  
  // Map width to content class
  const contentWidthClass = width !== "default" ? width : "";

  return (
    <section 
      id={id} 
      className={`${sectionClass} ${variantClass} ${className}`.trim()}
      style={{ overflow: "hidden", position: "relative" }}
    >
      {/* Original Watercolor Decorations */}
      <div className="decorations-wrapper">
        {decorations === "floral-v1" && (
          <>
            <Decor.Flower7 style={{ left: "2%", top: "5%" }} />
            <Decor.Flower8 style={{ right: "2%", bottom: "5%" }} />
          </>
        )}
        {decorations === "floral-v2" && (
          <>
            <Decor.Flower1 style={{ left: "5%", top: "15%" }} />
            <Decor.Flower3 style={{ right: "8%", top: "10%" }} />
          </>
        )}
        {decorations === "floral-v3" && (
          <>
            <Decor.Flower4 style={{ left: "-2%", bottom: "10%" }} />
            <Decor.Flower6 style={{ right: "5%", top: "20%" }} />
          </>
        )}
        {decorations === "floral-v4" && (
          <>
            <Decor.Flower9 style={{ left: "10%", top: "5%" }} />
            <Decor.Flower2 style={{ right: "2%", bottom: "15%" }} />
          </>
        )}
        {decorations === "leaf-v1" && (
          <>
            <Decor.Flower5 style={{ left: "3%", top: "25%" }} />
          </>
        )}
        {decorations === "leaf-v2" && (
          <>
            <Decor.Flower5 style={{ right: "3%", bottom: "25%", transform: "scaleX(-1)" }} />
          </>
        )}
        {decorations === "mixed-v1" && (
          <>
            <Decor.Flower1 style={{ left: "1%", top: "10%" }} />
            <Decor.Flower3 style={{ left: "15%", bottom: "5%" }} />
            <Decor.Flower8 style={{ right: "2%", top: "15%" }} />
            <Decor.Flower5 style={{ right: "12%", bottom: "10%" }} />
          </>
        )}
      </div>

      <div className={`content ${contentWidthClass}`.trim()}>
        {children}
      </div>

      <style jsx>{`
        .decorations-wrapper {
           position: absolute;
           inset: 0;
           pointer-events: none;
           z-index: 0;
        }
        @media (max-width: 479px) {
           .decorations-wrapper {
              display: none; /* Hide background decorations on extra small screens for legibility */
           }
        }
      `}</style>

    </section>
  );
}


