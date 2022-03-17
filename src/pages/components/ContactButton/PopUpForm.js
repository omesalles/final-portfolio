import React from "react";
import "./PopUpForm.css";

export function PopUpForm({ show, handleClose }) {
  let popUpFormStyle = { display: show ? "block" : "none" };
  return (
    <div className="form-popup" style={popUpFormStyle}>
      <form
        action="https://formcarry.com/s/ITNanLeCu0j"
        className="form-container"
        target="_blank"
        method="POST"
        acceptCharset="UTF-8"
      >
        <input type="text" placeholder="Enter Email" name="email" required />
        <input type="text" placeholder="Enter your name" name="name" />
        <textarea
          name="txtMessage"
          rows="4"
          placeholder="Add your message"
        ></textarea>
        <button type="submit" className="btn" onClick={handleClose}>
          Send me a message
        </button>
        <button type="button" className="btn cancel" onClick={handleClose}>
          Close
        </button>
      </form>
    </div>
  );
}
