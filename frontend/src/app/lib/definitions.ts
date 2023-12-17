import {
    BookOpenIcon,
    BuildingLibraryIcon,
    BuildingOfficeIcon,
    CircleStackIcon,
    ClipboardDocumentIcon,
    CloudIcon,
    CodeBracketIcon,
    CpuChipIcon,
    DevicePhoneMobileIcon,
    DocumentMinusIcon,
    GiftIcon,
    GlobeAltIcon,
    PencilIcon,
} from "@heroicons/react/24/outline";

export type Invoice = {
    id: string;
    customer_id: string;
    amount: number;
    date: string;
    // In TypeScript, this is called a string union type.
    // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
    status: "pending" | "paid";
};

export type ArticleTagType =
    | "programmingLanguage"
    | "library"
    | "database"
    | "technorogy"
    | "nativeApp"
    | "devOps"
    | "os"
    | "editor"
    | "service"
    | "organization"
    | "books"
    | "other"
    | "none";

export const articleTagIconMap = {
    programmingLanguage: CodeBracketIcon,
    library: BuildingLibraryIcon,
    database: CircleStackIcon,
    technorogy: GlobeAltIcon,
    nativeApp: DevicePhoneMobileIcon,
    devOps: CloudIcon,
    os: CpuChipIcon,
    editor: PencilIcon,
    service: GiftIcon,
    organization: BuildingOfficeIcon,
    books: BookOpenIcon,
    other: ClipboardDocumentIcon,
    none: DocumentMinusIcon,
};

export type ArticleCards = {
    title: string;
    articleCount: number;
    type: ArticleTagType;
};

export type ArchiveCards = {
    year: string;
};

export type PageProps = {
    slug: string;
    name: string;
    author: string;
    cover: string;
    published: string;
    updated: string;
    tags: string[];
    type: ArticleTagType[];
    content: string;
};

export type ArticleProps = {
    page: PageProps;
};
