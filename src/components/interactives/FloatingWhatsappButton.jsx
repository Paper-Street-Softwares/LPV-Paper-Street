import Modal from "../util/Modal";
import content from "../../content/content";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import whatsappWebm from "../../assets/importAssets/whatsappGif.webp";
import { getWhatsappLink } from "../util/WhatsappLink";

const whatsappContactLink = `${content.texts.links.ctaWhatsapp}`;

const FloatingWhatsappButton = ({ buttonType, animation = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;

      setIsVisible(scrollTop > 100); // Aparece após rolar 100px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    if (buttonType === "form") {
      setOpenModal(!openModal);
    } else {
      const link = getWhatsappLink();
      window.open(link, "_blank");
    }
  };

  return (
    <button
     className={`fixed bottom-2 right-3 p-4 z-20 rounded-full focus:outline-none transition-all duration-300
    ${isVisible ? "opacity-100 translate-y-0 z-30" : "opacity-0 translate-y-4 pointer-events-none"}`}
  onClick={handleClick}
    >
      {openModal ? null : (
        <img
          className={`w-16 transition focus:outline-none hover:scale-110 ${
            animation ? "animate-pulseScale" : ""
          }`}
          src={whatsappWebm}
          alt="Floating Button"
          width="64"
          height="64"
        />
      )}
      {buttonType === "form" && (
        <Modal isOpen={openModal} setCloseModal={setOpenModal} />
      )}
    </button>
  );
};

export default FloatingWhatsappButton;
