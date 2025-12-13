import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BackBtn() {
  const router = useRouter();

  return (
     <button
      onClick={() => router.back()}
      className="block sm:hidden p-2 rounded-full bg-primary-100 hover:bg-primary-200 transition"
    >
      <ArrowLeft size={22} className="text-primary-700" />
    </button>
  );
}
