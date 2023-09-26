import PropTypes from 'prop-types';


// import bannerbg from ""
const Banner = ({hendelSerchCetagory}) => {

    return (
        <div>
            <div className="hero min-h-[80vh]" style={{ backgroundImage: `url("https://i.ibb.co/rxCFbfd/Rectangle-4281-1.png")` }}>
                <div className="hero-overlay bg-white bg-opacity-80"></div>
                <div className="hero-content text-center ">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">I Grow By Helping People In Need</h1>
                        <form onSubmit={hendelSerchCetagory} >
                            <input className="py-3 px-3 w-8/12 rounded-l-lg outline-none border-y-2	border-l-2" name="cetagoryName" placeholder="Search here...." type="text" />
                            <input className="cursor-pointer py-3 px-8 bg-[#FF444A] border-2 border-[#FF444A] rounded-r-lg font-semibold text-white" type="submit" value="Search" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
Banner.propTypes = {
    hendelSerchCetagory: PropTypes.func.isRequired
}
export default Banner;