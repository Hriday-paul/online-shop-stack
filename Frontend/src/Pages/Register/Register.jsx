import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'
import { authContext } from "../../Component/Authonicate/Authonicate";
import { useState } from "react";
import { updateProfile } from "firebase/auth";

function Register() {
    const { createUser } = useContext(authContext);
    const [passError, setPassError] = useState("");
    const {state} = useLocation();
    const navig = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setPassError("pasword must use 6 character")
        }
        else if (!/[A-Z]/.test(password)) {
            setPassError("pasword must use an Uppercase character")
        }
        else if (!/[#?!@$%^&*-]/.test(password)) {
            setPassError("pasword must use an special character")
        }
        else {
            createUser(email, password)
                .then(({ user }) => {
                    updateProfile(user, { displayName: name });
                    Swal.fire({
                        title: 'success',
                        text: 'Registration successfully',
                        icon: 'success',
                        confirmButtonText: 'Go Back'
                    })
                    form.reset();
                    setPassError("")
                    state && navig(`${state}`)
                })
                .catch((err) => {
                    Swal.fire({
                        title: "error",
                        text: err.message,
                        icon: 'error',
                        confirmButtonText: 'Go Back'
                    })
                })
        }
    }
    return (
        <div>
            <section className="bg-gray-50">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Create an account
                            </h1>
                            <form onSubmit={handleRegister} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="userName" className="block mb-2 text-sm font-medium text-gray-900 ">User name</label>
                                    <input type="text" name="name" id="userName" placeholder="user name..." className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@gmail.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                                    <p className="text-sm text-center text-red-500 mt-2">{passError}</p>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="terms" className="font-light text-gray-500">I accept the <a className="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                                <p className="text-sm font-light text-gray-700">
                                    Already have an account? <Link to="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Register