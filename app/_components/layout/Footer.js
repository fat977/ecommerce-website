import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter } from 'react-icons/fa6';
import NewsletterForm from '../forms/NewsletterForm';
function Footer() {
  return (
    <footer className="mt-auto border-t border-primary-700 bg-primary-900 text-primary-50 px-4 sm:px-6 lg:px-14 py-8 mb-15 md:mb-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 border-b border-white/20 py-5">
        {/* Quick Links */}
        <div>
          <h3 className="text-primary-200 text-base sm:text-lg font-semibold mb-3">
            Shop & Quick Links
          </h3>
          <ul className="space-y-1 sm:space-y-2">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-primary-200 text-base sm:text-lg font-semibold mb-3">
            Customer Support
          </h3>
          <ul className="space-y-1 sm:space-y-2">
            <li>
              <Link href="#">Contact Us</Link>
            </li>
            <li>
              <Link href="#">Shipping & Returns</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <li>
              <Link href="#">Track your order</Link>
            </li>
          </ul>
        </div>

        {/* About & Legal */}
        <div>
          <h3 className="text-primary-200 text-base sm:text-lg font-semibold mb-3">
            About & Legal
          </h3>
          <ul className="space-y-1 sm:space-y-2">
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="#">Stepmap</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-primary-200 text-base sm:text-lg font-semibold mb-3">
            Join Our Newsletter
          </h3>
          <p className="text-sm sm:text-base mb-3">
            Get the latest deals and style tips straight to your inbox.
          </p>
          <NewsletterForm />
          <div className="flex justify-center sm:justify-start space-x-4 text-xl py-4">
            <FaFacebook className="hover:text-primary-600 cursor-pointer" />
            <FaInstagram className="hover:text-primary-600 cursor-pointer" />
            <FaTiktok className="hover:text-primary-600 cursor-pointer" />
            <FaXTwitter className="hover:text-primary-600 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-col md:flex-row justify-between items-center text-sm sm:text-base mt-8 gap-2 md:gap-0">
        <p>© 2025 Trendify. All rights reserved.</p>
        <p>
          Designed & Developed by <span className="text-blue-400">Fatma ❤️</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
