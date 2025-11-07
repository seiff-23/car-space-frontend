import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FloatButton } from "antd";
import { VerticalAlignTopOutlined } from "@ant-design/icons";

const ScrollToTop = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-in-out-cubic",
    });

    // Refresh AOS when route changes
    AOS.refresh();

    // Add scroll event listener
    window.addEventListener("scroll", toggleVisibility);

    // Scroll to top on route change with smooth animation
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [location.pathname]);

  return (
    <>
      {isVisible && (
        <FloatButton.BackTop
          visibilityHeight={300}
          onClick={scrollToTop}
          className="!bottom-20 !right-8"
          icon={<VerticalAlignTopOutlined className="text-white" />}
          type="primary"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            border: "none",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)",
            width: "50px",
            height: "50px",
            transition: "all 0.3s ease",
          }}
        />
      )}
    </>
  );
};

export default ScrollToTop;
