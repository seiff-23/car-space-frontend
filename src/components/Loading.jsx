import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Loading = ({ size = "large", text = "Loading..." }) => {
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: size === "large" ? 48 : size === "small" ? 24 : 32,
        color: "#3b82f6",
      }}
      spin
    />
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <div className="relative">
        <Spin indicator={antIcon} />
        {/* Pulsing background effect */}
        <div
          className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping"
          style={{
            top: "25%",
            left: "25%",
            right: "25%",
            bottom: "25%",
          }}
        />
      </div>

      <div className="text-center space-y-2">
        <div className="text-lg font-semibold text-gray-700 dark:text-gray-300 animate-pulse">
          {text}
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Please wait while we process your request
        </div>
      </div>

      {/* Progress bar */}
      <div className="w-48 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-[loading_1.5s_ease-in-out_infinite]"
          style={{
            width: "60%",
            animation: "loading 1.5s ease-in-out infinite",
          }}
        />
      </div>
    </div>
  );
};

// Alternative loading component with dots
export const LoadingDots = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] space-y-4">
      <div className="flex space-x-2">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="h-3 w-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-bounce"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationDuration: "0.6s",
            }}
          />
        ))}
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
        Loading content...
      </div>
    </div>
  );
};

// Skeleton loading component
export const SkeletonLoader = ({ count = 3 }) => {
  return (
    <div className="space-y-4 animate-pulse">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="flex space-x-4">
          <div className="w-20 h-20 bg-gray-300 dark:bg-gray-700 rounded-xl" />
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />
            <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-1/2" />
            <div className="h-3 bg-gray-300 dark:bg-gray-700 rounded w-2/3" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
