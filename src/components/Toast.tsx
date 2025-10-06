import { useEffect } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
  onClose: () => void;
}

const bgColors = {
  success: "",
  error: "bg-red-600",
  info: "bg-blue-600",
};

const Toast: React.FC<ToastProps> = ({
  message,
  type = "success",
  duration = 5000,
  onClose,
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div
      className={`fixed bottom-5 right-5 text-white px-5 py-3 rounded-lg shadow-lg z-50 animate-slide-in ${
        type !== "success" ? bgColors[type] : ""
      }`}
      style={type === "success" ? { backgroundColor: "#0D9488" } : {}}
    >
      {message}
    </div>
  );
};

export default Toast;
