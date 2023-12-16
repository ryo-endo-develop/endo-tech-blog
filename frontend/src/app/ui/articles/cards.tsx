import { ArticleCards, ArticleTagType, articleTagIconMap } from "@/app/lib/definitions";
export default async function CardWrapper() {
    const sampleCards: ArticleCards[] = [
        {
            title: "プログラミング言語",
            articleCount: 0,
            type: "programmingLanguage",
        },
        {
            title: "ライブラリ・フレームワーク",
            articleCount: 0,
            type: "library",
        },
        {
            title: "データベース・DWH",
            articleCount: 0,
            type: "database",
        },
        {
            title: "Webテクノロジー",
            articleCount: 0,
            type: "technorogy",
        },
        {
            title: "ネイティブアプリ",
            articleCount: 0,
            type: "nativeApp",
        },
        {
            title: "DevOps・インフラ・SRE",
            articleCount: 0,
            type: "devOps",
        },
        {
            title: "OS",
            articleCount: 0,
            type: "os",
        },
        {
            title: "エディタ",
            articleCount: 0,
            type: "editor",
        },
        {
            title: "サービス・アプリケーション",
            articleCount: 0,
            type: "service",
        },
        {
            title: "Organization",
            articleCount: 0,
            type: "organization",
        },
        {
            title: "本",
            articleCount: 0,
            type: "books",
        },
        {
            title: "その他",
            articleCount: 0,
            type: "other",
        },
        {
            title: "未設定",
            articleCount: 0,
            type: "none",
        },
    ];

    return (
        <>
            {sampleCards.map((card, index) => (
                <Card key={index} title={card.title} value={card.articleCount} type={card.type} />
            ))}
        </>
    );
}

export function Card({ title, value, type }: { title: string; value: number | string; type: ArticleTagType }) {
    const Icon = articleTagIconMap[type];

    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
            <div className="flex p-4">
                {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
                <h3 className="ml-2 text-sm font-medium">{title}</h3>
                <span className="ml-2 text-sm font-medium">({value})</span>
            </div>
        </div>
    );
}
