"use client";

import PostCard from "../components/PostCard";
import { useState, useEffect, useRef } from "react";

interface Profile {
  id: number;
  name: string;
  image: string;
}

interface Post {
  id: number;
  title: string;
  image: string;
  description: string;
}

export default function DashboardHome() {
  const posts: Post[] = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Investment Opportunity ${i + 1}`,
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjsJg0VZ_OohPt6dIBkUV2kloFjIo-7M0q2Q&s`,
    description:
      "A promising investment opportunity in startups and businesses.",
  }));

  const profiles: Profile[] = [
    { id: 1, name: "CRED", image: "https://play-lh.googleusercontent.com/r2ZbsIr5sQ7Wtl1T6eevyWj4KS7QbezF7JYB9gxQnLWbf0K4kU7qaLNcJLLUh0WG-3pK" },
    { id: 2, name: "PharmEasy", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWgxnMmopw1HyP_RuES3feWwydIWd9DeRwA&s" },
    { id: 3, name: "Meesho", image: "https://images.moneycontrol.com/static-mcnews/2023/06/Meesho-682x435.jpg" },
    { id: 4, name: "Groww", image: "https://s3.ap-south-1.amazonaws.com/assets.ynos.in/startup-logos/YNOS355238.jpg" },
    { id: 5, name: "Zepto", image: "https://thehardcopy.co/wp-content/uploads/Zepto-Featured-Image-Option-2.png" },
    { id: 6, name: "Zomato", image: "https://play-lh.googleusercontent.com/ixPkPHkzd8VD0HbmCL1n5PKYi3tWn8hGpRjeP6lutuFWZ6VpXUePGa9ZHcP6f_99bDA=s256-rw" },
    { id: 7, name: "Razorpay", image: "https://media.tradly.app/images/marketplace/34521/razor_pay_icon-ICtywSbN.png" },
    { id: 8, name: "Swiggy", image: "https://i.pinimg.com/736x/b3/8a/a1/b38aa1b21050b0e769a97eb751d12829.jpg" },
    { id: 9, name: "Urban Company", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvsiCUd5RxzxOhozbW-uRfYvWsVOkyFI4wlw&s" },
    { id: 10, name: "OYO", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShb4pWn9OwzpRQObvs4aUCthq104HHo_FehQ&s" },
  ];

  const banners = [
    { id: 1, image: "/banner1.png", alt: "Startup Growth" },
    { id: 2, image: "/banner2.jpg", alt: "Finance Banner" },
    { id: 3, image: "/banner3.png", alt: "Tech Innovation" },
  ];

  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (bannerRef.current) {
        bannerRef.current.scrollBy({ left: 300, behavior: "smooth" });
        if (
          bannerRef.current.scrollLeft + bannerRef.current.clientWidth >=
          bannerRef.current.scrollWidth
        ) {
          bannerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  const handleProfileClick = (profile: Profile) => {
    alert(`Clicked on ${profile.name}`);
  };

  return (
    <div className="flex justify-center w-full px-3 pt-[70px] sm:px-1 py-18 flex-col max-w-3xl mx-auto">
      {/* Profile Stories */}
      <div className="flex space-x-4 overflow-x-auto py-3 mb-4 scrollbar-hide">
        {profiles.map((profile) => (
          <button
            key={profile.id}
            onClick={() => handleProfileClick(profile)}
            className="flex flex-col items-center focus:outline-none"
            title={profile.name}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full p-[2px] bg-gradient-to-tr via-yellow-400 to-purple-600 cursor-pointer hover:scale-105 transform transition duration-300 shadow-md">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full rounded-full border-2 border-white object-cover"
              />
            </div>
            <span className="text-xs sm:text-sm text-center mt-1 truncate max-w-[72px]">
              {profile.name}
            </span>
          </button>
        ))}
      </div>

      {/* Auto-scrollable banners */}
      <div
        ref={bannerRef}
        className="flex overflow-x-auto space-x-4 mb-8 scrollbar-hide"
      >
        {banners.map((banner) => (
          <img
            key={banner.id}
            src={banner.image}
            alt={banner.alt}
            className="w-[300px] h-[150px] rounded-lg object-cover flex-shrink-0 shadow-md"
          />
        ))}
      </div>

      {/* Latest Feeds Label */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          Latest Feeds
        </h2>
        <span className="text-sm text-gray-500 dark:text-gray-400 cursor-pointer hover:underline">
          View All
        </span>
      </div>

      {/* Posts */}
      <div className="grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
