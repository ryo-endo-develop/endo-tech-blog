import { fetchPages } from "./lib/data";

export default async function Home() {
    const { results } = await fetchPages();
    console.log(results);

    return <div>endo</div>;
}
