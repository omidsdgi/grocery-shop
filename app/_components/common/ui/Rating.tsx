import {Star} from "lucide-react";
interface Props {
    rate: number;
}
export default function Rating({rate}:Props) {
    const star = [];
    const notStar = [];
    for (let i = 0; i < rate; i++) {
        star.push(<li className="flex"><Star className="w-5 h-5 text-yellow-400 stroke-yellow-400 fill-yellow-400"
                                                strokeWidth={1.5}/></li>)
    }
    for (let i:number = rate; i < 5; i++) {
        notStar.push(<li className="flex"><Star className="w-5 h-5 text-yellow-400 stroke-yellow-500 "
                                                strokeWidth={1.5}/></li>)
    }

    return (
        <>
            <ul className="flex gap-1">

                {star} {notStar}
        </ul>
    <div className="text-xsmall text-gray-500 font-lato">{rate}</div>
        </>
    );
}

