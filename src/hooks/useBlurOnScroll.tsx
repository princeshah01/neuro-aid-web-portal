// useBlurOnScroll.js
import { useEffect, useState } from "react";

const useBlurOnScroll = () => {
  const [blurNav, setBlurNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBlurNav(true);
      } else {
        setBlurNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check on mount
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return blurNav;
};

export default useBlurOnScroll;
