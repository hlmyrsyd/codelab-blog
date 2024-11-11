'use client'

import StickyCursor from "./stickyCursor";

export default function Home() {

    return (
        <div 
            className="fixed w-screen h-screen top-0 left-0"
            style={{
                backgroundColor: "var(--background)"
            }}
        >
            <StickyCursor />
            <div className="flex w-full h-full justify-center items-center">
                <div className="w-36 h-36 bg-neutral-300">
                    Test Image
                </div>
            </div>
        </div>
    );
}