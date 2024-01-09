import { useContext } from "react";
import { AuthContext } from "../components/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if(loading){
        return <div className="flex my-96 items-center justify-center">
         <div className="containers">
  <div className="dot dot-1"></div>
  <div className="dot dot-2"></div>
  <div className="dot dot-3"></div>
</div>

<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="goo">
      <feGaussianBlur
        result="blur"
        stdDeviation="10"
        in="SourceGraphic"
      ></feGaussianBlur>
      <feColorMatrix
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
        mode="matrix"
        in="blur"
      ></feColorMatrix>
    </filter>
  </defs>
</svg>

        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
}
export default PrivateRoute;