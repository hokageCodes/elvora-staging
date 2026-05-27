"use client";

/**
 * Elvora — Cinematic landing page
 * GSAP ScrollTrigger + Lenis smooth scroll + shadcn/ui
 */

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "@studio-freight/lenis";
import { Button } from "@/components/ui/button";
import HeroVideo from "@/components/HeroVideo";
import ScrollNav from "@/components/ScrollNav";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ─── Section imagery (local assets in /public/assets/images) ─────────────────
const IMAGES = {
  philosophy: "/assets/images/director.jpg",
  corporate: "/assets/images/btl.jpg",
  lifestyle: "/assets/images/ev.jpg",
  intimate: "/assets/images/venue.jpeg",
  wedding: "/assets/images/venue.jpeg",
  social: "/assets/images/ev.jpg",
  creative: "/assets/images/director.jpg",
  cta: "/assets/images/venue.jpeg",
  founder: "/assets/images/director.jpg",
};

const ABOUT_STATEMENT = [
  [
    { accent: true, text: "We partner" },
    {
      accent: false,
      text: " with you to create moments you'll look back on and say,",
    },
  ],
  [{ accent: true, text: "\u201CThat was everything\u2014and more.\u201D" }],
  [
    { accent: true, text: "We partner" },
    {
      accent: false,
      text: " so every celebration feels effortless, exceptional, and entirely yours.",
    },
  ],
];

const FOUNDER_PARAGRAPHS = [
  "Elvora was born from a quiet belief that the most unforgettable moments in life are made in the details — the way a room feels when you walk in, the hush before a toast, the joy that lingers long after the last song.",
  "I wanted to build more than a planning company. I wanted to create a space where events are designed with intention, executed with care, and filled with meaning where every element feels like a reflection of something true.",
  "For me, it is never just about timelines or table settings. It is about creating experiences where people feel seen, celebrated, and surrounded by beauty. Whether it is a wedding, a corporate gathering, or an intimate milestone, we approach each one with the same heart as if it were our own.",
  "Elvora is more than an event planning company; it is a luxury experience curator. By blending strategic planning, creative excellence, and meticulous execution, we proudly position ourselves as the premier choice for high-end events in Nigeria and beyond.",
  "Thank you for trusting us with your moments. We are honored to shape them with care.",
];

const SERVICES = [
  {
    category: "Wedding",
    description:
      "Bespoke, beautiful, and completely you. We craft timeless wedding experiences from the heart.",
    image: IMAGES.wedding,
  },
  {
    category: "Corporate Experiences",
    description:
      "From product launches to leadership retreats to end-of-year celebrations, we design with your audience in mind, delivering polished, engaging events that elevate your brand.",
    image: IMAGES.corporate,
  },
  {
    category: "Social Celebrations",
    description:
      "From stylish brunches to unforgettable birthday celebrations to celebration of life, we create moments that reflect your energy and vision.",
    image: IMAGES.social,
  },
  {
    category: "Creative Direction",
    description:
      "We craft visual worlds that communicate your message — from moodboards to set design and production consulting.",
    image: IMAGES.creative,
  },
];

const PROJECTS = [
  {
    title: "Uber X Elvora",
    category: "Road Safety Campaign",
    description: [
      "Uber reached out. One week to design. One clear theme - road safety.",
    ],
    credits: "Conceptualisation, Event styling, Event planning & Production: @by.elvora",
    video: "/assets/videos/lagos--road.mp4",
  },
  {
    title: "Birthday",
    category: "Private Celebration",
    description: [
      "An intimate, story-driven dinner and Murder Mystery birthday soiree thoughtfully curated for our client.",
      "Every detail was designed to feel personal, intentional and beautifully immersive.",
      "A perfect blend of elegance and intrigue.",
    ],
    credits: "Event styling & event planning: @by.elvora",
    video: "/assets/videos/hero-vid.mp4",
  },
  {
    title: "BTL X Elvora",
    category: "Innovation Launch",
    description: [
      "From vision to venue, every detail was curated to mirror what's next.",
      "With 30 years of continuous innovation, BTL stands among the world's leading manufacturers of aesthetic equipment, with direct offices in over 80 countries. Now, with great pride, we have welcomed them to Nigeria and had the honour of launching their innovation in this new space.",
      "The Future, Unboxed.",
    ],
    credits: "Conceptualisation, Event styling, Event planning & Production: @by.elvora",
    video: "/assets/videos/elvora-btl.mp4",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Elvora didn't just plan our event—they gave us a memory that still feels like a dream.",
    name: "Adaeze O.",
    event: "Private celebration",
  },
  {
    quote:
      "Every detail felt considered. Our guests are still talking about the atmosphere months later.",
    name: "James M.",
    event: "Corporate launch",
  },
  {
    quote:
      "They transformed a corporate launch into something genuinely moving. Exceptional craft.",
    name: "Priya K.",
    event: "Brand experience",
  },
];

