import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Chart } from "react-google-charts";


const Statistics = () => {

    const donations = useLoaderData()
    // console.log(donations)

    const [totalDonations, setTotalDonations] = useState()
    const [doneted, setDoneted] = useState()

    useEffect(() => {
        const totalDonations = donations?.reduce((preValue, currentItem) => preValue + currentItem.price, 0)
        

        const doneted = JSON.parse(localStorage.getItem("donation"))
        const donetedTotal = doneted?.reduce((preValue, currentItem) => preValue + currentItem.price, 0)

        setDoneted(donetedTotal)
        setTotalDonations(totalDonations - donetedTotal)

    }, [donations])
    console.log(totalDonations)
    console.log(doneted)
    const data = [
        ["Task", "Hours per Day"],
        ["Your Donation", doneted],
        ["Total Donation", totalDonations],

    ];
    const options = {
        title: "Donation Chart",
      };

    return (
        <div className=' flex justify-center items-center h-[80vh]w-10/12'>
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"700px"}
            />
        </div>
    );
};

export default Statistics;
