'use client'

import { useRouter } from "next/navigation";

export default function SearchResults({ results,closeModal }) {
  const router = useRouter();
  if (!results) return null;
  
  return (
    <div className="space-y-2 max-h-80 overflow-y-auto mt-4">
      {results.length === 0 ? (
        <p className="text-gray-500 text-sm">No results found.</p>
      ) : (
        results.map(item => (
          <div
            key={item.id}
            className="p-3 border cursor-pointer rounded-lg hover:bg-gray-50"
            onClick={() => {
            closeModal();                // ← يقفل المودال
            router.push(`/products/${item.id}`); // ← يروح للصفحة
          }}
          >
            <p className="font-medium">{item.title}</p>
            <p className="text-sm text-gray-500 line-clamp-2">
              {item.description}
            </p>
          </div>
        ))
      )}
    </div>
  )
}
