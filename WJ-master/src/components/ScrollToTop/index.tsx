import { useEffect, useState } from "react";
import { FaArrowUp, FaPhone, FaWhatsapp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Toggle visibility based on scroll position
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[999]">
      {/* Scroll to top button */}
      {/* {isVisible && (
        <div
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="back-to-top flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-primary text-white shadow-md transition duration-300 ease-in-out hover:bg-dark"
        >
          <FaArrowUp />
        </div>
      )} */}
      {/* Call icon */}
      <div className="mt-2  flex flex-col items-center justify-center space-y-2">
        <a href="tel:+1234567890">
          <div className="icon-circle mr-2 rounded-full bg-primary p-2 text-white">
            <FaPhone />
          </div>
        </a>
        <a href="https://wa.me/+917983127644">
          <div className="icon-circle mr-2 rounded-full bg-primary p-2 text-white">
            <FaWhatsapp />
          </div>
        </a>
      </div>
    </div>
  );
}
