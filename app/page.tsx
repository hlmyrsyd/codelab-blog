'use client'

import { motion } from "framer-motion";
import { TutorialCard } from "./components";
import { tutorials } from "./lib/recentTutorial";

export default function home() {

  return (
    <div>
      <div>
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-white dark:bg-neutral-900 z-50"
          initial={{ y: 0 }}
          animate={{ y: "-100%" }}
          transition={{ duration: 0.8, delay: 0.8, ease: "circInOut" }}
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            className="flex h-full w-full justify-center items-center text-6xl font-bold">
            <h1>CodeLab</h1>
          </motion.div>
        </motion.div>
      </div>
      <div className="flex w-full h-full flex-col">
        <div className="border-b border-solid border-black/[.08] dark:border-white/[.145]">
          <h1 className="text-[5rem] font-bold">
            CodeLab
          </h1>
        </div>

        <section className="py-4">
          <h1 className="text-xl">Welcome to Codelab, This is my playground to try and explore witchcraft</h1>
        </section>

        <section className="py-32">
          <div className="text-3xl">
            <h1>Recent Tutorials</h1>
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
