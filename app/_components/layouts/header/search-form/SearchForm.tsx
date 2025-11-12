import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchForm() {
    return (
        <div className="border-2 border-green-150 rounded-[5px] max-w-[700px] w-full mx-[15px]  hidden lg:inline-block">
            <form
                name="search-form"
                className="flex items-center gap-2 h-full px-[15px]"
            >
                <Input
                    type="text"
                    name="search_text"
                    placeholder="Search for items"
                    className="text-heading-sm text-gray-500 placeholder:text-gray-400 border-0 w-full h-full p-0  focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button
                    type="submit"
                    variant="ghost"
                    size="icon"
                    className="shrink-0"
                >
                    <Search className="h-[22px] w-[22px]" />
                    <span className="sr-only">Search</span>
                </Button>
            </form>
        </div>
    );
}