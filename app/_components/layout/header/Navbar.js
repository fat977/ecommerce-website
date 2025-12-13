import { getCategories } from '@/app/_lib/categories';
import Link from 'next/link';
import NavLink from '../../ui/links/NavLink';

async function Navbar() {
  const categories = await getCategories();
  return (
    <nav className="flex items-center justify-between">
      <ul className="flex gap-6">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/contact">Contact</NavLink>
        </li>

        <div className="group relative">
          <li className="font-heading text-primary-900 hover:text-primary-700 cursor-pointer">Categories</li>

          <div className="invisible absolute left-1/2 z-50 mt-2 w-[550px] -translate-x-1/2 rounded-md bg-white px-4 py-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100">
            <div className="flex flex-wrap">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/categories/${encodeURIComponent(cat)}`}
                  className="block px-4 py-2 text-sm text-primary-90 rounded-md hover:bg-primary-200 transition-colors">
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </ul>
    </nav>
  );
}
export default Navbar;
