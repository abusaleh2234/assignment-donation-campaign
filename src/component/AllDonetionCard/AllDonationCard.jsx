import PropTypes from 'prop-types';
import DonationCard from "../DonationCard/DonationCard";



const AllDonationCard = ({donations}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10'>
            {
                donations?.map(donetion => <DonationCard key={donetion.id} donetion={donetion}></DonationCard>)  
            }
        </div>
    );
};
AllDonationCard.propTypes = {
    donations:PropTypes.array.isRequired
}
export default AllDonationCard;