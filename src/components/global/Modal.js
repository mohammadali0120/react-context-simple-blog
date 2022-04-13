import React from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";

const GlobalModal = ({
  isModalOpen,
  closeModal,
  onConfirm,
  body,
  confirmText,
  cancelText,
}) => {
  if (!isModalOpen) return null;
  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} onClick={closeModal}></div>
      <div className={styles.modal + " p-4 rounded-md"}>
        <div className="flex justify-between mb-6">
          <h1 className="font-bold text-xl ">{body}</h1>
        </div>
        <div className="flex justify-between">
          <div className="w-1/2">
            <button
              className="w-full py-1 text-[#ff3333] font-bold rounded-md rounded-r-none"
              onClick={onConfirm}
            >
              {confirmText}
            </button>
          </div>
          <div className="w-1/2">
            <button
              className="w-full py-1 text-[#ffd940] font-bold rounded-md rounded-l-none"
              onClick={closeModal}
            >
              {cancelText}
            </button>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default GlobalModal;
