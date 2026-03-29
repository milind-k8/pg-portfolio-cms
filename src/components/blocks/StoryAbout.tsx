import React from "react";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";

export default function StoryAbout({ data }: { data: any }) {
  // If data is null or undefined (e.g. initial load)
  if (!data) return null;

  return (
    <section className="section container fade-in-up">
      <div className="story-about-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "100px",
        alignItems: "center"
      }}>
        {/* Left Side Image */}
        <div className="story-about-img" style={{ position: "relative", width: "100%", height: "700px", overflow: "hidden" }}>
          <Image src={data.image || "/images/about_portrait.png"} alt="About Portrait" fill style={{ objectFit: "cover" }} data-tina-field={tinaField(data, "image")} />
        </div>

        {/* Right Side Content */}
        <div>
          <h2 style={{ fontSize: "48px", marginBottom: "40px", color: "var(--heading)" }} data-tina-field={tinaField(data, "sectionTitle")}>
            {data.sectionTitle || "Who We Are"}
          </h2>
          <div style={{
            fontFamily: "var(--font-sans)",
            fontSize: "18px",
            lineHeight: "1.8",
            color: "var(--paragraphs)",
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
            color: "var(--accent)",
            fontStyle: "italic"
          }} data-tina-field={tinaField(data, "signature")}>
            {data.signature || "Lynn Goodman"}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .story-about-grid {
             gap: 40px !important;
          }
        }
        @media (max-width: 768px) {
          .story-about-grid {
            grid-template-columns: 1fr !important;
          }
          .story-about-img {
            height: 400px !important;
          }
        }
      `}</style>
    </section>
  );
}
