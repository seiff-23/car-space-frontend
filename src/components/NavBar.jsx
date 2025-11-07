"use client";

import { useState } from "react";
import { Button } from "antd";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Link, useNavigate } from "react-router-dom";
import ProfileAvatar from "./ProfileAvatar";
import { useDispatch, useSelector } from "react-redux";
import { lougoutUser } from "../JS/Actions/authActions";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="flex items-center space-x-3 -m-1.5 p-1.5">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
              <span className="text-white font-bold text-lg">CS</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              CarSpace
            </span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-8">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2">
              Features
              <ChevronDownIcon
                aria-hidden="true"
                className="size-4 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform rounded-2xl bg-white dark:bg-gray-800 shadow-2xl ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-xl p-4 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/40 transition-colors">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-blue-600 dark:text-blue-400"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900 dark:text-white"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link
            to="/marketplace"
            className="text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
          >
            Marketplace
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
          >
            Contact
          </Link>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:gap-4 lg:justify-end lg:items-center">
          {isAuth ? (
            <ProfileAvatar />
          ) : (
            <>
              <Button
                type="primary"
                onClick={() => navigate("/register")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Button>
              <Link
                to="/login"
                className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/30" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 -m-1.5 p-1.5">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                <span className="text-white font-bold text-lg">CS</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CarSpace
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-xl p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-xl py-2 pr-3.5 pl-3 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    Features
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180 transition-transform"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <Link
                  to="/marketplace"
                  className="-mx-3 block rounded-xl px-3 py-2 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Marketplace
                </Link>
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-xl px-3 py-2 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Contact
                </Link>
              </div>

              <div className="py-6">
                {isAuth ? (
                  <div className="space-y-2">
                    <Link
                      to="/profile"
                      className="-mx-3 block rounded-xl px-3 py-2.5 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="-mx-3 block rounded-xl px-3 py-2.5 text-base font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      Settings
                    </Link>
                    <button
                      onClick={() => dispatch(lougoutUser())}
                      className="-mx-3 block w-full text-left rounded-xl px-3 py-2.5 text-base font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <Button
                      onClick={() => {
                        navigate("/register");
                        setMobileMenuOpen(false);
                      }}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
                    >
                      Get Started
                    </Button>
                    <Link
                      to="/login"
                      className="block text-center text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
