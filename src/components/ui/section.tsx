import { cn } from "@/lib/utils";

export function Section({
    children,
    className,
    id,
}: {
    children: React.ReactNode;
    className?: string;
    id?: string;
}) {
    return (
        <section id={id} className={cn("py-12 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full", className)}>
            {children}
        </section>
    );
}
