import icTop from "../../assets/images/icon/ic_top.svg";
import { useEffect, useState } from "react";

interface ScrollToTopButtonProps {
  className?: string;
}

const ScrollToTopButton = ({ className }: ScrollToTopButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      className={`scroll-to-top-button ${className || ""}`}
    >
      <img src={icTop} alt=""/>
    </button>
  );
};

export default ScrollToTopButton;