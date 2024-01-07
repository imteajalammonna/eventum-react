import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Service = ({ service }) => {
    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1000
        });
    }, []);
    const { id, hotel, title, description, animation } = service;
    return (
        <div data-aos={animation} className=" border   p-5 shadow-xl rounded-xl">
            <div className="">
                <img className="rounded-xl w-full object-cover h-60 mb-4 inline-block" src={hotel} alt="" />
            </div>
            <h2 className="mb-[12px] text-[25px] ">{title}</h2>
            {
                description.length > 100 && <p className='mb-8'> {description.slice(0, 90)} </p>
                // <Link> <p>Read more...</p></Link>
            }
            <Link to={`details/${id}`}><button className="button btn-fill w-full">Details</button></Link>
        </div>
    );
};
Service.propTypes = {
    service: PropTypes.object.isRequired
};

export default Service;