"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./StartupVideoIntro.module.css";

export function StartupVideoIntro() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const dismissIntro = useCallback(() => {
    setIsFadingOut(true);
    document.body.style.overflow = "";

    // Clear any pending fallback timers
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    // Allow fade animation to complete before removing from DOM
    setTimeout(() => {
      setIsVisible(false);
    }, 700);
  }, []);

  useEffect(() => {
    // Only lock scroll while active
    document.body.style.overflow = "hidden";

    // Play video programmatically if autoplay was throttled
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // If browser blocks autoplay even when muted, dismiss gracefully
      });
    }

    // Fallback safety: auto-dismiss after 10s if ended event doesn't fire
    timerRef.current = setTimeout(() => {
      dismissIntro();
    }, 10000);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        dismissIntro();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [dismissIntro]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-label="Glorious Academy Startup Intro"
      aria-modal="true"
      className={`${styles.overlay} fixed inset-0 z-[99999] bg-black flex items-center justify-center overflow-hidden transition-opacity duration-700 ease-out ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Fullscreen Video */}
      <video
        ref={videoRef}
        src="/images/galogo_animated.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={dismissIntro}
        className={`${styles.video} w-full h-full object-cover`}
      />

      {/* Discreet Skip Button in Top-Right Corner */}
      <button
        type="button"
        onClick={dismissIntro}
        className={`${styles.skip} absolute top-5 right-5 z-20 px-4 py-2 rounded-full bg-black/60 hover:bg-black/85 text-white/90 hover:text-white text-xs font-semibold tracking-wider uppercase backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer shadow-lg hover:scale-105`}
        aria-label="Skip video intro"
      >
        Skip Intro ✕
      </button>

      {/* Subtle indicator hint at bottom */}
      <div className={`${styles.hint} absolute bottom-6 inset-x-0 text-center pointer-events-none z-10`}>
        <span className={`${styles.hintText} text-[11px] text-white/40 tracking-widest uppercase font-medium`}>
          <span className={styles.desktopHint}>Press Esc or tap Skip to continue</span>
          <span className={styles.mobileHint}>Tap Skip to continue</span>
        </span>
      </div>
    </div>
  );
}
