"use client";

import { useState } from "react";

const tabs = {
  DESIGN: {
    label: "PROFESSIONAL. MODERN. YOURS.",
    line1: "Turn your idea into a",
    line2: "digital experience.",
    detail: "Custom websites • Branding • Premium design",
  },
  MOBILE: {
    label: "BUILT FOR EVERY SCREEN.",
    line1: "Look incredible",
    line2: "wherever customers find you.",
    detail: "Phones • Tablets • Desktop • Responsive layouts",
  },
  GROWTH: {
    label: "BUILT TO HELP YOU GROW.",
    line1: "Turn visitors into",
    line2: "real opportunities.",
    detail: "SEO • Lead forms • Booking • E-commerce",
  },
};

export default function HeroDemo() {
  const [active, setActive] = useState("DESIGN");
  const content = tabs[active];

  return (
    <>
      <div className="rounded-2xl bg-gradient-to-br from-purple-700 via-fuchsia-700 to-cyan-600 p-[1px]">
        <div className="rounded-2xl bg-[#0b0b1d] p-8">
          <div className="text-sm font-bold text-cyan-300">
            {content.label}
          </div>

          <div className="mt-3 text-4xl font-black leading-tight">
            <span className="bg-gradient-to-r from-fuchsia-300 via-purple-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(217,70,239,0.2)]">
              {content.line1}
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-200 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(34,211,238,0.2)]">
              {content.line2}
            </span>
          </div>

          <div className="mt-5 h-2 w-32 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />

          <div className="mt-5 text-xs font-medium text-purple-100/60">
            {content.detail}
          </div>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {Object.keys(tabs).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setActive(item)}
            className={`rounded-xl border p-4 text-center text-xs font-bold transition duration-300 ${
              active === item
                ? "border-cyan-300/60 bg-gradient-to-r from-purple-500/25 via-fuchsia-500/20 to-cyan-400/25 text-white shadow-[0_0_20px_rgba(34,211,238,0.15)]"
                : "border-white/10 bg-white/5 text-zinc-300 hover:border-purple-300/40 hover:bg-white/10"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}
