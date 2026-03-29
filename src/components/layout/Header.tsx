import React from "react";
import Link from "next/link";

export default function Header() {
  const linkStyle = {
    fontFamily: "var(--font-sans)",
    fontSize: "11px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.2em",
    color: "rgba(0,0,0,0.6)",
    transition: "color 0.3s ease",
    cursor: "pointer",
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
      backgroundColor: "var(--bg-almond)",
    }}>
      {/* Left Navigation */}
      <div style={{ display: "flex", gap: "32px", alignItems: "center", flex: 1 }}>
        <Link href="/" style={linkStyle}>Home</Link>
        <Link href="/stories" style={linkStyle}>Stories</Link>
      </div>
      
      {/* Centered Logo */}
      <div style={{
        fontFamily: "var(--font-serif)",
        fontSize: "24px",
        fontWeight: 300,
        letterSpacing: "0.15em",
        cursor: "pointer",
        color: "var(--text-charcoal)",
        flexShrink: 0
      }}>
        LOOVIO
      </div>
      
      {/* Right Navigation */}
      <div style={{ display: "flex", gap: "32px", alignItems: "center", justifyContent: "flex-end", flex: 1 }}>
        <Link href="/about" style={linkStyle}>About</Link>
        <Link href="/inquiry" style={linkStyle}>Inquiry</Link>
      </div>
    </header>
  );
}
