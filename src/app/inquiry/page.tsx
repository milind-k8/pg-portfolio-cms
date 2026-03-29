import client from "../../../tina/__generated__/client";
import ClientPage from "../ClientPage";

export default async function InquiryPage() {
  const result = await client.queries.page({ relativePath: "inquiry.json" });

  return (
    <ClientPage
      query={result.query}
      variables={result.variables}
      data={result.data}
    />
  );
}
