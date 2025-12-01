import {ProductType} from "@/components/type/ProductType";
import {ChevronLeft, ChevronRight} from "lucide-react";
import SimpleProductSlider from "@/app/_components/product/simple-product-slider/SimpleProductSlider";

interface Props {
    title?: string;
    products:ProductType[]
    navLeftClass?: string;
    navRightClass?: string;
    showNavigation?: boolean;
    slidesPerView?: number;
}

export default function ProductSection({
                                           title,
                                           products,
                                           navLeftClass = 'swiper-nav-left',
                                           navRightClass = 'swiper-nav-right',
                                           showNavigation,
        }: Props) {

    return (
        <>
            <div className="flex justify-between mb-[50px]">
                {title && <h2 className="text-heading3 text-blue-300">{title}</h2>}
                {showNavigation && (
                <div className="flex items-center gap-3">
                    <i className={`${navLeftClass} cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white text-[24px]`}>
                        <ChevronLeft className="w-5 h-5" />
                    </i>
                    <i className={`${navRightClass} cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white text-[24px]`}>
                        <ChevronRight className="w-5 h-5" />
                    </i>
                </div>
                )}
            </div>
            <SimpleProductSlider
                sliderData={products}
                nextEl={showNavigation ? `.${navRightClass}` : undefined}
                prevEl={showNavigation ? `.${navLeftClass}` : undefined}
            />
        </>
    );
}