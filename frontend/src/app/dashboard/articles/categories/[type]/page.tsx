import { ArticleTagType, PageProps } from "@/app/lib/definitions";
import Pagination from "@/app/ui/articles/pagenation";
import { Card } from "@/app/ui/dashboard/card";
import Search from "@/app/ui/search";

export default function Page({
    params,
    searchParams,
}: {
    params: { type: ArticleTagType };
    searchParams?: { query?: string; page?: string };
}) {
    const query = searchParams?.query || "";
    const currentPage = Number(searchParams?.page) || 1;

    const sampleCards: PageProps[] = [
        {
            slug: "red",
            name: "Red",
            author: "dog",
            cover: "/",
            published: "202x-xx-01",
            updated: "202x-xx-01",
            type: ["programmingLanguage"],
            tags: ["notion", "nextjs"],
            content: "Red page content",
        },
        {
            slug: "green",
            name: "Green",
            author: "cat",
            cover: "/",
            published: "202x-xx-02",
            updated: "202x-xx-01",
            type: ["programmingLanguage"],
            tags: ["library"],
            content: "Green page content",
        },
        {
            slug: "blue",
            name: "Blue",
            author: "bird",
            cover: "/",
            published: "202x-xx-03",
            updated: "202x-xx-01",
            type: ["programmingLanguage"],
            tags: ["editor"],
            content: "Blue page content",
        },
        {
            slug: "blue",
            name: "Blue",
            author: "bird",
            cover: "/",
            published: "202x-xx-03",
            updated: "202x-xx-01",
            type: ["programmingLanguage"],
            tags: ["editor"],
            content: "Blue page content",
        },
        {
            slug: "blue",
            name: "Blue",
            author: "bird",
            cover: "/",
            published: "202x-xx-03",
            updated: "202x-xx-01",
            type: ["programmingLanguage"],
            tags: ["editor"],
            content: "Blue page content",
        },
        {
            slug: "blue",
            name: "Blue",
            author: "bird",
            cover: "/",
            published: "202x-xx-03",
            updated: "202x-xx-01",
            type: ["programmingLanguage"],
            tags: ["editor"],
            content: "Blue page content",
        },
        {
            slug: "blue",
            name: "Blue",
            author: "bird",
            cover: "/",
            published: "202x-xx-03",
            updated: "202x-xx-01",
            type: ["programmingLanguage"],
            tags: ["editor"],
            content: "Blue page content",
        },
    ];
    const selectedCards: PageProps[] = sampleCards.filter((card) => card.type.includes(params.type));
    const filteredCards: PageProps[] = query
        ? selectedCards.filter((card) => card.tags.includes(query))
        : selectedCards;

    const pageSize = 6;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayedCards = filteredCards.slice(startIndex, endIndex);

    const totalPages = Math.ceil(filteredCards.length / pageSize);

    return (
        <>
            <div className="mt-4 mb-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search articles..." />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {displayedCards.map((page, index) => (
                    <Card key={index} page={page} />
                ))}
            </div>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </>
    );
}
