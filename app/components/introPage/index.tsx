'use client'

import { motion } from "framer-motion"

export default function IntroPage() {
    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-full h-full bg-white dark:bg-neutral-900 z-50"
                initial={{ y: 0 }} // Fullscreen overlay
                animate={{ y: "-100%" }} // Slide up out of view
                transition={{ duration: 0.8, delay: 0.8, ease: "circInOut" }} // 1 second delay, 1 second slide up
            >
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    className="flex h-full w-full justify-center items-center text-6xl font-bold">
                    <h1>CodeLab</h1>
                </motion.div>
            </motion.div>
        </>
    );
};
