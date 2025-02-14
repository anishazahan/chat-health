import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-10">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-12 gap-6 border-b pb-6">
          {/* Brand Section */}
          <div className="col-span-12 lg:col-span-5">
            <h2 className="text-lg font-bold text-primary flex items-center mb-2">
              <span className="mr-2">
                {" "}
                <Image src="/images/logo.png" width={"40"} height={"40"} className="object-contain " alt="" />
              </span>{" "}
              CHATHEALTH
            </h2>
            <p className="text-sm mt-6 max-w-[450px]">
              ChatHealth.com.au acknowledges the Traditional Custodians of the lands we live on. We pay our respects to
              all Elders, past and present, of all Aboriginal and Torres Strait Islander nations.
            </p>
          </div>

          {/* Empty Space */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Links Section */}
          <div className="col-span-12 lg:col-span-2">
            <h3 className="font-semibold text-gray-800 mb-3">About the Company</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="#" className="hover:text-primary text-sm duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary text-sm duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary text-sm duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-2">
            <h3 className="font-semibold text-gray-800 mb-3">Support & Help</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="#" className="hover:text-primary text-sm duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary text-sm duration-300">
                  Symptom Checker
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-12 lg:col-span-2">
            <h3 className="font-semibold text-gray-800 mb-3">Legal & Policies</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link href="#" className="hover:text-primary text-sm duration-300">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary text-sm duration-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
          <p>© 2024 ChatHealth. All rights reserved. Australian Owned & Operated.</p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="p-2 bg-gray-200 rounded-full hover:bg-primary hover:text-white transition">
              <FaLinkedinIn />
            </Link>
            <Link href="#" className="p-2 bg-gray-200 rounded-full hover:bg-primary hover:text-white transition">
              <FaFacebookF />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
