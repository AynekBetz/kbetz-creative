"use client";

import { useState } from "react";

export default function InquiryForm() {
  const [sent, setSent] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setSent(false);

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      business: form.get("business"),
      websiteType: form.get("websiteType"),
      packageName: form.get("package"),
      message: form.get("message"),
    };

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Unable to send request.");
      }

      setSent(true);
      formElement.reset();
    } catch (error) {
      alert(error.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 text-left shadow-2xl backdrop-blur sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-bold text-zinc-300">
            Your Name
          </span>
          <input
            required
            name="name"
            type="text"
            placeholder="Your name"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-purple-400"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold text-zinc-300">
            Email
          </span>
          <input
            required
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-purple-400"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold text-zinc-300">
            Business Name
          </span>
          <input
            name="business"
            type="text"
            placeholder="Your business"
            className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-purple-400"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-bold text-zinc-300">
            Type of Website
          </span>
          <select
            required
            name="websiteType"
            defaultValue=""
            className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-purple-400"
          >
            <option value="" disabled>Select one</option>
            <option>Business Website</option>
            <option>E-Commerce Store</option>
            <option>Booking Website</option>
            <option>Restaurant Website</option>
            <option>Portfolio Website</option>
            <option>Other</option>
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-bold text-zinc-300">
            Package Interested In
          </span>
          <select
            name="package"
            defaultValue="Not Sure Yet"
            className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-white outline-none transition focus:border-purple-400"
          >
            <option>Not Sure Yet</option>
            <option>Starter - $299</option>
            <option>Business - $499</option>
            <option>Premium - $799</option>
            <option>E-Commerce - $1,199</option>
          </select>
        </label>

        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-bold text-zinc-300">
            Tell Us What You Need
          </span>
          <textarea
            required
            name="message"
            rows="5"
            placeholder="Tell us about your business, what you want your website to do, and anything you'd like included."
            className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-white outline-none transition focus:border-purple-400"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-gradient-to-r from-purple-600 via-fuchsia-500 to-cyan-500 px-8 py-4 text-lg font-black text-white shadow-xl shadow-purple-700/20 transition hover:scale-[1.02]"
      >
        Send Project Request →
      </button>

      {sent && (
        <p className="mt-4 text-center text-sm text-zinc-400">
          Your project information has been prepared for sending.
        </p>
      )}
    </form>
  );
}
