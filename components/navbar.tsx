"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b border-stone-800 bg-black text-white sticky top-0 z-50 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-yellow-400"
        >
          Dhamma Online
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-yellow-400 transition">
            About
          </Link>

          <Link href="/teachings" className="hover:text-yellow-400 transition">
            Teachings
          </Link>

          <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-stone-800 bg-stone-950 px-6 py-6 flex flex-col gap-6">
          <Link
            href="/"
            className="hover:text-yellow-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-yellow-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            href="/teachings"
            className="hover:text-yellow-400 transition"
            onClick={() => setMenuOpen(false)}
          >
            Teachings
          </Link>

          <button className="bg-yellow-500 text-black px-4 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}