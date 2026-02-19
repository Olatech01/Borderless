import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "../constants/data";



const Footer = () => {
    return (
        <footer className="relative w-full overflow-hidden bg-[#0D0926]">
            {/* Purple gradient glow — bottom center */}
            <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-purple-700/30 blur-[80px]" />
            <div className="pointer-events-none absolute bottom-0 right-1/4 h-48 w-96 rounded-full bg-violet-900/20 blur-[60px]" />

            {/* Main content */}
            <div className="relative mx-auto max-w-7xl px-8 py-14 md:px-8">
                <div className="md:flex md:flex-row md:justify-between md:gap-8">

                    {/* Logo */}
                    <div className="flex items-start">
                        <Image
                            height={38}
                            width={211}
                            src="/logoo.svg"
                            alt="Borderless logo"
                            className="object-contain"
                        />
                    </div>

                    {/* Link columns */}
                    {footerLinks.map((col) => (
                        <div key={col.heading} className="mt-10 md:mt-0">
                            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.15em] text-white">
                                {col.heading}
                            </p>
                            <ul className="flex flex-col gap-3.5">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-purple-200/70 transition-colors duration-200 hover:text-white"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Divider */}
            <div className="relative mx-auto max-w-7xl px-8 md:px-16">
                <div className="h-px w-full bg-white/10" />
            </div>

            {/* Bottom bar */}
            <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-8 py-5 text-sm text-purple-200/60 md:flex-row md:px-16">
                <p className="flex items-center gap-1.5">
                    Built with{" "}
                    <span className="text-red-400">♥</span>
                </p>
                <p>© 2023 borderless. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;