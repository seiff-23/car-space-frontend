import React, { useState } from "react";
import { Button, Modal } from "antd";
import { DeleteOutlined, ExclamationCircleFilled } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteCar } from "../JS/Actions/carActions";

const DeleteCar = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    dispatch(deleteCar(id));
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button
        danger
        onClick={showModal}
        icon={<DeleteOutlined />}
        className="bg-red-500 hover:bg-red-600 border-red-500 hover:border-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Delete
      </Button>

      <Modal
        title={
          <div className="flex items-center gap-3 text-red-600">
            <ExclamationCircleFilled className="text-xl" />
            <span className="text-xl font-bold">Confirm Deletion</span>
          </div>
        }
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleOk}
        okType="danger"
        onCancel={handleCancel}
        okText="Yes, Delete"
        cancelText="Cancel"
        width={500}
        styles={{
          body: { padding: "24px" },
          header: { borderBottom: "1px solid #f0f0f0", padding: "16px 24px" },
        }}
      >
        <div className="text-center py-4">
          <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 mb-4">
            <ExclamationCircleFilled className="text-4xl text-red-500 mb-3" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Are you sure you want to delete this car?
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              This action cannot be undone. All car data will be permanently
              removed from the system.
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteCar;
