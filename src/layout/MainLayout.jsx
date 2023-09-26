import { Outlet } from "react-router-dom";
import Navbar from "../component/Header/Navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <div className="mx-5">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;