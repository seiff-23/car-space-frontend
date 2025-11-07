import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearErrorsCar } from "../JS/Actions/carActions";
import {
  CloseCircleFilled,
  CheckCircleFilled,
  ExclamationCircleFilled,
} from "@ant-design/icons";

const ErrorNotif = ({ error }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (error && error.msg) {
      toast.error(
        <div className="flex items-center space-x-3">
          <CloseCircleFilled className="text-red-500 text-xl" />
          <div>
            <div className="font-semibold text-gray-900 dark:text-white">
              Error
            </div>
            <div className="text-gray-700 dark:text-gray-300">{error.msg}</div>
          </div>
        </div>,
        {
          toastId: "error-toast",
          className: "custom-toast error-toast",
        }
      );

      const timeout = setTimeout(() => {
        dispatch(clearErrorsCar());
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [error, dispatch]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        draggable
        theme="colored"
        limit={3}
        style={{
          marginTop: "70px",
        }}
        toastStyle={{
          borderRadius: "12px",
          boxShadow:
            "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
        }}
      />
    </>
  );
};

export default ErrorNotif;