// ─── Main page component ─────────────────────────────────────────────────────
export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  // Hero refs
  const heroRef = useRef<HTMLElement>(null);
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroSubtitleRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  // About refs
  const philosophyRef = useRef<HTMLElement>(null);
  const aboutStatementRef = useRef<HTMLDivElement>(null);
  const aboutLineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const aboutSplitRef = useRef<HTMLDivElement>(null);
  const aboutSlashRef = useRef<HTMLDivElement>(null);
  const aboutSplitLeftRef = useRef<HTMLDivElement>(null);
  const aboutSplitRightRef = useRef<HTMLDivElement>(null);

  // Founder's note refs
  const founderRef = useRef<HTMLElement>(null);
  const founderPortraitRef = useRef<HTMLDivElement>(null);
  const founderPortraitImgRef = useRef<HTMLDivElement>(null);
  const founderLabelRef = useRef<HTMLParagraphElement>(null);
  const founderLineRef = useRef<HTMLDivElement>(null);
  const founderWatermarkRef = useRef<HTMLDivElement>(null);
  const founderPullRef = useRef<HTMLParagraphElement>(null);
  const founderParaRefs = useRef<(HTMLDivElement | null)[]>([]);
  const founderSignRef = useRef<HTMLDivElement>(null);
  const founderSignLineRef = useRef<HTMLDivElement>(null);

  // Services refs
  const servicesSectionRef = useRef<HTMLElement>(null);
  const servicesIntroRef = useRef<HTMLDivElement>(null);
  const servicesRowRefs = useRef<(HTMLElement | null)[]>([]);

  // Projects refs
  const projectsSectionRef = useRef<HTMLElement>(null);
  const projectsIntroRef = useRef<HTMLDivElement>(null);
  const projectsPinRef = useRef<HTMLDivElement>(null);
  const projectsTrackRef = useRef<HTMLDivElement>(null);
  const projectsPanelRefs = useRef<(HTMLElement | null)[]>([]);
  const projectVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Testimonial refs
  const testimonialRef = useRef<HTMLElement>(null);
  const testimonialIntroRef = useRef<HTMLDivElement>(null);
  const testimonialCardRefs = useRef<(HTMLQuoteElement | null)[]>([]);

  // CTA refs
  const ctaRef = useRef<HTMLElement>(null);
  const ctaButtonRef = useRef<HTMLButtonElement>(null);
  const ctaTitleRef = useRef<HTMLHeadingElement>(null);

  // Custom cursor
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorPos = useRef({ x: 0, y: 0 });
  const cursorTarget = useRef({ x: 0, y: 0 });
  const cursorRaf = useRef<number>(0);

  const [reducedMotion, setReducedMotion] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  // ─── Viewport + accessibility detection ────────────────────────────────────
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktopQuery = window.matchMedia("(min-width: 768px)");

    const updateMotion = () => setReducedMotion(motionQuery.matches);
    const updateCursor = () => {
      setShowCursor(desktopQuery.matches && !motionQuery.matches);
    };

    const onMotionChange = () => {
      updateMotion();
      updateCursor();
    };
    const onDesktopChange = () => updateCursor();

    updateMotion();
    updateCursor();

    motionQuery.addEventListener("change", onMotionChange);
    desktopQuery.addEventListener("change", onDesktopChange);
    return () => {
      motionQuery.removeEventListener("change", onMotionChange);
      desktopQuery.removeEventListener("change", onDesktopChange);
    };
  }, []);

  // ─── Lenis smooth scroll + GSAP ticker sync ────────────────────────────────
  useEffect(() => {
    if (reducedMotion) return;

    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    const lenis = new Lenis({
      duration: isMobile ? 1.0 : 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: isMobile ? 1.2 : 2,
      infinite: false,
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const onAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]'
      );
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -72, duration: 1.2 });
    };
    document.addEventListener("click", onAnchorClick);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    const onResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      window.removeEventListener("resize", onResize);
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [reducedMotion]);

  // ─── Custom cursor (desktop only) ───────────────────────────────────────────
  const handleCursorEnter = useCallback(() => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, { scale: 3, duration: 0.35, ease: "power2.out" });
  }, []);

  const handleCursorLeave = useCallback(() => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, { scale: 1, duration: 0.35, ease: "power2.out" });
  }, []);

  useEffect(() => {
    if (!showCursor || !cursorRef.current) return;

    const cursor = cursorRef.current;
    cursorPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    cursorTarget.current = { ...cursorPos.current };

    const onMove = (e: MouseEvent) => {
      cursorTarget.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      cursorPos.current.x = lerp(cursorPos.current.x, cursorTarget.current.x, 0.15);
      cursorPos.current.y = lerp(cursorPos.current.y, cursorTarget.current.y, 0.15);
      gsap.set(cursor, {
        x: cursorPos.current.x,
        y: cursorPos.current.y,
        xPercent: -50,
        yPercent: -50,
      });
      cursorRaf.current = requestAnimationFrame(animate);
    };
    animate();

    const interactive = mainRef.current?.querySelectorAll("a, button, [data-cursor-hover]");
    interactive?.forEach((el) => {
      el.addEventListener("mouseenter", handleCursorEnter);
      el.addEventListener("mouseleave", handleCursorLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(cursorRaf.current);
      interactive?.forEach((el) => {
        el.removeEventListener("mouseenter", handleCursorEnter);
        el.removeEventListener("mouseleave", handleCursorLeave);
      });
    };
  }, [showCursor, handleCursorEnter, handleCursorLeave]);

  // ─── Project videos: play only when in view ───────────────────────────────
  useEffect(() => {
    const videos = projectVideoRefs.current.filter(Boolean) as HTMLVideoElement[];
    if (!videos.length) return;

    const pauseAll = () => {
      videos.forEach((video) => {
        video.pause();
      });
    };

    if (reducedMotion) {
      pauseAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target as HTMLVideoElement;
          if (entry.isIntersecting && entry.intersectionRatio > 0.65) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: [0.4, 0.65, 0.85] }
    );

    videos.forEach((video) => observer.observe(video));

    return () => {
      observer.disconnect();
      pauseAll();
    };
  }, [reducedMotion]);

  // ─── GSAP animations (ScrollTrigger + mount) ───────────────────────────────
  useGSAP(
    () => {
      if (reducedMotion) {
        gsap.set(
          [
            heroSubtitleRef.current,
            aboutStatementRef.current,
            ...aboutLineRefs.current,
            aboutSplitLeftRef.current,
            aboutSplitRightRef.current,
            aboutSlashRef.current,
            servicesIntroRef.current,
            ...servicesRowRefs.current,
            projectsIntroRef.current,
            projectsPinRef.current,
            ...projectsPanelRefs.current,
            testimonialIntroRef.current,
            ...testimonialCardRefs.current,
            founderPortraitRef.current,
            founderPortraitImgRef.current,
            founderLabelRef.current,
            founderLineRef.current,
            founderWatermarkRef.current,
            founderPullRef.current,
            ...founderParaRefs.current,
            founderSignRef.current,
            founderSignLineRef.current,
          ].filter(Boolean),
          { opacity: 1, clipPath: "inset(0% 0% 0% 0%)", scale: 1, y: 0, x: 0 }
        );
        return;
      }

      const mm = gsap.matchMedia();

      // ── Hero: letter clip-path reveal + subtitle fade ──
      mm.add("(min-width: 0px)", () => {
        if (heroSubtitleRef.current) {
          gsap.from(heroSubtitleRef.current, {
            y: 40,
            opacity: 0,
            duration: 1,
            delay: 1.2,
            ease: "power3.out",
          });
        }
      });

      // ── Hero parallax + particles (desktop intensity) ──
      mm.add("(min-width: 768px)", () => {
        if (heroBgRef.current && heroRef.current) {
          gsap.to(heroBgRef.current, {
            yPercent: -15,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }

        if (particlesRef.current) {
          const particles = particlesRef.current.children;
          gsap.to(particles, {
            y: (i) => (i % 2 === 0 ? -120 : -80),
            x: (i) => (i % 3 === 0 ? 40 : -30),
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        }
      });

      mm.add("(max-width: 767px)", () => {
        if (heroBgRef.current && heroRef.current) {
          gsap.to(heroBgRef.current, {
            yPercent: -6,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });

      // ── About: scroll-scrubbed statement lines + split reveal ──
      if (philosophyRef.current && aboutStatementRef.current) {
        aboutLineRefs.current.forEach((line, i) => {
          if (!line) return;

          line.querySelectorAll("[data-about-dim]").forEach((el) => {
            gsap.set(el, { opacity: 0.18 });
          });

          gsap.fromTo(
            line,
            { y: 40 },
            {
              y: 0,
              ease: "none",
              scrollTrigger: {
                trigger: aboutStatementRef.current,
                start: `top ${72 - i * 8}%`,
                end: `top ${38 - i * 8}%`,
                scrub: 0.65,
              },
            }
          );

          line.querySelectorAll("[data-about-dim]").forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0.18 },
              {
                opacity: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: aboutStatementRef.current,
                  start: `top ${70 - i * 8}%`,
                  end: `top ${42 - i * 8}%`,
                  scrub: 0.65,
                },
              }
            );
          });
        });
      }

      if (aboutSplitRef.current) {
        if (aboutSlashRef.current) {
          gsap.fromTo(
            aboutSlashRef.current,
            { scaleY: 0, opacity: 0 },
            {
              scaleY: 1,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: aboutSplitRef.current,
                start: "top 88%",
                end: "top 55%",
                scrub: 0.6,
              },
            }
          );
        }

        gsap.from(
          [aboutSplitLeftRef.current, aboutSplitRightRef.current].filter(Boolean),
          {
            y: 48,
            opacity: 0,
            stagger: 0.14,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: aboutSplitRef.current,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // ── Founder's note: pinned portrait + scrubbed editorial cascade ──
      mm.add("(min-width: 1024px)", () => {
        if (!founderRef.current || !founderPortraitRef.current) return;

        ScrollTrigger.create({
          trigger: founderRef.current,
          start: "top top",
          end: "+=120%",
          pin: founderPortraitRef.current,
          pinSpacing: true,
        });

        if (founderPortraitImgRef.current) {
          gsap.fromTo(
            founderPortraitImgRef.current,
            { scale: 1.15, yPercent: 4 },
            {
              scale: 1,
              yPercent: -4,
              ease: "none",
              scrollTrigger: {
                trigger: founderRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1.2,
              },
            }
          );
        }
      });

      if (founderRef.current && founderWatermarkRef.current) {
        gsap.fromTo(
          founderWatermarkRef.current,
          { xPercent: 8, opacity: 0.04 },
          {
            xPercent: -6,
            opacity: 0.09,
            ease: "none",
            scrollTrigger: {
              trigger: founderRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );
      }

      if (founderLineRef.current && founderRef.current) {
        gsap.fromTo(
          founderLineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: founderRef.current,
              start: "top 70%",
              end: "top 30%",
              scrub: 0.8,
            },
          }
        );
      }

      if (founderPullRef.current) {
        gsap.fromTo(
          founderPullRef.current,
          { clipPath: "inset(0% 100% 0% 0%)", y: 32 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            y: 0,
            ease: "power3.out",
            scrollTrigger: {
              trigger: founderPullRef.current,
              start: "top 85%",
              end: "top 55%",
              scrub: 0.7,
            },
          }
        );
      }

      founderParaRefs.current.forEach((block) => {
        if (!block) return;
        const text = block.querySelector("[data-founder-text]");
        const num = block.querySelector("[data-founder-num]");
        gsap.fromTo(
          block,
          { clipPath: "inset(100% 0% 0% 0%)", opacity: 0.4 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: block,
              start: "top 92%",
              end: "top 58%",
              scrub: 0.65,
            },
          }
        );
        if (text) {
          gsap.from(text, {
            x: 28,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: block,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          });
        }
        if (num) {
          gsap.from(num, {
            scale: 0.6,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: block,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          });
        }
      });

      if (founderSignLineRef.current && founderSignRef.current) {
        gsap.fromTo(
          founderSignLineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: founderSignRef.current,
              start: "top 90%",
              end: "top 65%",
              scrub: 0.5,
            },
          }
        );
      }

      if (founderSignRef.current) {
        gsap.from(founderSignRef.current.children, {
          y: 20,
          opacity: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: founderSignRef.current,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (founderLabelRef.current) {
        gsap.from(founderLabelRef.current, {
          letterSpacing: "0.6em",
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: founderRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }

      // ── Services: intro + alternating image rows ──
      if (servicesIntroRef.current && servicesSectionRef.current) {
        gsap.from(servicesIntroRef.current, {
          y: 32,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesSectionRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        });
      }

      servicesRowRefs.current.forEach((row, i) => {
        if (!row) return;
        const img = row.querySelector("[data-service-img]");
        const copy = row.querySelector("[data-service-copy]");
        if (!copy) return;

        gsap.from(copy, {
          x: i % 2 === 0 ? 40 : -40,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.14 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: row,
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
        }
      });

      // ── Projects: intro + horizontal pinned gallery (desktop) ──
      if (projectsIntroRef.current && projectsSectionRef.current) {
        gsap.from(projectsIntroRef.current, {
          y: 32,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsSectionRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        });
      }

      mm.add("(min-width: 768px)", () => {
        const track = projectsTrackRef.current;
        const pin = projectsPinRef.current;
        if (!track || !pin) return;

        const panels = projectsPanelRefs.current.filter(Boolean);
        const getScrollAmount = () => track.scrollWidth - pin.offsetWidth;
        const getHold = () => window.innerHeight * 0.35;

        const projectsScroll = gsap.timeline({
          scrollTrigger: {
            trigger: pin,
            start: "top 80px",
            end: () => `+=${getScrollAmount() + getHold()}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            pinSpacing: true,
          },
        });

        projectsScroll.to(track, { x: 0, duration: 0.22, ease: "none" });

        const horizontalTween = projectsScroll.to(track, {
          x: () => -getScrollAmount(),
          duration: 0.78,
          ease: "none",
        });

        panels.forEach((panel, i) => {
          const img = panel.querySelector("[data-project-media]");
          const copy = panel.querySelector("[data-project-copy]");
          if (!img || !copy) return;

          if (i === 0) {
            gsap.set(copy, { opacity: 1, y: 0 });
          }

          gsap.fromTo(
            img,
            { scale: 1.08 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: horizontalTween,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );

          if (i > 0) {
            gsap.fromTo(
              copy,
              { opacity: 0.35, y: 32 },
              {
                opacity: 1,
                y: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: panel,
                  containerAnimation: horizontalTween,
                  start: "left 85%",
                  end: "left 50%",
                  scrub: 0.6,
                },
              }
            );
          }
        });
      });

      mm.add("(max-width: 767px)", () => {
        projectsPanelRefs.current.forEach((panel) => {
          if (!panel) return;
          const copy = panel.querySelector("[data-project-copy]");
          if (!copy) return;
          gsap.from(copy, {
            y: 36,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          });
        });
      });

      // ── Testimonials: intro + card stagger ──
      if (testimonialIntroRef.current && testimonialRef.current) {
        gsap.from(testimonialIntroRef.current, {
          y: 32,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: testimonialRef.current,
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        });
      }

      testimonialCardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          y: 40,
          opacity: 0,
          duration: 0.9,
          delay: i * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // ── Footer CTA: title reveal + button pulse ──
      if (ctaTitleRef.current && ctaRef.current) {
        gsap.from(ctaTitleRef.current, {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (ctaButtonRef.current && ctaRef.current) {
        gsap.from(ctaButtonRef.current, {
          opacity: 0,
          y: 24,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 65%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.to(ctaButtonRef.current, {
          boxShadow: "0 0 0 8px rgba(223, 164, 8, 0.15)",
          repeat: -1,
          yoyo: true,
          duration: 1.6,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 60%",
            toggleActions: "play pause play pause",
          },
        });
      }

      return () => mm.revert();
    },
    { scope: mainRef, dependencies: [reducedMotion] }
  );

  return (
    <>
      <ScrollNav />

      {/* Custom cursor — desktop only */}
      {showCursor && (
        <div
          ref={cursorRef}
          className="pointer-events-none fixed left-0 top-0 z-[9999] size-5 rounded-full bg-secondary2/80 mix-blend-difference"
          aria-hidden
        />
      )}

      <div
        ref={mainRef}
        className={`relative overflow-x-hidden ${showCursor ? "cursor-none" : ""}`}
      >
        {/* ═══════════════════ HERO ═══════════════════ */}
        <section
          id="hero"
          ref={heroRef}
          className="relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden bg-black"
        >
          {/* Parallax background video */}
          <div ref={heroBgRef} className="absolute inset-0 will-change-transform">
            <HeroVideo />
            {/* Slight brand tint for cinema contrast (tuned for readability over video) */}
            <div className="absolute inset-0 bg-primary/50" />
          </div>

          {/* Floating gold particles */}
          <div ref={particlesRef} className="pointer-events-none absolute inset-0">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute size-2 rounded-full bg-secondary2/20 blur-sm md:size-3"
                style={{
                  left: `${8 + (i * 7) % 85}%`,
                  top: `${12 + (i * 11) % 75}%`,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col items-center px-2 text-center sm:px-6">
            <div
              ref={heroSubtitleRef}
              className="mt-6 max-w-2xl rounded-2xl bg-black/25 px-2 py-5 text-center ring-1 ring-white/10 backdrop-blur-sm sm:px-6 md:px-10 md:py-6"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-gradient-to-r from-secondary2/70 to-transparent" />
                <h2 className="font-trajan text-2xl tracking-[0.08em] text-secondary2 md:text-3xl">
                  Elevating Every Occasion
                </h2>
                <span className="h-px w-10 bg-gradient-to-l from-secondary2/70 to-transparent" />
              </div>
              <p className="mt-3 font-poppins text-base leading-relaxed text-white/80 md:mt-4 md:text-lg">
                For celebrations your guests will remember for years. We transform planning
                overwhelm into an unforgettable reflection of your story.
              </p>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 opacity-60">
            <span className="font-poppins text-xs uppercase tracking-[0.3em] text-white/70">
              Scroll
            </span>
            <div className="h-10 w-px bg-gradient-to-b from-secondary2 to-transparent" />
          </div>
        </section>

        {/* ═══════════════════ WHO WE ARE ═══════════════════ */}
        <section id="philosophy" ref={philosophyRef} className="bg-white text-primary">
          {/* Editorial statement — scroll-scrubbed typographic reveal */}
          <div
            ref={aboutStatementRef}
            className="mx-auto flex max-w-5xl items-center px-2 py-12 sm:px-6 md:py-16 lg:py-20"
          >
            <div className="w-full space-y-2 text-center font-poppins text-[clamp(1.35rem,3.4vw,2.65rem)] font-semibold leading-[1.32] tracking-[-0.01em] md:space-y-3">
              {ABOUT_STATEMENT.map((line, lineIdx) => (
                <div
                  key={`about-line-${lineIdx}`}
                  ref={(el) => {
                    aboutLineRefs.current[lineIdx] = el;
                  }}
                  className="will-change-transform"
                >
                  {line.map((part, partIdx) =>
                    part.accent ? (
                      <span key={partIdx} className="text-secondary2">
                        {part.text}
                      </span>
                    ) : (
                      <span key={partIdx} data-about-dim className="text-primary">
                        {part.text}
                      </span>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Split columns with diagonal divider */}
          <div
            ref={aboutSplitRef}
            className="border-t border-primary/10 px-2 pb-24 pt-16 sm:px-6 md:pb-32 md:pt-20 lg:px-12 xl:px-16"
          >
            <div className="relative mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:gap-0 md:gap-y-0">
              <div
                ref={aboutSlashRef}
                className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px origin-top -translate-x-1/2 rotate-[18deg] bg-primary/20 md:block"
                aria-hidden
              />

              <div
                ref={aboutSplitLeftRef}
                className="md:pr-16 lg:pr-24 xl:pr-28"
              >
                <h3 className="font-poppins text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                  Who we are
                </h3>
                <p className="mt-6 max-w-md font-poppins text-base leading-relaxed text-primary/75 md:text-[1.05rem] md:leading-[1.75]">
                  Elvora is a premier event planning and production company that transforms
                  every occasion into something exceptional. With thoughtful design, precise
                  execution, and a flair for detail, we curate experiences that feel effortless
                  but leave lasting impressions.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  data-cursor-hover
                  className="mt-10 rounded-full border-secondary2 px-10 text-xs uppercase tracking-[0.22em] text-secondary2 hover:bg-secondary2/10"
                  asChild
                >
                  <a href="#services">View our offerings</a>
                </Button>
              </div>

              <div
                ref={aboutSplitRightRef}
                className="md:pl-16 lg:pl-24 xl:pl-28"
              >
                <h3 className="font-poppins text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                  Our approach
                </h3>
                <p className="mt-6 max-w-md font-poppins text-base italic leading-relaxed text-primary/70 md:text-[1.05rem] md:leading-[1.75]">
                  &ldquo;No event should ever be the same because no two clients are the same
                  &mdash; our approach to every celebration is this:
                </p>
                <p className="mt-8 font-trajan text-2xl leading-snug text-primary md:text-[1.65rem] lg:text-3xl">
                  Make it unique,
                  <br />
                  Make it seamless,
                  <br />
                  <span className="text-secondary1">Make it elegant.&rdquo;</span>
                </p>
                <p className="mt-8 max-w-md font-poppins text-base leading-relaxed text-primary/75 md:text-[1.05rem] md:leading-[1.75]">
                  Whether it&apos;s a corporate launch, a lifestyle celebration, or an intimate
                  gathering, our approach is rooted in clarity, creativity, and intention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ FOUNDER'S NOTE ═══════════════════ */}
        <section
          id="founder"
          ref={founderRef}
          className="relative overflow-hidden bg-primary"
        >
          {/* Drifting editorial watermark */}
          <div
            ref={founderWatermarkRef}
            className="pointer-events-none absolute -right-[5vw] top-[12vh] select-none font-trajan text-[clamp(6rem,22vw,18rem)] leading-none tracking-tight text-white/[0.06]"
            aria-hidden
          >
            NOTE
          </div>

          <div className="relative lg:flex lg:min-h-[200vh]">
            {/* Pinned portrait column (desktop) */}
            <div
              ref={founderPortraitRef}
              className="relative lg:h-screen lg:w-[44%] lg:shrink-0"
            >
              <div className="relative h-[62vh] overflow-hidden lg:h-full">
                <div
                  ref={founderPortraitImgRef}
                  className="absolute inset-0 will-change-transform"
                >
                  <Image
                    src={IMAGES.founder}
                    alt="Oreoluwa Ayanwale, Founder of Elvora"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 44vw"
                  />
                </div>
                {/* Diagonal ivory cut — editorial magazine edge */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-primary/10 lg:to-primary"
                  aria-hidden
                />
                <div
                  className="absolute bottom-0 right-0 hidden h-full w-16 bg-primary lg:block"
                  style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
                  aria-hidden
                />

                <div className="absolute bottom-8 left-2 z-10 sm:left-6 lg:bottom-12 lg:left-10">
                  <p
                    ref={founderLabelRef}
                    className="font-poppins text-[10px] uppercase tracking-[0.45em] text-secondary2 md:text-xs"
                  >
                    Founder&apos;s Note
                  </p>
                  <div
                    ref={founderLineRef}
                    className="mt-5 h-28 w-px origin-top bg-gradient-to-b from-secondary2 via-secondary1/60 to-transparent md:h-36"
                    aria-hidden
                  />
                </div>
              </div>
            </div>

            {/* Scrolling letter — chapters cascade on scroll */}
            <div className="relative z-10 px-2 py-14 sm:px-6 md:px-10 lg:w-[56%] lg:px-12 lg:py-24 xl:px-16">
              <p
                ref={founderPullRef}
                className="max-w-xl font-trajan text-2xl leading-snug text-secondary2 md:text-3xl lg:text-[2rem] lg:leading-tight"
              >
                {FOUNDER_PARAGRAPHS[0]}
              </p>

              <div className="mt-14 flex flex-col gap-10 md:mt-20 md:gap-14 lg:gap-16">
                {FOUNDER_PARAGRAPHS.slice(1).map((paragraph, i) => (
                  <div
                    key={i}
                    ref={(el) => {
                      founderParaRefs.current[i] = el;
                    }}
                    className="relative overflow-hidden border-t border-white/10 pt-8 will-change-[clip-path] md:pt-10"
                  >
                    <span
                      data-founder-num
                      className="font-trajan text-5xl leading-none text-secondary1/25 md:text-6xl"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p
                      data-founder-text
                      className="mt-3 max-w-lg font-poppins text-base leading-[1.85] text-white/72 md:text-lg"
                    >
                      {paragraph}
                    </p>
                  </div>
                ))}
              </div>

              <div ref={founderSignRef} className="mt-16 md:mt-24">
                <div
                  ref={founderSignLineRef}
                  className="mb-8 h-px w-full max-w-xs origin-left bg-gradient-to-r from-secondary2 to-transparent"
                  aria-hidden
                />
                <p className="font-poppins text-sm italic text-white/50">Warmly,</p>
                <p className="mt-4 font-trajan text-3xl text-secondary2 md:text-4xl">
                  Oreoluwa Ayanwale
                </p>
                <p className="mt-2 font-poppins text-[11px] uppercase tracking-[0.28em] text-white/45">
                  Founder &amp; Creative Director, Elvora
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════ OFFERINGS ═══════════════════ */}
        <section id="services" ref={servicesSectionRef} className="bg-primary text-white">
          <div
            ref={servicesIntroRef}
            className="mx-auto max-w-7xl border-b border-white/10 px-2 py-14 sm:px-6 md:py-20 lg:px-12"
          >
            <p className="font-poppins text-xs uppercase tracking-[0.35em] text-secondary2">
              Offerings
            </p>
            <h2 className="mt-5 max-w-3xl font-trajan text-[clamp(2rem,5vw,3.5rem)] leading-[1.15] text-white">
              It&apos;s our joy to plan, design, and produce celebrations around the world.
            </h2>
            <p className="mt-6 max-w-2xl font-poppins text-base leading-relaxed text-white/72 md:text-lg">
              Let&apos;s create an unforgettable guest experience&hellip;{" "}
              <span className="text-secondary2">Could your event be next?</span>
            </p>
          </div>

          <div>
            {SERVICES.map((service, i) => {
              const imageFirst = i % 2 === 0;
              return (
                <article
                  key={service.category}
                  ref={(el) => {
                    servicesRowRefs.current[i] = el;
                  }}
                  className="grid border-b border-white/10 md:grid-cols-2"
                >
                  <div
                    className={`relative min-h-[50vh] overflow-hidden md:min-h-[72vh] ${
                      imageFirst ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <div
                      data-service-img
                      className="absolute inset-0 will-change-transform"
                    >
                      <Image
                        src={service.image}
                        alt={service.category}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-primary/25" />
                    </div>
                    <span className="absolute bottom-6 left-6 font-trajan text-7xl leading-none text-white/10 md:text-8xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div
                    data-service-copy
                    className={`flex flex-col justify-center px-2 py-14 sm:px-8 md:py-0 lg:px-16 ${
                      imageFirst ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <p className="font-poppins text-sm font-semibold uppercase tracking-[0.28em] text-secondary2">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 font-trajan text-3xl leading-snug text-white md:text-4xl">
                      {service.category}
                    </h3>
                    <p className="mt-6 max-w-md font-poppins text-base leading-relaxed text-white/72 md:text-lg">
                      {service.description}
                    </p>
                    <Button
                      variant="outline"
                      size="lg"
                      data-cursor-hover
                      className="mt-10 w-fit rounded-full border-secondary2 px-10 text-xs uppercase tracking-[0.22em] text-secondary2 hover:bg-secondary2/10"
                      asChild
                    >
                      <a href="#contact">Enquire</a>
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ═══════════════════ SIGNATURE WORK ═══════════════════ */}
        <section
          id="projects"
          ref={projectsSectionRef}
          className="scroll-mt-20 bg-primary text-white"
        >
          <div
            ref={projectsIntroRef}
            className="mx-auto max-w-7xl border-b border-white/10 px-2 py-14 sm:px-6 md:py-16 lg:px-12"
          >
            <p className="font-poppins text-xs uppercase tracking-[0.35em] text-secondary2">
              Portfolio
            </p>
            <h2 className="mt-5 max-w-3xl font-trajan text-[clamp(2rem,5vw,3.5rem)] leading-[1.15]">
              Signature Work
            </h2>
            <p className="mt-6 max-w-2xl font-poppins text-base leading-relaxed text-white/72 md:text-lg">
              A snapshot of events that reflect our creative direction and production
              precision.
            </p>
          </div>

          <div
            ref={projectsPinRef}
            className="relative w-full overflow-hidden md:h-[calc(100svh-5rem)]"
          >
            <div
              ref={projectsTrackRef}
              className="flex h-full w-full flex-col md:w-max md:flex-row"
            >
            {PROJECTS.map((project, i) => (
              <article
                key={project.title}
                ref={(el) => {
                  projectsPanelRefs.current[i] = el;
                }}
                className="relative flex min-h-[72vh] w-full shrink-0 flex-col justify-end overflow-hidden md:h-full md:w-[100vw] md:max-w-[100vw]"
              >
                <div
                  data-project-media
                  className="absolute inset-0 will-change-transform"
                >
                  <video
                    ref={(el) => {
                      projectVideoRefs.current[i] = el;
                    }}
                    className="h-full w-full object-cover"
                    muted
                    loop
                    playsInline
                    preload={i === 0 ? "metadata" : "none"}
                    poster="/og-image.jpg"
                  >
                    <source src={project.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-primary/15" />
                </div>

                <div
                  data-project-copy
                  className="relative z-10 px-2 pb-10 pt-16 sm:px-8 md:p-12 md:pb-14 lg:p-16 lg:pb-16"
                >
                  <div className="flex items-end justify-between gap-6">
                    <div className="max-w-xl">
                      <p className="font-poppins text-xs font-semibold uppercase tracking-[0.28em] text-secondary2">
                        {String(i + 1).padStart(2, "0")} — {project.category}
                      </p>
                      <h3 className="mt-4 font-trajan text-[clamp(2rem,5vw,3.75rem)] leading-[1.08] text-white">
                        {project.title}
                      </h3>
                      <div className="mt-5 space-y-3">
                        {project.description.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="font-poppins text-base leading-relaxed text-white/75 md:text-lg"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                      <p className="mt-5 font-poppins text-xs uppercase tracking-[0.16em] text-secondary2/90">
                        {project.credits}
                      </p>
                    </div>
                    <span className="hidden font-trajan text-8xl leading-none text-white/10 md:block lg:text-9xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </article>
            ))}
            </div>
          </div>

          <div className="border-t border-white/10 px-2 py-12 text-center sm:px-6 md:py-16">
            <Button
              variant="outline"
              size="lg"
              data-cursor-hover
              className="rounded-full border-secondary2 px-10 text-xs uppercase tracking-[0.22em] text-secondary2 hover:bg-secondary2/10"
              asChild
            >
              <a href="#contact">Could your event be next?</a>
            </Button>
          </div>
        </section>

        {/* ═══════════════════ TESTIMONIALS ═══════════════════ */}
        <section
          id="testimonials"
          ref={testimonialRef}
          className="relative overflow-hidden bg-primary text-white"
        >
          <div
            className="pointer-events-none absolute -right-8 top-16 select-none font-trajan text-[clamp(8rem,28vw,16rem)] leading-none text-white/[0.04]"
            aria-hidden
          >
            &ldquo;
          </div>

          <div className="relative mx-auto max-w-7xl px-2 py-14 sm:px-6 md:py-20 lg:px-12 lg:py-24">
            <div ref={testimonialIntroRef}>
              <p className="font-poppins text-xs uppercase tracking-[0.35em] text-secondary2">
                Client stories
              </p>
              <h2 className="mt-5 max-w-2xl font-trajan text-[clamp(2rem,5vw,3.25rem)] leading-[1.15]">
                Words that linger{" "}
                <span className="text-secondary2">long after the lights go down.</span>
              </h2>
            </div>

            <div className="mt-14 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-8 lg:mt-20 lg:gap-10">
              {TESTIMONIALS.map((testimonial, i) => (
                <blockquote
                  key={testimonial.name}
                  ref={(el) => {
                    testimonialCardRefs.current[i] = el;
                  }}
                  className="flex flex-col border-t border-secondary2/40 pt-8"
                >
                  <p className="font-trajan text-xl leading-relaxed text-white/90 md:text-[1.35rem] md:leading-[1.6]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <footer className="mt-auto pt-8">
                    <p className="font-poppins text-sm font-medium uppercase tracking-[0.2em] text-secondary2">
                      {testimonial.name}
                    </p>
                    <p className="mt-2 font-poppins text-sm text-white/45">
                      {testimonial.event}
                    </p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════ FOOTER CTA ═══════════════════ */}
        <section
          id="contact"
          ref={ctaRef}
          className="relative flex min-h-screen items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src={IMAGES.cta}
              alt="Warm event bokeh"
              fill
              className="scale-110 object-cover blur-md"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-primary/60" />
          </div>

          <div className="relative z-10 flex flex-col items-center px-2 text-center sm:px-6">
            <h2
              ref={ctaTitleRef}
              className="max-w-4xl font-trajan text-4xl leading-tight text-white md:text-6xl lg:text-7xl"
            >
              Let&apos;s make it exceptional.
            </h2>
            <Button
              ref={ctaButtonRef}
              variant="outline"
              size="lg"
              data-cursor-hover
              className="mt-10 border-secondary2 font-poppins uppercase tracking-[0.2em] text-secondary2 hover:bg-secondary2/10"
              asChild
            >
              <a href="mailto:hello@byelvora.com">Start a conversation</a>
            </Button>
            <p className="mt-16 font-poppins text-xs text-white/50">
              © {new Date().getFullYear()} Elvora. Moments crafted with intention.
            </p>
          </div>
        </section>

        {/* ═══════════════════ FOOTER INFO BAR ═══════════════════ */}
        <footer className="border-t border-white/10 bg-primary px-2 py-12 text-white sm:px-6 lg:px-12">
          <div className="mx-auto grid max-w-7xl justify-items-center gap-10 text-center md:grid-cols-3 md:gap-12">
            <div>
              <p className="font-poppins text-xs uppercase tracking-[0.32em] text-secondary2">
                Contact
              </p>
              <div className="mt-5 space-y-2 font-poppins text-sm text-white/75">
                <p>
                  <a href="mailto:Elvoraevent@gmail.com" className="hover:text-secondary2">
                    Elvoraevent@gmail.com
                  </a>
                </p>
                <p>
                  <a href="tel:+2348149517738" className="hover:text-secondary2">
                    +234 814 951 7738
                  </a>
                </p>
                <p>Lagos, Nigeria</p>
              </div>
            </div>

            <div>
              <p className="font-poppins text-xs uppercase tracking-[0.32em] text-secondary2">
                Socials
              </p>
              <div className="mt-5 space-y-2 font-poppins text-sm text-white/75">
                <p>
                  <a
                    href="https://instagram.com/by.elvora"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-secondary2"
                  >
                    Instagram — @by.elvora
                  </a>
                </p>
              </div>
            </div>

            <div>
              <p className="font-poppins text-xs uppercase tracking-[0.32em] text-secondary2">
                Quick links
              </p>
              <div className="mt-5 space-y-2 font-poppins text-sm text-white/75">
                <p>
                  <a href="#philosophy" className="hover:text-secondary2">
                    About
                  </a>
                </p>
                <p>
                  <a href="#services" className="hover:text-secondary2">
                    Offerings
                  </a>
                </p>
                <p>
                  <a href="#projects" className="hover:text-secondary2">
                    Signature Work
                  </a>
                </p>
                <p>
                  <a href="#testimonials" className="hover:text-secondary2">
                    Testimonials
                  </a>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
