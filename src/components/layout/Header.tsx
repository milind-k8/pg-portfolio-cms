"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkStyle = {
    fontFamily: "var(--font-sans)",
    fontSize: "11px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.2em",
    color: "rgba(0,0,0,0.6)",
    transition: "color 0.3s ease",
    cursor: "pointer",
  };

  const navItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "32px"
  };

  return (
    <header style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "24px 5%",
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      backgroundColor: "var(--background)",
      boxShadow: "0 2px 10px rgba(0,0,0,0.02)"
    }}>
      {/* Desktop Left Navigation */}
      <div className="desktop-nav" style={{ ...navItemStyle, flex: 1 }}>
        <Link href="/" style={linkStyle}>Home</Link>
        <Link href="/stories" style={linkStyle}>Stories</Link>
      </div>
      
      {/* Centered Logo */}
      <Link href="/" style={{
        fontFamily: "var(--font-serif)",
        fontSize: "24px",
        fontWeight: 300,
        letterSpacing: "0.15em",
        cursor: "pointer",
        color: "var(--heading)",
        flexShrink: 0,
        textDecoration: "none"
      }}>
        LOOVIO
      </Link>
      
      {/* Desktop Right Navigation */}
      <div className="desktop-nav" style={{ ...navItemStyle, justifyContent: "flex-end", flex: 1 }}>
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
          zIndex: 101
        }}
      >
        <div style={{
          width: "25px",
          height: "1px",
          backgroundColor: "var(--heading)",
          marginBottom: "6px",
          transition: "0.3s",
          transform: isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none"
        }}></div>
        <div style={{
          width: "25px",
          height: "1px",
          backgroundColor: "var(--heading)",
          transition: "0.3s",
          opacity: isMenuOpen ? 0 : 1
        }}></div>
        <div style={{
          width: "25px",
          height: "1px",
          backgroundColor: "var(--heading)",
          marginTop: "6px",
          transition: "0.3s",
          transform: isMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none"
        }}></div>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "var(--white)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          zIndex: 100,
          animation: "fadeIn 0.3s ease"
        }}>
          <Link href="/" style={{ ...linkStyle, fontSize: "18px" }} onClick={() => setIsMenuOpen(false)}>Home</Link>
          <Link href="/stories" style={{ ...linkStyle, fontSize: "18px" }} onClick={() => setIsMenuOpen(false)}>Stories</Link>
          <Link href="/about" style={{ ...linkStyle, fontSize: "18px" }} onClick={() => setIsMenuOpen(false)}>About</Link>
          <Link href="/inquiry" style={{ ...linkStyle, fontSize: "18px" }} onClick={() => setIsMenuOpen(false)}>Inquiry</Link>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
