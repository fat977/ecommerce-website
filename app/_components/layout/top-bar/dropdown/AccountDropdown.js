'use client';
import { CircleUserRound } from 'lucide-react';
import BaseDropdown from './Dropdown';
import Link from 'next/link';
import Button from '@/app/_components/ui/buttons/Button';

const options = [
  { key: 'account', label: 'Account', href: '/account' },
  { key: 'logout', label: 'Logout' },
];

export default function AccountDropdown({ user }) {

  return (
    <>
      <form
        id="logout-form"
        action="/api/auth/signout"
        method="post"
        className="hidden"
      />

      <BaseDropdown
        items={options}
        renderTrigger={() => (
          <div className="flex gap-2">
            <CircleUserRound />
            <span>{user}</span>
          </div>
        )}
        renderItem={(item) => {
          if (item.href) {
            return (
              <Link href={item.href} className="block text-primary-900 font-semibold w-full">
                {item.label}
              </Link>
            );
          }

          if (item.key === 'logout') {
            return (
              <Button
                type="button"
                onClick={() => document.getElementById('logout-form').submit()}
              >
                {item.label}
              </Button>
            );
          }
        }}
      />
    </>
  );
}
