import { FC, ReactNode } from "react";

export type DashbordProps = {
    children: ReactNode;
};

const Dashboard: FC<DashbordProps> = ({ children }) => {
    return (
        <div className="relative overflow-hidden">
            <div className="flex flex-col items-center max-w-2xl w-full mx-auto">
                <main>{children}</main>
            </div>
        </div>
    );
};

export default Dashboard;
