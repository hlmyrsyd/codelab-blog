'use client'

import { TutorialCard } from "../components";
import { tutorials } from "../lib/recentTutorial";

export default function home() {

    return (
        <div>
            <div className="flex w-full h-full flex-col">

                <section>
                <div className="text-3xl">
                    <h1>All Tutorials</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {tutorials.map((tutorial, index) => (
                        <TutorialCard
                            key={index}
                            videoSrc={tutorial.videoSrc}
                            title={tutorial.title}
                            date={tutorial.date}
                            link={tutorial.link}
                            tags={tutorial.tags}
                        />
                        ))}
                    </div>
                </div>
                </section>
            </div>
        </div>
    );
};
