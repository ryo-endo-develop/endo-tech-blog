import { PageProps } from "@/app/lib/definitions";
import ArticleMeta from "@/app/ui/articles/article-meta";
import { ParsedUrlQuery } from "querystring";

export type Params = ParsedUrlQuery & {
    slug: string;
};
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

export default function Page({ params }: { params: { slug: string } }) {
    const page = sampleCards.find((card) => card.slug === params.slug);
    if (page == null) {
        return;
    }
    return (
        <>
            <article className="w-full">
                {/* meta section */}
                <div className="my-12">
                    <ArticleMeta page={page} />
                </div>

                {/* article */}
                <div className="my-12">{page.content}</div>
            </article>
        </>
    );
}
