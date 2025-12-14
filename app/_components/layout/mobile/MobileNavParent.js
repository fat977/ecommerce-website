import getUser from '@/app/_lib/user';
import MobileNavbar from './MobileNav';

async function MobileNavParent() {
  const user = await getUser();
  const userFirstName = user?.user_metadata?.fname || undefined;
  return <MobileNavbar userFirstName={userFirstName} />;
}

export default MobileNavParent;
