'use client'
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import {searchProducts} from "@/app/_lib/data-service";

interface FormInput {
    search_text: string;
}


export default function SearchForm() {
    const { register, handleSubmit } = useForm<FormInput>();
    const [showResults, setShowResults] = useState(false);

    const mutation = useMutation({
        mutationFn: searchProducts,
        onMutate: () => {
            setShowResults(true);
        },
        onSuccess: (data) => {
            console.log(`${data.length} محصول یافت شد`);
        },
        onError: (error) => {
            console.error('خطا در جستجو:', error);
        }
    });

    const onSubmit = (data: FormInput) => {
        const searchText = data.search_text?.trim();

        if (!searchText) {
            return;
        }

        mutation.mutate(searchText);
    };

    const searchResults = mutation.data || [];

    return (
        <div className="relative max-w-[700px] w-full mx-[15px] hidden lg:block">
            <div className="border-2 border-green-150 rounded-[5px]">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex items-center gap-2 h-full px-[15px] py-2"
                >
                    <Input
                        type="text"
                        {...register("search_text", { required: true })}
                        placeholder="Search for items"
                        className="text-heading-sm text-gray-500 placeholder:text-gray-400 border-0 w-full h-full p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                        onChange={() => setShowResults(false)}
                    />
                    <Button
                        type="submit"
                        variant="ghost"
                        size="icon"
                        className="shrink-0"
                        disabled={mutation.isPending}
                    >
                        <Search className="h-[22px] w-[22px]" />
                        <span className="sr-only">Search</span>
                    </Button>
                </form>
            </div>

            {/* Loading state */}
            {mutation.isPending && (
                <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-md p-4 z-50 border">
                    <p className="text-center">در حال جستجو...</p>
                </div>
            )}

            {/* Error state */}
            {mutation.isError && (
                <div className="absolute top-full mt-2 w-full bg-red-50 shadow-lg rounded-md p-4 z-50 border border-red-200">
                    <p className="text-red-600 text-center">
                        خطا در جستجو: {mutation.error?.message || 'خطای ناشناخته'}
                    </p>
                </div>
            )}

            {/* Results */}
            {showResults && mutation.isSuccess && (
                <div className="absolute top-full mt-2 w-full bg-white shadow-lg rounded-md z-50 border max-w-[700px]">
                    {searchResults.length > 0 ? (
                        <div className="max-h-96 overflow-y-auto">
                            <div className="px-4 py-2 bg-gray-50 border-b">
                                <p className="text-sm text-gray-600">
                                    {searchResults.length} محصول یافت شد
                                </p>
                            </div>
                            {searchResults.map((product) => (
                                <div
                                    key={product.id}
                                    className="p-4 hover:bg-gray-50 border-b last:border-b-0 cursor-pointer transition-colors"
                                    onClick={() => {
                                        console.log('🎯 Selected:', product);
                                        setShowResults(false);
                                    }}
                                >
                                    <h3 className="font-semibold text-gray-800">
                                        {product.title}
                                    </h3>
                                    {product.price && (
                                        <p className="text-sm text-gray-600 mt-1">
                                            قیمت: {product.price.toLocaleString('fa-IR')} تومان
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="p-4 text-center text-gray-600">
                            محصولی یافت نشد
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}