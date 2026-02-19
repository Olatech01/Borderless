"use client";

import Image from "next/image";

export default function Personal() {
    return (
        <section className="relative overflow-hidden bg-[#6C47FF] min-h-[559px] md:pt-0 pt-8 flex justify-end items-end px-8 md:px-16 ">
            <div className="mx-auto flex w-[1200px] flex-col justify-end items-center gap-12 lg:flex-row lg:items-center lg:gap-16">

                {/* ── Left Column ── */}
                <div className="flex-1 text-white">
                    {/* Heading */}
                    <h1 className="mb-4 text-[40px] font-bold leading-[1.12] tracking-tight md:text-5xl">
                        The future of{" "}
                        <span
                            className="italic text-[#F5A623]"
                            style={{ fontFamily: "'Georgia', serif" }}
                        >
                            personal
                        </span>
                        <br className='md:block hidden'/>
                        banking
                    </h1>

                    {/* Subtext */}
                    <p className="mb-8 max-w-xs text-sm leading-relaxed text-white/75 md:text-base">
                        Go borderless on mobile! Download the app and signup to enjoy.
                    </p>

                    {/* Store Buttons */}
                    <div className="mb-8 flex flex-wrap gap-3">
                        {/* App Store */}
                        <a
                            href="#"
                            className="flex items-center gap-2.5 rounded-xl border-2 border-white bg-black px-4 py-2.5 transition hover:bg-gray-900"
                        >
                            <svg width="20" height="24" viewBox="0 0 24 28" fill="white">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.18 1.27-2.16 3.8.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.37 2.78M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            <div>
                                <p className="text-[9px] font-medium uppercase tracking-widest text-white/70">
                                    Download on the
                                </p>
                                <p className="text-sm font-bold text-white leading-tight">
                                    App Store
                                </p>
                            </div>
                        </a>

                        {/* Google Play */}
                        <a
                            href="#"
                            className="flex items-center gap-2.5 rounded-xl border-2 border-white bg-black px-4 py-2.5 transition hover:bg-gray-900"
                        >
                            <svg width="20" height="22" viewBox="0 0 24 24" fill="none">
                                <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-11.46L13.1 8.84 3.18 23.76z" fill="#EA4335" />
                                <path d="M21.54 10.27l-2.93-1.68-3.82 3.47 3.82 3.47 2.96-1.7c.84-.48.84-1.56-.03-2.06z" fill="#FBBC05" />
                                <path d="M4.17.44C3.82.4 3.48.47 3.18.64L13.1 15.16l3.68-3.36L4.17.44z" fill="#4285F4" />
                                <path d="M3.18.64C2.47 1.06 2 1.83 2 2.83v18.34c0 1 .47 1.77 1.18 2.19l9.92-11.56L3.18.64z" fill="#34A853" />
                            </svg>
                            <div>
                                <p className="text-[9px] font-medium uppercase tracking-widest text-white/70">
                                    Get it on
                                </p>
                                <p className="text-sm font-bold text-white leading-tight">
                                    Google Play
                                </p>
                            </div>
                        </a>
                    </div>

                    {/* Trust Badge */}
                    <div>
                        <p className="mb-1.5 text-sm text-white/80">
                            Trusted by{" "}
                            <span className="font-bold text-white">50k+</span> customers
                        </p>
                        <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="#F5A623">
                                    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.44.91-5.32L2.27 6.62l5.34-.78L10 1z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-end justify-end">
                    <Image height={840} width={403} src={"/money.svg"} alt="iiiiii"/>
                   
                </div>

            </div>
        </section>
    );
}