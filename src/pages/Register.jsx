import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import { FcGoogle } from "react-icons/fc";

const Register = () => {

    const { createUser ,signInWithGoogle } = useContext(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogleSingIn = () => {
        signInWithGoogle();
    }
    return (
        <div className="bg-gray-400 ">
            <div className="md:hero md:min-h-screen md:container md:mx-auto ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl mt-16 font-bold">Register now!</h1>
                        <p className="py-6 md:w-[500px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card mx-auto shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input type="photo" name="photo" placeholder="Photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <Link to="/" className="label-text-alt link link-hover">Forgot Password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="button btn-fill">Register</button>
                            </div>
                            <p>Already have an account? <Link to="/login" className="underline text-[#06d425]">Login here</Link> </p>

                        </form>
                        <div className="flex items-center justify-center text-3xl mb-8">
                            <button onClick={handleGoogleSingIn} className=""><FcGoogle /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;