export const CreateProject = [
    {
        name: 'bash',
        language: 'bash',
        code: `npx create-next-app@latest`,
    }
];

export const InstallFramer = [
    {
        name: 'bash',
        language: 'bash',
        code: `npx install framer-motion`,
    }
];

export const SetupCode = [
    {
        name: 'page.tsx',
        language: 'typescript',
        code: 
`'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { TransitionWrapper } from "../TransitionWrapper";
import { OpeningContainer } from "../openingContainer";

export default function Home() {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const router = useRouter();

    const handleTransition = (route: string) => {
        setIsTransitioning(true);
        setTimeout(() => {
        router.push(route);
        }, 1300); // Control the transition timing
    };

    return (
        <>
            <div className="flex w-full h-full justify-space items-space">
                <OpeningContainer title="Home" />

                <div className="flex w-full h-full justify-center itmes-center">
                    <TransitionWrapper isTransitioning={isTransitioning}>
                        <button 
                            className="rounded-md p-2 border border-black flex items-center justify-between bg-[#ddd] hover:bg-[#aaa]"
                            onClick={() => handleTransition('/pageOne')}
                        >
                            Go to Page One
                        </button>
                    </ TransitionWrapper>
                </div>
            </div>
        </>
    );
}`
    },
    {
        name: 'transitionWrapper.tsx',
        language: 'typescript',
        code:
`'use client';

import { motion } from "framer-motion";
import React from "react";
import { useEffect } from "react";

export const TransitionWrapper = ({ 
    children, isTransitioning }: { 
        children: React.ReactNode, isTransitioning: boolean }) => {
    
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
                    className="fixed top-0 left-0 w-screen h-screen bg-white z-50"
                />
            )}
            <div className="flex w-full h-full justify-center items-center">
                {children}
            </div>
        </>
    );
};`
    },
    {
        name: 'openingContainer.tsx',
        language: 'typescript',
        code:
`'use client';

import { motion } from "framer-motion";

interface OpeningContainerProps {
    title: string;
    children?: React.ReactNode;
}

export const OpeningContainer = ({ 
    title, 
    children }: OpeningContainerProps) => (
    <motion.div
        className="fixed top-0 left-0 w-full h-full bg-white z-50"
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 0.8, delay: 0.8, ease: "circInOut" }}
    >
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="flex h-full w-full justify-center items-center text-6xl font-bold"
        >
            <h1>{title}</h1>
        </motion.div>
        {children}
    </motion.div>
);`
    }
]

export const FinalCode = [
    {
        name: 'pageOne.tsx',
        language: 'typescript',
        code: 
`'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { TransitionWrapper } from "../TransitionWrapper";
import { OpeningContainer } from "../openingContainer";

export default function PageOne() {
    const [isTransitioning, setIsTransitioning] = useState(false);
    const router = useRouter();

    const handleTransition = (route: string) => {
        setIsTransitioning(true);
        setTimeout(() => {
        router.push(route);
        }, 1300); // Control the transition timing
    };

    return (
        <>
            <div className="flex w-full h-full justify-space items-space">
                <OpeningContainer title="Home" />

                <div className="flex w-full h-full justify-center itmes-center">
                    <TransitionWrapper isTransitioning={isTransitioning}>
                        <button 
                            className="rounded-md p-2 border border-black flex items-center justify-between bg-[#ddd] hover:bg-[#aaa]"
                            onClick={() => handleTransition('/pageOne')}
                        >
                            Go to Back
                        </button>
                    </ TransitionWrapper>
                </div>
            </div>
        </>
    );
}`
    }
]
