import SideNavigation from "./AccountSideNavigation";

export default function Layout({ children }) {
  return (
    <div className="h-full">
      {/* Vertical for pc */}
      <div className="hidden sm:grid grid-cols-[16rem_1fr] h-full">
        <SideNavigation orientation="vertical" />
        <div className="py-1">{children}</div>
      </div>

      {/* Hoeizontal for mobile  */}
      <div className="sm:hidden flex flex-col h-full">
        <SideNavigation orientation="horizontal" />
        <div className="flex-1 py-1">{children}</div>
      </div>
    </div>
  );
}
