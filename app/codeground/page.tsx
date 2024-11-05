'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import { TransitionWrapper } from "../components";
import { OpeningContainer } from "../components/openingContainer";

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
        <div 
            className="fixed w-screen h-screen top-0 left-0"
            style={{
                backgroundColor: "var(--background)"
            }}
        >
            <div className="flex w-full h-full justify-space items-space">
                <OpeningContainer title="Home" />

                <div className="flex w-full h-full justify-center itmes-center">
                    <TransitionWrapper isTransitioning={isTransitioning}>
                        <button 
                            className="rounded-md p-2 border border-black flex items-center justify-between bg-[#ddd] hover:bg-[#aaa]"
                            onClick={() => handleTransition('/codeground/pageOne')}
                        >
                            Go to Page One
                        </button>
                    </ TransitionWrapper>
                </div>
            </div>
        </div>
    );
}