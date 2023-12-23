import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_KEY });
const DATABASE_ID = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string;

export const fetchPages = async () => {
    return await notion.databases.query({
        database_id: DATABASE_ID,
    });
};
