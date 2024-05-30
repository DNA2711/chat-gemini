"use client";
import React, { useState, useRef } from 'react';

interface TooltipProps {
    content: string;
    children: React.ReactNode;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    sizeClass?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, placement = 'top', sizeClass = "w-full" }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const tooltipRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => setShowTooltip(true);
    const handleMouseLeave = () => setShowTooltip(false);

    return (
        <div
            ref={tooltipRef}
            className="relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {showTooltip && (
                <div
                    role="tooltip"
                    className={`absolute z-10 p-1.5 text-xs ${sizeClass} text-neutral-200 bg-neutral-700 dark:bg-neutral-500 rounded shadow-md
                    ${placement === 'top' ? 'bottom-full left-1/2 transform -translate-x-1/2 -translate-y-2' : ''}
                    ${placement === 'bottom' ? 'top-full left-1/2 transform -translate-x-1/2 translate-y-2' : ''}
                    ${placement === 'left' ? 'right-full top-1/2 transform -translate-x-2 -translate-y-1/2' : ''}
                    ${placement === 'right' ? 'left-full top-1/2 transform translate-x-2 -translate-y-1/2' : ''}
                    ${showTooltip ? 'opacity-100' : 'opacity-0'}
                    transition-all duration-1000
                `}
                >
                    {content}
                </div>
            )}
        </div>
    );
};

export default Tooltip;
