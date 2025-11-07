import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { Card, Button, message } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  SendOutlined,
} from "@ant-design/icons";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      message.success("Your message has been sent successfully!");
      setLoading(false);
      e.target.reset();
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <PhoneOutlined className="text-blue-500 text-xl" />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: <MailOutlined className="text-green-500 text-xl" />,
      title: "Email",
      details: "support@carspace.com",
      description: "Online support 24/7",
    },
    {
      icon: <EnvironmentOutlined className="text-red-500 text-xl" />,
      title: "Office",
      details: "123 Automotive Ave",
      description: "New York, NY 10001",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-6">
          <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
            Get In Touch
          </span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Contact Our Team
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have questions about our vehicles? Our team is here to help you find
          the perfect car for your needs.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="rounded-2xl shadow-xl border-0 bg-white dark:bg-gray-800">
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {item.details}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Additional Info Card */}
            <Card
              title={
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    Visit Our Showroom
                  </span>
                </div>
              }
              className="rounded-2xl shadow-xl border-0 bg-gradient-to-br from-blue-500 to-purple-600 text-white"
            >
              <div className="space-y-3">
                <p className="text-blue-100">
                  Come visit our state-of-the-art showroom and experience luxury
                  vehicles up close.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-200">Monday - Friday</span>
                    <span className="text-white font-medium">
                      9:00 AM - 8:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Saturday</span>
                    <span className="text-white font-medium">
                      10:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-200">Sunday</span>
                    <span className="text-white font-medium">
                      12:00 PM - 5:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="rounded-2xl shadow-xl border-0 bg-white dark:bg-gray-800">
              <div className="p-1">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Send us a message
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                      >
                        First name
                      </label>
                      <input
                        id="first-name"
                        name="first-name"
                        type="text"
                        required
                        className="w-full rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                      >
                        Last name
                      </label>
                      <input
                        id="last-name"
                        name="last-name"
                        type="text"
                        required
                        className="w-full rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone-number"
                      className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                    >
                      Phone number
                    </label>
                    <div className="flex rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all duration-300 overflow-hidden">
                      <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                        <select
                          id="country"
                          name="country"
                          className="col-start-1 row-start-1 w-full appearance-none bg-transparent py-3 pl-4 pr-8 text-gray-500 dark:text-gray-400 focus:outline-none"
                        >
                          <option>US</option>
                          <option>CA</option>
                          <option>EU</option>
                        </select>
                        <ChevronDownIcon
                          aria-hidden="true"
                          className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500"
                        />
                      </div>
                      <input
                        id="phone-number"
                        name="phone-number"
                        type="text"
                        placeholder="123-456-7890"
                        className="block min-w-0 grow bg-transparent py-3 pr-4 pl-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your vehicle needs..."
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="flex items-center h-5 mt-1">
                      <input
                        id="agree-to-policies"
                        name="agree-to-policies"
                        type="checkbox"
                        required
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                      />
                    </div>
                    <label
                      htmlFor="agree-to-policies"
                      className="text-sm text-gray-600 dark:text-gray-400"
                    >
                      I agree to the{" "}
                      <a
                        href="#"
                        className="font-semibold text-blue-600 hover:text-blue-500"
                      >
                        privacy policy
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="font-semibold text-blue-600 hover:text-blue-500"
                      >
                        terms of service
                      </a>
                      .
                    </label>
                  </div>

                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    icon={<SendOutlined />}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 text-white font-semibold text-lg py-4 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
