import { ArchiveCards } from "@/app/lib/definitions";
export default function ArchiveWrapper() {
    const sampleCards: ArchiveCards[] = [
        {
            year: "2023",
        },
        {
            year: "2024",
        },
    ];

    return (
        <>
            {sampleCards.map((card, index) => (
                <Card key={index} title={card.year} />
            ))}
        </>
    );
}

export function Card({ title }: { title: string }) {
    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
            <div className="flex p-4">
                <h3 className="ml-2 text-sm font-medium">{title}</h3>
            </div>
        </div>
    );
}
