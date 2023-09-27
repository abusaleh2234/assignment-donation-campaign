import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorElement from "../component/ErrorElement/ErrorElement";
import DonationDitels from "../component/DonetionDitels/DonationDitels";
import Donetions from "../component/Donations/Donetions";
import Statistics from "../component/Statistics/Statistics";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("/donations.json")
            },
            {
                path: "/home/:id",
                element: <DonationDitels></DonationDitels>,
                loader: () => fetch("/donations.json")
            },
            {
                path: "/donation",
                element: <Donetions></Donetions>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader: () => fetch("/donations.json")
            }
        ]
    }
])

export default Router;