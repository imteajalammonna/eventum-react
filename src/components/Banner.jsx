import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
    const BG = 'https://i.ibb.co/Kmg2Bjv/eugenivy-now-1-Bs2s-Z9f-D2-Q-unsplash.jpg';
    useEffect(() => {
        AOS.init({
            delay: 200,
            offset: 300,
            duration: 1100
        });
    }, []);

    return (<>
        <section className="min-h-[92vh] flex items-center justify-center bg-cover bg-center bg-black bg-opacity-50" style={{ backgroundImage: `url(${BG})` }}>
            <div className="min-h-[92vh] w-full flex items-center justify-center bg-cover bg-center bg-black bg-opacity-50">
                <div data-aos="fade-down" className="bg-black mx-auto md:container text-center bg-transparent">
                    <h1 className="2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-5xl text-white font-semibold font-inter">Plan your event today with</h1>
                    <span className="2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-5xl font-pasifico text-[#FE0233]">Eventum</span>
                </div>
            </div>
        </section>
    </>
        // <section id="banner">
        //     <div className="banner-overlay">
        //         <div data-aos="fade-down" className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5 text-center 2xl:py-60 xl:py-52 lg:py-40 md:py-36 py-32">
        //             <h1 className="2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-5xl text-white font-semibold font-inter">Plan your event today with</h1>
        //             <span className="2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl text-5xl font-pasifico text-[#FF5A60]">aayojan</span>
        //         </div>
        //     </div>
        // </section>
    );
};

export default Banner;