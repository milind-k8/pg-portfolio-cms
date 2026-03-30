import React from "react";
import Section from "../layout/Section";

interface SplashHeroProps {
  data: {
    heroTopper?: string;
    heroTitle?: string;
  };
}

export default function SplashHero({ data }: SplashHeroProps) {
  return (
    <Section variant="hero" className="page" decorations="floral-v1">
      <div className="hero-top">

        <div className="border-top"></div>
        
        {/* Subtitle Icon / Graphic */}
        <div style={{ marginBottom: "16px" }}>
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none" style={{ margin: "0 auto", opacity: 0.5 }}>
            <path d="M20 18C20 18 10 -2 0 10C10 2 20 18 20 18ZM20 18C20 18 30 -2 40 10C30 2 20 18 20 18Z" fill="var(--accent)" />
          </svg>
        </div>

        <div className="subtitle">
          {data.heroTopper || "Webflow"}
        </div>
        
        <h1 className="heading-hero">
          {data.heroTitle ? data.heroTitle.split('\n').map((line, i) => (
            <React.Fragment key={i}>{line}<br /></React.Fragment>
          )) : <>Wedding Website <br />Template</>}
        </h1>
        
        <div className="border-down margin"></div>
      </div>
    </Section>
  );
}
