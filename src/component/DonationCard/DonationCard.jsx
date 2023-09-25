import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCard = ({ donetion }) => {

    const {id, picture, title, category, card_bg, text_color, category_bg } = donetion

    return (
        <div>
            <Link to={`/home/${id}`}>
                <div style={{ backgroundColor: card_bg }} className="relative flex flex-col rounded-xl  bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                        <img
                            className='w-full h-48 rounded-se-xl'
                            src={picture}
                            alt="ui/ux review check"
                        />
                    </div>
                    <div className="p-6">
                        <p style={{ color: text_color, backgroundColor: category_bg }} className="inline mt-3 py-1 px-3 rounded-lg font-sans">
                            {category}
                        </p>
                        <h4 style={{ color: text_color }} className="block font-semibold text-xl font-sans leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {title}
                        </h4>
                    </div>
                </div>
            </Link>
        </div>
    );
};
DonationCard.propTypes = {
    donetion: PropTypes.object.isRequired
}
export default DonationCard;