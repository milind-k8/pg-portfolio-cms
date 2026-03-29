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
            <path d="M20 18C20 18 10 -2 0 10C10 2 20 18 20 18ZM20 18C20 18 30 -2 40 10C30 2 20 18 20 18Z" fill="var(--accent)" />
          </svg>
        </div>
        <div style={{
          fontFamily: "var(--font-sans)",
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.3em",
          color: "var(--subtitle)",
          marginBottom: "24px",
        }} data-tina-field={tinaField(data, "heroTopper")}>
          {data.heroTopper || "Webflow"}
        </div>
        <h1 style={{
          fontSize: "clamp(40px, 8vw, 64px)",
          lineHeight: "1.1",
          margin: "0 auto",
          maxWidth: "700px",
          color: "var(--heading)"
        }} data-tina-field={tinaField(data, "heroTitle")}>
          {data.heroTitle ? data.heroTitle.split('\n').map((line: string, i: number) => (
            <React.Fragment key={i}>{line}<br/></React.Fragment>
          )) : <>Wedding Website <br/>Template</>}
        </h1>
        <div style={{ height: "40px", width: "1px", backgroundColor: "rgba(0,0,0,0.1)", margin: "40px auto 0" }}></div>
      </div>

      <div style={{
          fontFamily: "var(--font-sans)",
          fontSize: "11px",
          textAlign: "center",
          textTransform: "uppercase",
          letterSpacing: "0.25em",
          color: "var(--subtitle)",
          marginBottom: "40px",
      }}>
        Home Pages
      </div>

      {/* Masonry Layout mimicking HOME 1 */}
      <div className="hero-grid-container" style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "0 5%",
      }}>
        <div className="hero-masonry-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "8px",
          width: "100%",
          maxWidth: "1200px",
          height: "65vh",
          minHeight: "400px"
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
        <div className="hero-floating-card" style={{
          position: "absolute",
          bottom: "10%",
          left: "25%",
          backgroundColor: "var(--white)",
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
            color: "var(--subtitle)",
            marginBottom: "16px"
          }} data-tina-field={tinaField(data, "subtitle")}>
            {data.subtitle || "Home 1"}
          </div>
          <h2 style={{
            fontSize: "32px",
            lineHeight: "1.2",
            color: "var(--heading)"
          }} data-tina-field={tinaField(data, "title")}>
            {data.title || "Luxury Weddings & Parties"}
          </h2>
          <div style={{ height: "1px", width: "40px", backgroundColor: "var(--border)", margin: "24px auto 0" }}></div>
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .hero-masonry-grid {
              grid-template-columns: 1fr !important;
              height: auto !important;
              gap: 20px !important;
            }
            .hero-masonry-grid > div {
              height: 400px !important;
            }
            .hero-floating-card {
              position: relative !important;
              left: 0 !important;
              bottom: 0 !important;
              margin-top: -40px !important;
              min-width: 0 !important;
              width: 90% !important;
              margin-left: auto !important;
              margin-right: auto !important;
              padding: 30px !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
