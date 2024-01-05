import { useEffect, useState } from "react";
import Service from "../components/Service";
import AOS from "aos";
import "aos/dist/aos.css";



const About = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/rahathossenantor/aayojan/main/public/eventData.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, []);
    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1000
        });
    }, []);

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5
        ">
            <div className="my-20 " data-aos="fade-down">
            <h2 className=" my-10 text-center text-5xl font-semibold font-poppins">Our <span className="text-[#FE0233]">Services</span></h2>
                <div className="grid gap-5 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 place-items-center justify-center">
                    {
                        services.map((service) => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default About;