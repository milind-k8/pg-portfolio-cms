import React from "react";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import Section from "../layout/Section";

export default function HeroCard({ data }: { data: any }) {
  return (
    <Section variant="hero" className="fade-in-up hero-card-section" decorations="floral-v1">
      {/* Top Text Header */}
      <div className="hero-top">
        <div className="border-top"></div>
        <div className="hero-icon-wrapper">
          <svg width="40" height="20" viewBox="0 0 40 20" fill="none" style={{ margin: "0 auto", opacity: 0.5 }}>
            <path d="M0 10C10 10 10 0 20 0C30 0 30 10 40 10C30 10 30 20 20 20C10 20 10 10 0 10Z" stroke="var(--accent)" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="subtitle" data-tina-field={tinaField(data, "heroTopper")}>
          {data.heroTopper || "Live"}
        </div>
        <h1 className="heading-hero" data-tina-field={tinaField(data, "heroTitle")}>
          {(data.heroTitle || "Portraits of \nAuthenticity").split("\n").map((line: string, i: number) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h1>
        <div className="border-down margin"></div>
      </div>

      {/* Hero Masonry Grid */}
      <div className="masonry-container">
        <div className="masonry-wrapper">
          <div className="masonry-item item-1">
            <Image
              src={data.image1 || "/images/img_12.jpg"}
              alt="Hero 1"
              fill
              style={{ objectFit: "cover" }}
              className="hover-zoom-img"
              data-tina-field={tinaField(data, "image1")}
            />
          </div>
          <div className="masonry-item item-2">
            <Image
              src={data.image2 || "/images/img_11.jpg"}
              alt="Hero 2"
              fill
              style={{ objectFit: "cover" }}
              className="hover-zoom-img"
              data-tina-field={tinaField(data, "image2")}
            />
          </div>
          <div className="masonry-item item-3">
            <Image
              src={data.image3 || "/images/img_1.jpg"}
              alt="Hero 3"
              fill
              style={{ objectFit: "cover" }}
              className="hover-zoom-img"
              data-tina-field={tinaField(data, "image3")}
            />
          </div>
        </div>

        {/* Floating Card Content */}
        <div className="floating-hero-card">
          <div className="floating-card-inner">
            <div className="subtitle-small" data-tina-field={tinaField(data, "subtitle")}>
              {data.subtitle || "Legendary Parties"}
            </div>
            <h2 className="floating-card-title" data-tina-field={tinaField(data, "title")}>
              {data.title || "Extraordinary Wedding Photography"}
            </h2>
            <a href={data.ctaLink || "#"} className="text-link-cta" data-tina-field={tinaField(data, "ctaText")}>
              {data.ctaText || "Book a Consult"}
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-card-section {
           margin-bottom: 80px;
        }

        .masonry-container {
          position: relative;
          width: 100%;
          margin-top: 40px;
          padding-bottom: 60px;
        }

        .masonry-wrapper {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: repeat(10, 50px); /* Reduced row height for more compact look */
          gap: 20px;
          height: auto;
          min-height: 500px;
        }

        .masonry-item {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100%;
          background-color: var(--preload);
        }

        .item-1 { grid-area: 1 / 1 / 8 / 5; }
        .item-2 { grid-area: 2 / 5 / 9 / 9; }
        .item-3 { grid-area: 1 / 9 / 8 / 13; }

        .floating-hero-card {
          position: absolute;
          bottom: 120px;
          left: 50%;
          transform: translateX(-50%);
          background-color: var(--white);
          padding: 60px 80px;
          width: 90%;
          max-width: 600px;
          box-shadow: 0 15px 30px rgba(0,0,0,0.05); /* Softer shadow */
          z-index: 20;
          text-align: center;
          border: 1px solid rgba(160, 164, 142, 0.1);
        }

        .subtitle-small {
          font-family: var(--font-sans);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--subtitle);
          margin-bottom: 24px;
        }

        .floating-card-title {
          font-family: var(--font-serif);
          font-size: 32px;
          line-height: 1.2;
          margin-bottom: 32px;
          color: var(--heading);
        }

        .hero-icon-wrapper {
          margin-bottom: 16px;
        }

        @media (max-width: 1024px) {
          .masonry-wrapper {
            grid-template-rows: repeat(10, 40px);
            min-height: 400px;
          }
          .floating-hero-card {
            padding: 40px 60px;
          }
        }

        @media (max-width: 767px) {
          .masonry-wrapper {
            display: flex;
            flex-direction: column;
            gap: 16px;
            height: auto;
            min-height: auto;
          }
          .masonry-item {
            height: 300px;
          }
          .floating-hero-card {
            position: relative;
            bottom: auto;
            left: auto;
            transform: none;
            width: 100%;
            margin-top: 40px;
            padding: 40px 20px;
            box-shadow: none;
            border: 1px solid var(--border);
          }
          .floating-card-title {
            font-size: 24px;
          }
        }
      `}</style>
    </Section>
  );
}
