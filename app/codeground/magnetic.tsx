"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";

export default function Magnetic() {
    const originX = useMotionValue(0);
    const originY = useMotionValue(0);
    const smoothOptions = { stiffness: 250, damping: 10, mass: 1 };
    const springX = useSpring(originX, smoothOptions);
    const springY = useSpring(originY, smoothOptions);
    const distanceLimit = 200;

    const handleMouseMove = (e:any) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distX = e.clientX - centerX;
        const distY = e.clientY - centerY;
        const distance = Math.sqrt(distX * distX + distY * distY);

        if (distance < distanceLimit) {
            const pullStrength = 1.3 - distance / distanceLimit;
            originX.set(distX * pullStrength);
            originY.set(distY * pullStrength);
        } else {
            originX.set(0);
            originY.set(0);
        }
    };

    const handleMouseLeave = () => {
        originX.set(0);
        originY.set(0);
    };

    return (
        <motion.div
            className="w-72 h-72 flex justify-center items-center cursor-pointer"
            initial={{scale:1}}
            whileHover={{scale:1.2}}
            style={{
                x: springX,
                y: springY,
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex w-full h-full">
                <Image 
                    src="/images/contoh-img.png" 
                    alt="contoh gambar"
                    height={600}
                    width={600}
                    className="object-cover w-full h-full rounded-[2rem]"                
                />
            </div>
        </motion.div>
    );
};
