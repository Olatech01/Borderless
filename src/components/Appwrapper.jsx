"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import Navigation from './Navigation'

const Appwrapper = ({ children }) => {
    const pathname = usePathname()
    return (
        <div className="min-h-screen">
            {children}

            <footer className="fixed md:top-4 top-2 z-50 left-0 right-0">
                <div className="max-w-screen-lg mx-auto px-4">
                    <Navigation />
                </div>
            </footer>
        </div>
    )
}

export default Appwrapper