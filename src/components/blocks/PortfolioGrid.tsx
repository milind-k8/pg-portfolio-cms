import React from "react";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";

export default function PortfolioGrid({ data }: { data: any }) {
  const items = data.items || [];

  return (
    <section className="section fade-in-up" style={{ padding: "0 5% 120px 5%" }}>
      <div className="portfolio-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "24px",
      }}>
        {items.map((item: any, i: number) => (
          <div key={i} style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ position: "relative", width: "100%", height: "500px", overflow: "hidden", marginBottom: "20px" }}>
              <Image src={item.image || "/images/portfolio_couple.png"} alt={item.name} fill style={{ objectFit: "cover" }} className="hover-zoom-img" data-tina-field={tinaField(item, "image")} />
            </div>
            <h3 style={{ fontSize: "20px", fontWeight: 300, color: "var(--heading)" }} data-tina-field={tinaField(item, "name")}>
              {item.name}
            </h3>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .portfolio-grid {
            grid-template-columns: 1fr !important;
          }
          .portfolio-grid > div > div {
             height: 400px !important;
          }
        }
      `}</style>
    </section>
  );
}
