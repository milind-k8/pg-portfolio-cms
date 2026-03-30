import React from "react";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import Section from "../layout/Section";

export default function AboutProfile({ data }: { data: any }) {
  return (
    <Section className="fade-in-up" decorations="floral-v2">
      <div className="about-profile-grid">
        <div className="about-img-wrapper">
          <Image 
            src={data.image || "/images/about_portrait.png"} 
            alt="Photographer" 
            fill 
            style={{ objectFit: "cover" }} 
            data-tina-field={tinaField(data, "image")} 
            className="hover-zoom-img" 
          />
        </div>
        <div className="about-content-wrapper">
          <h1 className="about-title" data-tina-field={tinaField(data, "sectionTitle")}>
            {data.sectionTitle || "About Me"}
          </h1>
          <p className="about-body" data-tina-field={tinaField(data, "content")}>
            {data.content || "Passionate about capturing the essence of life's most precious moments with a touch of luxury and timeless elegance."}
          </p>
          
          <div className="about-social-links">
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
        .about-profile-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px; /* Reduced from 100px */
          align-items: center;
          width: 100%;
        }

        .about-img-wrapper {
          position: relative;
          height: 600px; /* Reduced from 800px */
          width: 100%;
          overflow: hidden;
          background-color: var(--preload);
        }

        .about-title {
          font-size: 48px; /* Reduced from 64px */
          font-weight: 300;
          color: var(--heading);
          font-family: var(--font-serif);
          margin-bottom: 32px;
          line-height: 1.1;
        }

        .about-body {
          font-family: var(--font-serif);
          font-size: 18px;
          line-height: 1.8;
          color: var(--paragraphs);
          margin-bottom: 40px;
          white-space: pre-wrap;
        }

        .about-social-links {
          display: flex;
          gap: 40px;
        }

        @media (max-width: 991px) {
          .about-profile-grid {
             gap: 40px;
          }
          .about-title {
            font-size: 40px;
          }
        }

        @media (max-width: 767px) {
          .about-profile-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .about-img-wrapper {
            height: 400px;
          }
          .about-content-wrapper {
             padding: 0 10px;
          }
        }
      `}</style>
    </Section>
  );
}


