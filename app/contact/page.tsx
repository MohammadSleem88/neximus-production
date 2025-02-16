"use client";

import React from "react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-black via-[#0b0b0b] to-gray-900 min-h-screen text-white">
      {/* OPTIONAL: If you want to reuse your existing Navbar or Footer, import them and place them here */}
      {/* <Navbar /> */}

      {/* Contact Hero Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pt-24 pb-16 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          Contact Us
        </h1>
        <p className="mt-6 text-xl sm:text-2xl text-gray-300 font-medium max-w-2xl mx-auto">
          We’d love to hear from you! Let us know how we can help or
          collaborate.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 pb-24">
        <div className="max-w-2xl mx-auto bg-black/60 p-8 rounded-xl shadow-md border border-gray-800">
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Email Address"
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Tell us more about what you need..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full shadow-lg hover:-translate-y-1 transition-transform"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* OPTIONAL: Mega Footer or any other footer you want to reuse */}
      {/* <MegaFooter /> */}
    </div>
  );
}
