export interface ProductType {
    id:number;
    created_at:Date;
    title: string;
    image: string;
    category: string;
    rate: number;
    weight: number;
    unit:string;
    price: number;
    sell_price?: number;
    label:string;
    description?: string;
    total?:number;
    sold?:number;
    quantity?: number;
    discount_Expire_date?: Date;
    is_popular?: boolean;
    is_top_selling?: boolean;
    is_trending?: boolean;
    is_popular_fruit?: boolean;
    is_best_seller?: boolean;
}