import React from "react";
import Image from "next/image";
import { tinaField } from "tinacms/dist/react";

export default function Inquiry({ data }: { data: any }) {
  return (
    <section className="section container fade-in-up" style={{ textAlign: "center" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "72px", marginBottom: "60px", fontWeight: 300 }} data-tina-field={tinaField(data, "title")}>
          {data.title || "Let's Connect"}
        </h1>
        <p style={{
          fontFamily: "var(--font-serif)",
          fontSize: "20px",
          color: "rgba(0,0,0,0.6)",
          marginBottom: "80px",
          lineHeight: "1.6"
        }} data-tina-field={tinaField(data, "description")}>
          {data.description || "Every story is unique. We would be honored to help you tell yours. Reach out to discuss your vision."}
        </p>
        
        <div style={{ position: "relative", width: "100%", height: "500px", overflow: "hidden", marginBottom: "100px" }}>
          <Image src={data.image || "/images/hero_party.png"} alt="Aesthetic Inquiry" fill style={{ objectFit: "cover" }} className="hover-zoom-img" data-tina-field={tinaField(data, "image")} />
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "60px" }}>
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
    </section>
  );
}
