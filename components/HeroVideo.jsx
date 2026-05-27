"use client";

import { useEffect, useRef } from "react";

const VIDEO_SRC = "/assets/videos/hero-vid.mp4";
const POSTER_SRC = "/assets/images/venue.jpeg";

/**
 * Performant above-the-fold hero background video.
 * Uses native poster + black underlay to avoid green flash on load.
 */
export default function HeroVideo({ className = "" }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const saveData = navigator.connection?.saveData;

    if (motionQuery.matches || saveData) {
      video.pause();
      return;
    }

    const play = () => {
      video.play().catch(() => {});
    };

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(play, { timeout: 1200 });
      return () => window.cancelIdleCallback(id);
    }

    const timer = setTimeout(play, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden bg-black ${className}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 size-full object-cover"
        src={VIDEO_SRC}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={POSTER_SRC}
        disablePictureInPicture
        disableRemotePlayback
        aria-hidden
      />
    </div>
  );
}
