import Section from "@/app/_components/layouts/section/Section";
import Link from "next/link";
import {getFeaturedCategory} from "@/app/_lib/data-service";
import Image from "next/image";

export default async function FeaturedCategories() {
    const data= await getFeaturedCategory()

    return (
        <Section className= 'mb-[75px]'>
            <div className="hidden sm:flex mb-[50px]">
                <h2 className="text-heading3 text-blue-300">Featured Categories</h2>
            </div>
            <div className="flex flex-wrap justify-between gap-[24px]">
                {data.map((item)=>{
                    return (
                        <Link key={item.id} href={item.link} style={{backgroundColor:item.color}}
                           className=" flex flex-col justify-center items-center text-blue-300 border-[1px] border-green-100 hover:border-green-300 px-2 lg:px-5 py-3 pt-2 rounded-xl">
                            {item.image && <Image src={item.image} width={93} height={84} alt="cat"
                                 className="mb-2 lg:mb-4"/>}
                            <h3 className="text-[12px] text-green-600 sm:text-heading-sm md:text-heading6 text-center">{item.title}</h3>
                            <span className="text-xsmall font-semibold text-green-600 hidden lg:flex">{item.items} {item.items === 1 ? 'item' : 'items' }</span>
                        </Link>
                    )
                })}
            </div>
        </Section>
    );
}


