import React from "react";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import Section from "../layout/Section";

export default function PortfolioGrid({ data }: { data: any }) {
  const items = data.items || [];

  return (
    <Section className="fade-in-up" decorations="floral-v4" width="wide">
      <div className="portfolio-grid">
        {items.map((item: any, i: number) => (
          <div key={i} className="portfolio-item-wrapper">
            <div className="portfolio-img-container">
              <Image 
                src={item.image || "/images/portfolio_couple.png"} 
                alt={item.name || "Portfolio Item"} 
                fill 
                style={{ objectFit: "cover" }} 
                className="hover-zoom-img" 
                data-tina-field={tinaField(item, "image")} 
              />
            </div>
            <h3 className="portfolio-item-title" data-tina-field={tinaField(item, "name")}>
              {item.name || "Project Name"}
            </h3>
          </div>
        ))}
      </div>

      <style jsx>{`
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          width: 100%;
        }

        .portfolio-item-wrapper {
          display: flex;
          flex-direction: column;
        }

        .portfolio-img-container {
          position: relative;
          width: 100%;
          height: 380px; /* Reduced from 500px for a more compact look */
          overflow: hidden;
          margin-bottom: 20px;
          background-color: var(--preload);
        }

        .portfolio-item-title {
          font-size: 18px;
          font-weight: 300;
          color: var(--heading);
          font-family: var(--font-serif);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        @media (max-width: 991px) {
          .portfolio-grid {
            gap: 24px;
          }
          .portfolio-img-container {
             height: 320px;
          }
        }

        @media (max-width: 767px) {
          .portfolio-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .portfolio-img-container {
            height: 300px;
          }
        }
      `}</style>
    </Section>
  );
}


