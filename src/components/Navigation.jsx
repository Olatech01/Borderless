"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

const Navigation = () => {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    const menu = [
        { name: "Home", path: "/" },
        { name: "Features", path: "/features" },
        { name: "Pricing", path: "/pricing" },
        { name: "Help", path: "/help" },
    ]

    // Close menu when route changes
    useEffect(() => {
        setOpen(false)
    }, [pathname])

    return (
        <div className="w-full flex justify-center px-4 pt-6">
            <div className="w-full md:max-w-[888px] bg-white h-[70px] flex items-center justify-between px-4 rounded-[16px] relative">

                {/* Logo */}
                <Image height={38} width={58} src={"/logo.svg"} alt="logo" />

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-12">
                    {menu.map((item, index) => (
                        <Link
                            href={item.path}
                            key={index}
                            className={`${pathname === item.path
                                ? "text-[#2E3539] font-bold"
                                : "text-[#6C747D]"
                                }`}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex gap-4">
                    <button className="border border-[#FAFAFA] text-[#B62619] text-[16px] font-semibold h-[38px] rounded-[12px] w-[80px]">
                        Login
                    </button>
                    <button className="text-white bg-[#2E3539] px-4 h-[38px] text-[16px] font-semibold rounded-[12px]">
                        Join Borderless
                    </button>
                </div>

                {/* Mobile Toggle Button */}
                <div className="md:hidden">
                    {open ? (
                        <HiX size={28} onClick={() => setOpen(false)} className="cursor-pointer" />
                    ) : (
                        <HiMenu size={28} onClick={() => setOpen(true)} className="cursor-pointer" />
                    )}
                </div>

                {/* Mobile Dropdown */}
                {open && (
                    <div className="absolute top-[80px] left-0 w-full bg-white rounded-[16px] shadow-lg p-6 flex flex-col gap-6 md:hidden">

                        {menu.map((item, index) => (
                            <Link
                                href={item.path}
                                key={index}
                                className={`${pathname === item.path
                                    ? "text-[#2E3539] font-bold"
                                    : "text-[#6C747D]"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <div className="flex flex-col gap-4 pt-4 border-t">
                            <button className="border text-[#B62619] h-[38px] rounded-[12px]">
                                Login
                            </button>
                            <button className="text-white bg-[#2E3539] h-[38px] rounded-[12px]">
                                Join Borderless
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navigation
