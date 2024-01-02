import { useEffect, useState } from "react";
import Service from "../components/Service";



const About = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/rahathossenantor/aayojan/main/public/eventData.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5
        ">
            <div className="my-20">
                <h1 className="my-10 text-center text-5xl font-bold">Our Services!</h1>
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