"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkStyle = {
    fontFamily: "var(--font-sans)",
    fontSize: "10px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.2em",
    color: "var(--paragraphs)",
    transition: "color 0.3s ease",
    cursor: "pointer",
    textDecoration: "none"
  };

  const navItemStyle = {
    display: "flex",
    alignItems: "center",
    gap: "40px"
  };

  const socialIconStyle = {
    width: "16px",
    height: "16px",
    fill: "var(--paragraphs)",
    transition: "opacity 0.3s ease",
    cursor: "pointer",
    opacity: 0.7
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
        textAlign: "center"
      }}>
        LOOVIO
      </Link>
      
      {/* Desktop Right Navigation */}
      <div className="desktop-nav" style={{ ...navItemStyle, justifyContent: "flex-end", flex: 1 }}>
        <Link href="/about" style={linkStyle}>About</Link>
        <Link href="/inquiry" style={linkStyle}>Inquiry</Link>
        
        {/* Social Icons for Aesthetic and Spacing */}
        <div style={{ display: "flex", gap: "20px", marginLeft: "20px", borderLeft: "1px solid var(--border)", paddingLeft: "20px" }}>
            <a href="https://instagram.com" target="_blank">
                <svg style={socialIconStyle} viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://facebook.com" target="_blank">
                <svg style={socialIconStyle} viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            </a>
        </div>
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
          color: "var(--heading)"
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
