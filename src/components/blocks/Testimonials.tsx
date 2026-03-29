import React from "react";
import { tinaField } from "tinacms/dist/react";

export default function Testimonials({ data }: { data: any }) {
  const items = data.items || [];

  return (
    <section className="section container fade-in-up" style={{ textAlign: "center", backgroundColor: "var(--preload)", padding: "120px 5%" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{
          fontFamily: "var(--font-sans)",
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.25em",
          color: "var(--subtitle)",
          marginBottom: "40px"
        }}>
          Kind Words
        </div>
        
        {items.map((item: any, i: number) => (
          <div key={i} style={{ marginBottom: "60px" }}>
            <p style={{
              fontFamily: "var(--font-serif)",
              fontSize: "32px",
              lineHeight: "1.4",
              color: "var(--heading)",
              marginBottom: "32px"
            }} data-tina-field={tinaField(item, "quote")}>
              "{item.quote}"
            </p>
            <div style={{
              fontFamily: "var(--font-sans)",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "var(--paragraphs)"
            }} data-tina-field={tinaField(item, "author")}>
              — {item.author}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
           h1, h2, h3, p {
             font-size: 24px !important;
           }
        }
      `}</style>
    </section>
  );
}
