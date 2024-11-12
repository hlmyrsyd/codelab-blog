'use client'

import { CodeBox } from "@/app/components";
import { CreateProject, FinalCode, InstallFramer, SetupCode } from "./lib/codeBoxLib";

export default function PageTransition() {           
    
    return (
        <div className="flex flex-col">
            <div className="border-b border-solid border-black/[.08] dark:border-white/[.145]">
                <h1 className="text-[5rem] font-bold">
                    Page Transition
                </h1>
            </div>

            <section className="py-4 gap-4">
                <h1 className="text-xl">
                    Build a transition from each page with Next.js and Framer Motion
                </h1>
                <p>
                    A website tutorial to make a simple transition from one page to other. 
                </p>
            </section>

            <section className="flex flex-col py-4 gap-4">
                <video 
                    src="/videos/pageTransition.mp4" 
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
                            Create new file for the <span className="p-1 bg-neutral-400 dark:bg-neutral-600 rounded-md">TransitionWrapper</span> and <span className="p-1 bg-neutral-400 dark:bg-neutral-600 rounded-md">OpeningContainer</span>, import it in the <span className="p-1 bg-neutral-400 dark:bg-neutral-600 rounded-md">page.tsx</span> so it can be used everytime.
                        </p>
                        <CodeBox files={SetupCode} />
                    </div>
                    <h2 className="text-xl py-5">We should have something like this</h2>
                    <video 
                        src="/videos/pageTransition1.mp4" 
                        autoPlay
                        loop 
                        muted
                        className="w-full h-auto rounded-xl"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl pb-3">Great Start!</h1>
                    <p>As you can see in the Home Page, the opening and transition to the next page is working great.</p>
                    <p>but there is no transition when opening the <span className="p-1 bg-neutral-400 dark:bg-neutral-600 rounded-md">Page One</span>, its just pop up out of nowhere.</p>
                    <p>don&apos;t worry, next we going to apply the same transition so every page has the same transition</p>
                </div>

                <div>
                    <h1 className="text-2xl pb-3">Add Transition to other Page</h1>
                    <div className="flex flex-col gap-2 w-full">
                        <p>
                            Import <span className="p-1 bg-neutral-400 dark:bg-neutral-600 rounded-md">TransitionWrapper</span> and <span className="p-1 bg-neutral-400 dark:bg-neutral-600 rounded-md">OpeningContainer</span> to the <span className="p-1 bg-neutral-400 dark:bg-neutral-600 rounded-md">pageOne.tsx</span> so it can be used everytime.
                        </p>
                        <CodeBox files={FinalCode} />
                    </div>
                    <h2 className="text-xl py-5">We should have something like this</h2>
                    <video 
                        src="/videos/pageTransition2.mp4" 
                        autoPlay
                        loop 
                        muted
                        className="w-full h-auto rounded-xl"
                    />
                </div>

                <div className="flex flex-col gap-4">
                    <h1 className="text-2xl pb-3">Done!</h1>
                    <p>That&apos;s it for the simple easy reusable Page Transition</p>
                    <p>you can also improve it whatever you like or make transition from other direction.</p>
                    <p>- H</p>
                </div>
            </section>
        </div> 
    );
};
