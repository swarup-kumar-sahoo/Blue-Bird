"use client";
import Link from "next/link";
import Image from "next/image"; // For SVG icon
import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white/60 backdrop-blur sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center">
            <Image
              src="/kingfisher.png" // Make sure this file exists in /public
              alt="Kingfisher Logo"
              width={24}
              height={24}
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Blue Bird</h1>
            <p className="text-xs text-slate-500 -mt-1">Startup investment</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-slate-700 hover:text-slate-900">About</a>
          <a href="#how" className="text-slate-700 hover:text-slate-900">How it works</a>
          <a href="#contact" className="text-slate-700 hover:text-slate-900">Contact</a>
          <SignedIn>
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in" className="px-4 py-2 rounded-md border border-slate-200 bg-white">Login</Link>
            <Link href="/sign-up" className="px-4 py-2 rounded-md bg-sky-600 text-white">Get started</Link>
          </SignedOut>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setOpen(!open)} className="p-2 rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {open && (
          <div className="absolute right-4 top-16 bg-white rounded-md p-4 shadow-md md:hidden">
            <a href="#about" className="block py-2">About</a>
            <a href="#how" className="block py-2">How it works</a>
            <a href="#contact" className="block py-2">Contact</a>
            <div className="mt-2">
              <Link href="/sign-in" className="block py-2">Login</Link>
              <Link href="/sign-up" className="block py-2 font-semibold text-sky-600">Get started</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
