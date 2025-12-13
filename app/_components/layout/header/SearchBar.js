'use client';

import { useState, useEffect, useCallback } from 'react';
import SearchResults from '@/app/search/SearchResults';
import Button from '../../ui/buttons/Button';
import useDebounce from '@/app/hooks/useDebounce';
import { SearchIcon } from 'lucide-react';
import Input from '../../ui/Input';
import toast from 'react-hot-toast';

export default function SearchBar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedQuery = useDebounce(query, 300);

  //  Fetch search results
  const fetchResults = useCallback(async () => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`/api/search?q=${debouncedQuery}`);
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  }, [debouncedQuery]);

  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  // ESC close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };

    if (open) {
      window.addEventListener('keydown', handleKey);
    }
    return () => window.removeEventListener('keydown', handleKey);
  }, [open]);

  return (
    <>
      <Button onClick={() => setOpen(true)} className="cursor-pointer">
        <SearchIcon />
      </Button>

      {open && (
        <SearchModal
          query={query}
          setQuery={setQuery}
          results={results}
          loading={loading}
          closeModal={() => setOpen(false)}
        />
      )}
    </>
  );
}

// **********************************************
// Search modal
// **********************************************


function SearchModal({ query, setQuery, results, loading, closeModal }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" onClick={closeModal} />

      {/* Modal */}
      <div className="relative bg-white p-7 w-full max-w-md rounded-lg shadow-lg">
        <Input
          type="text"
          autoFocus
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className=""
        />

        {/* Loading state */}
        {loading && (
          <p className="text-center text-sm text-gray-500 mt-3">Searching ...</p>
        )}

        {/* Results */}
        <SearchResults results={results} closeModal={closeModal} />

        <button onClick={closeModal} className="absolute top-2 right-2 text-xl">
          ✖
        </button>
      </div>
    </div>
  );
}
