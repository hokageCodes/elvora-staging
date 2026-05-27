"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#philosophy", label: "About Us" },
  { href: "#services", label: "Offerings" },
  { href: "#projects", label: "Signature Work" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact Us" },
];

/** Pixels scrolled before fixed nav fades in (full hero first). */
const SCROLL_REVEAL_PX = 56;

export default function ScrollNav() {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const visibleRef = useRef(false);
  const scrollTriggerRef = useRef(null);

  useEffect(() => {
    const nav = navRef.current;
    const hero = document.getElementById("hero");
    if (!nav || !hero) return;

    visibleRef.current = false;
    gsap.set(nav, { opacity: 0, y: -12, pointerEvents: "none" });

    const show = () => {
      if (visibleRef.current) return;
      visibleRef.current = true;
      gsap.to(nav, {
        opacity: 1,
        y: 0,
        pointerEvents: "auto",
        duration: 0.55,
        ease: "power2.out",
      });
    };

    const hide = () => {
      if (!visibleRef.current) return;
      visibleRef.current = false;
      setIsOpen(false);
      gsap.to(nav, {
        opacity: 0,
        y: -12,
        pointerEvents: "none",
        duration: 0.4,
        ease: "power2.in",
      });
    };

    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: hero,
      start: "top top",
      end: `+=${SCROLL_REVEAL_PX}`,
      onLeave: show,
      onEnterBack: hide,
    });

    const syncFromScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      if (y >= SCROLL_REVEAL_PX) show();
      else hide();
    };

    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      syncFromScroll();
    });

    return () => {
      scrollTriggerRef.current?.kill();
    };
  }, []);

  return (
    <>
      <header
        ref={navRef}
        className="fixed z-50 w-full border-b border-purple-400/20 bg-primary text-white backdrop-blur-xl will-change-transform"
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-8">
          <div className="flex h-[80px] items-center justify-between">
            <Link href="/" className="flex h-full items-center overflow-visible" data-cursor-hover>
              <div className="relative h-[250px] w-[250px]">
                <Image
                  src="/assets/images/elv.png"
                  alt="Elvora Logo"
                  fill
                  className="-ml-12 object-contain"
                  sizes="250px"
                  priority
                />
              </div>
            </Link>

            <nav className="hidden items-center gap-10 lg:flex">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  data-cursor-hover
                  className="font-medium text-white/80 transition duration-200 hover:text-secondary2"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                data-cursor-hover
                className="flex items-center gap-2 rounded-full bg-secondary1 px-6 py-2.5 font-medium text-white transition hover:scale-105 hover:bg-secondary2"
              >
                Book An Event
                <ArrowUpRight size={16} aria-hidden />
              </Link>
            </nav>

            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full p-2 transition hover:bg-white/10"
                aria-label={isOpen ? "Close menu" : "Open menu"}
                data-cursor-hover
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-primary transition-all duration-500 ease-out ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-6 pt-6">
          <div className="flex items-center justify-between">
            <div className="relative h-16 w-16" />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 text-white hover:bg-white/10"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="mt-12 flex flex-1 flex-col justify-center gap-8">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-light tracking-tight text-white/80 transition hover:text-secondary2"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-3 rounded-full bg-secondary1 px-8 py-4 text-lg font-medium text-white transition hover:scale-105 hover:bg-secondary2"
            >
              Book An Event
              <ArrowUpRight size={20} aria-hidden />
            </Link>
          </nav>

          <div className="border-t border-purple-400/20 pb-6 pt-4 text-sm text-white/40">
            © {new Date().getFullYear()} ELVORA. All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
}
