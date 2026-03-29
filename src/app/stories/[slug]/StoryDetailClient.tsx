"use client";
import React from "react";
import Image from "next/image";
import { useTina } from "tinacms/dist/react";
import { tinaField } from "tinacms/dist/react";
import Header from "../../../components/layout/Header";
import Footer from "../../../components/layout/Footer";

export default function StoryDetailClient(props: any) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const story = data.story;

  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>
        {/* Cover Section */}
        <section style={{ position: "relative", height: "100vh", width: "100%", overflow: "hidden" }}>
          <Image 
            src={story.coverImage || "/images/portfolio_couple.png"} 
            alt={story.title} 
            fill 
            style={{ objectFit: "cover" }} 
            priority
            data-tina-field={tinaField(story, "coverImage")}
          />
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            padding: "0 10%"
          }}>
            <h1 style={{ 
              fontSize: "80px", 
              fontWeight: 300, 
              marginBottom: "24px", 
              color: "white" 
            }} data-tina-field={tinaField(story, "title")}>
              {story.title}
            </h1>
            <p style={{ 
              fontFamily: "var(--font-sans)", 
              fontSize: "14px", 
              textTransform: "uppercase", 
              letterSpacing: "0.4em",
              color: "rgba(255,255,255,0.8)"
            }} data-tina-field={tinaField(story, "date")}>
              {new Date(story.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </section>

        {/* Description Section */}
        <section className="section container fade-in-up" style={{ textAlign: "center", maxWidth: "900px" }}>
            <p style={{
              fontFamily: "var(--font-serif)",
              fontSize: "24px",
              lineHeight: "1.8",
              color: "var(--text-charcoal)",
              fontStyle: "italic"
            }} data-tina-field={tinaField(story, "description")}>
              {story.description}
            </p>
        </section>

        {/* Gallery Section */}
        <section className="section container fade-in-up">
            <div style={{
                columns: "2 400px",
                columnGap: "24px",
            }}>
                {story.gallery?.map((img: string, i: number) => (
                    <div key={i} style={{ 
                        breakInside: "avoid", 
                        marginBottom: "24px", 
                        position: "relative",
                        overflow: "hidden" 
                    }}>
                        <Image 
                            src={img} 
                            alt={`Gallery ${i}`} 
                            width={800} 
                            height={1200} 
                            style={{ 
                                width: "100%", 
                                height: "auto", 
                                display: "block" 
                            }} 
                            className="hover-zoom-img"
                        />
                    </div>
                ))}
            </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
