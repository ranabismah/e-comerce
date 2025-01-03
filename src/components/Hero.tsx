"use client";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#8A2BE2] to-[#C77DFF]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center space-x-8">
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-extrabold text-white">
            Welcome to ShopCapio!
          </h1>
          <p className="text-xl text-white mt-4">
            Discover amazing products tailored for you.
          </p>
          <Link href="/products">
            <button className="mt-6 py-2 px-6 bg-[#6A0572] text-white rounded-md hover:bg-[#C77DFF] transition-colors">
              Shop Now
            </button>
          </Link>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="/next.svg"
            alt="Hero Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
