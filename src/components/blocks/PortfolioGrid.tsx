import React from "react";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";

export default function PortfolioGrid({ data }: { data: any }) {
  const items = data.items || [];

  return (
    <section className="section fade-in-up" style={{ padding: "0 5% 120px 5%" }}>
      <div className="container" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "40px",
      }}>
        {items.map((item: any, i: number) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", cursor: "pointer" }} className="hover-zoom-img">
            <div style={{ position: "relative", width: "100%", height: "600px", overflow: "hidden", marginBottom: "24px" }}>
              <Image src={item.image || "/images/portfolio_couple.png"} alt={item.name} fill style={{ objectFit: "cover" }} data-tina-field={tinaField(item, "image")} />
            </div>
            <h3 style={{
              fontFamily: "var(--font-serif)",
              fontSize: "28px",
              color: "var(--text-charcoal)"
            }} data-tina-field={tinaField(item, "name")}>
              {item.name || "Jennifer & Oliver"}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
