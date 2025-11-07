import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearSuccessCar } from "../JS/Actions/carActions";
import { CheckCircleFilled, InfoCircleFilled } from "@ant-design/icons";

const SuccessNotif = ({ success }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (success?.msg) {
      const toastConfig = {
        toastId: "success-toast",
        className: "custom-toast success-toast",
        icon: <CheckCircleFilled className="text-green-500 text-xl" />,
      };

      if (success.type === "info") {
        toast.info(
          <div className="flex items-center space-x-3">
            <InfoCircleFilled className="text-blue-500 text-xl" />
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">
                Information
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                {success.msg}
              </div>
            </div>
          </div>,
          {
            ...toastConfig,
            icon: <InfoCircleFilled className="text-blue-500 text-xl" />,
          }
        );
      } else {
        toast.success(
          <div className="flex items-center space-x-3">
            <CheckCircleFilled className="text-green-500 text-xl" />
            <div>
              <div className="font-semibold text-gray-900 dark:text-white">
                Success!
              </div>
              <div className="text-gray-700 dark:text-gray-300">
                {success.msg}
              </div>
            </div>
          </div>,
          toastConfig
        );
      }

      const timeout = setTimeout(() => {
        dispatch(clearSuccessCar());
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [success, dispatch]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        draggable
        draggablePercent={60}
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
          minHeight: "70px",
        }}
        progressStyle={{
          background: "linear-gradient(90deg, #10B981, #34D399)",
          height: "3px",
        }}
      />
    </>
  );
};

export default SuccessNotif;
