'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { TransitionWrapper } from "..";

export default function Sidebar() {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const router = useRouter();

    const handleTransition = (route: string) => {
        setIsTransitioning(true);
        setTimeout(() => {
        router.push(route);
        }, 1300);
    };

    return (
        <TransitionWrapper isTransitioning={isTransitioning}>
            <div>
                <button
                    className="w-full rounded-md border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-between hover:bg-[#f2f2f2] dark:hover:bg-[#2a2a2a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 mb-4"
                    onClick={() => handleTransition('https://www.hilmyrasyad.site/')}
                >
                    <h1>Let&apos;s get back</h1>
                </button>
                <button
                    className="w-full rounded-md border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-between hover:bg-[#f2f2f2] dark:hover:bg-[#2a2a2a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 mb-4"
                    onClick={() => handleTransition('https://www.codelab.hilmyrasyad.site/')}
                >
                    <h1>CodeLab</h1>
                </button>
                <Link
                    className="w-full rounded-md border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-between hover:bg-[#f2f2f2] dark:hover:bg-[#2a2a2a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 mb-4"
                    href="/infiniteText"
                >
                    <h1>Infinite Text</h1>
                </Link>
            </div>
        </TransitionWrapper>
    );
}
