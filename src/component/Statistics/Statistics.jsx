import { useEffect, useState } from 'react';
import { useLoaderData} from 'react-router-dom';
import PieChart from 'react-simple-pie-chart';


const Statistics = () => {

    const donations = useLoaderData()
    // console.log(donations)

    const [totalDonations,setTotalDonations] = useState()
    const [doneted,setDoneted] = useState()

    useEffect(() => {
        const totalDonations = donations?.reduce((preValue, currentItem) => preValue + currentItem.price,0 )
        setTotalDonations(totalDonations)

        const doneted = JSON.parse(localStorage.getItem("donation"))
        const donetedTotal = doneted?.reduce((preValue, currentItem) => preValue + currentItem.price,0)

        setDoneted(donetedTotal)

    },[donations])
    console.log(totalDonations)
    console.log(doneted)

    return (
        <div className='w-80'>
            <PieChart
                slices={[
                    {
                        color: '#f00',
                        value:totalDonations,
                    },
                    {
                        color: '#0f0',
                        value: doneted,
                    },
                ]}
            />
        </div>
    );
};

export default Statistics;