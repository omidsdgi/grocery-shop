import {supabase} from "./Supabase"
import {MenuGroups} from "@/components/type/MenuItemType";
import {FeaturedCategoryTpe} from "@/components/type/FeaturedCategoryType";

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
        .select(`
        id,
        created_at,
        title,
        link,
        color,
        image,
        items,
        is_featured
        `)
         .eq("is_featured",false);

    if (error){
        console.error('Error fetching featured category:',error);
        throw new Error('Failed to fetch featured category');
    }

    console.log("featured_category:",data)
    return data ||[];
}

