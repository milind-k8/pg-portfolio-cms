import React from "react";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";

export default function Inquiry({ data }: { data: any }) {
  return (
    <section className="section container fade-in-up" style={{ textAlign: "center" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 className="inquiry-title" style={{ fontSize: "72px", marginBottom: "60px", fontWeight: 300 }} data-tina-field={tinaField(data, "title")}>
          {data.title || "Let's Connect"}
        </h1>
        <p className="inquiry-desc" style={{
          fontFamily: "var(--font-serif)",
          fontSize: "20px",
          color: "rgba(0,0,0,0.6)",
          marginBottom: "80px",
          lineHeight: "1.6"
        }} data-tina-field={tinaField(data, "description")}>
          {data.description || "Every story is unique. We would be honored to help you tell yours. Reach out to discuss your vision."}
        </p>
        
        <div className="inquiry-img-wrapper" style={{ position: "relative", width: "100%", height: "500px", overflow: "hidden", marginBottom: "100px" }}>
          <Image src={data.image || "/images/hero_party.png"} alt="Aesthetic Inquiry" fill style={{ objectFit: "cover" }} className="hover-zoom-img" data-tina-field={tinaField(data, "image")} />
        </div>

        <div className="inquiry-links" style={{ display: "flex", justifyContent: "center", gap: "60px" }}>
          {data.email && (
            <a href={`mailto:${data.email}`} className="text-link-cta" style={{ fontSize: "16px" }} data-tina-field={tinaField(data, "email")}>
              Email Us
            </a>
          )}
          {data.whatsapp && (
            <a href={data.whatsapp} target="_blank" className="text-link-cta" style={{ fontSize: "16px" }} data-tina-field={tinaField(data, "whatsapp")}>
              WhatsApp
            </a>
          )}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .inquiry-title {
            font-size: 40px !important;
            margin-bottom: 30px !important;
          }
          .inquiry-desc {
            font-size: 16px !important;
            margin-bottom: 40px !important;
          }
          .inquiry-img-wrapper {
            height: 300px !important;
            margin-bottom: 60px !important;
          }
          .inquiry-links {
            flex-direction: column !important;
            gap: 20px !important;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
}
