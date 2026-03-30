import React from "react";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import Section from "../layout/Section";

export default function StoryAbout({ data }: { data: any }) {
  if (!data) return null;

  return (
    <Section className="fade-in-up" decorations="leaf-v1">
      <div className="story-about-grid">
        {/* Left Side Image */}
        <div className="story-about-img">
          <Image
            src={data.image || "/images/about_portrait.png"}
            alt="About Portrait"
            fill
            style={{ objectFit: "cover" }}
            data-tina-field={tinaField(data, "image")}
            className="hover-zoom-img"
          />
        </div>

        {/* Right Side Content */}
        <div className="story-about-content">
          <h2 className="story-about-title" data-tina-field={tinaField(data, "sectionTitle")}>
            {data.sectionTitle || "Who We Are"}
          </h2>
          <div className="story-about-body" data-tina-field={tinaField(data, "content")}>
            {typeof data.content === "string" ? <p style={{ whiteSpace: "pre-wrap" }}>{data.content}</p> : (
              <>
                <p style={{ marginBottom: "20px" }}>We believe in the power of timeless storytelling.</p>
                <p>Every frame we capture is imbued with the quiet luxury of the moments that define your life. Through careful observation and a natural, editorial approach, we preserve your legacy with authenticity and grace.</p>
              </>
            )}
          </div>

          <div className="story-about-signature" data-tina-field={tinaField(data, "signature")}>
            {data.signature || "Lynn Goodman"}
          </div>
        </div>
      </div>

      <style jsx>{`
        .story-about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px; /* Reduced from 100px */
          align-items: center;
          width: 100%;
          background: white
        }

        .story-about-img {
          position: relative;
          width: 100%;
          height: 500px; /* Reduced from 700px to match Lovio's tight look */
          overflow: hidden;
          background-color: var(--preload);
        }

        .story-about-title {
          font-size: 40px; /* Scaled down slightly */
          margin-bottom: 32px;
          color: var(--heading);
          font-family: var(--font-serif);
          line-height: 1.2;
        }

        .story-about-body {
          font-family: var(--font-sans);
          font-size: 16px; /* Scaled down from 18px */
          line-height: 1.7;
          color: var(--paragraphs);
          margin-bottom: 40px;
        }

        .story-about-signature {
          font-family: var(--font-cursive); /* Was font-serif, but let's use cursive for signature */
          font-size: 32px;
          color: var(--accent);
        }

        @media (max-width: 991px) {
          .story-about-grid {
            gap: 40px;
          }
          .story-about-title {
            font-size: 32px;
          }
        }

        @media (max-width: 767px) {
          .story-about-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .story-about-img {
            height: 350px;
          }
          .story-about-content {
             padding: 0 10px;
          }
        }
      `}</style>
    </Section>
  );
}


