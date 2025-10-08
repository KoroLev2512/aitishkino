"use client";

import type React from "react";
import { useEffect } from "react";
import styles from "./VideoPopup.module.css";
import { X } from "lucide-react";

interface VideoPopupProps {
  videoUrl: string;
  studentName: string;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoPopup: React.FC<VideoPopupProps> = ({
  videoUrl,
  studentName,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Закрыть"
        >
          <X size={24} />
        </button>
        <div className={styles.videoContainer}>
          <h3 className={styles.title}>Проект ученика: {studentName}</h3>
          <div className={styles.videoWrapper}>
            <video
              src={videoUrl}
              controls
              autoPlay
              preload="metadata"
              className={styles.video}
            >
              Ваш браузер не поддерживает видео.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};
