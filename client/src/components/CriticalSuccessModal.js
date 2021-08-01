import React from "react";
import "./Modal.css";

function CriticalSuccessModal({ closeModal }) {
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-close-button">
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className="modal-title">
          <h1>Congrats!</h1>
        </div>
        <div className="modal-body">
          <h1>Critical Success!!!</h1>
        </div>
        <div className="modal-footer">
          <p>"Insert Quote Here"</p>
        </div>
      </div>
    </div>
  );
}

export default CriticalSuccessModal;
