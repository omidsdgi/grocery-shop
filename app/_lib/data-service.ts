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
        throw new Error(`Failed to fetch products with filter ${filter}`);
    }
    console.log(`Fetching products with filter: ${filter}`);

    return data ||[]
}
export async function getDealsOfTheDay ():Promise<ProductType[]>{
    const {data, error}=await supabase
        .from('product')
        .select('*')
        .not('discount_Expire_date','is',null)
        .gte('discount_Expire_date',new Date().toISOString());

    if (error){
        console.error('Error fetching deals of the day:', error);
        throw new Error('Failed to fetch deals of the day');
    }
    return data ||[];
}
type ProductQueryType = 'topSelling' | 'trending' | 'recently' | 'topRated' ;

export async function getProductByType(type:ProductQueryType,limit:number=3):Promise<ProductType[]>{
    let query=supabase.from('product').select('*')
    switch (type) {
        case 'topSelling':
            query=query.order('price',{ascending:false});
            break;
        case 'trending':
            query=query.order('weight',{ascending:false});
            break;
        case 'recently':
            query=query.order('created_at',{ascending:false});
            break;
        case 'topRated':
            query=query.order('rate',{ascending:false});
            break;

        default:
            query=query.order('id',{ascending:true});
    }
    query=query.limit(limit);

    const{data, error}=await query
    console.log('data',data);
    if (error){
        console.error(`Error fetching products with type ${type}):`, error)
        throw new Error(`Failed to fetch ${type} products`);
    }
    return data ||[];
}