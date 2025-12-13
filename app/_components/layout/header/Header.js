import getUser from '@/app/_lib/user';
import Actions from './Actions';
import Logo from './Logo';
import Navbar from './Navbar';

async function Header({ className }) {
  const user = await getUser();
  const userFirstName = user?.user_metadata?.fname || undefined;
  return (
    <header
      className={`hidden md:block border-primary-200 border-b px-8 py-6 bg-primary-50
          ${className}`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto ">
        <Logo />
        <Navbar />
        <Actions userFirstName={userFirstName} />
      </div>
    </header>
  );
}
export default Header;
