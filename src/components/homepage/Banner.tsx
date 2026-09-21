import Image from 'next/image';
import React from 'react';
import bannerImage from "@/assets/hero_img.jpg"

const Banner = () => {
    return (
        <div className="relative overflow-hidden container mx-auto my-8 md:my-14 rounded-3xl bg-linear-to-br from-slate-50 via-zinc-100 to-slate-200/70 border border-slate-200/80 shadow-xl shadow-slate-200/50 p-8 sm:p-12 lg:p-20">
            {/* Soft background ambient glow */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-emerald-100/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-sky-100/40 blur-3xl" />

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Text & Action Column */}
                <div className="space-y-8 text-center lg:text-left">
                    <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 leading-[1.15]">
                        Books to freshen up <br className="hidden sm:inline" /> your bookshelf
                    </h1>

                    <div>
                        <button className="btn btn-success text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
                            View The List
                        </button>
                    </div>
                </div>

                {/* Image Column */}
                <div className="flex justify-center lg:justify-end items-center">
                    <div className="relative transition-transform duration-300 hover:scale-[1.02]">
                        <Image
                            src={bannerImage}
                            alt=""
                            className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto object-contain drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;