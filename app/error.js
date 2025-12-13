'use client';

import Button from './_components/ui/buttons/Button';
import useTitle from './hooks/useTitle';

export default function Error({ error, reset }) {
  useTitle('Error');
  return (
    <main className="flex flex-col items-center justify-center  gap-6 bg-gray-50 dark:bg-gray-900 p-6">
      {/* icon  */}
      <div className="text-red-500 dark:text-red-400 text-6xl animate-bounce">⚠️</div>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
        Oops! Something went wrong
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-md">
        {error.message || 'An unexpected error occurred. Please try again.'}
      </p>

      <Button
        variant="primary"
        size="lg"
        onClick={reset}
        className="bg-accent-500 text-white hover:bg-accent-600 shadow-lg"
      >
        Try Again
      </Button>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        If the problem persists, contact support.
      </p>
    </main>
  );
}
