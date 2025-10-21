import "@/app/_styles/globals.css"
import "@/app/_styles/icon.css"
import React, {ReactNode} from "react";
import {Metadata} from "next";
import Navigation from "@/app/_components/Navigation";

export const metadata:Metadata = {
    title: 'Grocery Shop',
    description: 'Welcome to Grocery Shop',
}
interface Props {
    children: ReactNode;
}
export default function RootLayout({children}: Props) {
    return (
        <html lang="en">
        <body >
        <header>
            <Navigation/>
            <h2>Mehraneh</h2>
        </header>
        <main> {children}</main>
        <footer>Omid</footer>
        </body>
        </html>
    )
}
