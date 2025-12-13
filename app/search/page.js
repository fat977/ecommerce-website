import SearchResults from "./SearchResults";

export default async function Page({ searchParams }) {
  const query = searchParams.q || "";
  const results = await searchProducts(query);
  return <SearchResults results={results} />;
}
