import Breadcrumbs from '@/app/_components/navigation/Breadcrumbs';
import { getCategories } from '@/app/_lib/categories';
import SideNavigation from '@/app/categories/[category]/CategoriesSideNavigation';
import { getBreadcrumbs } from '@/app/utils/getBreadcrumbs';
import { groupCategories } from './groupCategories';

export default async function CategoryLayout({ children, params }) {
  const categories = await getCategories();
  const groupedCategories = groupCategories(categories);
  const resolvedParams = await params;
  const categoryName = resolvedParams.category;
  const items = getBreadcrumbs(categoryName);

  return (
    <>
      <Breadcrumbs items={items} />
      <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] gap-6 md:gap-12 h-full sm:mx-6 md:mx-10 lg:mx-14 ">
        <div className="hidden md:block">
          <SideNavigation groupedCategories={groupedCategories} />
        </div>
        <div className="">{children}</div>
      </div>
    </>
  );
}
