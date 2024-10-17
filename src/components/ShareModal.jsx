import { useState } from "react";

function ShareModal({ onclose }) {
  const listUrl = window.location.href;

  function handleClose() {
    onclose();
  }
  function handleCopyLink() {
    navigator.clipboard.writeText(listUrl);
  }
  return (
    <div className="share-modal__background">
      <div className="share-modal">
        <button onClick={handleClose} className="share-modal__close">
          <i className=" share-modal__close-icon fa-solid fa-xmark"></i>
        </button>
        <div className="share-modal__title">Share your list</div>
        <p className="share-modal__desc">
          Copy the link below to share this list with anyone you want.
        </p>
        <div className="share-modal__link">
          <input
            disabled
            className="share-modal__input"
            type="text"
            value={listUrl}
          />

          <button onClick={handleCopyLink} className="share-modal__button">
            <i className="fa-solid fa-link"> </i> Copy Link
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShareModal;
