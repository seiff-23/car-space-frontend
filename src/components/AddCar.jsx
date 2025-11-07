import React, { useState } from "react";
import {
  Modal,
  Button,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addCar } from "../JS/Actions/carActions";

const { TextArea } = Input;

const AddCar = () => {
  const dispatch = useDispatch();
  const [newCar, setNewCar] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (eOrValue, name) => {
    if (typeof eOrValue === "object" && eOrValue?.target) {
      const { name, value } = eOrValue.target;
      setNewCar((prev) => ({ ...prev, [name]: value }));
    } else {
      setNewCar((prev) => ({ ...prev, [name]: eOrValue }));
    }
  };

  const handleSubmit = () => {
    dispatch(addCar(newCar));
    handleCancel();
  };

  return (
    <>
      <Button
        className="my-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 border-0"
        type="primary"
        onClick={showModal}
        icon={<PlusOutlined />}
      >
        Add New Car
      </Button>

      <Modal
        title={
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Add New Car
            </div>
            <div className="text-gray-500 text-sm mt-1">
              Fill in the car details below
            </div>
          </div>
        }
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleSubmit}
        onCancel={handleCancel}
        width={700}
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
                name="make"
                placeholder="BMW, Audi, Mercedes..."
                onChange={handleInputChange}
                className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500"
              />
            </Form.Item>

            <Form.Item label="Model" className="mb-0">
              <Input
                name="model"
                placeholder="X6, A4, C-Class..."
                onChange={handleInputChange}
                className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500"
              />
            </Form.Item>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Year" className="mb-0">
              <InputNumber
                onChange={(value) => handleInputChange(value, "year")}
                className="w-full rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500"
                placeholder="2024"
              />
            </Form.Item>

            <Form.Item label="Price ($)" className="mb-0">
              <InputNumber
                onChange={(value) => handleInputChange(value, "price")}
                className="w-full rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500"
                placeholder="50000"
              />
            </Form.Item>
          </div>

          <Form.Item label="Description" className="mb-0">
            <TextArea
              name="description"
              rows={3}
              onChange={handleInputChange}
              placeholder="Describe the car features, condition, and specifications..."
              className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500"
            />
          </Form.Item>

          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Color" className="mb-0">
              <Input
                name="color"
                placeholder="Black, White, Red..."
                onChange={handleInputChange}
                className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500"
              />
            </Form.Item>

            <Form.Item label="Image URL" className="mb-0">
              <Input
                name="picture"
                placeholder="https://example.com/car-image.jpg"
                onChange={handleInputChange}
                className="rounded-lg border-gray-300 hover:border-blue-400 focus:border-blue-500"
              />
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default AddCar;
