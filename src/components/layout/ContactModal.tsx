import messageErrorSvg from "../../assets/Message.svg?url";
import messageSuccessSvg from "../../assets/Message1.svg?url";
import { useEffect } from "react";
import Button from "../ui/Button"; 

type ModalType = "success" | "error" | null;

export default function ContactModal({
  type,
  onClose,
}: {
  type: ModalType;
  onClose: () => void;
}) {
  const isSuccess = type === "success";

  useEffect(() => {
    if (!type) return; 
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [type]); 

  
  if (!type) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800 
                   rounded-xl w-full max-w-md overflow-hidden shadow-2xl"
      >
        <div className="bg-neutral-900 dark:bg-neutral-950 p-6 md:p-8 flex justify-center">
          <img
            src={isSuccess ? messageSuccessSvg : messageErrorSvg}
            alt="message status"
            className="w-24 h-24 md:w-28 md:h-28"
          />
        </div>

        <div className="p-6 md:p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold text-black dark:text-white mb-3">
            {isSuccess ? "Message Received!" : "Oops! Something went wrong."}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-6">
            {isSuccess
              ? "Thanks for reaching out - we'll get back to you as soon as possible"
              : "We couldn't send your message. Please try again or check your connection"}
          </p>

          <Button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 
                       text-white font-medium rounded-full py-3 transition"
          >
            {isSuccess ? "Back to Home" : "Try Again"}
          </Button>
        </div>
      </div>
    </div>
  );
}
