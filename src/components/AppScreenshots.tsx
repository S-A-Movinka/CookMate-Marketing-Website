import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ss1 from "@/assets/app-screenshot-1.png";
import ss10 from "@/assets/app-screenshot-10.png";
import ss2 from "@/assets/app-screenshot-2.png";
import ss3 from "@/assets/app-screenshot-3.png";
import ss4 from "@/assets/ap-screenshot-4.png";
import ss5 from "@/assets/app-screenshot-5.png";
import ss6 from "@/assets/app-screenshot-6.png";
import ss7 from "@/assets/app-screenshot-7.png";
import ss8 from "@/assets/app-screenshot-8.png";
import ss9 from "@/assets/app-screenshot-9.png";

const screenshots = [
  { src: ss1, alt: "CookMate mobile screen 1" },
  { src: ss2, alt: "CookMate mobile screen 2" },
  { src: ss3, alt: "CookMate mobile screen 3" },
  { src: ss4, alt: "CookMate mobile screen 4" },
  { src: ss5, alt: "CookMate mobile screen 5" },
  { src: ss6, alt: "CookMate mobile screen 6" },
  { src: ss7, alt: "CookMate mobile screen 7" },
  { src: ss8, alt: "CookMate mobile screen 8" },
  { src: ss9, alt: "CookMate mobile screen 9" },
  { src: ss10, alt: "CookMate mobile screen 10" },
];

const ANIMATION_MS = 520;
type Direction = 1 | -1;

const BASE_SHIFT = -(100 / 3);
const STEP_SHIFT = 100 / 3;

const wrapIndex = (value: number, total: number) => {
  return ((value % total) + total) % total;
};

