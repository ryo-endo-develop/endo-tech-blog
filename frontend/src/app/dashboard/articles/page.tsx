import { Suspense } from "react";

import ArchiveWrapper from "@/app/ui/articles/archives";
import CardWrapper from "@/app/ui/articles/cards";
import { lusitana } from "@/app/ui/fonts";
import { CardsSkeleton } from "@/app/ui/skeletons";

export default function Page() {
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>Category</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl mt-6`}>Archive</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Suspense fallback={<CardsSkeleton />}>
                    <ArchiveWrapper />
                </Suspense>
            </div>
        </main>
    );
}
