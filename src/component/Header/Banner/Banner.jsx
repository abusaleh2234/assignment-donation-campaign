
const Banner = () => {

    return (
        <div>
            <div className="hero min-h-[80vh]" style={{ backgroundImage: 'url(./banner-bg.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold">I Grow By Helping People In Need</h1>
                        <input className="py-3 px-3 w-8/12 outline-none" placeholder="Search" type="text" />
                        <button className="py-3 px-8 bg-[#FF444A]">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;