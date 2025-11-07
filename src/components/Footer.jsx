import {
  CalendarDaysIcon,
  HandRaisedIcon,
  TruckIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Section */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-xl">
                <TruckIcon className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                CarSpace
              </span>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed max-w-md">
              Your premier destination for luxury and performance vehicles.
              Discover, compare, and drive your dream car today.
            </p>
            <div className="flex space-x-4">
              {/* Social Links */}
              {["Twitter", "Facebook", "Instagram", "LinkedIn"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="h-8 w-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                      {social.charAt(0)}
                    </div>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Links Grid */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">
                  Solutions
                </h3>
                <ul className="space-y-4">
                  {[
                    "Marketplace",
                    "Car Financing",
                    "Insurance",
                    "Test Drives",
                  ].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors duration-300 text-base"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-lg font-semibold text-white mb-6">
                  Support
                </h3>
                <ul className="space-y-4">
                  {["Help Center", "Contact Us", "FAQ", "Service Centers"].map(
                    (item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="text-gray-300 hover:text-white transition-colors duration-300 text-base"
                        >
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">
                  Company
                </h3>
                <ul className="space-y-4">
                  {["About", "Careers", "Press", "Partners"].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors duration-300 text-base"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter Section */}
              <div className="mt-10 md:mt-0">
                <h3 className="text-lg font-semibold text-white mb-6">
                  Stay Updated
                </h3>
                <div className="flex max-w-md gap-2">
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="min-w-0 flex-auto rounded-xl bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                  />
                  <button
                    type="submit"
                    className="flex-none rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 border-t border-gray-800 pt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: ShieldCheckIcon,
                title: "Secure Transactions",
                description:
                  "Your payments and data are protected with bank-level security",
              },
              {
                icon: TruckIcon,
                title: "Nationwide Delivery",
                description:
                  "Free delivery to your location anywhere in the country",
              },
              {
                icon: CalendarDaysIcon,
                title: "Flexible Scheduling",
                description:
                  "Book test drives at your convenience, 7 days a week",
              },
              {
                icon: HandRaisedIcon,
                title: "24/7 Support",
                description:
                  "Our team is always here to help with any questions",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300 transform group-hover:scale-110">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="mt-4 text-lg font-semibold text-white">
                  {feature.title}
                </h4>
                <p className="mt-2 text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <p className="text-gray-400 text-sm">
            &copy; 2024 CarSpace. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
