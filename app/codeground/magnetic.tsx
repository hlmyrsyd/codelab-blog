"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Magnetic() {
    const [isNearCursor, setIsNearCursor] = useState(false);
    const originX = useMotionValue(0);
    const originY = useMotionValue(0);
    const smoothOptions = { stiffness: 300, damping: 20, mass: 1.5}
    const springX = useSpring(originX, smoothOptions);
    const springY = useSpring(originY, smoothOptions);
    const distanceLimit = 500; // Increased distance for magnetic effect

    const handleMouseMove = (e:any) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;
        const distance = Math.sqrt(distX * distX + distY * distY);

        if (distance < distanceLimit) {
            setIsNearCursor(true);
            const pullStrength = 1 - distance / distanceLimit;
            originX.set(distX * pullStrength * 1); // Increased magnetic strength
            originY.set(distY * pullStrength * 1);
        } else {
            setIsNearCursor(false);
            originX.set(0); // Reset to original position
            originY.set(0);
        }
    };

    const handleMouseLeave = () => {
        // Reset position when cursor leaves
        setIsNearCursor(false);
        originX.set(0);
        originY.set(0);
    };

    return (
        <motion.div
            className="w-64 h-64 bg-neutral-600 flex justify-center items-center"
            style={{
                x: springX,
                y: springY,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            Magnetic Div
        </motion.div>
    );
};
