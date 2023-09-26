import { useEffect, useState } from "react";
import SavedDonationCard from "../SavedDonationCard/SavedDonationCard";

const Donetions = () => {

    const [savedDonetionData, setSavedDonetionData] = useState()
    const [noData, setNoData] = useState(false)
    const [donstions, setDontions] = useState(4)
    // const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        const savedDonetion = JSON.parse(localStorage.getItem('donation'))
        if (savedDonetion) {
            setSavedDonetionData(savedDonetion)
        }
        else {
            setNoData("No Data Found")
        }
    }, [])
    // console.log(savedDonetionData)

    // const hendelShowAll = () => {
    //     setShowAll(true)
    // }


    return (
        <div className="py-10">

            {
                noData ? <p className="font-bold flex justify-center items-center h-[80vh]">{noData}</p> : <div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {
                            savedDonetionData?.slice(0, donstions)?.map(donationData => <SavedDonationCard key={donationData.id} donationData={donationData}></SavedDonationCard>)
                        }</div>
                    <div className={`py-6 text-center ${donstions === savedDonetionData?.length ? "hidden" : ""}`}>
                        <button
                            onClick={() => setDontions(savedDonetionData.length)}
                            className="font-semibold py-2 px-5 bg-[#009444] rounded-lg text-white">See All</button>
                    </div>
                </div>

            }
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
                savedDonetionData?.slice(0,donstions)?.map(donationData => <SavedDonationCard key={donationData.id } donationData={donationData}></SavedDonationCard>)
            }
         
            </div> */}

            {/* <div className={`py-6 text-center ${donstions === savedDonetionData?.length ? "hidden" : ""}`}>
                <button
                onClick={() => setDontions(savedDonetionData.length)}
                 className="font-semibold py-2 px-5 bg-[#009444] rounded-lg text-white">See All</button>
            </div> */}
        </div>
    );
};

export default Donetions;