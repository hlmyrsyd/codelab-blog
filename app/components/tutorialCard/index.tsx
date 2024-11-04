'use client'

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { WavyText } from "../wavyText";

interface TutorialCardProps {
    videoSrc: string;
    title: string;
    date: string;
    link: string;
    tags?: string[];
    thumbnailTime?: number; 
}

export function TutorialCard({
    videoSrc,
    title,
    date,
    link,
    tags = [],
    thumbnailTime = 1.2, 
    }: TutorialCardProps) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
        videoRef.current.currentTime = thumbnailTime;
        const handleSeeked = () => videoRef.current?.pause();
        videoRef.current.addEventListener("seeked", handleSeeked);

        return () => {
            videoRef.current?.removeEventListener("seeked", handleSeeked);
        };
        }
    }, [thumbnailTime]);

    const handleMouseEnter = () => {
        if (videoRef.current) {
        videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
        videoRef.current.currentTime = thumbnailTime;
        videoRef.current.pause();
        }
    };

    return (
        <div className="flex flex-col w-full max-w-xs">
            <Link 
                href={link} 
                className="block pt-6"
            >
                <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: "-10%" }}
                transition={{ duration: 0.2, ease: "circInOut" }}
                >
                <video
                    ref={videoRef}
                    src={videoSrc}
                    loop
                    muted
                    className="w-full h-auto rounded-lg"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                </motion.div>
            </Link>
            <a 
                className="text-xl font-semibold mt-2"
                href={link}            >
                <WavyText text={title} />
            </a>
            <p className="text-sm text-neutral-500">{date}</p>
            {tags.length > 0 && (
                <div className="flex gap-2 mt-2">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="bg-neutral-600/20 dark:text-neutral-500 text-neutral-600 text-xs font-medium px-2 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}
