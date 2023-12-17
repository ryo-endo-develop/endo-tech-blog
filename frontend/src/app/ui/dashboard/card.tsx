import Image from "next/image";
import Link from "next/link";

export type CardProps = {
    page: {
        slug: string;
        name: string;
        author: string;
        cover: string;
        published: string;
        tags: string[];
        content: string;
    };
};

export default async function CardWrapper() {
    // const { numberOfInvoices, numberOfCustomers, totalPaidInvoices, totalPendingInvoices } = await fetchCardData();
    const sampleCards = [
        {
            slug: "red",
            name: "Red",
            author: "dog",
            cover: "/",
            published: "202x-xx-01",
            tags: ["notion", "nextjs"],
            content: "Red page content",
        },
        {
            slug: "green",
            name: "Green",
            author: "cat",
            cover: "/",
            published: "202x-xx-02",
            tags: ["notion"],
            content: "Green page content",
        },
        {
            slug: "blue",
            name: "Blue",
            author: "bird",
            cover: "/",
            published: "202x-xx-03",
            tags: ["react"],
            content: "Blue page content",
        },
    ];

    return (
        <>
            {sampleCards.map((page, index) => (
                <Card key={index} page={page} />
            ))}
        </>
    );
}

export function Card({ page }: CardProps) {
    return (
        <>
            <Link href={`/dashboard/articles/${page.slug}`}>
                <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
                    <div className="rounded overflow-hidden shadow-lg w-full my-4 md:my-0 content-between grid">
                        {/* image */}
                        <div className="w-full">
                            <Image
                                className="w-full static h-auto"
                                src={page.cover}
                                alt=""
                                objectFit="cover"
                                width={400}
                                height={225}
                                quality={30}
                            />
                        </div>

                        {/* title & date */}
                        <div className="w-full px-6 pt-4">
                            <h2 className="text-base font-medium mb-3">{page.name}</h2>
                            <p className="text-gray-700 text-xs">{page.published}</p>
                        </div>

                        {/* tag */}
                        <div className="w-full px-6 pb-4">
                            {page.tags.map((tag, index) => (
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
