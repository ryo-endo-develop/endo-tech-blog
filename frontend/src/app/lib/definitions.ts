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

export type IndexCardProps = { pages: PageType[] };

// Notion API(QueryDatabaseResponse)で取得した値のうち使いたいものを定義
export type PageType = {
    id: string;
    cover: FileType | null;
    properties: PropertyType;
};

export type FileType = {
    file?: { url: string };
    external?: { url: string };
};

export type PropertyType = {
    name: { title: RichTextType[] };
    author: { rich_text: RichTextType[] };
    slug: { rich_text: RichTextType[] };
    published: { date: { start: string } };
    isPublic: { checkbox: boolean };
    tags: { multi_select: [{ name: string }] };
    type: { multi_select: [{ name: string }] };
};

export type RichTextType = {
    plain_text: string;
    href: string | null;
    annotations: AnnotationType;
};

export type AnnotationType = {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
};
