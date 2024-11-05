'use client';

import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";

export const TransitionWrapper = ({ children, isTransitioning }: { children: React.ReactNode, isTransitioning: boolean }) => {
    useEffect(() => {
        console.log('Transitioning state:', isTransitioning);
    }, [isTransitioning]);

    return (
        <>
            {isTransitioning && (
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{
                        duration: 0.5,
                        delay: 0.5,
                        ease: "circInOut",
                    }}
                    className="fixed top-0 left-0 w-screen h-screen bg-white dark:bg-neutral-900 z-50"
                />
            )}
            <div className="flex w-full h-full justify-center items-center">
                {children}
            </div>
        </>
    );
};
