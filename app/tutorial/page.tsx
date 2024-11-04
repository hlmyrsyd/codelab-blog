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
                    {tutorials.map((tutorial, index) => (
                    <TutorialCard
                        key={index}
                        videoSrc={tutorial.videoSrc}
                        title={tutorial.title}
                        date={tutorial.date}
                        link={tutorial.link}
                    />
                    ))}
                    <div></div>
                </div>
                </section>
            </div>
        </div>
    );
};
