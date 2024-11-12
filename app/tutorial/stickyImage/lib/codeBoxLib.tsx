export const CreateProject = [
    {
        name: 'bash',
        language: 'bash',
        code: `npx create-next-app@latest`,
    }
];

export const InstallFramer = [
    {
        name: 'bash',
        language: 'bash',
        code: `npx install framer-motion`,
    }
];

export const SetupCode = [
    {
        name: 'page.tsx',
        language: 'typescript',
        code: 
`import StickyImage from "../stickyImage";

export default function Home() {
    return (
        <>
            <div className="flex w-full h-full justify-center items-center">
                <StickyImage />
            </div>
        </>
    );
}`
    },
    {
        name: 'stickyImage.tsx',
        language: 'typescript',
        code:
`import Image from "next/image";

export default function StickyImage() {
    return (
        // Div for the image size and motion
        <div className="w-72 h-72 flex justify-center items-center cursor-pointer>
            // Div for the image
            <div className="flex w-full h-full>
                <Image
                    src="/images/example.png"
                    alt="example"
                    height={600}
                    width={600}
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    )
}`
    }
]

export const ScaleupImage = [
    {
        name: 'stickyImage.tsx',
        language: 'typescript',
        code:
`import Image from "next/image";
import motion from "framer-motion";

export default function StickyImage() {
    return (
        // Div for the image size and motion
        <motion.div 
            className="w-72 h-72 flex justify-center items-center cursor-pointer
            initial={{ scale: 1 }} // Initial scale
            whileHover={{ scale: 1.2 }} // Scale up 20% when cursor hover
        >
            // Div for the image
            <div className="flex w-full h-full>
                <Image
                    src="/images/example.png"
                    alt="example"
                    height={600}
                    width={600}
                    className="object-cover w-full h-full"
                />
            </motion.div>
        </div>
    )
}`
    }
]

export const FinalCode = [
    {
        name: 'stickyImage.tsx',
        language: 'typescript',
        code:
`import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function StickyImage() {
    const originX = useMotionValue(0);
    const originY = useMotionValue(0);
    const smoothOptions = { stiffness: 200, damping: 10, mass: 0.5 }; // Adjust the Image motion
    const springX = useSpring(originX, smoothOptions);
    const springY = useSpring(originY, smoothOptions);
    const distanceLimit = 200;

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
            className="w-72 h-72 flex justify-center items-center cursor-pointer
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            style={{
                x: springX,
                y: springY,
            }}
            onMouseMove={handleMouseMove} // function when hover
            onMouseLeave={handleMouseLeave} // function when not hover
        >
            <div className="flex w-full h-full>
                <Image
                    src="/images/example.png"
                    alt="example"
                    height={600}
                    width={600}
                    className="object-cover w-full h-full"
                />
            </motion.div>
        </div>
    )
}`
    }
]
