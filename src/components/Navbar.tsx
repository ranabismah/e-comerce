"use client";
import { useState } from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "@/context/CartContext"; // Import the useCart hook

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart } = useCart(); // Access the cart from the context

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Calculate total quantity
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-[#C77DFF] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#6A0572]">
          <Link href="/">ShopCapio</Link>
        </div>

        {/* Desktop Navigation (Home, Products, Cart) */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-[#3D1E6D] hover:text-[#6A0572]">
            Home
          </Link>
          <Link href="/products" className="text-[#3D1E6D] hover:text-[#6A0572]">
            Products
          </Link>
          <Link href="/cart" className="relative text-[#3D1E6D] hover:text-[#6A0572]">
            <FaShoppingCart size={24} />
            {/* Display total quantity if greater than 0 */}
            {totalQuantity > 0 && (
              <span className="absolute top-[-5px] right-[-5px] bg-red-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile View: Hamburger Menu and Cart */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-[#3D1E6D]">
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Shopping Cart Icon */}
          <Link href="/cart" className="ml-4 text-[#3D1E6D] relative">
            <FaShoppingCart size={24} />
            {/* Display total quantity if greater than 0 */}
            {totalQuantity > 0 && (
              <span className="absolute top-[-5px] right-[-5px] bg-red-700 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu (Home, Products) */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#C77DFF] p-4">
          <Link
            href="/"
            className="block text-[#3D1E6D] hover:text-[#6A0572] mb-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/products"
            className="block text-[#3D1E6D] hover:text-[#6A0572] mb-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
