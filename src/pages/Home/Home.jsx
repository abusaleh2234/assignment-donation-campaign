import { useLoaderData } from "react-router-dom";
import Banner from "../../component/Header/Banner/Banner";
import AllDonationCard from "../../component/AllDonetionCard/AllDonationCard";


const Home = () => {
    const donations = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <AllDonationCard donations={donations}></AllDonationCard>
        </div>
    );
};

export default Home;