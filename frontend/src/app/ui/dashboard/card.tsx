import { DatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import Image from "next/image";
import Link from "next/link";

import { fetchPages } from "@/app/lib/data";
import { IndexCardProps, PageType, PropertyType, RichTextType } from "@/app/lib/definitions";
import { getCover, getDate, getMultiSelect, getText } from "@/app/lib/utils";

export type CardProps = {
    page: PageType;
};

export default async function CardWrapper() {
    const response = await fetchPages();
    const databaseResults: DatabaseObjectResponse[] = response.results.filter(
        (item): item is DatabaseObjectResponse => "properties" in item,
    );

    const pages: PageType[] = databaseResults.map((item) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
        const name: { title: RichTextType[] } = item.properties.name as any;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
        const author: { rich_text: RichTextType[] } = item.properties.author as any;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
        const slug: { rich_text: RichTextType[] } = item.properties.slug as any;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
        const published: { date: { start: string } } = item.properties.published as any;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
        const isPublic: { checkbox: boolean } = item.properties.isPublic as any;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
        const tags: { multi_select: [{ name: string }] } = item.properties.tags as any;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
        const type: { multi_select: [{ name: string }] } = item.properties.type as any;

        const properties: PropertyType = {
            name: name,
            author: author,
            slug: slug,
            published: published,
            isPublic: isPublic,
            tags: tags,
            type: type,
        };

        return {
            id: item.id,
            cover: item.cover,
            properties: properties,
        };
    });
    const cardPages: IndexCardProps = {
        pages: pages,
    };

    return (
        <>
            {cardPages.pages.map((page, index) => (
                <Card key={index} page={page} />
            ))}
        </>
    );
}

export function Card({ page }: CardProps) {
    return (
        <>
            <Link href={`/dashboard/articles/${getText(page.properties.slug.rich_text)}`}>
                <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
                    <div className="rounded overflow-hidden shadow-lg w-full my-4 md:my-0 content-between grid">
                        {/* image */}
                        <div className="w-full">
                            <Image
                                className="w-full static h-auto"
                                src={getCover(page.cover)}
                                alt=""
                                objectFit="cover"
                                width={400}
                                height={225}
                                quality={30}
                            />
                        </div>

                        {/* title & date */}
                        <div className="w-full px-6 pt-4">
                            <h2 className="text-base font-medium mb-3">{getText(page.properties.name.title)}</h2>
                            <p className="text-gray-700 text-xs mb-2">{getDate(page.properties.published.date)}</p>
                        </div>

                        {/* tag */}
                        <div className="w-full px-6 pb-4">
                            {getMultiSelect(page.properties.tags.multi_select).map((tag, index) => (
                                <span
                                    key={index}
                                    className="text-sm px-2 py-1 font-normal bg-gray-200 rounded-lg break-words mr-2 mb-2"
                                >
                                    {`#${tag}`}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </>
    );
}
