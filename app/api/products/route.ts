import {NextRequest, NextResponse} from "next/server";
import {getProductsByFilter} from "@/app/_lib/data-service";

export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const filter = searchParams.get('filter');

        if (!filter) {
            return NextResponse.json(
                {error: 'Filter parameter is required'},
                {status: 400}
            );
        }

        const validFilters = ['is_popular', 'is_top_selling', 'is_trending', 'is_popular_fruit', 'is_best_seller'];
        if (!validFilters.includes(filter)) {
            return NextResponse.json(
                {error: 'Invalid filter parameter'},
                {status: 400}
            );
        }

        const products = await getProductsByFilter(filter as any);

        return NextResponse.json(products);
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            {error: 'Failed to fetch products'},
            {status: 500}
        );
    }
}