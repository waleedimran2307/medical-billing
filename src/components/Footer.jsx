import { MdPhone } from "react-icons/md";
import {
  FaWhatsapp,
  FaDotCircle,
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#00223A] text-white font-sans pt-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
        <div>
          <Link to="/">
            <img
              className="w-[100px] h-[100px] mx-auto lg:mx-0 mb-4"
              src="/logo.png"
              alt="Logo"
              loading="lazy"
            />
          </Link>
          <p className="text-gray-300 text-sm">
            Help businesses succeed by providing them with innovative and
            effective solutions.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-[#239ADF]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-[#239ADF]">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-[#239ADF]">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:text-[#239ADF]">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Useful Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-[#239ADF]">
                Billing Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#239ADF]">
                Value Added Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#239ADF]">
                Custom Financial Reporting
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center justify-center ">
              <MdPhone className="mr-2 text-xl" /> <span>04078453042</span>
            </li>
            <li className="flex items-center justify-center ">
              <FaWhatsapp className="mr-2 text-xl" /> <span>04078453042</span>
            </li>
            <li className="flex items-center justify-center ">
              <FaDotCircle className="mr-2 text-xl" />
              <a href="mailto:info@stallionsystem.com">
                info@stallionsystem.com
              </a>
            </li>
          </ul>

          <div className="flex justify-center  mt-4 space-x-3">
            <a href="#">
              <FaFacebook className="bg-[#239ADF] text-white p-2 text-3xl rounded-full" />
            </a>
            <a href="#">
              <FaTwitter className="bg-[#239ADF] text-white p-2 text-3xl rounded-full" />
            </a>
            <a href="#">
              <FaInstagramSquare className="bg-[#239ADF] text-white p-2 text-3xl rounded-full" />
            </a>
            <a href="#">
              <FaLinkedin className="bg-[#239ADF] text-white p-2 text-3xl rounded-full" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-10 py-3 text-center text-md text-gray-400">
        © 2023 Stallion System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
