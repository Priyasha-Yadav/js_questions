import { useEffect, useRef } from "react";
import "./modal.css";

export function Modal({ isOpen, onClose }) {
    const modalRef = useRef(null);

    // Close on ESC key
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    // Close on outside click
    const handleOverlayClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onMouseDown={handleOverlayClick}>
            <div className="modal-content" ref={modalRef}>
                <button className="modal-close" onClick={onClose}>
                    ✕
                </button>
                <h2>Reusable Modal</h2>
                <p>This modal closes on ESC, outside click, or button click.</p>
            </div>
        </div>
    );
}
