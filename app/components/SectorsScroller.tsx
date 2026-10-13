"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import constructionPhoto from "@/public/images/s3-c1.png";
import healthcarePhoto from "@/public/images/s3-c2.png";
import techPhoto from "@/public/images/s3-c3.png";
import financePhoto from "@/public/images/s3-c4.png";
import salesPhoto from "@/public/images/s3-c5.png";
import operationsPhoto from "@/public/images/s3-c6.png";

type Sector = {
  title: string;
  image: StaticImageData;
};

const sectors: Sector[] = [
  { title: "Finance & Accounting", image: financePhoto },
  { title: "Technology & Digital", image: techPhoto },
  { title: "Engineering & Construction", image: constructionPhoto },
  { title: "Healthcare", image: healthcarePhoto },
  { title: "Sales & Marketing", image: salesPhoto },
  { title: "Operations & Administration", image: operationsPhoto },
];

const TOTAL = sectors.length;

// Fixed "design space" geometry (px). The whole stage is scaled down
// uniformly to fit narrower screens, so relative spacing stays equal
// at every size.
const CARD_WIDTH = 320;
const CARD_HEIGHT = CARD_WIDTH * 1.5;
const GAP = 4;
const SCALE_BY_DEPTH = [1, 0.72, 0.52, 0.4];
const HALF_WIDTHS = SCALE_BY_DEPTH.map((s) => (CARD_WIDTH * s) / 2);
const OFFSET_BY_DEPTH = [0];
for (let d = 1; d < SCALE_BY_DEPTH.length; d++) {
  OFFSET_BY_DEPTH.push(
    OFFSET_BY_DEPTH[d - 1] + HALF_WIDTHS[d - 1] + GAP + HALF_WIDTHS[d]
  );
}
const STAGE_WIDTH = (OFFSET_BY_DEPTH[2] + HALF_WIDTHS[2]) * 2 + 40;
const STAGE_HEIGHT = CARD_HEIGHT;
const OFFSETS = [-3, -2, -1, 0, 1, 2, 3];

function mod(n: number, m: number) {
  return ((n % m) + m) % m;
}

export default function SectorsScroller() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [scale, setScale] = useState(1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;
    const observer = new ResizeObserver(([entry]) => {
      const width = entry.contentRect.width;
      setScale(Math.min(1, width / STAGE_WIDTH));
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => i + 1);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full bg-silver py-24">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="block text-xs font-semibold uppercase tracking-widest text-grey">
            Sectors We Support
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-dusk-ink sm:text-4xl">
            Expertise Across Industries
          </h2>
          <p className="mt-4 text-base text-dusk-plum sm:text-lg">
            Connecting skilled people with the industries shaping tomorrow.
          </p>
        </div>

        <div
          ref={wrapperRef}
          className="relative mt-16"
          style={{ height: STAGE_HEIGHT * scale }}
        >
          <div
            className="absolute top-1/2 left-1/2"
            style={{
              width: STAGE_WIDTH,
              height: STAGE_HEIGHT,
              transform: `translate(-50%, -50%) scale(${scale})`,
              transformOrigin: "center center",
            }}
          >
            {OFFSETS.map((d) => {
              const absoluteKey = activeIndex + d;
              const sector = sectors[mod(absoluteKey, TOTAL)];
              const abs = Math.abs(d);
              const cardScale = SCALE_BY_DEPTH[abs] ?? SCALE_BY_DEPTH[3];
              const offset =
                (OFFSET_BY_DEPTH[abs] ?? OFFSET_BY_DEPTH[3]) *
                (d < 0 ? -1 : 1);
              const opacity = abs <= 2 ? 1 : 0;
              const zIndex = 30 - abs * 10;

              return (
                <button
                  key={absoluteKey}
                  type="button"
                  onClick={() => d !== 0 && setActiveIndex(absoluteKey)}
                  aria-label={sector.title}
                  tabIndex={abs <= 2 ? 0 : -1}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    width: CARD_WIDTH,
                    aspectRatio: "2 / 3",
                    transform: `translate(-50%, -50%) translateX(${offset}px) scale(${cardScale})`,
                    opacity,
                    zIndex,
                    cursor: d === 0 ? "default" : "pointer",
                    pointerEvents: abs <= 2 ? "auto" : "none",
                    transition:
                      "transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 700ms ease",
                  }}
                >
                  <div className="relative h-full w-full overflow-hidden rounded-2xl bg-dusk-ink shadow-xl">
                    <Image
                      src={sector.image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <span className="text-left text-base font-bold text-white sm:text-lg">
                        {sector.title}
                      </span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
