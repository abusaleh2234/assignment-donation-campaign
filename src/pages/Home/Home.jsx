import { useLoaderData } from "react-router-dom";
import Banner from "../../component/Header/Banner/Banner";
import AllDonationCard from "../../component/AllDonetionCard/AllDonationCard";
import { useState } from 'react';
// import swal from 'sweetalert';


const Home = () => {
    const donations = useLoaderData()
    const [cetagoryValue,setCetagorey] = useState()
    const [allDisplay, setAlldisplay] = useState(false)

    const singelCatagory = donations?.filter(donation => donation.category?.toLowerCase() === cetagoryValue?.toLowerCase())
    // console.log(singelCatagory)

    const hendelSerchCetagory = (e) => {
        // if(singelCatagory.length <= 0 ){
        //     swal("Error!", "NO Data Found!", "error");
        // }
        e.preventDefault();
        const formValue = e.target.cetagoryName.value
        setCetagorey(formValue)
        setAlldisplay(true)
        e.target.cetagoryName.value = ""

    }
    return (
        <div>
            <Banner hendelSerchCetagory={hendelSerchCetagory}></Banner>
            {
                allDisplay && singelCatagory?.length > 0 ? <AllDonationCard donations={singelCatagory}></AllDonationCard>  :<AllDonationCard donations={donations}></AllDonationCard>
            }
        </div>
    );
};

export default Home;