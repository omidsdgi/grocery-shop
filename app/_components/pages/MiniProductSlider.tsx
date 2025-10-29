import Section from "@/app/_components/layouts/section/Section";
import {miniProductSlider} from "@/app/_components/mock/miniProductSlider";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

export default function MiniProductSlider() {
    return (
        <Section>
            <div className="swiper w-full" id="cat-slider">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        {miniProductSlider.map((item,index)=>{
                            return (
                                <div key={index} style={{backgroundImage:`url(${item.image})`,backgroundColor:item.color }}
                                    className="flex items-center aspect-slider pl-4 lg:pl-12  rounded-[10px] bg-[length:50%] bg-no-repeat bg-right-bottom">
                                    <div className="basis-1/2 flex flex-col justify-between">
                                        <h3 className="text-heading6 xl:text-heading5 2xl:text-heading4 text-blue-300">{item.title}</h3>
                                        <Link href={item.link}
                                           className="mt-6 pl-[15px] pr-2.5 py-2 bg-green-200 hover:bg-yellow-100 rounded-[3px] cursor-pointer inline-flex max-w-max items-center gap-2.5">
                                            <div className="text-xsmall text-white">Shop now</div>
                                            <ArrowRight className="text-[24px] text-white" />
                                        </Link>
                                    </div>

                        </div>
                        )
                        })}
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </Section>
    );
}

