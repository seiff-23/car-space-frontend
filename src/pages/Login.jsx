import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../JS/Actions/authActions";
import Loading from "../components/Loading";
import { Card, Button, Divider } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";

export default function Login() {
  const [user, setUser] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loading = useSelector((state) => state.AuthReducer.load);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(user, navigate));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 flex items-center justify-center px-6 py-12 lg:px-8">
      <div className="w-full max-w-md">
        <Card
          className="rounded-2xl shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
          bodyStyle={{ padding: "40px" }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl">
                <UserOutlined className="text-white text-2xl" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Sign in to your CarSpace account
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailOutlined className="text-gray-400" />
                </div>
                <input
                  onChange={handleInputChange}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
                >
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockOutlined className="text-gray-400" />
                </div>
                <input
                  onChange={handleInputChange}
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  className="block w-full pl-10 pr-12 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeTwoTone className="text-gray-400 hover:text-gray-600" />
                  ) : (
                    <EyeInvisibleOutlined className="text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              {loading ? (
                <div className="flex justify-center">
                  <Loading />
                </div>
              ) : (
                <Button
                  type="primary"
                  htmlType="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 text-white font-semibold text-lg py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Sign In
                </Button>
              )}
            </div>

            {/* Divider */}
            <Divider className="text-gray-400 text-xs">
              or continue with
            </Divider>

            {/* Social Login Options */}
            <div className="grid grid-cols-2 gap-4">
              <Button className="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl py-3 transition-all duration-300">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </Button>
              <Button className="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl py-3 transition-all duration-300">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                Twitter
              </Button>
            </div>

            {/* Sign Up Link */}
            <div className="text-center mt-6">
              <p className="text-gray-600 dark:text-gray-400">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                >
                  Create account
                </Link>
              </p>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
