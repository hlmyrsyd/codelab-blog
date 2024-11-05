'use client'

import { TransitionWrapper } from "@/app/components";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function pageTwo() {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const router = useRouter();

    const handleTransition = (route: string) => {
        setIsTransitioning(true);
        setTimeout(() => {
        router.push(route);
        }, 1300);
    };
    
    return (
        <div
            className="fixed w-full h-screen top-0 left-0 z-50"
            style={{
                backgroundColor: 'var(--background)',
            }}
        >
            <motion.div
                className="fixed top-0 left-0 w-full h-full bg-white dark:bg-neutral-900 z-50"
                initial={{ y: 0 }}
                animate={{ y: "-100%" }}
                transition={{ duration: 0.8, delay: 0.8, ease: "circInOut" }}
            >
                <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                className="flex h-full w-full justify-center items-center text-6xl font-bold">
                <h1>Page Two</h1>
                </motion.div>
            </motion.div>
            <div className="flex w-full text-center p-10 flex-col">
                <code>
                    This is Codeground to test CodeLab Documentation
                </code>
            </div>
            <div className="h-full w-full flex flex-col items-center justify-center gap-10">
                <div>
                    <h1 className="text-3xl font-bold">Page Two</h1>
                </div>
                <TransitionWrapper isTransitioning={isTransitioning}>
                    <button 
                        className="rounded-md border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-between hover:bg-[#f2f2f2] dark:hover:bg-[#2a2a2a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 mb-4"
                        onClick={() => handleTransition('/codeground')}
                    >
                        Codeground
                    </button>
                    <button 
                        className="rounded-md border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-between hover:bg-[#f2f2f2] dark:hover:bg-[#2a2a2a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 mb-4"
                        onClick={() => handleTransition('/codeground/pageOne')}
                    >
                        Page One
                    </button>
                </TransitionWrapper>
            </div>
        </div>
    );
};
