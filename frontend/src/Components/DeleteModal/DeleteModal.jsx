import React from "react";
import ReactDOM from "react-dom";

import "./DeleteModal.css";

export default function DeleteModal({ submit, cancel, title }) {
  return ReactDOM.createPortal(
    <div className="modal-parent active">
      <div className="delete-modal">
        <h1>{title}</h1>
        <div className="delete-modal-btns">
          <button
            className="delete-table-btn delete-modal-accept-btn"
            onClick={() => submit()}
          >
            بله
          </button>
          <button
            className="delete-table-btn delete-modal-reject-btn"
            onClick={() => cancel()}
          >
            خیر
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
