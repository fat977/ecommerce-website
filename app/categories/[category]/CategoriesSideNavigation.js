'use client';
import Button from '@/app/_components/ui/buttons/Button';
import NavLink from '@/app/_components/ui/links/NavLink';
import { ChevronDown, ChevronRight, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function CategoriesSideNavigation({ groupedCategories,onClose }) {
  const pathname = usePathname();

  // initial open group based on active link
  const initialOpenGroup =
    Object.entries(groupedCategories).find(([group, data]) =>
      (data.items || []).some((item) =>
        pathname.includes(`/categories/${encodeURIComponent(item)}`),
      ),
    )?.[0] || null;

  const [openGroup, setOpenGroup] = useState(initialOpenGroup);

  const toggleGroup = (group) => {
    setOpenGroup((prev) => (prev === group ? null : group));
  };

  return (
    <aside className="w-full mb-20 md:mb-8 sm:w-64 p-4 custom-scrollbar overflow-y-auto bg-primary-50 border-r border-primary-200 rounded-xl shadow-lg h-auto sm:h-[calc(100vh-64px)] sticky top-16">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-primary-900">Categories</h2>
        {onClose && (
          <button
            onClick={onClose}
            className="sm:hidden p-1 rounded hover:bg-primary-100 text-primary-900"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      <div className="space-y-3">
        {Object.entries(groupedCategories).map(([group, data]) => {
          const items = data.items || [];

          if (items.length === 1) {
            return (
              <div key={group}>
                <NavLink href={`/categories/${encodeURIComponent(items[0])}`}>
                  {items[0].replace(/-/g, ' ')}
                </NavLink>
              </div>
            );
          }

          const open = openGroup === group;

          return (
            <div
              key={group}
              className="bg-white rounded-lg shadow-sm border border-primary-200"
            >
              <Button
                onClick={() => toggleGroup(group)}
                className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-primary-900 hover:bg-primary-100 rounded-t-lg transition"
              >
                <span className="capitalize">{group}</span>
                {open ? (
                  <ChevronDown className="text-primary-500" />
                ) : (
                  <ChevronRight className="text-primary-500" />
                )}
              </Button>

              {open && (
                <ul className="pl-6 pb-3 space-y-2">
                  {items.map((item) => (
                    <li key={item}>
                      <NavLink href={`/categories/${encodeURIComponent(item)}`}>
                        {item.replace(/^.+-/, '')}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
