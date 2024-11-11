"use client";

import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";

export default function StickyCursor() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const smoothOptions = {damping: 20, stiffness: 300, mass: 0.5}
    const cursorX = useSpring(x, smoothOptions);
    const cursorY = useSpring(y, smoothOptions);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            x.set(e.clientX);
            y.set(e.clientY);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [x, y]);

    return (
        <motion.div
            style={{
                x: cursorX,
                y: cursorY,
                position: "fixed",
                top: -35,
                left: -35,
                width: 80,
                height: 80,
                backgroundColor: "rgba(255, 0, 0, 0.5)",
                borderRadius: "50%",
                pointerEvents: "none",
            }}
        />
    );
}
