"use client";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#6A0572] text-white py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Footer Navigation */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#C77DFF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#C77DFF] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-[#C77DFF] transition-colors">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer Contact */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Email: support@shopcapio.com</li>
              <li>Phone: +1 234 567 890</li>
            </ul>
          </div>

          {/* Footer Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com" target="_blank">
                <FaFacebook size={24} className="hover:text-[#C77DFF]" />
              </Link>
              <Link href="https://www.twitter.com" target="_blank">
                <FaTwitter size={24} className="hover:text-[#C77DFF]" />
              </Link>
              <Link href="https://www.instagram.com" target="_blank">
                <FaInstagram size={24} className="hover:text-[#C77DFF]" />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank">
                <FaLinkedin size={24} className="hover:text-[#C77DFF]" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ShopCapio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
