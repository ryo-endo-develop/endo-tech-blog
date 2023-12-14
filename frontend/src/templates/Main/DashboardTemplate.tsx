import Footer from "@/organisms/footer/Footer";
import Navbar from "@/organisms/nav-bar/Navbar";
import React, { FC, ReactNode } from "react";

export type DashbordProps = {
    children: ReactNode;
};

const Dashboard: FC<DashbordProps> = ({ children }) => {
    return (
        <div className="relative overflow-hidden">
            <div className="flex flex-col items-center max-w-2xl w-full mx-auto">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </div>
        </div>
    );
};

export default Dashboard;
