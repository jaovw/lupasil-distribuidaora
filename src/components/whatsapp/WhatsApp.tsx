import React from "react";
import "./WhatsApp.css";
import whatsapp from "../../assets/whatsapp_icon.png";

interface WhatsAppProps {
  number: string;
  text?: string;
}

const WhatsApp: React.FC<WhatsAppProps> = ({
  number,
  text = "Olá! Gostaria de solicitar um orçamento.",
}) => {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${number}?text=${text}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="whatsapp-container">
      <button
        onClick={handleClick}
        className="whatsapp-button"
        title={`Conversar com ${number}`}
      >
        <img src={whatsapp} alt="WhatsApp Icon" />
      </button>
    </div>
  );
};

export default WhatsApp;
