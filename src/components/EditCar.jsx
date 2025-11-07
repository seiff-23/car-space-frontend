import React, { useEffect, useState } from "react";
import {
  Button,
  Modal,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Rate,
  Upload,
} from "antd";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { editCar } from "../JS/Actions/carActions";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const EditCar = ({ car }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedCar, setUpdatedCar] = useState(car);
  const dispatch = useDispatch();

  useEffect(() => {
    if (car) {
      setUpdatedCar(car);
    }
  }, [car]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (eOrName, value) => {
    if (typeof eOrName === "object" && eOrName?.target) {
      const { name, value } = eOrName.target;
      setUpdatedCar((prev) => ({ ...prev, [name]: value }));
    } else {
      const name = eOrName;
      setUpdatedCar((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleEditCar = (e) => {
    e.preventDefault();
    dispatch(editCar(car._id, updatedCar));
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        onClick={showModal}
        icon={<EditOutlined />}
        className="bg-green-500 hover:bg-green-600 border-green-500 hover:border-green-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Edit Car
      </Button>

      <Modal
        title={
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Edit Car Details
            </div>
            <div className="text-gray-500 text-sm mt-1">
              Update the car information
            </div>
          </div>
        }
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleEditCar}
        onCancel={handleCancel}
        width={700}
        okText="Update Car"
        styles={{
          body: { padding: "20px" },
          header: { borderBottom: "1px solid #e8e8e8", padding: "20px" },
        }}
      >
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          layout="horizontal"
          className="space-y-4"
        >
          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Make" className="mb-0">
              <Input
                value={updatedCar.make}
                name="make"
                onChange={handleInputChange}
                className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500"
              />
            </Form.Item>

            <Form.Item label="Model" className="mb-0">
              <Input
                value={updatedCar.model}
                name="model"
                onChange={handleInputChange}
                className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500"
              />
            </Form.Item>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Image URL" className="mb-0">
              <Input
                value={updatedCar.image}
                name="picture"
                onChange={handleInputChange}
                className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500"
              />
            </Form.Item>

            <Form.Item label="Year" className="mb-0">
              <DatePicker
                picker="year"
                name="year"
                onChange={(date, dateString) =>
                  handleInputChange("year", dateString)
                }
                className="w-full rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500"
              />
            </Form.Item>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Price ($)" className="mb-0">
              <InputNumber
                value={updatedCar.price}
                onChange={(value) => handleInputChange("price", value)}
                className="w-full rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500"
              />
            </Form.Item>

            <Form.Item label="Color" className="mb-0">
              <ColorPicker
                value={updatedCar.color}
                picker="color"
                onChange={(color, hex) => handleInputChange("color", hex)}
                className="rounded-lg"
              />
            </Form.Item>
          </div>

          <Form.Item label="Description" className="mb-0">
            <TextArea
              name="description"
              onChange={handleInputChange}
              rows={4}
              value={updatedCar.description}
              className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500"
            />
          </Form.Item>

          <Form.Item label="Rating" className="mb-0">
            <Rate
              value={updatedCar.rating}
              onChange={(value) => handleInputChange("rating", value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditCar;
