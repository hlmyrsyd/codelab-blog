'use client'

import { TransitionWrapper } from "@/app/components";
import { OpeningContainer } from "@/app/components/openingContainer";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
        <div 
            className="fixed w-screen h-screen top-0 left-0"
            style={{
                backgroundColor: "var(--background)"
            }}
        >
            <div className="flex w-full h-full justify-space items-space">
                <OpeningContainer title="Page One" />

                <div className="flex w-full h-full justify-center itmes-center">
                    <TransitionWrapper isTransitioning={isTransitioning}>
                        <button 
                            className="rounded-md p-2 border border-black flex items-center justify-between bg-[#ddd] hover:bg-[#aaa]"
                            onClick={() => handleTransition('/codeground')}
                        >
                            Go Back
                        </button>
                    </ TransitionWrapper>
                </div>
            </div>
        </div>
    );
}