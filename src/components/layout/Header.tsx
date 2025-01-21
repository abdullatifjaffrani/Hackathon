"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Search, Menu } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="w-full bg-white shadow-md relative z-50">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="flex items-center justify-between py-4 border-b">
          <div className="text-xs sm:text-sm text-gray-500 hidden sm:block">
            Free Shipping On All Orders Over $100
          </div>
          <div className="flex items-center space-x-4">
            <select className="text-xs sm:text-sm bg-transparent border-none">
              <option>English</option>
              <option>Spanish</option>
            </select>
            <select className="text-xs sm:text-sm bg-transparent border-none">
              <option>USD</option>
              <option>EUR</option>
            </select>
            <Link href="/faq" className="text-sm font-medium">
              FAQ
            </Link>
          </div>
        </div>

        {/* Logo and Actions */}
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/assets/Logo.png" // Replace with your logo path
              alt="Comforty Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Search, Cart, and Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="Search here..."
                className="pl-10 pr-4 py-2 w-full sm:w-80 border rounded-full text-sm"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            {/* Cart */}
            <Link href="/cart" className="text-gray-600 hover:text-gray-900 relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-teal-500 text-xs text-white flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="sm:hidden p-2 rounded-md border border-gray-300 hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <nav className="sm:hidden bg-gray-100 fixed top-0 left-0 w-full h-full z-50 shadow-lg">
            <div className="flex flex-col space-y-4 p-6">
              {/* Close Button */}
              <button
                onClick={closeMobileMenu}
                className="text-gray-600 hover:text-gray-900 text-left mb-4"
              >
                ✖ Close
              </button>

              {/* Navigation Links */}
              <Link href="/" onClick={closeMobileMenu} className="text-lg font-medium hover:text-teal-600">
                Home
              </Link>
              <Link href="/categories" onClick={closeMobileMenu} className="text-lg font-medium hover:text-teal-600">
                Categories
              </Link>
              <Link href="/products" onClick={closeMobileMenu} className="text-lg font-medium hover:text-teal-600">
                Products
              </Link>
              <Link href="/about" onClick={closeMobileMenu} className="text-lg font-medium hover:text-teal-600">
                About
              </Link>
              <Link href="/contact" onClick={closeMobileMenu} className="text-lg font-medium hover:text-teal-600">
                Contact Us
              </Link>
            </div>
          </nav>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center justify-between py-4 border-y">
          <div className="flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
            <Link href="/categories" className="text-sm font-medium">
              Categories
            </Link>
            <Link href="/products" className="text-sm font-medium">
              Products
            </Link>
            <Link href="/about" className="text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium">
              Contact Us
            </Link>
          </div>
          <div className="text-sm text-gray-500">Call Us: +1 (234) 567-8901</div>
        </nav>
      </div>
    </header>
  );
}
