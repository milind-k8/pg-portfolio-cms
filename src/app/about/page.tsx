import client from "../../../tina/__generated__/client";
import ClientPage from "../ClientPage";

export default async function AboutPage() {
  const result = await client.queries.page({ relativePath: "about.json" });

  return (
    <ClientPage
      query={result.query}
      variables={result.variables}
      data={result.data}
    />
  );
}
