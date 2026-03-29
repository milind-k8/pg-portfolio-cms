"use client";

import { useTina } from "tinacms/dist/react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroCard from "@/components/blocks/HeroCard";
import ServicesGrid from "@/components/blocks/ServicesGrid";
import StoryAbout from "@/components/blocks/StoryAbout";
import Testimonials from "@/components/blocks/Testimonials";
import PortfolioGrid from "@/components/blocks/PortfolioGrid";

import AboutProfile from "@/components/blocks/AboutProfile";
import Inquiry from "@/components/blocks/Inquiry";

export default function ClientPage(props: any) {
  // Pass the server-fetched data into useTina
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  return (
    <>
      <Header />
      <main>
        {data.page.blocks
          ? data.page.blocks.map(function (block: any, i: number) {
              switch (block.__typename) {
                case "PageBlocksHero":
                  return <HeroCard key={i} data={block} />;
                case "PageBlocksServices":
                  return <ServicesGrid key={i} data={block} />;
                case "PageBlocksAbout":
                  return <StoryAbout key={i} data={block} />;
                case "PageBlocksAboutProfile":
                  return <AboutProfile key={i} data={block} />;
                case "PageBlocksInquiry":
                  return <Inquiry key={i} data={block} />;
                case "PageBlocksTestimonials":
                  return <Testimonials key={i} data={block} />;
                case "PageBlocksPortfolio":
                  return <PortfolioGrid key={i} data={block} />;
                default:
                  return null;
              }
            })
          : null}
      </main>
      <Footer />
    </>
  );
}
