"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Styled to match the template's typography: slightly larger font, bold spacing, off-black color
  const linkStyle = {
    fontFamily: "var(--font-sans, sans-serif)",
    fontSize: "12px",
    fontWeight: 500,
    textTransform: "uppercase" as const,
    letterSpacing: "0.15em",
    color: "var(--paragraphs, #4a4a4a)",
    transition: "color 0.3s ease, opacity 0.3s ease",
    cursor: "pointer",
    textDecoration: "none",
  };

  // Uses viewport width for responsive spacing matching the template layout
  const navItemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "6vw"
  };

  const socialIconStyle = {
    width: "16px",
    height: "16px",
    fill: "var(--paragraphs, #4a4a4a)",
    transition: "opacity 0.3s ease",
    cursor: "pointer",
    opacity: 0.7
  };

  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "28px 10%",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: "var(--background, #f4f1eb)", // Warm beige background 
      borderBottom: "1px solid rgba(0,0,0,0.05)" // Flat styling instead of heavy drop shadow
    }}>
      {/* Desktop Left Navigation */}
      <div className="desktop-nav" style={{ ...navItemStyle, flex: 1 }}>
        <Link href="/" style={linkStyle}>Home</Link>
        <Link href="/stories" style={linkStyle}>Stories</Link>
      </div>

      {/* Centered Logo */}
      <Link href="/" style={{
        fontFamily: "var(--font-serif, serif)",
        fontSize: "28px",
        fontWeight: 400,
        letterSpacing: "0.1em",
        cursor: "pointer",
        color: "var(--heading, #333)",
        flexShrink: 0,
        textAlign: "center"
      }}>
        LOVIO
      </Link>

      {/* Desktop Right Navigation */}
      <div className="desktop-nav" style={{ ...navItemStyle, flex: 1 }}>
        <Link href="/about" style={linkStyle}>About</Link>
        <Link href="/inquiry" style={linkStyle}>Inquiry</Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="mobile-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "10px",
          zIndex: 101,
        }}
      >
        <div style={{
          width: "22px",
          height: "1.5px",
          backgroundColor: "var(--heading, #333)",
          marginBottom: "5px",
          transition: "0.3s",
          transform: isMenuOpen ? "rotate(45deg) translate(4px, 4px)" : "none"
        }}></div>
        <div style={{
          width: "22px",
          height: "1.5px",
          backgroundColor: "var(--heading, #333)",
          marginBottom: "5px",
          transition: "0.3s",
          opacity: isMenuOpen ? 0 : 1
        }}></div>
        <div style={{
          width: "22px",
          height: "1.5px",
          backgroundColor: "var(--heading, #333)",
          transition: "0.3s",
          transform: isMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none"
        }}></div>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "var(--background, #f4f1eb)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          zIndex: 100,
          animation: "fadeIn 0.3s ease"
        }}>
          <Link href="/" style={{ ...linkStyle, fontSize: "16px" }} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/stories" style={{ ...linkStyle, fontSize: "16px" }} onClick={() => setIsMenuOpen(false)}>Stories</Link>
          <Link href="/about" style={{ ...linkStyle, fontSize: "16px" }} onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/inquiry" style={{ ...linkStyle, fontSize: "16px" }} onClick={() => setIsMenuOpen(false)}>Inquiry</Link>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 992px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
        /* Hover effects */
        a:hover, svg:hover {
          opacity: 0.6 !important;
        }
      `}</style>
    </header>
  );
}