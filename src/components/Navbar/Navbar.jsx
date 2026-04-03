import React from 'react';
import navImg from "../../assets/logo.png"
import dollarImg from "../../assets/Currency.png"
import bannerImg from "../../assets/bg-shadow.png"
import bannerImgLast from "../../assets/banner-main.png"

const Navbar = () => {
    return (
        <>
            <div className="navbar flex flex-col md:flex-row justify-between items-center mx-auto max-w-[1500px] px-4 mt-8 gap-y-4">
                <div className="flex-1">
                    <a className="text-xl">
                        <img className="w-[60px] h-[60px]" src={navImg} alt="Logo" />
                    </a>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-0">
                    <h2 className="mr-4 text-sm ">Home</h2>
                    <h2 className="mr-4 text-sm">Fixture</h2>
                    <h2 className="mr-4 text-sm">Teams</h2>
                    <h2 className="mr-6 text-sm">Schedules</h2>

                    <button className="btn rounded-xl flex items-center p-2 md:p-3">
                        <span className="mr-2 text-xs ">600000000</span>
                        <span className="mr-2 text-xs ">Coin</span>
                        <img src={dollarImg} alt="coin" className="w-5 h-5" />
                    </button>
                </div>
            </div>


            <section className="relative max-w-[1500px] mx-auto rounded-2xl mt-10 px-4">
                <img
                    className=" w-full h-[500px] object-cover bg-[#131313] rounded-2xl"
                    src={bannerImg}
                    alt=""
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 md:p-6 gap-y-2 md:gap-y-4">
                    <img src={bannerImgLast} alt="Logo" className="w-16 md:w-auto" />
                    <div>
                        <h2 className="text-2xl md:text-5xl font-bold mb-2 md:mb-3">
                            Assemble Your Ultimate Dream 11 Cricket Team
                        </h2>
                        <p className="text-sm md:text-2xl mb-4">
                            Beyond Boundaries Beyond Limits
                        </p>
                        <button className="btn bg-[#E7FE29] text-black font-bold rounded-xl">
                            Claim Free Credit
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navbar;