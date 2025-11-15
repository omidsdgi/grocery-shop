"use client"
import {useEffect, useState} from "react";
import {ProductType} from "@/components/type/ProductType";
import {ChevronLeft, ChevronRight} from "lucide-react";
import SimpleProductSlider from "@/app/_components/product/simple-product-slider/SimpleProductSlider";

type ProductFilter = 'is_popular' | 'is_top_selling' | 'is_trending' | 'is_popular_fruit' | 'is_best_seller';

interface Props {
    title: string;
    filter: ProductFilter;
    navLeftClass?: string;
    navRightClass?: string;
}

export default function ProductSection({title, filter, navLeftClass = 'swiper-nav-left', navRightClass = 'swiper-nav-right'}: Props) {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            try {
                setLoading(true);
                const response = await fetch(`/api/products?filter=${filter}`);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [filter]);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-200"></div>
            </div>
        );
    }

    return (
        <>
            <div className="flex justify-between mb-[50px]">
                <h2 className="text-heading3 text-blue-300">{title}</h2>
                <div className="flex items-center gap-3">
                    <i className={`${navLeftClass} cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white text-[24px]`}>
                        <ChevronLeft className="w-5 h-5" />
                    </i>
                    <i className={`${navRightClass} cursor-pointer bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-green-200 hover:text-white text-[24px]`}>
                        <ChevronRight className="w-5 h-5" />
                    </i>
                </div>
            </div>
            <SimpleProductSlider
                sliderData={products}
                nextEl={`.${navRightClass}`}
                prevEl={`.${navLeftClass}`}
            />
        </>
    );
}