'use client'

import { motion } from "framer-motion";
import { useState } from "react";

export const WavyText = ({ text }: { text: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    const letterVariants = {
        initial: { y: 0 },
        hover: { y: -22, transition: { ease: "easeInOut", duration: 0.5 } },
        exit: { y: 0, transition: { ease: "easeInOut", duration: 0.5 } },
    };

    const secondVariants = {
        initial: { y: 20 },
        hover: { y: 0, transition: { ease: "easeInOut", duration: 0.4 } },
        exit: { y: 20, transition: { ease: "easeInOut", duration: 0.4 } },
    };

    const borderVariants = {
        initial: { width: 0 },
        hover: { width: "100%", transition: { ease: "easeInOut", duration: 0.8 } },
        exit: { width: 0, transition: { ease: "easeInOut", duration: 0.2, delay: 0.2 } },
    };

    const containerVariants = {
        hover: {
            transition: {
                staggerChildren: 0.01,
                ease: "easeInOut",
            },
        },
        exit: {
            transition: {
                staggerChildren: 0.005,
                ease: "easeInOut",
            },
        },
    };

    const space = {
        width: "0.3rem"
    }

    return (
        <div className="inline-block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white transition duration-300 delay-100">
            <motion.div
                className="flex flex-col h-6 overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial="initial"
                animate={isHovered ? "hover" : "exit"}
                variants={containerVariants}
            >
                <div className="relative top-0">
                    {text.split(" ").map((word, wordIndex) => (
                        <span key={wordIndex} className="inline-flex">
                            {word.split("").map((letter, letterIndex) => (
                                <motion.span
                                    key={letterIndex}
                                    variants={letterVariants}
                                    className="inline-block"
                                >
                                    {letter}
                                </motion.span>
                            ))}
                            {/* Only add a space if this is not the last word */}
                            {wordIndex < text.split(" ").length - 1 && (
                                <span className="inline-block" style={space}> </span>
                            )}
                        </span>
                    ))}
                </div>
                <div className="relative -top-7">
                    {text.split(" ").map((word, wordIndex) => (
                        <span key={wordIndex} className="inline-flex">
                            {word.split("").map((letter, letterIndex) => (
                                <motion.span
                                    key={letterIndex}
                                    variants={secondVariants}
                                    className="inline-block"
                                >
                                    {letter}
                                </motion.span>
                            ))}
                            {wordIndex < text.split(" ").length - 1 && (
                                <span className="inline-block" style={space}> </span>
                            )}
                        </span>
                    ))}
                </div>
            </motion.div>
            <motion.div 
                className="h-[1px] bg-black dark:bg-white mt-1"
                variants={borderVariants}
                initial="initial"
                animate={isHovered ? "hover" : "exit"}
            />
        </div>
    );
};
