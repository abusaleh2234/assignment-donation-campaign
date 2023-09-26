import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const SavedDonationCard = ({donationData}) => {

    const {id,picture, category,text_color,price,title,category_bg,card_bg} = donationData || {}

    return (
        <div>
            <div style={{backgroundColor:card_bg}} className="h-44 relative flex  flex-row rounded-xl bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={picture}
                        alt="image"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 style={{ color: text_color, backgroundColor: category_bg }} className="inline mt-3 py-1 px-3 rounded-lg font-sans">
                        {category}
                    </h6>
                    <h4 className="mb-2 block font-sans text-lg md:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {title}
                    </h4>
                    <p style={{color:text_color}} className='font-semibold'>
                        ${price}
                    </p>
                    <Link to={`/home/${id}`} className="inline-block" href="#">
                        <button
                        style={{backgroundColor:text_color}}
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
SavedDonationCard.propTypes ={
    donationData:PropTypes.object.isRequired
}
export default SavedDonationCard;