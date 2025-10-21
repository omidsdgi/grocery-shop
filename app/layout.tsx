import "@/app/_styles/globals.css"
import "@/app/_styles/icon.css"
import {ReactNode} from "react";
import {Metadata} from "next";
import Navigation from "@/app/_components/Navigation";
import Header from "@/app/_components/layouts/header/Header";

export const metadata:Metadata = {
    title: {
       template:'%s/ Grocery Shop',
        default:'Welcome to Grocery Shop',
    },
    description: ' your online destination for fresh groceries, daily essentials, and household products. Shop now for fast delivery and unbeatable quality!',
}
interface Props {
    children: ReactNode;
}
export default function RootLayout({children}: Props) {
    return (
        <html lang="en">
        <body >
        <header>
            <Header/>
            <Navigation/>
        </header>
        <main> {children}</main>
        <footer>Omid</footer>
        </body>
        </html>
    )
}
