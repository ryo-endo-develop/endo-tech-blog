import { ArticleTagType, PageProps } from "@/app/lib/definitions";
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
    ];
    const selectedCards: PageProps[] = sampleCards.filter((card) => card.type.includes(params.type));
    if (!selectedCards) {
        return;
    }
    const filteredCards: PageProps[] = query
        ? selectedCards.filter((card) => card.tags.includes(query))
        : selectedCards;

    return (
        <>
            <div className="mt-4 mb-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search articles..." />
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredCards.map((page, index) => (
                    <Card key={index} page={page} />
                ))}
            </div>
        </>
    );
}
