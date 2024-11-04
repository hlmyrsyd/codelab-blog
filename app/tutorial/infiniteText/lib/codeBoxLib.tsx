export const CreateProject = [
    {
        name: 'bash',
        language: 'bash',
        code: `npx create next app@latest`,
    }
];

export const InstallFramer = [
    {
        name: 'bash',
        language: 'bash',
        code: `npx install framer-motion`,
    }
];

export const FinalCode = [
    {
        name: 'page.tsx',
        language: 'typescript',
        code: 
`'use client'

// This is where the the text are 
import InfiniteText from "./components/InfiniteText";
const Text = () => (
    <div className="flex w-full justify-around">
        <p>This</p>
        <p>text</p>
        <p>keeps</p>
        <p>moving</p>
    </div>
);

export default function Home() {
    return (
        <main>
            <InfiniteText Component={Text} />
        </main>
    );
}`
    },
    {
        name: 'InfiniteText.tsx',
        language: 'typescript',
        code:
`import { motion } from "framer-motion";

interface InfiniteTextProp {
    Component: React.FC;
}

export default function InfiniteText({ Component }: InfiniteTextProp) {
    const motionProperties = {
        style: { display: 'flex', minWidth: '100%' },
        animate: { x: ['0%', '-100%'] },
        transition: {
            repeat: Infinity,
            duration: 5,
            ease: 'linear',
        },
    };

    return (
        <div className="flex overflow-hidden text-[10rem] border-x-2">
            {[0, 1].map((_, index) => (
                <motion.div key={index} {...motionProperties}>
                    <Component />
                </motion.div>
            ))}
        </div>
    );
}`
    }
]
