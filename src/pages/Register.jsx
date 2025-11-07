import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { registerUser } from "../JS/Actions/authActions";
import { Card, Button, Steps, Divider } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  CheckCircleOutlined,
} from "@ant-design/icons";

const { Step } = Steps;

export default function Register() {
  const [newUser, setNewUser] = useState({});
  const [currentStep, setCurrentStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(newUser, navigate));
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const steps = [
    {
      title: "Personal Info",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
              >
                First Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserOutlined className="text-gray-400" />
                </div>
                <input
                  onChange={handleInputChange}
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  autoComplete="given-name"
                  className="block w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your first name"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
              >
                Last Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <UserOutlined className="text-gray-400" />
                </div>
                <input
                  onChange={handleInputChange}
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  autoComplete="family-name"
                  className="block w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
            >
              Phone Number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <PhoneOutlined className="text-gray-400" />
              </div>
              <input
                onChange={handleInputChange}
                id="phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className="block w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Account Details",
      content: (
        <div className="space-y-6">
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
                placeholder="Enter your email address"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
            >
              Password
            </label>
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
                autoComplete="new-password"
                className="block w-full pl-10 pr-12 py-3 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                placeholder="Create a strong password"
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
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Password must be at least 8 characters with numbers and symbols
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <input
              id="agree-terms"
              name="agree-terms"
              type="checkbox"
              required
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mt-1"
            />
            <label
              htmlFor="agree-terms"
              className="text-sm text-gray-600 dark:text-gray-400"
            >
              I agree to the{" "}
              <a
                href="#"
                className="font-semibold text-blue-600 hover:text-blue-500"
              >
                terms of service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="font-semibold text-blue-600 hover:text-blue-500"
              >
                privacy policy
              </a>
            </label>
          </div>
        </div>
      ),
    },
    {
      title: "Complete",
      content: (
        <div className="text-center space-y-6">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircleOutlined className="text-green-500 text-2xl" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            Ready to Join CarSpace!
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            You're all set to create your account. Click the button below to
            complete your registration and start exploring our premium vehicle
            collection.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 flex items-center justify-center px-6 py-12 lg:px-8">
      <div className="w-full max-w-2xl">
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
              Create Your Account
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Join CarSpace and discover your perfect vehicle
            </p>
          </div>

          {/* Progress Steps */}
          <Steps current={currentStep} className="mb-8">
            {steps.map((step, index) => (
              <Step key={index} title={step.title} />
            ))}
          </Steps>

          <form onSubmit={handleRegister}>
            {/* Step Content */}
            <div className="mb-8 min-h-[300px]">
              {steps[currentStep].content}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              {currentStep > 0 ? (
                <Button
                  onClick={prevStep}
                  className="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl px-8 py-3 transition-all duration-300"
                >
                  Previous
                </Button>
              ) : (
                <div></div>
              )}

              {currentStep < steps.length - 1 ? (
                <Button
                  onClick={nextStep}
                  type="primary"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 text-white font-semibold rounded-xl px-8 py-3 transition-all duration-300 transform hover:scale-105"
                >
                  Continue
                </Button>
              ) : (
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 border-0 text-white font-semibold rounded-xl px-8 py-3 transition-all duration-300 transform hover:scale-105"
                >
                  Create Account
                </Button>
              )}
            </div>
          </form>

          <Divider className="text-gray-400 text-xs">or</Divider>

          {/* Social Registration */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <Button className="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl py-3 transition-all duration-300">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
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

          {/* Login Link */}
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-blue-600 hover:text-blue-500 transition-colors"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