const AppScreenshots = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [pendingDirection, setPendingDirection] = useState<Direction | null>(null);
  const [trackShift, setTrackShift] = useState(BASE_SHIFT);
  const [transitionEnabled, setTransitionEnabled] = useState(false);
  const animationLockRef = useRef(false);
  const chainTimerRef = useRef<number | null>(null);
  const pointerStartXRef = useRef<number | null>(null);
  const wheelLockRef = useRef(false);
  const wheelReleaseTimerRef = useRef<number | null>(null);

  const total = screenshots.length;

  const laneIndices = useMemo(
    () => [-2, -1, 0, 1, 2].map((offset) => wrapIndex(activeIndex + offset, total)),
    [activeIndex, total],
  );

  const startSlide = (direction: Direction) => {
    if (animationLockRef.current) return;
    animationLockRef.current = true;

    setPendingDirection(direction);
    setTransitionEnabled(true);
    setTrackShift(BASE_SHIFT + (direction === 1 ? -STEP_SHIFT : STEP_SHIFT));
  };

  const goNext = () => {
    startSlide(1);
  };

  const goPrev = () => {
    startSlide(-1);
  };

  const completeSlide = () => {
    if (!animationLockRef.current || pendingDirection === null) return;

    setTransitionEnabled(false);
    setTrackShift(BASE_SHIFT);
    setActiveIndex((prev) => wrapIndex(prev + pendingDirection, total));
    setPendingDirection(null);

    if (chainTimerRef.current) window.clearTimeout(chainTimerRef.current);
    chainTimerRef.current = window.setTimeout(() => {
      animationLockRef.current = false;
    }, 16);
  };

  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    pointerStartXRef.current = e.clientX;
  };

  const onPointerUp: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (pointerStartXRef.current === null) return;
    const deltaX = e.clientX - pointerStartXRef.current;
    pointerStartXRef.current = null;

    if (Math.abs(deltaX) < 40) return;
    if (deltaX < 0) goNext();
    else goPrev();
  };

  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    const magnitudeX = Math.abs(e.deltaX);
    const magnitudeY = Math.abs(e.deltaY);
    const dominant = magnitudeX >= magnitudeY ? e.deltaX : e.deltaY;

    if (Math.abs(dominant) < 16) return;
    if (animationLockRef.current) return;
    if (wheelLockRef.current) return;

    wheelLockRef.current = true;
    if (wheelReleaseTimerRef.current) window.clearTimeout(wheelReleaseTimerRef.current);
    wheelReleaseTimerRef.current = window.setTimeout(() => {
      wheelLockRef.current = false;
      wheelReleaseTimerRef.current = null;
    }, ANIMATION_MS + 140);

    if (dominant > 0) goNext();
    else goPrev();
  };

  useEffect(() => {
    // Preload image decode to avoid animation hitching during first transitions.
    screenshots.forEach((item) => {
      const img = new Image();
      img.src = item.src;
      img.decoding = "async";
    });

    return () => {
      if (chainTimerRef.current) window.clearTimeout(chainTimerRef.current);
      if (wheelReleaseTimerRef.current) window.clearTimeout(wheelReleaseTimerRef.current);
    };
  }, []);

  return (
    <section className="section-padding bg-background">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">App Preview</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">A sneak peek at the CookMate mobile experience.</p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-0 md:-left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-full border border-border bg-background/90 shadow-md backdrop-blur-sm flex items-center justify-center hover:bg-background"
            aria-label="Previous screenshot"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-0 md:-right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 md:h-12 md:w-12 rounded-full border border-border bg-background/90 shadow-md backdrop-blur-sm flex items-center justify-center hover:bg-background"
            aria-label="Next screenshot"
          >
            <ChevronRight size={20} />
          </button>

          <div
            className="overflow-hidden px-9 sm:px-12 touch-pan-y"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerCancel={() => {
              pointerStartXRef.current = null;
            }}
            onWheel={onWheel}
            aria-label="CookMate app screenshots carousel"
          >
            <motion.div
              className="flex items-end [perspective:1200px]"
              animate={{ x: `${trackShift}%` }}
              transition={
                transitionEnabled
                  ? { duration: ANIMATION_MS / 1000, ease: [0.22, 1, 0.36, 1] }
                  : { duration: 0 }
              }
              onAnimationComplete={completeSlide}
            >
              {laneIndices.map((index, laneSlot) => {
                const targetCenterSlot = pendingDirection === 1 ? 3 : pendingDirection === -1 ? 1 : 2;
                const distanceFromCenter = Math.abs(laneSlot - targetCenterSlot);
                const isActiveVisual = distanceFromCenter === 0;

                return (
                  <motion.div
                    key={`${index}-${laneSlot}`}
                    className="basis-1/3 shrink-0 px-1 sm:px-1.5 md:px-2"
                    initial={false}
                    animate={{
                      scale: distanceFromCenter === 0 ? 1 : distanceFromCenter === 1 ? 0.8 : 0.62,
                      opacity: distanceFromCenter === 0 ? 1 : distanceFromCenter === 1 ? 0.7 : 0.35,
                      y: distanceFromCenter === 0 ? -4 : 0,
                      rotateY:
                        distanceFromCenter === 0
                          ? 0
                          : laneSlot < targetCenterSlot
                            ? 2.2
                            : -2.2,
                      filter: distanceFromCenter === 0 ? "blur(0px)" : "blur(0.2px)",
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 24, mass: 0.92 }}
                    style={{ zIndex: isActiveVisual ? 20 : 10 }}
                    aria-hidden={!isActiveVisual}
                  >
                    <div className={`relative rounded-[1.8rem] md:rounded-[2.1rem] bg-zinc-900 p-1.5 border border-zinc-700/70 ${isActiveVisual ? "shadow-2xl shadow-black/25" : "shadow-md shadow-black/15"}`}>
                      <div className="absolute top-1.5 left-1/2 -translate-x-1/2 h-1.5 w-12 rounded-full bg-zinc-700/90" aria-hidden="true" />
                      <img
                        src={screenshots[index].src}
                        alt={screenshots[index].alt}
                        className="w-full h-auto rounded-[1.35rem] md:rounded-[1.7rem]"
                        loading="eager"
                        decoding="async"
                        draggable={false}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;
