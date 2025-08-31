import React, { useEffect, useState } from "react";
import { Menu } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [flipKey, setFlipKey] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipKey((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex items-center justify-between py-4 px-4 lg:px-20">
      {/* Logo */}
      <h1
        className="text-3xl md:text-4xl lg:text-5xl font-light m-0"
        data-aos="flip-left"
        key={flipKey}
      >
        <img src="/logo.png" alt="logo" className="w-20 h-20" />
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-12">
        <ul className="flex items-center gap-x-4">
          <li
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <a href="#">COMPANY</a>
          </li>
          <li
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <a href="#">FEATURES</a>
          </li>
          <li
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1100"
          >
            <a href="#">RESOURCES</a>
          </li>
          <li
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1400"
          >
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>

      {/* Button signin */}
      <button
        className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white z-50"
        onClick={toggleMobileMenu}
        data-aos="zoom-out"
        data-aos-easing="linear"
        data-aos-duration="1000"
      >
        Sign in
      </button>

      {/* Mobile Button */}
      <button className="md:hidden text-3xl p-2 z-50">
        <Menu />
      </button>

      {/* Mobile Menu - Slide up from bottom */}
      <nav
        className={`fixed top-16 bottom-0 right-0 left-0 p-5 bg-black/50 bg-opacity-70 backdrop-blur-md z-40 transition-all duration-500 ease-out ${
          isMobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-6 items-center pt-8">
          <li className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
            <a href="#">COMPANY</a>
          </li>
          <li className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
            <a href="#">FEATURES</a>
          </li>
          <li className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
            <a href="#">RESOURCES</a>
          </li>
          <li className="text-base tracking-wider transition-colors hover:text-gray-300 z-50">
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
