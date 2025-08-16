"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { SignedIn, useUser, SignOutButton } from "@clerk/nextjs";

export default function NavbarAuth() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { user } = useUser();

  return (
    <header className="w-full bg-white/60 backdrop-blur fixed top-0 left-0 right-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center">
            <Image
              src="/kingfisher.png"
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

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/dashboard" className="text-slate-700 hover:text-slate-900">Home</Link>
          <Link href="/dashboard/fundraise" className="text-slate-700 hover:text-slate-900">Fundraise</Link>
          <Link href="/dashboard/invest-company" className="text-slate-700 hover:text-slate-900">Invest</Link>
          <Link href="/dashboard/stocks" className="text-slate-700 hover:text-slate-900">Stocks</Link>
          <Link href="/dashboard/create-post" className="text-slate-700 hover:text-slate-900">Create Post</Link>

          {/* Custom User Menu (Desktop) */}
          <SignedIn>
            {user && (
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2"
                >
                  <img
                    src={user.imageUrl}
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white shadow-md rounded-lg p-3 z-50">
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        src={user.imageUrl}
                        alt="Profile"
                        className="w-6 h-6 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-sm">{user.fullName}</p>
                        <p className="text-xs text-slate-500">
                          {user.primaryEmailAddress?.emailAddress}
                        </p>
                      </div>
                    </div>
                    <SignOutButton>
                      <button className="w-full text-left text-red-500 text-sm py-2 hover:underline">
                        Sign out
                      </button>
                    </SignOutButton>
                  </div>
                )}
              </div>
            )}
          </SignedIn>
        </nav>

        {/* Mobile Toggle Button */}
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

        {/* Mobile Menu */}
        {open && (
          <div className="absolute right-4 top-16 bg-white rounded-md p-4 shadow-md md:hidden w-56">
            <Link href="/dashboard" className="block py-2">Home</Link>
            <Link href="/fundraise" className="block py-2">Fundraise</Link>
            <Link href="/invest" className="block py-2">Invest</Link>
            <Link href="/create-post" className="block py-2">Create Post</Link>

            {user && (
              <div className="mt-3 border-t pt-3">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={user.imageUrl}
                    alt="Profile"
                    className="w-6 h-6 rounded-full"
                  />
                  <div>
                    <p className="font-semibold text-sm">{user.fullName}</p>
                    <p className="text-xs text-slate-500">
                      {user.primaryEmailAddress?.emailAddress}
                    </p>
                  </div>
                </div>
                <SignOutButton>
                  <button className="w-full text-left text-red-500 text-sm py-2 hover:underline">
                    Sign out
                  </button>
                </SignOutButton>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
