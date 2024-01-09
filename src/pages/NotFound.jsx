import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center flex-col">
            <h1 className="text-[300px] font-bold">4<span className="text-blue-500">0</span>4</h1>
            <h3 className="text-5xl font-bold">THE PAGE YOU REQUESTED COULD NOT FOUND</h3>
            <Link to="/"><button className="button m-12 btn-fill">Go Back</button></Link>
        </div>
    );
};

export default NotFound;