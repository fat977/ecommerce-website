'use client';
import Button from '@/app/_components/ui/buttons/Button';
import { useEffect, useRef, useState } from 'react';

export default function BaseDropdown({
  items = [],
  selected,
  onSelect,
  renderTrigger,
  renderItem,
  width = 'w-36',
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (item) => {
    onSelect?.(item);
    setIsOpen(false);
  };

  // close when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current?.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-1  text-sm"
      >
        {renderTrigger(selected)}
        <span className="text-xs">▼</span>
      </button>

      {/* Menu */}
      {isOpen && (
        <ul
          className={`absolute right-0 mt-2 ${width} bg-white border border-gray-200 rounded-md shadow-md z-50`}
        >
          {items.map((item) => (
            <li
              key={item.key}
              onClick={() => handleSelect(item)}
              className={`px-3 py-2 text-sm rounded-md text-primary-900 cursor-pointer hover:bg-gray-100 ${
                selected === item.key ? 'bg-gray-50 font-medium' : ''
              }`}
            >
              {renderItem(item)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
