import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredService } from "../Utility/localstorage";


const AppliedEvents = () => {

    const events = useLoaderData();
    const [appliedEvent, setAppliedEvent] = useState([])

    useEffect(() => {
        const storedIds = getStoredService();
        if (events) {
            const eventsApplied = events.filter(event => storedIds.includes(event.id))
            setAppliedEvent(eventsApplied)

            console.log(eventsApplied);
        }
    }, [events])




    return (
        <div className="min-h-screen">
            <div className="my-32">
                {
                    appliedEvent.map(event =>
                        <div
                            className="bg-gray-400 md:mx-24 my-5 m-2 p-4 border md:flex rounded-md space-x-8"
                            key={event.id}>
                            <div className="md:flex">
                                <img className="" src={event.hotel} alt="" />
                            </div>
                            <div className="m-0 lex-col  md:m-8 md:space-y-2">
                                {/* <h1 className="text-2xl md:text-4xl text-[#FE0030] font-bold">{event.title}</h1> */}
                                <h4 className="text-3xl text-white">Hotel: {event.hotel_name}</h4>
                                <p className="text-2xl">Price: ${event.price}</p>
                                <button className="button btn-fill w-28">Details</button>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default AppliedEvents;