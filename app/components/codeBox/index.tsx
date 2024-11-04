'use client'

import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus as codeStyle } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBoxProps {
    files: { name: string; language: string; code: string }[];
}

export const CodeBox: React.FC<CodeBoxProps> = ({ files }) => {
    const [activeTab, setActiveTab] = useState(files[0].name); // Set the initial tab to the first file
    const [isCopied, setIsCopied] = useState(false);

    const activeFile = files.find(file => file.name === activeTab);

    const handleCopy = async () => {
        if (!activeFile) return;

        try {
            await navigator.clipboard.writeText(activeFile.code);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset "Copied!" after 2 seconds
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    };

    return (
        <div className="relative bg-[#222] overflow-auto font-mono border border-neutral-900/20 dark:border-white/20 rounded-xl">

            {/* Copy button and file language */}
            <div className="flex items-center rounded-t-xl justify-between">
                <div>
                    {files.map(file => (
                        <button
                            key={file.name}
                            onClick={() => setActiveTab(file.name)}
                            className={`py-2 px-4 hover:bg-neutral-800 ${
                                activeTab === file.name ? 'bg-neutral-800 text-white' : 'text-neutral-500'
                            }`}
                        >
                            {file.name}
                        </button>
                    ))}
                </div>
                <button
                    onClick={handleCopy}
                    className="flex items-center px-4 text-neutral-600 hover:text-neutral-400 transition"
                >
                    {isCopied ? 'Copied!' : 'Copy Code'}
                </button>
            </div>

            {/* Code Display */}
            {activeFile && (
                <SyntaxHighlighter
                    className="rounded-b-xl bg-[#222] !m-0 "
                    language={activeFile.language}
                    style={codeStyle}
                    showLineNumbers={true}
                    wrapLongLines={true}
                    lineNumberStyle={{
                        color: 'rgba(255, 255, 255, 0.3)',
                    }}
                >
                    {activeFile.code}
                </SyntaxHighlighter>
            )}
        </div>
    );
};

