import { searchProducts } from "@/app/_lib/products";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "";
  const results = await searchProducts(q);
  return Response.json(results);
}
