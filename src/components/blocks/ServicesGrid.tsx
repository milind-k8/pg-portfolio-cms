import React from "react";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";

export default function ServicesGrid({ data }: { data: any }) {
  const items = data.items || [];

  return (
    <section className="section container fade-in-up">
      <div style={{
        fontFamily: "var(--font-sans)",
        fontSize: "11px",
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: "0.25em",
        color: "var(--subtitle)",
        marginBottom: "40px",
      }}>
        Inner Pages
      </div>

      <div className="services-grid" style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "24px",
      }}>
        {items.map((item: any, i: number) => (
          <div key={i} style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            textAlign: "center",
            padding: "40px",
            border: "1px solid var(--border)",
            backgroundColor: "var(--white)"
          }}>
             <div style={{
                fontFamily: "var(--font-sans)",
                fontSize: "9px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "var(--subtitle)",
                marginBottom: "24px",
                display: "flex",
                alignItems: "center",
                gap: "12px"
              }}>
                <span style={{ width: "20px", height: "1px", backgroundColor: "var(--border)"}}></span>
                Service 0{i+1}
                <span style={{ width: "20px", height: "1px", backgroundColor: "var(--border)"}}></span>
              </div>

            <div style={{ position: "relative", width: "100%", height: "250px", overflow: "hidden", marginBottom: "32px" }}>
              <Image src={item.image || "/images/services_wedding.png"} alt={item.title} fill style={{ objectFit: "cover" }} className="hover-zoom-img" data-tina-field={tinaField(item, "image")} />
            </div>
            
            <h2 style={{ fontSize: "28px", marginBottom: "16px", fontWeight: 300 }} data-tina-field={tinaField(item, "title")}>
              {item.title || "Service Title"}
            </h2>
            <p style={{
              fontFamily: "var(--font-serif)",
              fontSize: "15px",
              lineHeight: "1.6",
              color: "var(--paragraphs)",
              marginBottom: "32px",
              fontStyle: "italic"
            }} data-tina-field={tinaField(item, "description")}>
              {item.description || "Elegant imagery capturing the raw emotion and timeless beauty of your bespoke celebration."}
            </p>
            <a href={item.link || "#"} className="text-link-cta" data-tina-field={tinaField(item, "link")}>
              Discover
            </a>
          </div>
        ))}
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
