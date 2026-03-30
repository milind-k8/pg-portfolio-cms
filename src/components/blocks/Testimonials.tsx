import React from "react";
import { tinaField } from "tinacms/dist/react";
import Section from "../layout/Section";

export default function Testimonials({ data }: { data: any }) {
  const items = data.items || [];

  return (
    <Section className="fade-in-up" decorations="mixed-v1" width="narrow">
      <div className="testimonials-container">
        <div className="testimonials-topper">
          Kind Words
        </div>
        
        {items.map((item: any, i: number) => (
          <div key={i} className="testimonial-item">
            <p className="testimonial-quote" data-tina-field={tinaField(item, "quote")}>
              "{item.quote || "The most exquisite experience we've ever had. True artists."}"
            </p>
            <div className="testimonial-author" data-tina-field={tinaField(item, "author")}>
              — {item.author || "Client Name"}
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .testimonials-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          text-align: center;
        }

        .testimonials-topper {
          font-family: var(--font-sans);
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: var(--subtitle);
          margin-bottom: 40px;
          width: 100%;
        }

        .testimonial-item {
          margin-bottom: 60px;
          width: 100%;
        }

        .testimonial-quote {
          font-family: var(--font-serif);
          font-size: 32px;
          line-height: 1.4;
          color: var(--heading);
          margin-bottom: 32px;
        }

        .testimonial-author {
          font-family: var(--font-sans);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--paragraphs);
        }

        @media (max-width: 767px) {
          .testimonial-quote {
            font-size: 24px;
          }
          .testimonial-item {
             margin-bottom: 40px;
          }
          .testimonials-container {
             padding: 0 10px;
          }
        }
      `}</style>
    </Section>
  );
}


