import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {

  return (
    <footer className="bg-gray-500 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 ml-24">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-brandRed">Home</Link></li>
              <li><Link href="/pets-for-adoption" className="hover:text-brandRed">Available Pets</Link></li>
              <li><Link href="/about" className="hover:text-brandRed">About Us</Link></li>
              <li><Link href="/dashboard" className="hover:text-brandRed">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>123 Rufus Street</li>
              <li>Calgary, AB T4C 2A2</li>
              <li>Phone: (403) 222-0123</li>
              <li>Email: info@roofus.ca</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support Our Cause</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-brandRed">Make a Donation</Link></li>
              <li><Link href="#" className="hover:text-brandRed">Volunteer With Us</Link></li>
              <li><Link href="#" className="hover:text-brandRed">Foster a Pet</Link></li>
              <li><Link href="#" className="hover:text-brandRed">Local Business Sponsorship</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-brandRed">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-brandRed">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-brandRed">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Roofus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}