import client from "../../../tina/__generated__/client";
import StoryListClient from "./StoryListClient";

export default async function StoriesPage() {
  const result = await client.queries.storyConnection();

  return (
    <StoryListClient
      query={result.query}
      variables={result.variables}
      data={result.data}
    />
  );
}
