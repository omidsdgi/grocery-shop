import React from 'react'
import {twMerge} from "tailwind-merge";

interface Section {
    className?:string;
    children?: React.ReactNode;
}
export default function Section({className=" ", children}: Section) {
    return (
        <section className={twMerge('container mb-[68px]', className)}>
            {children}
        </section>
    );
}

