import { useState } from "react";

const CartIcon = ({ cartItemsLength }: { cartItemsLength: number }) => (
  <div className='relative'>
    <img
      src={"/assets/Bag.svg"}
      alt='Cart icon'
      className='w-8 h-8 rounded-full'
    />
    <span className='absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center'>
      {cartItemsLength || 0}
    </span>
  </div>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFurnitureDropdownOpen, setIsFurnitureDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close desktop dropdown if mobile menu is opened
    if (!isMobileMenuOpen) setIsFurnitureDropdownOpen(false);
  };

  const toggleFurnitureDropdown = () => {
    setIsFurnitureDropdownOpen(!isFurnitureDropdownOpen);
  };

  const closeDropdowns = () => {
    setIsFurnitureDropdownOpen(false);
  };

  // Not implementing react router Dom as pages are not defined yet. using button instead

  return (
    <nav
      className='text-white py-4 px-4 sm:px-6 lg:px-8'
      aria-label='Main navigation'
    >
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo/Brand Name */}
        <button
          className='text-2xl font-medium font-gilroy cursor-pointer'
          aria-label='Panto Home'
        >
          Panto
        </button>

        {/* Navigation Links (Desktop) */}
        <div className='hidden md:flex space-x-10'>
          <div className='relative group'>
            <button
              onClick={toggleFurnitureDropdown}
              onBlur={closeDropdowns} // Close dropdown when focus leaves the button/dropdown
              className='flex items-center hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-sm text-lg'
              aria-expanded={isFurnitureDropdownOpen}
              aria-controls='furniture-dropdown'
              id='furniture-link'
            >
              Furniture
              <svg
                className='ml-1 w-4 h-4 transition-transform duration-200'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                style={{
                  transform: isFurnitureDropdownOpen
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                }}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M19 9l-7 7-7-7'
                ></path>
              </svg>
            </button>
            {/* Dropdown for Furniture */}
            {isFurnitureDropdownOpen && ( // Conditionally render to manage focus better
              <div
                id='furniture-dropdown'
                role='menu'
                aria-labelledby='furniture-link'
                className='absolute bg-(--search-bg) text-white mt-2 space-y-2 py-2 rounded shadow-lg z-10 w-48'
              >
                <a
                  href='#'
                  role='menuitem'
                  className='block px-4 py-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-gray-600'
                >
                  Sofas
                </a>
                <a
                  href='#'
                  role='menuitem'
                  className='block px-4 py-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-gray-600'
                >
                  Chairs
                </a>
                <a
                  href='#'
                  role='menuitem'
                  className='block px-4 py-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-gray-600'
                >
                  Tables
                </a>
              </div>
            )}
          </div>
          <a
            href='#'
            className='hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-sm text-lg'
          >
            Shop
          </a>
          <a
            href='#'
            className='hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-sm text-lg'
          >
            About Us
          </a>
          <a
            href='#'
            className='hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-sm text-lg'
          >
            Contact
          </a>
        </div>

        {/* Cart Icon and Mobile Menu Toggle */}
        <div className='flex items-center space-x-4'>
          <a
            href='#'
            className='relative focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full'
            aria-label='Shopping Cart'
          >
            <CartIcon cartItemsLength={0} />
          </a>

          {/* Hamburger menu for mobile */}
          <button
            onClick={toggleMobileMenu}
            className='md:hidden text-white focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-sm'
            aria-controls='mobile-menu'
            aria-expanded={isMobileMenuOpen}
            aria-label={
              isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
            }
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isMobileMenuOpen && (
        <div
          id='mobile-menu'
          className='md:hidden bg-(--search-bg) mt-4 space-y-2 py-2 px-4 rounded shadow-lg'
        >
          <a
            href='#'
            className='block px-4 py-2 hover:bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-gray-600'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Furniture
          </a>
          <a
            href='#'
            className='block px-4 py-2 hover:bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-gray-600'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Shop
          </a>
          <a
            href='#'
            className='block px-4 py-2 hover:bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-gray-600'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </a>
          <a
            href='#'
            className='block px-4 py-2 hover:bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:bg-gray-600'
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;
