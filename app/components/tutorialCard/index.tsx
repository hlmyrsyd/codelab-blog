'use client'

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface TutorialCardProps {
    videoSrc: string;
    title: string;
    date: string;
    link: string;
    thumbnailTime?: number; // Optional thumbnail time in seconds
}

export function TutorialCard({
    videoSrc,
    title,
    date,
    link,
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
            <h1 className="text-xl font-semibold mt-2">{title}</h1>
            <p className="text-sm text-neutral-500">{date}</p>
        </div>
    );
}
