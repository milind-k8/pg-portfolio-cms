import client from "../../tina/__generated__/client";
import ClientPage from "./ClientPage";

export default async function Home() {
  const result = await client.queries.page({ relativePath: "home.json" });

  return (
    <ClientPage
      data={result.data}
      query={result.query}
      variables={result.variables}
    />
  );
}
