import React from "react";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";

export default function HeroCard({ data }: { data: any }) {
  return (
    <section className="section fade-in-up" style={{ padding: "140px 0 100px 0", position: "relative" }}>
      {/* Top Text Header (WEBFLOW Wedding Website Template) */}
      <div style={{ textAlign: "center", marginBottom: "80px" }}>
        <div style={{ marginBottom: "16px" }}>
          {/* Subtle icon/graphic */}
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none" style={{ margin: "0 auto", opacity: 0.5 }}>
            <path d="M20 18C20 18 10 -2 0 10C10 2 20 18 20 18ZM20 18C20 18 30 -2 40 10C30 2 20 18 20 18Z" fill="var(--accent-rose)" />
          </svg>
        </div>
        <div style={{
          fontFamily: "var(--font-sans)",
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.3em",
          color: "rgba(0,0,0,0.5)",
          marginBottom: "24px",
        }}>
          Webflow
        </div>
        <h1 style={{
          fontSize: "64px",
          lineHeight: "1.1",
          margin: "0 auto",
          maxWidth: "700px",
          color: "var(--text-charcoal)"
        }}>
          Wedding Website <br/>Template
        </h1>
        <div style={{ height: "40px", width: "1px", backgroundColor: "rgba(0,0,0,0.1)", margin: "40px auto 0" }}></div>
      </div>

      <div style={{
          fontFamily: "var(--font-sans)",
          fontSize: "11px",
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "0.25em",
          color: "rgba(0,0,0,0.6)",
          marginBottom: "40px",
      }}>
        Home Pages
      </div>

      {/* Masonry Layout mimicking HOME 1 */}
      <div style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "0 10%",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "8px",
          width: "100%",
          maxWidth: "1100px",
          height: "65vh"
        }}>
          <div style={{ position: "relative", height: "100%", width: "100%", overflow: "hidden" }}>
            <Image src={data.image1 || "/images/hero_party.png"} alt="Hero Left" fill style={{ objectFit: "cover" }} className="hover-zoom-img" data-tina-field={tinaField(data, "image1")} />
          </div>
          <div style={{ position: "relative", height: "100%", width: "100%", overflow: "hidden" }}>
            <Image src={data.image2 || "/images/hero_party.png"} alt="Hero Center" fill style={{ objectFit: "cover" }} className="hover-zoom-img" data-tina-field={tinaField(data, "image2")} />
          </div>
          <div style={{ position: "relative", height: "100%", width: "100%", overflow: "hidden" }}>
            <Image src={data.image3 || "/images/hero_party.png"} alt="Hero Right" fill style={{ objectFit: "cover" }} className="hover-zoom-img" data-tina-field={tinaField(data, "image3")} />
          </div>
        </div>

        {/* Floating Center Card (HOME 1 style) */}
        <div style={{
          position: "absolute",
          bottom: "10%",
          left: "25%",
          backgroundColor: "var(--bg-white)",
          padding: "50px 80px",
          textAlign: "center",
          boxShadow: "0 10px 40px rgba(0,0,0,0.03)",
          zIndex: 10,
          minWidth: "400px"
        }}>
          <div style={{
            fontFamily: "var(--font-sans)",
            fontSize: "10px",
            textTransform: "uppercase",
            letterSpacing: "0.2em",
            color: "rgba(0,0,0,0.4)",
            marginBottom: "16px"
          }}>
            Home 1
          </div>
          <h2 style={{
            fontSize: "32px",
            lineHeight: "1.2",
            color: "var(--text-charcoal)"
          }} data-tina-field={tinaField(data, "title")}>
            {data.title || "Luxury Weddings & Parties"}
          </h2>
          <div style={{ height: "1px", width: "40px", backgroundColor: "rgba(0,0,0,0.1)", margin: "24px auto 0" }}></div>
        </div>
      </div>
    </section>
  );
}
