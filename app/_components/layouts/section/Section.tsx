import React from 'react'

interface Section {
    className?:string;
    children?: React.ReactNode;
}
export default function Section({className="", children}: Section) {
    return (
        <section className={`container mb-[68px] ${className}`}>
            {children}
        </section>
    );
}

