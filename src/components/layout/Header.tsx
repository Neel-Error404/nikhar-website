"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-20 max-w-7xl mx-auto items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-6 md:gap-10">
                    <Link href="/" className="flex items-center h-full py-2">
                        <Image src="/logo.jpg" alt="NIKHAR Logo" width={200} height={80} priority className="object-contain h-12 md:h-16 w-auto" />
                    </Link>
                    <nav className="hidden md:flex gap-6">
                        <Link href="/" className="transition-colors hover:text-gold text-foreground/80 font-medium">Home</Link>
                        <Link href="/services" className="transition-colors hover:text-gold text-foreground/80 font-medium">Services</Link>
                        <Link href="/about" className="transition-colors hover:text-gold text-foreground/80 font-medium">About</Link>
                        <Link href="/contact" className="transition-colors hover:text-gold text-foreground/80 font-medium">Contact</Link>
                    </nav>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <Button asChild className="bg-gold text-black hover:bg-gold-2">
                        <Link href="/contact">Book Appointment</Link>
                    </Button>
                </div>

                <button className="md:hidden flex items-center" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                    {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden border-b border-border/40 bg-background px-4 py-4">
                    <nav className="flex flex-col space-y-4">
                        <Link href="/" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-gold font-medium">Home</Link>
                        <Link href="/services" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-gold font-medium">Services</Link>
                        <Link href="/about" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-gold font-medium">About</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)} className="text-foreground/80 hover:text-gold font-medium">Contact</Link>
                        <Button asChild className="bg-gold text-black hover:bg-gold-2 mt-2 w-full">
                            <Link href="/contact" onClick={() => setIsOpen(false)}>Book Appointment</Link>
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}
