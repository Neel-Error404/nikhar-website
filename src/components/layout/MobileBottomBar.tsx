"use client";

import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { getWhatsAppLink, getCallLink } from "@/lib/whatsapp";

export function MobileBottomBar() {
    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t border-border/40 flex items-center justify-around h-16 px-2 pb-safe">
            <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-full h-full text-muted-foreground hover:text-gold"
            >
                <MessageCircle className="h-5 w-5 mb-1" />
                <span className="text-[10px] font-medium leading-none">WhatsApp</span>
            </a>

            <div className="w-px h-8 bg-border/40" />

            <a
                href={getCallLink()}
                className="flex flex-col items-center justify-center w-full h-full text-muted-foreground hover:text-gold"
            >
                <Phone className="h-5 w-5 mb-1" />
                <span className="text-[10px] font-medium leading-none">Call</span>
            </a>

            <div className="w-px h-8 bg-border/40" />

            <Link
                href="/contact"
                className="flex flex-col items-center justify-center w-full h-full text-gold-2 hover:text-gold"
            >
                <Calendar className="h-5 w-5 mb-1" />
                <span className="text-[10px] font-medium leading-none">Book</span>
            </Link>
        </div>
    );
}
