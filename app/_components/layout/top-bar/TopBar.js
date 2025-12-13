import TopBarLeft from './TopBarLeft';
import TopBarRight from './TopBarRight';

function TopBar({ className }) {
  return (
    <div
      className={` hidden md:flex justify-between  items-center gap-10 px-8 h-8 py-2 bg-primary-50 text-primary-900 ${className}`}
    >
      <TopBarLeft />
      <TopBarRight />
    </div>
  );
}

export default TopBar;
