import React from "react";
import { useSelector } from "react-redux";
import { Card, Avatar, Tag, Progress, List, Button } from "antd";
import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EditOutlined,
  CarOutlined,
  StarOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;

const Profile = () => {
  const user = useSelector((state) => state.AuthReducer.user);

  const profileStats = [
    {
      title: "Cars Viewed",
      value: "24",
      icon: "👀",
      color: "blue",
    },
    {
      title: "Favorites",
      value: "8",
      icon: "❤️",
      color: "red",
    },
    {
      title: "Test Drives",
      value: "3",
      icon: "🚗",
      color: "green",
    },
    {
      title: "Reviews",
      value: "12",
      icon: "⭐",
      color: "orange",
    },
  ];

  const recentActivities = [
    {
      action: "Viewed BMW X6",
      time: "2 hours ago",
      type: "view",
    },
    {
      action: "Added Mercedes C-Class to favorites",
      time: "1 day ago",
      type: "favorite",
    },
    {
      action: "Scheduled test drive for Audi A4",
      time: "2 days ago",
      type: "test-drive",
    },
    {
      action: "Completed profile setup",
      time: "1 week ago",
      type: "profile",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            My Profile
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Manage your account and track your car preferences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1 space-y-6">
            <Card
              className="rounded-2xl shadow-xl border-0 bg-white dark:bg-gray-800 overflow-hidden"
              cover={
                <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600 relative">
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <Avatar
                      size={100}
                      src={
                        user?.picture ||
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      }
                      icon={<UserOutlined />}
                      className="border-4 border-white dark:border-gray-800 shadow-lg"
                    />
                  </div>
                </div>
              }
            >
              <div className="mt-12 text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {user?.name || "John Doe"}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mb-4 flex items-center justify-center">
                  <MailOutlined className="mr-2" />
                  {user?.email || "john.doe@example.com"}
                </p>

                <Tag
                  color={user?.isAdmin ? "red" : "blue"}
                  className="px-3 py-1 rounded-full text-sm font-semibold mb-6"
                >
                  {user?.isAdmin ? "Administrator" : "Premium Member"}
                </Tag>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">
                      Profile Completion
                    </span>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      85%
                    </span>
                  </div>
                  <Progress
                    percent={85}
                    strokeColor={{
                      "0%": "#3b82f6",
                      "100%": "#8b5cf6",
                    }}
                    showInfo={false}
                  />
                </div>

                <Button
                  type="primary"
                  icon={<EditOutlined />}
                  className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 text-white font-semibold rounded-xl h-12 shadow-lg transition-all duration-300"
                >
                  Edit Profile
                </Button>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card
              title={
                <div className="flex items-center space-x-2">
                  <CarOutlined className="text-blue-500" />
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    Quick Stats
                  </span>
                </div>
              }
              className="rounded-2xl shadow-lg border-0 bg-white dark:bg-gray-800"
            >
              <div className="grid grid-cols-2 gap-4">
                {profileStats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-shadow"
                  >
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.title}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right Column - Details & Activities */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card
              title={
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <UserOutlined className="text-blue-500" />
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      Personal Information
                    </span>
                  </div>
                  <SettingOutlined className="text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
                </div>
              }
              className="rounded-2xl shadow-xl border-0 bg-white dark:bg-gray-800"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Full Name
                  </label>
                  <p className="text-lg text-gray-900 dark:text-white">
                    {user?.name || "John Doe"}
                  </p>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Email Address
                  </label>
                  <p className="text-lg text-gray-900 dark:text-white flex items-center">
                    <MailOutlined className="mr-2 text-blue-500" />
                    {user?.email || "john.doe@example.com"}
                  </p>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Phone Number
                  </label>
                  <p className="text-lg text-gray-900 dark:text-white flex items-center">
                    <PhoneOutlined className="mr-2 text-green-500" />
                    +1 (555) 123-4567
                  </p>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Member Since
                  </label>
                  <p className="text-lg text-gray-900 dark:text-white">
                    January 2024
                  </p>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Preferences
                  </label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Tag color="blue">Luxury</Tag>
                    <Tag color="green">SUV</Tag>
                    <Tag color="orange">German</Tag>
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Subscription
                  </label>
                  <div className="flex items-center space-x-2">
                    <Tag color="gold" className="px-3 py-1">
                      <StarOutlined className="mr-1" />
                      Premium
                    </Tag>
                    <span className="text-sm text-gray-500">
                      Expires in 30 days
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card
              title={
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    Recent Activity
                  </span>
                </div>
              }
              className="rounded-2xl shadow-xl border-0 bg-white dark:bg-gray-800"
            >
              <List
                dataSource={recentActivities}
                renderItem={(item, index) => (
                  <List.Item className="border-0 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors">
                    <List.Item.Meta
                      avatar={
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            item.type === "view"
                              ? "bg-blue-100 text-blue-600"
                              : item.type === "favorite"
                              ? "bg-red-100 text-red-600"
                              : item.type === "test-drive"
                              ? "bg-green-100 text-green-600"
                              : "bg-purple-100 text-purple-600"
                          }`}
                        >
                          {item.type === "view"
                            ? "👀"
                            : item.type === "favorite"
                            ? "❤️"
                            : item.type === "test-drive"
                            ? "🚗"
                            : "👤"}
                        </div>
                      }
                      title={
                        <span className="text-gray-900 dark:text-white font-medium">
                          {item.action}
                        </span>
                      }
                      description={
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {item.time}
                        </span>
                      }
                    />
                  </List.Item>
                )}
              />
            </Card>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl h-12 shadow-lg transition-all duration-300">
                Download Data
              </Button>
              <Button className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl h-12 shadow-lg transition-all duration-300">
                Privacy Settings
              </Button>
              <Button
                danger
                className="rounded-xl h-12 shadow-lg transition-all duration-300 font-semibold"
              >
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
