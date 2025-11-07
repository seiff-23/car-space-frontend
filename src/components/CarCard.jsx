import React from "react";
import { Link, useNavigate } from "react-router-dom";
import EditCar from "./EditCar";
import DeleteCar from "./DeleteCar";
import { useSelector } from "react-redux";
import { Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";

const CarCard = ({ car }) => {
  const navigate = useNavigate();
  const isAdmin = useSelector((state) => state.AuthReducer.user?.isAdmin);

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 dark:border-gray-700">
      <div className="relative overflow-hidden">
        <img
          onClick={() => navigate(`/car_description/${car._id}`)}
          alt={car.make}
          src={car.picture}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
        />
        <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-semibold backdrop-blur-sm">
          ${car.price.toLocaleString()}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
              {car.make}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 font-medium">
              {car.model}
            </p>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            {car.year}
          </span>
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100 dark:border-gray-600">
          {isAdmin ? (
            <div className="flex space-x-2">
              <EditCar car={car} />
              <DeleteCar id={car._id} />
            </div>
          ) : (
            <Button
              onClick={() => navigate(`/car_description/${car._id}`)}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 border-0 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              icon={<EyeOutlined />}
            >
              View Details
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarCard;
