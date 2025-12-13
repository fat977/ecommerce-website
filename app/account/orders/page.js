import ButtonLink from '@/app/_components/ui/links/ButtonLink';
import Link from 'next/link';

export const metadata = {
  title: 'Orders',
};

function Orders() {
  return (
    <div className="min-h-[79vh] flex flex-col items-center justify-center text-center gap-4">
      <h2 className="text-2xl font-semibold text-gray-800">No orders yet</h2>
      <p className="text-gray-500">Go to store to place an order.</p>

      <ButtonLink href="/" className="px-6 py-3">
        Go to Store
      </ButtonLink>
    </div>
  );
}

export default Orders;
