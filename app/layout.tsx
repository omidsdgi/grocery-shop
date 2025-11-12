import "@/app/_styles/globals.css"
import "@/app/_styles/icon.css"

import  "swiper/css"
import  "swiper/css/autoplay"
import  "swiper/css/navigation"

import {ReactNode} from "react";
import {Metadata} from "next";
import Header from "@/app/_components/layouts/header/Header";
import Footer from "@/app/_components/layouts/footer/Footer";
import {Quicksand} from "next/font/google";
import localfont from "next/font/local"
import {DarkModeProvider} from "@/app/_components/context/DarkModeContext";

const quicksand=Quicksand({
    subsets:['latin'],
    display:"swap"
})
const lato=localfont({
    src:[
        {
          path:'../public/fonts/Lato-Thin.woff2',
          weight:'100',
          style:'normal'
        },
        {
            path:'../public/fonts/Lato-Light.woff2',
            weight:'300',
            style:'normal'
        },
        {
            path:'../public/fonts/Lato-Regular.woff2',
            weight:'400',
            style:'normal'
        }
        ]
})
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
        <html lang="en" suppressHydrationWarning>
        <body className={`${quicksand.className},${lato.className}`} suppressHydrationWarning >
        <DarkModeProvider>
        <header>
            <Header/>
        </header>
        <main>{children}</main>
        <Footer/>
        </DarkModeProvider>
        </body>
        </html>
    )
}
