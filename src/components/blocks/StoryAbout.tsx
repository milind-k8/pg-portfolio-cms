import React from "react";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default function StoryAbout({ data }: { data: any }) {
  return (
    <section className="section fade-in-up" style={{
      position: "relative",
      backgroundColor: "var(--bg-white)",
      padding: "160px 5%",
      overflow: "hidden"
    }}>
      {/* Watercolor background element */}
      <div style={{
        position: "absolute",
        top: "-10%",
        right: "-5%",
        width: "600px",
        height: "600px",
        backgroundColor: "var(--accent-rose)",
        opacity: 0.1,
        borderRadius: "50%",
        filter: "blur(80px)",
        zIndex: 0
      }} />

      <div className="container" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "80px",
        alignItems: "center",
        position: "relative",
        zIndex: 1
      }}>
        {/* Left Side Image */}
        <div style={{ position: "relative", width: "100%", height: "700px", overflow: "hidden" }}>
          <Image src={data.image || "/images/about_portrait.png"} alt="About Portrait" fill style={{ objectFit: "cover" }} data-tina-field={tinaField(data, "image")} />
        </div>

        {/* Right Side Content */}
        <div>
          <h2 style={{ fontSize: "48px", marginBottom: "40px" }} data-tina-field={tinaField(data, "sectionTitle")}>
            {data.sectionTitle || "Who We Are"}
          </h2>
          <div style={{
            fontFamily: "var(--font-sans)",
            fontSize: "18px",
            lineHeight: "1.8",
            color: "rgba(0,0,0,0.7)",
            marginBottom: "40px"
          }} data-tina-field={tinaField(data, "content")}>
            {typeof data.content === "string" ? <p style={{ whiteSpace: "pre-wrap" }}>{data.content}</p> : (
              <>
                <p style={{ marginBottom: "20px" }}>We believe in the power of timeless storytelling.</p>
                <p>Every frame we capture is imbued with the quiet luxury of the moments that define your life. Through careful observation and a natural, editorial approach, we preserve your legacy with authenticity and grace.</p>
              </>
            )}
          </div>
          
          <div style={{
            fontFamily: "var(--font-serif)",
            fontSize: "32px",
            color: "var(--accent-rose)",
            fontStyle: "italic"
          }} data-tina-field={tinaField(data, "signature")}>
            {data.signature || "Lynn Goodman"}
          </div>
        </div>
      </div>
    </section>
  );
}
