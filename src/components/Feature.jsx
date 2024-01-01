import PropTypes from 'prop-types';

const Feature = ({ feature }) => {
    const { image,title,description } = feature;
    return (
        <div className=" border xl:h-[460px] lg:h-[420px] md:h-[430px] p-5 shadow-xl rounded-xl">
            <div className="">
            <img className="rounded-xl w-full object-cover h-60 mb-3 inline-block" src={image} alt="" />
            </div>
            <h2 className="mb-[7px] text-[25px] ">{title}</h2>
            <p className="text-lg">{description}</p>
        </div>
    );
};
Feature.propTypes = {
    feature: PropTypes.object.isRequired
};

export default Feature;