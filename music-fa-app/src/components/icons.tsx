import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement> & {
    width?: string;
    height?: string;
    stroke?: string;
    strokeWidth?: string;
};
export const Icons = {
    previous:(props:IconProps)=>(
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round"
             className="lucide lucide-skip-back">
            <polygon points="19 20 9 12 19 4 19 20"/>
            <line x1="5" x2="5" y1="19" y2="5"/>
        </svg>
    ),
    next:(props:IconProps)=>(
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round"
             className="lucide lucide-skip-forward">
            <polygon points="5 4 15 12 5 20 5 4"/>
            <line x1="19" x2="19" y1="5" y2="19"/>
        </svg>
    ),
    pause:(props:IconProps)=>(
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round"
             className="lucide lucide-circle-pause">
            <circle cx="12" cy="12" r="10"/>
            <line x1="10" x2="10" y1="15" y2="9"/>
            <line x1="14" x2="14" y1="15" y2="9"/>
        </svg>
    ),
    play:(props:IconProps)=>(
        <svg xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round"
             className="lucide lucide-circle-play">
            <circle cx="12" cy="12" r="10"/>
            <polygon points="10 8 16 12 10 16 10 8"/>
        </svg>
    )
}