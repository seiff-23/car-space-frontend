import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { lougoutUser } from "../JS/Actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import {
  UserOutlined,
  SettingOutlined,
  LogoutOutlined,
  CarOutlined,
  HeartOutlined,
} from "@ant-design/icons";

const ProfileAvatar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.AuthReducer.user);

  const handleLogout = () => {
    dispatch(lougoutUser(navigate));
  };

  const menuItems = [
    {
      icon: UserOutlined,
      label: "Your Profile",
      href: "/profile",
      color: "text-blue-600",
    },
    {
      icon: CarOutlined,
      label: "My Cars",
      href: "/my-cars",
      color: "text-green-600",
    },
    {
      icon: HeartOutlined,
      label: "Favorites",
      href: "/favorites",
      color: "text-red-600",
    },
    {
      icon: SettingOutlined,
      label: "Settings",
      href: "/settings",
      color: "text-gray-600",
    },
  ];

  return (
    <Menu as="div" className="relative ml-3">
      <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-all duration-300 hover:scale-110 group">
        <span className="absolute -inset-1.5" />
        <span className="sr-only">Open user menu</span>
        <div className="relative">
          <img
            alt="Profile"
            src={
              user?.picture ||
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            }
            className="size-10 rounded-full bg-gray-800 border-2 border-transparent group-hover:border-blue-500 transition-colors shadow-lg"
          />
          {user?.isAdmin && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
          )}
        </div>
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-50 mt-3 w-64 origin-top-right rounded-2xl bg-white dark:bg-gray-800 shadow-2xl ring-1 ring-black/5 focus:outline-none overflow-hidden border border-gray-200 dark:border-gray-700"
      >
        {/* Header with user info */}
        <div className="p-4 border-b border-gray-100 dark:border-gray-700 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600">
          <div className="flex items-center space-x-3">
            <img
              alt="Profile"
              src={
                user?.picture ||
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
              className="size-12 rounded-full border-2 border-white shadow-md"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                {user?.name || "User Name"}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                {user?.email || "user@example.com"}
              </p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="p-2">
          {menuItems.map((item, index) => (
            <MenuItem key={index}>
              {({ focus }) => (
                <Link
                  to={item.href}
                  className={`flex items-center space-x-3 rounded-xl px-3 py-3 text-sm transition-all duration-200 ${
                    focus
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  <item.icon className={`text-lg ${item.color}`} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )}
            </MenuItem>
          ))}
        </div>

        {/* Logout Section */}
        <div className="border-t border-gray-100 dark:border-gray-700 p-2 bg-gray-50 dark:bg-gray-900/50">
          <MenuItem>
            {({ focus }) => (
              <button
                onClick={handleLogout}
                className={`flex items-center space-x-3 rounded-xl px-3 py-3 text-sm w-full transition-all duration-200 ${
                  focus
                    ? "bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300"
                    : "text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20"
                }`}
              >
                <LogoutOutlined className="text-lg text-red-500" />
                <span className="font-medium">Sign Out</span>
              </button>
            )}
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default ProfileAvatar;
