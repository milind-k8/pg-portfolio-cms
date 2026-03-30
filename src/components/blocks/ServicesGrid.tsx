import React from "react";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";
import Section from "../layout/Section";

export default function ServicesGrid({ data }: { data: any }) {
  const items = data.items || [];

  return (
    <Section className="fade-in-up" decorations="floral-v3" width="wide">
      <div className="services-topper">
        Inner Pages
      </div>

      <div className="services-grid">
        {items.map((item: any, i: number) => (
          <div key={i} className="service-card">
             <div className="service-number">
                <span className="service-number-line"></span>
                Service 0{i+1}
                <span className="service-number-line"></span>
              </div>

            <div className="service-img-container">
              <Image 
                src={item.image || "/images/services_wedding.png"} 
                alt={item.title || "Service"} 
                fill 
                style={{ objectFit: "cover" }} 
                className="hover-zoom-img" 
                data-tina-field={tinaField(item, "image")} 
              />
            </div>
            
            <h2 className="service-card-title" data-tina-field={tinaField(item, "title")}>
              {item.title || "Service Title"}
            </h2>
            <p className="service-card-description" data-tina-field={tinaField(item, "description")}>
              {item.description || "Elegant imagery capturing the raw emotion and timeless beauty of your celebration."}
            </p>
            <a href={item.link || "#"} className="text-link-cta" data-tina-field={tinaField(item, "link")}>
              Discover
            </a>
          </div>
        ))}
      </div>

      <style jsx>{`
        .services-topper {
          font-family: var(--font-sans);
          font-size: 10px;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--subtitle);
          margin-bottom: 40px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          width: 100%;
        }

        .service-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 40px 30px;
          border: 1px solid var(--border);
          background-color: var(--white);
          position: relative;
          transition: transform 0.4s ease;
        }

        .service-card:hover {
           transform: translateY(-5px);
        }

        .service-number {
          font-family: var(--font-sans);
          font-size: 9px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--subtitle);
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .service-number-line {
          width: 20px;
          height: 1px;
          background-color: var(--border);
        }

        .service-img-container {
          position: relative;
          width: 100%;
          height: 220px; /* Reduced from 250px */
          overflow: hidden;
          marginBottom: 32px;
          background-color: var(--preload);
        }

        .service-card-title {
          font-size: 26px;
          margin-bottom: 16px;
          font-weight: 300;
          font-family: var(--font-serif);
          color: var(--heading);
        }

        .service-card-description {
          font-family: var(--font-serif);
          font-size: 15px;
          line-height: 1.6;
          color: var(--paragraphs);
          margin-bottom: 32px;
          font-style: italic;
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 767px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .service-card {
             padding: 30px 20px;
          }
        }
      `}</style>
    </Section>
  );
}


