import { useEffect, useState } from "react";
import Feature from "../components/Feature";



const About = () => {
    const [services, setServices] = useState([]);
    console.log("object");

    useEffect(() => {
        fetch('/features.json')
            .then(response => response.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className="md:container md:mx-auto 2xl:px-0 xl:px-0 lg:px-5 md:px-5 px-5
        ">
            <div className="my-20">
                <h1 className="my-10 text-center text-5xl font-bold">Our Features!</h1>
                <div className="grid gap-5 xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 place-items-center justify-center">
                    {
                        services.map((feature) => <Feature key={feature.id} feature={feature}></Feature>)
                    }
                </div>
            </div>
        </div>
    );
};

export default About;