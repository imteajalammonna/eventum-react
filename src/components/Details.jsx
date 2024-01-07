import { useLoaderData, useParams } from "react-router-dom";
import { SetNewServiceLS } from "../Utility/localstorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Details = () => {

    const services = useLoaderData();
    const { id } = useParams();

    const service = services.find(service => service.id === JSON.parse(id));
    const { title, hotel, description, price, hotel_name, short_description } = service;

    const SetServiceLS = () => {
        SetNewServiceLS(id)
        toast("You have Booked Successfully")
    }
    return (
        <div className="bg-gray-300">
            <div className="container mx-auto p-4">
                <div className="max-w-4xl mt-28 mx-auto bg-white rounded-md overflow-hidden shadow-lg">
                    <img src={hotel} alt="Service" className="w-full " />
                    <div className="p-6">
                        <h1 className="text-3xl font-bold mb-2 text-[#FE0233]">{title}</h1>
                        <p className="text-gray-600 mb-2">Hotel: {hotel_name}</p>
                        <p className="text-gray-800 mb-4">{description}</p>
                        <div className="flex items-center justify-between">
                            <p className="text-lg text-gray-800 font-bold">Price: ${price}</p>
                            <button
                                onClick={SetServiceLS}
                                className="button btn-fill"
                            >
                                Book
                            </button>
                        </div>
                        <hr className="my-4 border-t border-gray-300" />
                        <p className="text-gray-700">{short_description}</p>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Details;