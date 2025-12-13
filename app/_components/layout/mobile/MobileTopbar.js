import Logo from "../header/Logo";
import SearchBar from "../header/SearchBar";

function MobileTopbar() {
  return (
    <div className="md:hidden flex items-center justify-between px-4 py-3 bg-primary-50 border-b border-primary-200">
      <Logo />

     <SearchBar />
    </div>
  );
}

export default MobileTopbar;
