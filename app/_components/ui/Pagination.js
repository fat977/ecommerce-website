'use client';

import Button from './buttons/Button';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      {/* Prev Button */}
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-1 rounded border border-primary-500 
      ${currentPage === 1 ? 'bg-primary-100 text-primary-400 cursor-not-allowed' : 'bg-primary-50 text-primary-700 hover:bg-primary-200'}
    `}
      >
        Prev
      </Button>

      {/* Page Numbers */}
      {pageNumbers.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded border border-primary-500
        ${currentPage === page ? 'bg-primary-500 text-white' : 'bg-primary-50 text-primary-700 hover:bg-primary-200'}
      `}
        >
          {page}
        </Button>
      ))}

      {/* Next Button */}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-3 py-1 rounded border border-primary-500 
      ${currentPage === totalPages ? 'bg-primary-100 text-primary-400 cursor-not-allowed' : 'bg-primary-50 text-primary-700 hover:bg-primary-200'}
    `}
      >
        Next
      </Button>
    </div>
  );
}
