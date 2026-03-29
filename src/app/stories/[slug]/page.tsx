import client from "../../../../tina/__generated__/client";
import StoryDetailClient from "./StoryDetailClient";

export default async function StoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const result = await client.queries.story({ relativePath: `${slug}.md` });

  return (
    <StoryDetailClient
      query={result.query}
      variables={result.variables}
      data={result.data}
    />
  );
}

export async function generateStaticParams() {
  const result = await client.queries.storyConnection();
  return result.data.storyConnection.edges?.map((edge: any) => ({
    slug: edge.node._sys.filename,
  })) || [];
}
