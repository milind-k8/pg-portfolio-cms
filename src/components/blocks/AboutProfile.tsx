import React from "react";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";

export default function AboutProfile({ data }: { data: any }) {
  return (
    <section className="section container fade-in-up">
      <div className="about-profile-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "100px",
        alignItems: "center"
      }}>
        <div className="about-img-wrapper" style={{ position: "relative", height: "800px", width: "100%", overflow: "hidden" }}>
          <Image src={data.image || "/images/about_portrait.png"} alt="Photographer" fill style={{ objectFit: "cover" }} data-tina-field={tinaField(data, "image")} className="hover-zoom-img" />
        </div>
        <div>
          <h1 className="about-title" style={{ fontSize: "64px", marginBottom: "40px", fontWeight: 300, color: "var(--heading)" }} data-tina-field={tinaField(data, "sectionTitle")}>
            {data.sectionTitle || "About Me"}
          </h1>
          <p style={{
            fontFamily: "var(--font-serif)",
            fontSize: "18px",
            lineHeight: "1.8",
            color: "var(--paragraphs)",
            marginBottom: "60px",
            whiteSpace: "pre-wrap"
          }} data-tina-field={tinaField(data, "content")}>
            {data.content || "Passionate about capturing the essence of life's most precious moments with a touch of luxury and timeless elegance."}
          </p>
          
          <div style={{ display: "flex", gap: "40px" }}>
            {data.instagramLink && (
              <a href={data.instagramLink} target="_blank" className="text-link-cta" data-tina-field={tinaField(data, "instagramLink")}>Instagram</a>
            )}
            {data.facebookLink && (
              <a href={data.facebookLink} target="_blank" className="text-link-cta" data-tina-field={tinaField(data, "facebookLink")}>Facebook</a>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .about-profile-grid {
             gap: 40px !important;
          }
        }
        @media (max-width: 768px) {
          .about-profile-grid {
            grid-template-columns: 1fr !important;
          }
          .about-img-wrapper {
            height: 500px !important;
          }
          .about-title {
            font-size: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
