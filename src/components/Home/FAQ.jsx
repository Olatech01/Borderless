"use client";

import { useState } from "react";
import { faqs } from "../constants/data";



function FAQItem({ faq, isOpen, onToggle }) {
    return (
        <div
            className={`rounded-2xl border bg-white transition-all duration-300 ${isOpen
                ? "border-violet-200 shadow-[0_4px_24px_rgba(139,92,246,0.08)]"
                : "border-gray-200 hover:border-gray-300"
                }`}
        >
            <button
                onClick={onToggle}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-gray-900 text-[15px] leading-snug">
                    {faq.question}
                </span>

                {/* Icon */}
                <span
                    className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen
                        ? "border-gray-900 bg-gray-900 text-white rotate-0"
                        : "border-gray-300 bg-gray-50 text-gray-500"
                        }`}
                >
                    {isOpen ? (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                                d="M2 6h8"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                        </svg>
                    ) : (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path
                                d="M6 2v8M2 6h8"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                        </svg>
                    )}
                </span>
            </button>

            {/* Animated Answer */}
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="border-t border-gray-100 px-6 pb-5 pt-3 text-sm text-gray-500 leading-relaxed">
                        {faq.answer}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default function FAQSection() {
    const [openId, setOpenId] = useState(1);

    const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

    return (
        <section className="min-h-screen bg-[#FAFAFA] flex items-center justify-center md:px-6 px-3 py-20">
            <div className="mx-auto w-[1200px] ">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16 lg:items-start">

                    {/* ── Left Column ── */}
                    <div className="lg:sticky lg:top-24">
                        {/* Badge */}
                        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-violet-100 px-3.5 py-1.5">
                            <span className="text-xs font-semibold text-violet-600 tracking-wide">
                                Frequently Asked questions
                            </span>
                            <span className="text-sm">🤔</span>
                        </div>

                        {/* Heading */}
                        <h2 className="mb-4 text-[40px] font-bold leading-[1.15] tracking-tight text-gray-900">
                            Got questions?{" "} We got  <br className="hidden md:block" />
                            answers!
                        </h2>

                        {/* Subtext */}
                        <p className="mb-8 max-w-[260px] text-[14px] leading-relaxed text-gray-500">
                            Feel free to reach out to us if you have more questions for us.
                        </p>

                        {/* CTA Button */}
                        <button className="group inline-flex items-center gap-2.5 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-gray-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0">
                            Contact us
                            <svg
                                className="transition-transform duration-200 group-hover:translate-x-0.5"
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                            >
                                <path
                                    d="M2 7h10M8 3l4 4-4 4"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* ── Right Column ── */}
                    <div className="flex flex-col gap-3">
                        {faqs.map((faq) => (
                            <FAQItem
                                key={faq.id}
                                faq={faq}
                                isOpen={openId === faq.id}
                                onToggle={() => toggle(faq.id)}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}