import Dashboard from "@/templates/Main/DashboardTemplate";
import { siteConfig } from "./model/site.config";

export default function Home() {
    return (
        <Dashboard>
            <div className="pt-12">
                <h1 className="text-5xl mb-8">{siteConfig.title}</h1>
                <div className="grid md:gap-6 mt-10 md:grid-cols-2 w-full my-12">{/* Card */}</div>
            </div>
        </Dashboard>
    );
}
