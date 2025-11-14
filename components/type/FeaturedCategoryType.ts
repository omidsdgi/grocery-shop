export interface FeaturedCategoryTpe {
    id: number;
    created_at: Date;
    title: string;
    link: string;
    color:string;
    image?: string;
    items:number;
    is_featured: boolean;
}