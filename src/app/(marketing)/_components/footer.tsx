import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className=" bg-white border-t-2" role="contentinfo">
      <div className="relative pt-20 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Kathmandu Address */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                Kathmandu Address
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5  mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium ">Lazimpat -03, Kathmandu</p>
                    <p className="">Next to Everest Bank</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5  flex-shrink-0" />
                  <div>
                    <a
                      href="tel:014515374"
                      className=" hover:underline"
                      aria-label="Call Kathmandu office at 01-4515374 or mobile +977 9820815374"
                    >
                      01-4515374 | +977 9820815374
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5  flex-shrink-0" />
                  <a
                    href="mailto:info@npwc.com.np"
                    className=" hover:underline"
                    aria-label="Send email to Nirvana Physiotherapy"
                  >
                    info@npwc.com.np
                  </a>
                </div>

                <button
                  className="flex items-center space-x-2  hover: transition-colors duration-200"
                  aria-label="View Kathmandu location on Google Maps"
                >
                  <MapPin className="w-4 h-4" />
                  <span className="underline ">
                    View Kathmandu Location on Google Maps
                  </span>
                </button>
              </div>

              {/* Opening Hours - Kathmandu */}
              <div className="pt-6 border-t border-primary border-opacity-30">
                <h3 className="text-lg font-semibold mb-4 flex items-center ">
                  <Clock className="w-5 h-5 mr-2 " />
                  Opening-Closing Time:
                </h3>
                <div className="space-y-2 ">
                  <p>
                    <span className="font-medium ">Nirvana Lazimpat:</span>
                  </p>
                  <p>Sunday to Friday: Morning 9 AM to 7 PM</p>
                  <p>Saturdays: 10 AM to 2 PM</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                Quick Links
              </h2>

              <div className="space-y-4">
                <a
                  href="#contact"
                  className="flex items-center space-x-2  hover: transition-colors duration-200"
                  aria-label="Go to contact us section"
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="">Contact Us</span>
                </a>
                <a
                  href="#hours"
                  className="flex items-center space-x-2  hover: transition-colors duration-200"
                  aria-label="View our opening hours information"
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="">Opening Hours</span>
                </a>
                <a
                  href="#privacy"
                  className="flex items-center space-x-2  hover: transition-colors duration-200"
                  aria-label="Read our privacy policy"
                >
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="">Privacy Policy</span>
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="pt-6">
                <h3 className="text-lg font-semibold mb-4 ">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/nirvanaphysiotherapy"
                    className="w-10 h-10  bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200 hover:scale-110"
                    aria-label="Follow us on Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="w-5 h-5 " />
                  </a>
                  <a
                    href="https://instagram.com/nirvanaphysiotherapy"
                    className="w-10 h-10  bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200 hover:scale-110"
                    aria-label="Follow us on Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="w-5 h-5 " />
                  </a>
                  <a
                    href="https://linkedin.com/company/nirvanaphysiotherapy"
                    className="w-10 h-10  bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200 hover:scale-110"
                    aria-label="Connect with us on LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 " />
                  </a>
                  <a
                    href="https://youtube.com/@nirvanaphysiotherapy"
                    className="w-10 h-10  bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-200 hover:scale-110"
                    aria-label="Subscribe to our YouTube channel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-5 h-5 "
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.54v5.79c0 2.84-2.26 5.14-5.09 5.14-2.84 0-5.14-2.26-5.14-5.09V2H1.41v5.79c0 3.86 2.79 7.06 6.48 7.71v3.76a1.46 1.46 0 002.92 0v-3.76c3.69-.65 6.48-3.85 6.48-7.71V6.69h2.3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Bhaktapur Address */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                Bhaktapur Address
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5  mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium ">
                      Balanko, Suryabinayak-06, Bhaktapur
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5  flex-shrink-0" />
                  <div>
                    <a
                      href="tel:016620250"
                      className=" hover:underline"
                      aria-label="Call Bhaktapur office at +977 01-6620250 or mobile +977-9705815374"
                    >
                      +977 01-6620250 | +977-9705815374
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5  flex-shrink-0" />
                  <a
                    href="mailto:info@npwc.com.np"
                    className=" hover:underline"
                    aria-label="Send email to Nirvana Physiotherapy"
                  >
                    info@npwc.com.np
                  </a>
                </div>

                <button
                  className="flex items-center space-x-2  hover: transition-colors duration-200"
                  aria-label="View Bhaktapur location on Google Maps"
                >
                  <MapPin className="w-4 h-4" />
                  <span className="underline ">
                    View Bhaktapur Location on Google Maps
                  </span>
                </button>
              </div>

              {/* Opening Hours - Bhaktapur */}
              <div className="pt-6 border-t border-primary border-opacity-30">
                <h3 className="text-lg font-semibold mb-4 flex items-center ">
                  <Clock className="w-5 h-5 mr-2 " />
                  Opening-Closing Time:
                </h3>
                <div className="space-y-2 ">
                  <p>
                    <span className="font-medium ">Nirvana Bhaktapur:</span>
                  </p>
                  <p>Sunday to Friday: Morning 7 AM to 6 PM</p>
                  <p>Saturdays: 7 AM to 12 NOON</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="border-t border-primary border-opacity-30 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="">
                <p>
                  Copyright 2025. Nirvana Physiotherapy and Wellness Center. All
                  rights reserved
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className=" text-sm">Caring for Your Health</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom SVG */}
      <div className="relative">
        <svg
          className="w-full text-primary h-8 "
          viewBox="0 0 1200 60"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,60V40c60-20,120-10,180,0s120,20,180,0,120-20,180,0,120,20,180,0,120-20,180,0,120,20,180,0,120-20,180,0V60Z" />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
