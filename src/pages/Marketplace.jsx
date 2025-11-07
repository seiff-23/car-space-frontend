import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarCard from "../components/CarCard";
import { getAllCars } from "../JS/Actions/carActions";
import AddCar from "../components/AddCar";
import Loading from "../components/Loading";
import { Input, Select, Button, Row, Col, Card } from "antd";
import {
  SearchOutlined,
  FilterOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";

const { Search } = Input;
const { Option } = Select;

const Marketplace = () => {
  const cars = useSelector((state) => state.CarReducer.cars);
  const loading = useSelector((state) => state.CarReducer.load);
  const isAdmin = useSelector((state) => state.AuthReducer.user?.isAdmin);
  const dispatch = useDispatch();

  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    dispatch(getAllCars());
  }, []);

  useEffect(() => {
    if (cars) {
      const filtered = cars.filter(
        (car) =>
          car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
          car.color.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCars(filtered);
    }
  }, [cars, searchTerm]);

  const sortOptions = [
    { label: "Price: Low to High", value: "price_asc" },
    { label: "Price: High to Low", value: "price_desc" },
    { label: "Year: Newest First", value: "year_desc" },
    { label: "Year: Oldest First", value: "year_asc" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Car Marketplace
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Discover your perfect vehicle from our curated collection of premium
            cars. Find the best deals and latest models all in one place.
          </p>
        </div>

        {/* Controls Section */}
        <Card className="rounded-2xl shadow-xl border-0 bg-white dark:bg-gray-800 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <Search
                placeholder="Search cars by make, model, or color..."
                allowClear
                size="large"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="rounded-xl"
                prefix={<SearchOutlined className="text-gray-400" />}
              />
            </div>

            {/* Filters and View Controls */}
            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <Select
                placeholder="Sort by"
                size="large"
                className="min-w-[160px] rounded-xl"
                suffixIcon={<FilterOutlined />}
              >
                {sortOptions.map((option) => (
                  <Option key={option.value} value={option.value}>
                    {option.label}
                  </Option>
                ))}
              </Select>

              {/* View Mode Toggle */}
              <div className="flex bg-gray-100 dark:bg-gray-700 rounded-xl p-1">
                <Button
                  type={viewMode === "grid" ? "primary" : "text"}
                  icon={<AppstoreOutlined />}
                  onClick={() => setViewMode("grid")}
                  className={`rounded-lg ${
                    viewMode === "grid" ? "bg-blue-500 border-blue-500" : ""
                  }`}
                />
                <Button
                  type={viewMode === "list" ? "primary" : "text"}
                  icon={<UnorderedListOutlined />}
                  onClick={() => setViewMode("list")}
                  className={`rounded-lg ${
                    viewMode === "list" ? "bg-blue-500 border-blue-500" : ""
                  }`}
                />
              </div>

              {/* Add Car Button for Admin */}
              {isAdmin && <AddCar />}
            </div>
          </div>

          {/* Quick Filter Chips */}
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            {["All", "Luxury", "SUV", "Sports", "Electric", "German"].map(
              (filter) => (
                <Button
                  key={filter}
                  type="text"
                  className={`rounded-full px-4 py-1 text-sm font-medium transition-all duration-300 ${
                    filter === "All"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {filter}
                </Button>
              )
            )}
          </div>
        </Card>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Showing{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {filteredCars.length}
            </span>{" "}
            cars
            {searchTerm && (
              <span>
                {" "}
                for "
                <span className="font-semibold text-gray-900 dark:text-white">
                  {searchTerm}
                </span>
                "
              </span>
            )}
          </p>
        </div>

        {/* Cars Grid/List */}
        <div
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-6"
          }`}
        >
          {loading ? (
            <div className="col-span-full flex justify-center py-12">
              <Loading />
            </div>
          ) : filteredCars.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4">🚗</div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  No cars found
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {searchTerm
                    ? `No results found for "${searchTerm}". Try adjusting your search terms.`
                    : "No cars available in the marketplace at the moment."}
                </p>
                {searchTerm && (
                  <Button
                    type="primary"
                    onClick={() => setSearchTerm("")}
                    className="bg-blue-500 hover:bg-blue-600 border-0 rounded-xl"
                  >
                    Clear Search
                  </Button>
                )}
              </div>
            </div>
          ) : (
            filteredCars.map((car) => (
              <CarCard key={car._id} car={car} viewMode={viewMode} />
            ))
          )}
        </div>

        {/* Load More Button */}
        {filteredCars.length > 0 && (
          <div className="text-center mt-12">
            <Button
              size="large"
              className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl px-8 py-4 h-auto text-lg shadow-lg transition-all duration-300"
            >
              Load More Cars
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketplace;
