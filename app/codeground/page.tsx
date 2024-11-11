'use client'

import Magnetic from "./magnetic";
import StickyCursor from "./stickyCursor";

export default function Home() {

    return (
        <div 
            className="fixed w-screen h-screen top-0 left-0"
            style={{
                backgroundColor: "var(--background)"
            }}
        >
            <div className="flex w-full text-center p-10 flex-col">
                <code>
                    This is Codeground to test CodeLab Documentation
                </code>
            </div>
            {/* <StickyCursor /> */}
            <div className="flex w-full h-full justify-center items-center">
                <Magnetic />
            </div>
        </div>
    );
}