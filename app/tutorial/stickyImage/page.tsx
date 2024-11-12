'use client'

import { CodeBox } from "@/app/components";
import { CreateProject, FinalCode, InstallFramer, ScaleupImage, SetupCode } from "./lib/codeBoxLib";
import Image from "next/image";

export default function StickyImage() {           
    
    return (
        <div className="flex flex-col">
            <div className="border-b border-solid border-black/[.08] dark:border-white/[.145]">
                <h1 className="text-[5rem] font-bold">
                    Sticky Image
                </h1>
            </div>

            <section className="py-4 gap-4">
                <h1 className="text-xl">
                    Build a sticky image with Next.js and Framer Motion
                </h1>
                <p>
                    A website tutorial to make a sticky magnetic image to the cursor. 
                </p>
            </section>

            <section className="flex flex-col py-4 gap-4">
                <video 
                    src="/videos/stickyImage.mp4" 
                    autoPlay
                    loop 
                    muted
                    className="w-full h-auto rounded-xl"
                />
            </section>

            <section className="flex flex-col gap-10">
                <div>
                    <h1 className="text-2xl pb-3">Create the Project</h1>
                    <div className="flex flex-col gap-2 w-full">
                        <p>
                            Start the project by creating a Next.js application by running in a terminal
                        </p>
                        <CodeBox files={CreateProject} />
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl pb-3">Install Framer Motion</h1>
                    <div className="flex flex-col gap-2 w-full">
                        <p>
                            Install framer motion to manage the animation easier.
                        </p>
                        <CodeBox files={InstallFramer}/>
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl pb-3">Setting Up the Project</h1>
                    <div className="flex flex-col gap-2 w-full">
                        <p>
                            Create new file for the <span className="p-1 bg-neutral-400 dark:bg-neutral-600 rounded-md">StickyImage</span>, import it in the <span className="p-1 bg-neutral-400 dark:bg-neutral-600 rounded-md">page.tsx</span> so it can be used everytime.
                        </p>
                        <CodeBox files={SetupCode} />
                    </div>
                    <h2 className="text-xl py-5">We should have something like this</h2>
                    <Image 
                        src="/images/stickyImage1.png" 
                        alt="sticky image example"
                        height={990}
                        width={1920}                        
                        className="object-cover w-full h-full rounded-xl"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl pb-3">Great Start!</h1>
                    <p>Now, we have an image in the center and we want to make sure that it is enlarged when the cursor hovers over the image.</p>
                    <p>We will update <span className="p-1 bg-neutral-400 dark:bg-neutral-600 rounded-md">stickyImage.tsx</span> using framer to create smooth motion when hovering over the image.</p>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl pb-3">Add Scale Up</h1>
                    <div className="flex flex-col gap-2 w-full">
                        <p>Add motion in the div to scale up whole div when the cursor is hovering the image.</p>
                        <CodeBox files={ScaleupImage} />
                    </div>
                    <h2 className="text-xl py-5">We should have something like this</h2>
                    <video 
                        src="/videos/stickyImage1.mp4" 
                        autoPlay
                        loop 
                        muted
                        className="w-full h-auto rounded-xl"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl pb-3">Awesome!</h1>
                    <p>There is now a smooth motion of the image becoming larger when hovering over the image.</p>
                    <p>We will update <span className="p-1 bg-neutral-400 dark:bg-neutral-600 rounded-md">stickyImage.tsx</span> again to be sticky to the cursor on hover.</p>
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl pb-3">Make Sticky</h1>
                    <div className="flex flex-col gap-2 w-full">
                        <p>Add motion in the div to scale up whole div when the cursor is hovering the image.</p>
                        <CodeBox files={FinalCode} />
                    </div>
                    <h2 className="text-xl py-5">We should have something like this</h2>
                    <video 
                        src="/videos/stickyImage2.mp4" 
                        autoPlay
                        loop 
                        muted
                        className="w-full h-auto rounded-xl"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl pb-3">Done!</h1>
                    <p>That&apos;s it for the sticky image</p>
                    <p>you can also improve it whatever you like or make a sticky cursor too.</p>
                    <p>- H</p>
                </div>
            </section>
        </div> 
    );
};
