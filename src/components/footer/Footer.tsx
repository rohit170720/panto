const Footer = () => {
  return (
    <footer className='bg-(--ternery-bg) py-20 px-4 sm:px-6 lg:px-8 text-(--custom-black)'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col gap-4 md:flex-row justify-between'>
          {/* Column 1: Panto Logo and Description */}
          <div>
            <h3 className='text-2xl font-bold text-gray-800 mb-4'>Panto</h3>
            <p className='text-sm leading-relaxed max-w-sm'>
              The advantage of hiring a workspace with us is that gives you
              comfortable service and all-around facilities.
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className='text-orange-500 font-normal mb-4'>Services</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  Email Marketing
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  Campaigns
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  Branding
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Furniture */}
          <div>
            <h4 className='text-orange-500 font-normal mb-4'>Furniture</h4>
            <ul className='space-y-2 text-sm'>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  Beds
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  Chair
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-gray-900'>
                  All
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h4 className='text-orange-500 font-normal mb-4'>Follow Us</h4>
            <ul className='space-y-2 text-sm'>
              <li className='flex items-center gap-1'>
                <img
                  src='/assets/facebook.svg'
                  className='h-4 w-4'
                  alt='facebook'
                />
                <a href='#' className='hover:text-gray-900'>
                  Facebook
                </a>
              </li>
              <li className='flex items-center gap-1'>
                <img
                  src='/assets/twitter.svg'
                  className='h-4 w-4'
                  alt='twitter'
                />
                <a href='#' className='hover:text-gray-900'>
                  Twitter
                </a>
              </li>
              <li className='flex items-center gap-1'>
                <img
                  src='/assets/instagram.svg'
                  className='h-4 w-4'
                  alt='instagram'
                />
                <a href='#' className='hover:text-gray-900'>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator Line */}

        {/* Bottom Section: Copyright and Legal Links */}
        <div className='flex flex-col sm:flex-row justify-between items-center text-sm mt-4'>
          <p className='mb-4 sm:mb-0'>Copyright © {new Date().getFullYear()}</p>
          <div className='flex space-x-6'>
            <a href='#' className='hover:text-gray-900'>
              Terms & Conditions
            </a>
            <a href='#' className='hover:text-gray-900'>
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
