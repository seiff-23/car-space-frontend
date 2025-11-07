import { Link } from "react-router-dom";
import { Button, Result } from "antd";
import { HomeOutlined, CustomerServiceOutlined } from "@ant-design/icons";

export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 flex items-center justify-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-gray-300 dark:text-gray-600 select-none">
            404
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-6xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
              Oops!
            </div>
          </div>
        </div>

        <Result
          status="404"
          title={
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Page Not Found
            </h1>
          }
          subTitle={
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Sorry, the page you're looking for doesn't exist or has been
              moved. Let's get you back on track.
            </p>
          }
          extra={
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link to="/">
                <Button
                  type="primary"
                  icon={<HomeOutlined />}
                  size="large"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 text-white font-semibold rounded-xl px-8 py-4 h-auto text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Go Back Home
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  icon={<CustomerServiceOutlined />}
                  size="large"
                  className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl px-8 py-4 h-auto text-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Contact Support
                </Button>
              </Link>
            </div>
          }
        />

        {/* Additional Help Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <HomeOutlined className="text-blue-500 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Return Home
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Navigate back to our homepage and explore from there
            </p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <CustomerServiceOutlined className="text-green-500 text-xl" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Get Help
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Contact our support team for immediate assistance
            </p>
          </div>

          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-500 text-xl">🔍</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Search Again
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Use our search feature to find what you're looking for
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            Popular pages you might be looking for:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Marketplace", "About Us", "Services", "FAQ"].map((page) => (
              <Link
                key={page}
                to={`/${page.toLowerCase().replace(" ", "-")}`}
                className="text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
              >
                {page}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
