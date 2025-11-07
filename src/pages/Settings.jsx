import React, { useState } from "react";
import {
  Card,
  Button,
  Switch,
  Select,
  Input,
  Form,
  Tabs,
  Divider,
  message,
} from "antd";
import {
  UserOutlined,
  BellOutlined,
  LockOutlined,
  SafetyCertificateOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  SaveOutlined,
  MailOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

const { Option } = Select;
const { TabPane } = Tabs;
const { TextArea } = Input;

const Settings = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("1");

  const onFinish = async (values) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      message.success("Settings updated successfully!");
      setLoading(false);
    }, 2000);
  };

  const notificationSettings = [
    { label: "Email Notifications", name: "emailNotifications", default: true },
    { label: "Push Notifications", name: "pushNotifications", default: true },
    { label: "SMS Alerts", name: "smsAlerts", default: false },
    { label: "Marketing Emails", name: "marketingEmails", default: false },
    { label: "Price Drop Alerts", name: "priceAlerts", default: true },
    { label: "New Vehicle Alerts", name: "newVehicleAlerts", default: true },
  ];

  const privacySettings = [
    { label: "Profile Visibility", name: "profileVisibility", default: true },
    { label: "Show Email", name: "showEmail", default: false },
    { label: "Show Phone", name: "showPhone", default: false },
    { label: "Data Sharing", name: "dataSharing", default: false },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Account Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Manage your account preferences and privacy settings
          </p>
        </div>

        <Card className="rounded-2xl shadow-xl border-0 bg-white dark:bg-gray-800 overflow-hidden">
          <Tabs
            activeKey={activeTab}
            onChange={setActiveTab}
            tabPosition="left"
            size="large"
            className="settings-tabs"
          >
            {/* Profile Settings */}
            <TabPane
              tab={
                <span className="flex items-center space-x-2">
                  <UserOutlined />
                  <span>Profile</span>
                </span>
              }
              key="1"
            >
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Profile Settings
                </h2>
                <Form layout="vertical" onFinish={onFinish}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <Form.Item label="First Name" name="firstName">
                      <Input
                        size="large"
                        placeholder="Enter your first name"
                        className="rounded-xl"
                        prefix={<UserOutlined />}
                      />
                    </Form.Item>
                    <Form.Item label="Last Name" name="lastName">
                      <Input
                        size="large"
                        placeholder="Enter your last name"
                        className="rounded-xl"
                        prefix={<UserOutlined />}
                      />
                    </Form.Item>
                  </div>

                  <Form.Item label="Email Address" name="email">
                    <Input
                      size="large"
                      type="email"
                      placeholder="Enter your email address"
                      className="rounded-xl"
                      prefix={<MailOutlined />}
                    />
                  </Form.Item>

                  <Form.Item label="Phone Number" name="phone">
                    <Input
                      size="large"
                      placeholder="Enter your phone number"
                      className="rounded-xl"
                      prefix={<UserOutlined />}
                    />
                  </Form.Item>

                  <Form.Item label="Bio" name="bio">
                    <TextArea
                      rows={4}
                      placeholder="Tell us about yourself..."
                      className="rounded-xl"
                    />
                  </Form.Item>

                  <Form.Item label="Language" name="language">
                    <Select size="large" className="rounded-xl">
                      <Option value="en">English</Option>
                      <Option value="es">Spanish</Option>
                      <Option value="fr">French</Option>
                      <Option value="de">German</Option>
                    </Select>
                  </Form.Item>

                  <Form.Item label="Timezone" name="timezone">
                    <Select size="large" className="rounded-xl">
                      <Option value="est">Eastern Time (EST)</Option>
                      <Option value="cst">Central Time (CST)</Option>
                      <Option value="pst">Pacific Time (PST)</Option>
                      <Option value="gmt">Greenwich Mean Time (GMT)</Option>
                    </Select>
                  </Form.Item>

                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    icon={<SaveOutlined />}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 text-white font-semibold rounded-xl px-8 py-4 h-auto text-lg"
                  >
                    Save Profile Changes
                  </Button>
                </Form>
              </div>
            </TabPane>

            {/* Notification Settings */}
            <TabPane
              tab={
                <span className="flex items-center space-x-2">
                  <BellOutlined />
                  <span>Notifications</span>
                </span>
              }
              key="2"
            >
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Notification Preferences
                </h2>
                <Form layout="vertical" onFinish={onFinish}>
                  <div className="space-y-6">
                    {notificationSettings.map((setting, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
                      >
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {setting.label}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Receive notifications about{" "}
                            {setting.label.toLowerCase()}
                          </div>
                        </div>
                        <Form.Item
                          name={setting.name}
                          valuePropName="checked"
                          initialValue={setting.default}
                          className="mb-0"
                        >
                          <Switch />
                        </Form.Item>
                      </div>
                    ))}
                  </div>

                  <Divider />

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Notification Frequency
                    </h3>
                    <Form.Item name="notificationFrequency">
                      <Select size="large" className="rounded-xl">
                        <Option value="instant">Instant</Option>
                        <Option value="daily">Daily Digest</Option>
                        <Option value="weekly">Weekly Summary</Option>
                      </Select>
                    </Form.Item>
                  </div>

                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    icon={<SaveOutlined />}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 text-white font-semibold rounded-xl px-8 py-4 h-auto text-lg"
                  >
                    Save Notification Settings
                  </Button>
                </Form>
              </div>
            </TabPane>

            {/* Security Settings */}
            <TabPane
              tab={
                <span className="flex items-center space-x-2">
                  <LockOutlined />
                  <span>Security</span>
                </span>
              }
              key="3"
            >
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Security Settings
                </h2>
                <Form layout="vertical" onFinish={onFinish}>
                  <div className="space-y-6 mb-8">
                    <Form.Item label="Current Password" name="currentPassword">
                      <Input.Password
                        size="large"
                        placeholder="Enter current password"
                        className="rounded-xl"
                        prefix={<LockOutlined />}
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    </Form.Item>

                    <Form.Item label="New Password" name="newPassword">
                      <Input.Password
                        size="large"
                        placeholder="Enter new password"
                        className="rounded-xl"
                        prefix={<LockOutlined />}
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    </Form.Item>

                    <Form.Item
                      label="Confirm New Password"
                      name="confirmPassword"
                    >
                      <Input.Password
                        size="large"
                        placeholder="Confirm new password"
                        className="rounded-xl"
                        prefix={<LockOutlined />}
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                      />
                    </Form.Item>
                  </div>

                  <Divider />

                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Two-Factor Authentication
                  </h3>
                  <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl mb-6">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        2FA Protection
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Add an extra layer of security to your account
                      </div>
                    </div>
                    <Form.Item
                      name="twoFactorAuth"
                      valuePropName="checked"
                      className="mb-0"
                    >
                      <Switch />
                    </Form.Item>
                  </div>

                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    icon={<SafetyCertificateOutlined />}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 text-white font-semibold rounded-xl px-8 py-4 h-auto text-lg"
                  >
                    Update Security Settings
                  </Button>
                </Form>
              </div>
            </TabPane>

            {/* Privacy Settings */}
            <TabPane
              tab={
                <span className="flex items-center space-x-2">
                  <GlobalOutlined />
                  <span>Privacy</span>
                </span>
              }
              key="4"
            >
              <div className="max-w-2xl">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Privacy Settings
                </h2>
                <Form layout="vertical" onFinish={onFinish}>
                  <div className="space-y-6 mb-8">
                    {privacySettings.map((setting, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-xl"
                      >
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-white">
                            {setting.label}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            Control your {setting.label.toLowerCase()} settings
                          </div>
                        </div>
                        <Form.Item
                          name={setting.name}
                          valuePropName="checked"
                          initialValue={setting.default}
                          className="mb-0"
                        >
                          <Switch />
                        </Form.Item>
                      </div>
                    ))}
                  </div>

                  <Divider />

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      Data Export
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Download a copy of your personal data
                    </p>
                    <Button className="bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl px-6 py-3">
                      Export My Data
                    </Button>
                  </div>

                  <Divider />

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 mb-4">
                      Danger Zone
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Permanently delete your account and all associated data
                    </p>
                    <Button
                      danger
                      className="rounded-xl px-6 py-3 font-semibold"
                    >
                      Delete Account
                    </Button>
                  </div>

                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    icon={<SaveOutlined />}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0 text-white font-semibold rounded-xl px-8 py-4 h-auto text-lg"
                  >
                    Save Privacy Settings
                  </Button>
                </Form>
              </div>
            </TabPane>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
