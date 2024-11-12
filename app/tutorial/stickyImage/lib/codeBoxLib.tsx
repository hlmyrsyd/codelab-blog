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
`import StickyImage from "../stickyImage";

export default function Home() {
    return (
        <>
            <div className="flex w-full h-full justify-center items-center">
                <StickyImage />
            </div>
        </>
    );
}`
    },
    {
        name: 'stickyImage.tsx',
        language: 'typescript',
        code:
`import Image from "next/image";

export default function StickyImage() {
    return (
        // Div for the image size and motion
        <div className="w-72 h-72 flex justify-center items-center cursor-pointer>
            // Div for the image
            <div className="flex w-full h-full>
                <Image
                    src="/images/example.png"
                    alt="example"
                    height={600}
                    width={600}
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    )
}

`
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
                            Go Back
                        </button>
                    </ TransitionWrapper>
                </div>
            </div>
        </>
    );
}`
    }
]
