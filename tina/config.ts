import { defineConfig, Template } from "tinacms";

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

const heroBlock: Template = {
  name: "hero",
  label: "Hero Section",
  fields: [
    { type: "string", name: "subtitle", label: "Subtitle" },
    { type: "string", name: "title", label: "Title" },
    { type: "string", name: "ctaText", label: "CTA Text" },
    { type: "string", name: "ctaLink", label: "CTA Link" },
    { type: "image", name: "image1", label: "Masonry Image 1" },
    { type: "image", name: "image2", label: "Masonry Image 2" },
    { type: "image", name: "image3", label: "Masonry Image 3" },
  ],
};

const servicesBlock: Template = {
  name: "services",
  label: "Services Section",
  fields: [
    {
      type: "object",
      list: true,
      name: "items",
      label: "Services",
      ui: { itemProps: (item) => ({ label: item?.title || "New Service" }) },
      fields: [
        { type: "image", name: "image", label: "Image" },
        { type: "string", name: "title", label: "Title" },
        { type: "string", name: "description", label: "Description", ui: { component: "textarea" } },
        { type: "string", name: "link", label: "Link" },
      ],
    },
  ],
};

const aboutBlock: Template = {
  name: "about",
  label: "About Section",
  fields: [
    { type: "image", name: "image", label: "Main Image" },
    { type: "string", name: "sectionTitle", label: "Section Title" },
    { type: "string", name: "content", label: "Content", ui: { component: "textarea" } },
    { type: "string", name: "signature", label: "Signature Text" },
  ],
};

const testimonialsBlock: Template = {
  name: "testimonials",
  label: "Testimonials Section",
  fields: [
    {
      type: "object",
      list: true,
      name: "items",
      label: "Quotes",
      ui: { itemProps: (item) => ({ label: item?.author || "New Quote" }) },
      fields: [
        { type: "string", name: "quote", label: "Quote", ui: { component: "textarea" } },
        { type: "string", name: "author", label: "Author" },
      ],
    },
  ],
};

const portfolioBlock: Template = {
  name: "portfolio",
  label: "Portfolio Gallery",
  fields: [
    {
      type: "object",
      list: true,
      name: "items",
      label: "Portfolio Items",
      ui: { itemProps: (item) => ({ label: item?.name || "New Item" }) },
      fields: [
        { type: "image", name: "image", label: "Image" },
        { type: "string", name: "name", label: "Name Focus" },
      ],
    },
  ],
};

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "dummy-client-id",
  token: process.env.TINA_TOKEN || "dummy-token",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/pages",
        format: "json",
        ui: {
          router: () => `/`, // Route all pages to the root or their permalink
        },
        fields: [
          {
            type: "object",
            list: true,
            name: "blocks",
            label: "Sections",
            templates: [
              heroBlock,
              servicesBlock,
              aboutBlock,
              testimonialsBlock,
              portfolioBlock,
            ],
          },
        ],
      },
    ],
  },
});
