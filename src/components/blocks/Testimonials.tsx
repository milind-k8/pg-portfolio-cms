import React from "react";
import { tinaField } from "tinacms/dist/react";

export default function Testimonials({ data }: { data: any }) {
  const items = data.items || [];

  return (
    <section className="section fade-in-up" style={{
      backgroundColor: "var(--bg-almond)",
      padding: "160px 5%",
      textAlign: "center"
    }}>
      <div className="container" style={{ maxWidth: "800px" }}>
        {items.map((item: any, i: number) => (
          <div key={i} style={{ marginBottom: i === items.length - 1 ? 0 : "80px" }}>
            <div style={{
              fontSize: "120px",
              fontFamily: "var(--font-serif)",
              color: "var(--accent-rose)",
              lineHeight: "0.5",
              opacity: 0.6,
              marginBottom: "20px"
            }}>
              “
            </div>
            <p style={{
              fontFamily: "var(--font-serif)",
              fontSize: "36px",
              lineHeight: "1.4",
              color: "var(--text-charcoal)",
              marginBottom: "40px",
              fontStyle: "italic"
            }} data-tina-field={tinaField(item, "quote")}>
              {item.quote || "The most exquisite experience we've ever had. True artists."}
            </p>
            <p style={{
              fontFamily: "var(--font-sans)",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontSize: "14px",
              fontWeight: "bold",
              color: "rgba(0,0,0,0.6)"
            }} data-tina-field={tinaField(item, "author")}>
              — {item.author || "Jennifer & Oliver"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
