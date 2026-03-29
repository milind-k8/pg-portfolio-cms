"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTina } from "tinacms/dist/react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

export default function StoryListClient(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const stories = data.storyConnection.edges || [];

  return (
    <>
      <Header />
      <main className="section container fade-in-up" style={{ minHeight: "80vh", paddingTop: "160px" }}>
        <h1 style={{ fontSize: "72px", textAlign: "center", marginBottom: "80px", fontWeight: 300, color: "var(--heading)" }}>
          Our Stories
        </h1>
        
        <div className="stories-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
          gap: "40px"
        }}>
          {stories.map((story: any) => {
            const node = story.node;
            return (
              <Link key={node.id} href={`/stories/${node._sys.filename}`} style={{ display: "block", textDecoration: "none" }}>
                <div style={{ position: "relative", height: "500px", width: "100%", overflow: "hidden", marginBottom: "24px" }}>
                  <Image src={node.coverImage || "/images/portfolio_couple.png"} alt={node.title} fill style={{ objectFit: "cover" }} className="hover-zoom-img" />
                </div>
                <h2 style={{ fontSize: "24px", color: "var(--heading)", marginBottom: "8px" }}>{node.title}</h2>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                   <span style={{ 
                      fontFamily: "var(--font-sans)", 
                      fontSize: "10px", 
                      textTransform: "uppercase", 
                      letterSpacing: "0.2em",
                      color: "var(--subtitle)" 
                    }}>
                      {new Date(node.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                   <span className="text-link-cta">View Story</span>
                </div>
              </Link>
            );
          })}
        </div>

        <style jsx>{`
          @media (max-width: 768px) {
            .stories-grid {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
