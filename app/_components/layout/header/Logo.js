import logo from '@/public/logo.png';
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href='/' className="flex items-center gap-2">
      <Image src={logo}  className="w-10 h-auto" quality={100} alt="trendify website" />
      <span className='text-3xl font-heading font-semibold text-primary-600'>Trendify</span>
    </Link>
  )
}
export default Logo