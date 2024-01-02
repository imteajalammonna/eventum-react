import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { hotel, title, description } = service;
    return (
        <div className=" border  p-5 shadow-xl rounded-xl">
            <div className="">
                <img className="rounded-xl w-full object-cover h-60 mb-4 inline-block" src={hotel} alt="" />
            </div>
            <h2 className="mb-[12px] text-[25px] ">{title}</h2>
            {
                description.length > 100 && <p className='mb-8'> {description.slice(0, 90 )} </p>  
                // <Link> <p>Read more...</p></Link>
            }
            <button className="button btn-fill w-full">Details</button>
        </div>
    );
};
Service.propTypes = {
    service: PropTypes.object.isRequired
};

export default Service;