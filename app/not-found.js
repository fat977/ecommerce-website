import Link from 'next/link';
import ButtonLink from './_components/ui/links/ButtonLink';
export const metadata = {
  title: 'Error Not Found',
};
function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-100 gap-6 bg-gray-50 p-10">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 text-lg">
        Oops! The page you are looking for does not exist.
      </p>
      <ButtonLink href="/" className=' px-6 py-3' >Go back home</ButtonLink>
      
    </main>
  );
}

export default NotFound;
