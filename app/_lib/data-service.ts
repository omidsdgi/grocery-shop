import {supabase} from "./Supabase"
import {MenuGroups} from "@/components/type/MenuItemType";
import {FeaturedCategoryTpe} from "@/components/type/FeaturedCategoryType";
import {ProductType} from "@/components/type/ProductType";

export async function getMenu():Promise<MenuGroups> {
    const {data,error}=await supabase
        .from('menu_item')
        .select('*')
        .order('rank')
    if(error){
        console.error('Error fetching menu:', error);
        throw new Error('Failed to fetch menu items');
    }
    const mainMenu = data.filter(item => item.menuId === 1);
    const browseCategory = data.filter(item => item.menuId ===2);
    return {mainMenu,browseCategory};
}

export async function getFeaturedCategory() :Promise<FeaturedCategoryTpe[]> {
    const {data, error}=await supabase
        .from("featured-category")
        .select('*')
         .eq("is_featured",true);

    if (error){
        console.error('Error fetching featured category:',error);
        throw new Error('Failed to fetch featured category');
    }

    return data ||[];
}


type ProductFilter ='is_popular' | 'is_top_selling' | 'is_trending' | 'is_popular_fruit' | 'is_best_seller';

export async function getProductsByFilter(filter:ProductFilter):Promise<ProductType[]>{
    const {data, error}=await supabase
        .from('product')
        .select('*')
        .eq(filter,true);

    if (error){
        console.error(`Error fetching products with filter ${filter}:`,error);
        console.error("Supabase error details:", error);
        console.log("Fetched data:", data);
        throw new Error(`Failed to fetch products with filter ${filter}`);
    }
    console.log(`Fetching products with filter: ${filter}`);
    console.log(data);

    return data ||[]
}

