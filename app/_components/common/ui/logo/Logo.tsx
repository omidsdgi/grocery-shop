import Link from "next/link";
import {ImageView} from "@/app/_components";

export default function Logo() {
    return (
        <Link href="/">
            <ImageView src="/images/Logo.png" alt="logo" width={242} height={66} className="w-[117px] lg:w-[242px]" />
        </Link>
    );
}

