import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneCar } from "../JS/Actions/carActions";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Tag } from "antd";
import { ArrowLeftOutlined, StarFilled } from "@ant-design/icons";

const CarDescription = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const car = useSelector((state) => state.CarReducer.car);

  useEffect(() => {
    dispatch(getOneCar(id));
  }, []);

  const features = [
    { name: "Manufacturer", description: car.make, icon: "🏭" },
    { name: "Model", description: car.model, icon: "🚗" },
    { name: "Color", description: car.color, icon: "🎨" },
    { name: "Year", description: car.year, icon: "📅" },
    {
      name: "Price",
      description: `$ ${car.price?.toLocaleString()}`,
      icon: "💰",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-8">
      <div className="container mx-auto px-4">
        <Button
          onClick={() => navigate(-1)}
          className="mb-6 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl shadow-sm transition-all duration-300 transform hover:-translate-x-1"
          icon={<ArrowLeftOutlined />}
        >
          Back to Cars
        </Button>

        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                    {car.make} {car.model}
                  </h1>
                  <Tag
                    color="blue"
                    className="text-sm font-semibold py-1 px-3 rounded-full"
                  >
                    {car.year}
                  </Tag>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center bg-yellow-50 dark:bg-yellow-900/20 px-3 py-1 rounded-full">
                    <StarFilled className="text-yellow-500 mr-1" />
                    <span className="text-sm font-semibold text-yellow-700 dark:text-yellow-400">
                      4.8
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    ${car.price?.toLocaleString()}
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {car.description ||
                  "A premium vehicle offering exceptional performance, luxury features, and outstanding reliability. This car combines style with functionality for an unparalleled driving experience."}
              </p>

              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <span>📋</span> Vehicle Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 px-4 bg-white dark:bg-gray-600 rounded-xl shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{feature.icon}</span>
                        <span className="font-medium text-gray-700 dark:text-gray-300">
                          {feature.name}
                        </span>
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {feature.description}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center">
              <div className="relative group">
                <img
                  alt={`${car.make} ${car.model}`}
                  src={car.picture}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      Ready for Test Drive
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Contact us to schedule your appointment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDescription;
