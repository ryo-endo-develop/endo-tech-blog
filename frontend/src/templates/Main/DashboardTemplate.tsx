import Footer from "@/organisms/footer/Footer";
import Navbar from "@/organisms/nav-bar/Navbar";
import React from "react";

const Dashboard = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="flex flex-col items-center max-w-2xl w-full mx-auto">
                <Navbar />
                <main></main>
                <Footer />
            </div>
        </div>
    );
};

export default Dashboard;
