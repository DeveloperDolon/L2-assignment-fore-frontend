import { NavLink } from 'react-router-dom';
import MyContainer from './MyContainer/MyContainer';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiPaint } from 'react-icons/bi';
import { BsStackOverflow, BsVimeo } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='bg-black mt-20 md:py-24 sm:py-20 py-16'>
      <MyContainer>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1'>
          <div>
            <h1 className='text-white uppercase font-semibold md:text-xl sm:text-lg text-base'>
              Company Name
            </h1>
            <ul className='md:mt-4 mt-3 space-y-2'>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>Privacy Policy</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>Terms of Service</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>Accessible</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>CA Transparency Act</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>CA Proposition 65 WARNING</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>ISO Certificate</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>Terms & Conditions of Sale</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>Join our Email List</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>Affiliate Program</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>Financing - Life Fitness</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h1 className='text-white uppercase font-semibold md:text-xl sm:text-lg text-base'>
              Customer Service
            </h1>
            <ul className='md:mt-4 mt-3 space-y-2'>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>FAQ</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>Contact Us</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>Returns & Cancellations</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>Request Service</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>Customer Home Gym</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>Product Registration</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>Referrals</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h1 className='text-white uppercase font-semibold md:text-xl sm:text-lg text-base'>
              Site Links
            </h1>
            <ul className='md:mt-4 mt-3 space-y-2'>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>Search</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>Commercial Site</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>Military & First Responder Discount</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>Dealer Application</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>Find a Store</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>Cardio</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>Strength</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>Accessories</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>Outlet</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h1 className='text-white uppercase font-semibold md:text-xl sm:text-lg text-base'>
              Connect
            </h1>
            <ul className='md:mt-4 mt-3 space-y-2'>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>800-527-6063 (Sales)</NavLink>
              </li>
              <li className='md:text-sm text-xs font-medium text-white'>
                <NavLink to={'/'}>800-527-6065 (Support)</NavLink>
              </li>

              <div className='text-white'>
                <p>More contact options</p>

                <table className='border-collapse border border-[#818181] md:mt-5'>
                  <tr>
                    <td className='border-[#818181] border-[.5px] p-3 text-white'>
                      <FaFacebook className='text-white md:text-2xl text-xl' />
                    </td>
                    <td className='border-[.5px] border-[#818181] p-3 text-white'>
                      <FaTwitter className='text-white md:text-2xl text-xl' />
                    </td>
                    <td className='border-[.5px] border-[#818181] p-3 text-white'>
                      <FaYoutube className='text-white md:text-2xl text-xl' />
                    </td>
                    <td className='border-[.5px] border-[#818181] p-3 text-white'>
                      <FaLinkedin className='text-white md:text-2xl text-xl' />
                    </td>
                    <td className='border-[.5px] border-[#818181] p-3 text-white'>
                      <BiPaint className='text-white md:text-2xl text-xl' />
                    </td>
                  </tr>

                  <tr className='w-auto'>
                    <td className='border-[#818181] border-[.5px] p-3 text-white'>
                      <BsVimeo className='text-white md:text-2xl text-xl' />
                    </td>
                    <td className='border-[.5px] border-[#818181] p-3 text-white'>
                      <BsStackOverflow className='text-white md:text-2xl text-xl' />
                    </td>
                  </tr>
                </table>
              </div>
            </ul>
          </div>
        </div>

        <div className='text-white md:mt-16 mt-2 flex justify-between items-center flex-wrap'>
          <p className='md:text-xs text-[10px]'>
            All &copy; rights reserved{' '}
            <a
              className='text-yellow-400'
              target='_blank'
              href='https://space-portolio-main-pi.vercel.app/'
            >
              DeveloperDolon
            </a>
          </p>

          <p className='md:text-xs text-[10px]'>
            Made with love in{' '}
            <span
              role='img'
              aria-label='heart'
            >
              ❤️
            </span>{' '}
            by{' '}
            <a
              className='text-yellow-400'
              target='_blank'
              href='https://www.linkedin.com/in/dolon-chandra-roy-5a4abb237/'
            >
              Dolon
            </a>{' '}
            at{' '}
            <a
              className='text-yellow-400'
              target='_blank'
              href='https://github.com/DeveloperDolon'
            >
              Github
            </a>
          </p>
        </div>
      </MyContainer>
    </div>
  );
};

export default Footer;
