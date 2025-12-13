import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Button from '../_components/ui/buttons/Button';
import ContactForm from '../_components/forms/ContactForm';
import HeroSection from '../_components/ui/HeroSection';

export const metadata = {
  title: 'Contact',
};
function Page() {
  return (
    <>
      <HeroSection imageSrc="/contact-us.png" title="Contact Us" />

      <div className="flex my-5 flex-col lg:flex-row justify-center gap-10 p-8 max-w-6xl mx-auto bg-primary-50 rounded-xl shadow-lg">
        {/* Contact Form */}
        <div className="flex-1 border-b lg:border-b-0 lg:border-r border-primary-200 pr-0 lg:pr-8 pb-6 lg:pb-0">
          <h3 className="text-2xl font-bold text-primary-900 mb-4">Send us a message</h3>
          <ContactForm className="space-y-4" />
        </div>

        {/* Our Info */}
        <div className="flex-1 pl-0 lg:pl-0">
          <h3 className="text-2xl font-bold text-primary-900 mb-2">Our Info</h3>
          <hr className="border-t border-primary-200 my-4" />
          <ul className="space-y-4 text-primary-900">
            <li className="flex items-center gap-3">
              <Mail className="text-accent-500 w-5 h-5" />
              <span>contact@example.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-accent-500 w-5 h-5" />
              <span>+1 555-012-3456</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-accent-500 w-5 h-5" />
              <span>Suite 402, 15 Executive Avenue</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Page;
