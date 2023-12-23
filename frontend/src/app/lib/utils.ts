import { PageType, RichTextType } from "./definitions";

export const generatePagination = (currentPage: number, totalPages: number) => {
    // If the total number of pages is 7 or less,
    // display all pages without any ellipsis.
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // If the current page is among the first 3 pages,
    // show the first 3, an ellipsis, and the last 2 pages.
    if (currentPage <= 3) {
        return [1, 2, 3, "...", totalPages - 1, totalPages];
    }

    // If the current page is among the last 3 pages,
    // show the first 2, an ellipsis, and the last 3 pages.
    if (currentPage >= totalPages - 2) {
        return [1, 2, "...", totalPages - 2, totalPages - 1, totalPages];
    }

    // If the current page is somewhere in the middle,
    // show the first page, an ellipsis, the current page and its neighbors,
    // another ellipsis, and the last page.
    return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
};

// Notion APIから取得したテキストを画面で使用しやすいように整形
export const getText = (richTextArr: RichTextType[]) => {
    try {
        const textArr = richTextArr.map((richText) => richText.plain_text);
        return textArr.join("");
    } catch (err) {
        console.error(err);
    }
    return "";
};

// Notion APIから取得したカバー画像を画面で使用しやすいように整形
export const getCover = (cover: PageType["cover"]) => {
    if (cover && cover.file) {
        return cover.file.url;
    }

    if (cover && cover.external) {
        return cover.external.url;
    }

    return "/noimage.png";
};

export const getDate = (date: { start: string }) => {
    try {
        return date.start;
    } catch (err) {
        console.error(err);
    }
    return "-";
};

export const getMultiSelect = (multiSelect: [{ name: string }]) => {
    try {
        return multiSelect.map((tag) => tag.name);
    } catch (err) {
        console.error(err);
    }
    return [];
};
