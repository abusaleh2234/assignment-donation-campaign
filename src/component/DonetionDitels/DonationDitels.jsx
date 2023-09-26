
import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import swal from 'sweetalert';

const DonationDitels = () => {

    const donations = useLoaderData()
    // const params = useParams()
    const { id } = useParams()
    const [donation, setDonation] = useState()

    useEffect(() => {
        const donationFind = donations?.find(donation => donation.id === parseInt(id))
        setDonation(donationFind)
    }, [id, donations])

    const { picture, title, text_color, description,price } = donation || {}

    const hendeldonations = () => {
        // console.log("clicked")

        const donationedAll = []

        const saveedDonation = JSON.parse(localStorage.getItem('donation'))
        // console.log(saveedDonation)

        if(!saveedDonation){
            donationedAll.push(donation)
            localStorage.setItem('donation',JSON.stringify(donationedAll))
            swal("Good job!", "You donation successfully!", "success");
        }
        else{
            const isExist = saveedDonation?.find(donation => donation.id === id)

            if(!isExist){
                donationedAll.push(...saveedDonation,donation)
                localStorage.setItem('donation',JSON.stringify(donationedAll))
                swal("Good job!", "You donation successfully!", "success");
            }
            else{
                swal("Error!", "You clicked the button!", "error");
            }
        }

        // localStorage.setItem('donation',JSON.stringify(donation))

    }

    return (
        <div className=' w-10/12  mx-auto flex justify-center py-10'>
            <div className="space-y-4">
               <div className="relative">
                    <img className='  w-full rounded-xl' src={picture} alt="" />
                    <div className="absolute w-full bottom-0  rounded-b-xl px-10 py-9 bg-black bg-opacity-30  z-10">
                        <button
                        onClick={hendeldonations}
                        style={{backgroundColor:text_color}} className='btn border-none z-20 py-4 px-6 rounded-lg text-white'>Donate ${price}</button>
                    </div>
               </div>
                <h2 className='text-2xl	font-bold'>{title}</h2>
                <p className='text-base	text-justify'>{description}</p>
            </div>
        </div>
    );
};

export default DonationDitels;