import React from "react";
import footerLogo from '../assets/WiztecBD-footer-logo.png'
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-[#251621] to-[#42233A] text-white relative overflow-hidden rounded-t-4xl">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 pb-66">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
          {/* Column 1 - About Us */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">About Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition">Resources</li>
              <li className="hover:text-white transition">Company</li>
              <li className="hover:text-white transition">Property</li>
              <li className="hover:text-white transition">Contact Us</li>
            </ul>
          </div>

          {/* Column 2 - Contact Us */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">Contact Us</h3>
            <div className="space-y-3 text-gray-400">
              <p className="hover:text-white transition">hello.abc@gmail.com</p>
              <p className="hover:text-white transition">+012233455667</p>
            </div>
          </div>

          {/* Column 3 - Follow Us + Social Icons */}
          <div>
            <h3 className="font-bold text-lg mb-5 text-white">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <FaWhatsapp size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <Youtube size={18} />
              </a>
        
            </div>

            <div className="mt-16 pt-8  text-white/80 text-sm">
          © 2025 Havenix. All rights reserved.
        </div>
          </div>
        </div>

        
      </div>

      
      <div className="absolute bottom-0 left-0 right-0 mx-auto text-center pb-2 pointer-events-none">
        <img src={footerLogo} alt="logo" className="mx-auto"/>
      </div>
    </footer>
  );
};

export default Footer;