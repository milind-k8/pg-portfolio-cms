import React from "react";
import Image from "next/image";

export default function Footer() {
  const images = [
    "/images/portfolio_couple.png",
    "/images/services_wedding.png",
    "/images/about_portrait.png",
    "/images/portfolio_couple.png",
    "/images/hero_party.png",
    "/images/services_wedding.png"
  ];

  const linkStyle = {
    fontFamily: "var(--font-sans)",
    fontSize: "9px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.2em",
    color: "var(--paragraphs)",
    transition: "color 0.3s ease",
    cursor: "pointer",
    display: "block",
    marginBottom: "12px"
  };

  return (
    <footer style={{ backgroundColor: "var(--background)", paddingTop: "120px", paddingBottom: "60px" }}>
      {/* Instagram Header */}
      <h2 style={{ textAlign: "center", fontSize: "36px", marginBottom: "40px", color: "var(--heading)" }}>
        Instagram
      </h2>

      {/* 6 Grid layout spanning full width roughly */}
      <div className="instagram-grid" style={{
        display: "flex",
        width: "100%",
        gap: "4px",
        height: "250px",
        marginBottom: "100px"
      }}>
        {images.map((src, i) => (
          <div key={i} style={{ flex: 1, position: "relative", height: "100%", overflow: "hidden" }} className="hover-zoom-img">
            <Image src={src} alt="Instagram feed placeholder" fill style={{ objectFit: "cover" }} />
          </div>
        ))}
      </div>

      {/* Footer Links & Social */}
      <div className="container footer-links-grid" style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center"
      }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: "18px", marginBottom: "24px", color: "var(--heading)" }}>Social</h3>
          <a style={linkStyle}>Instagram</a>
          <a style={linkStyle}>Facebook</a>
          <a style={linkStyle}>Pinterest</a>
        </div>
        <div className="footer-divider" style={{ width: "1px", backgroundColor: "var(--border)" }}></div>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: "18px", marginBottom: "24px", color: "var(--heading)" }}>Quick Links</h3>
          <a style={linkStyle}>Licensing</a>
          <a style={linkStyle}>Style Guide</a>
          <a style={linkStyle}>Changelog</a>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .instagram-grid {
            flex-wrap: wrap !important;
            height: auto !important;
            margin-bottom: 60px !important;
          }
          .instagram-grid > div {
             flex: none !important;
             width: calc(33.33% - 4px) !important;
             height: 120px !important;
          }
          .footer-links-grid {
             flex-direction: column !important;
             gap: 40px !important;
          }
          .footer-divider {
            display: none;
          }
        }
      `}</style>

      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <div style={{
          fontFamily: "var(--font-serif)",
          fontSize: "24px",
          fontWeight: 300,
          letterSpacing: "0.15em",
          color: "var(--heading)",
        }}>
          LOOVIO
        </div>
      </div>
    </footer>
  );
}
