import { updatePassword } from "firebase/auth";
import { useNavigate } from "react-router-dom"
import auth from "../../firebase.init";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { authContext } from "../../Component/Authonicate/Authonicate";
import Swal from 'sweetalert2'


function ChangePassword() {
    const { userInfo } = useContext(authContext)
    const navig = useNavigate();
    const [passError, setPassError] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const newPass = form.newPass.value;
        const confirmPass = form.confirmPass.value;
        if (newPass.length < 6) {
            setPassError("pasword must use 6 character")
        }
        else if (!/[A-Z]/.test(newPass)) {
            setPassError("pasword must use an Uppercase character")
        }
        else if (!/[#?!@$%^&*-]/.test(newPass)) {
            setPassError("pasword must use an special character")
        }
        else if (newPass !== confirmPass) {
            setPassError("password not match")
        }
        else {
            updatePassword(auth.currentUser, newPass)
                .then(() => {
                    Swal.fire({
                        title: 'success',
                        text: "update successfully",
                        icon: 'success',
                        confirmButtonText: 'Go Back'
                    })
                    setPassError("")
                })
                .catch((err) => {
                    Swal.fire({
                        title: "error",
                        text: err.message,
                        icon: 'error',
                        confirmButtonText: 'Go Back'
                    })
                })
            const pass = { password: newPass }
            axios.put(`https://online-shop-server-f69l.onrender.com/api/updatePassword?email=${userInfo.email}`, pass)

        }

    }
    return (
        <div className="bg-gray-200">
            <div className="max-w-7xl mx-auto px-4">
                <form className="" onSubmit={handleSubmit}>
                    <h2 className="text-lg font-medium decoration-dashed uppercase pt-4 underline underline-offset-4">Change Password</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 py-7">
                        <div className="grid grid-cols-1 gap-y-4 md:gap-y-0 order-2 md:order-1">

                            <div className="flex items-center">
                                <label htmlFor="newPass" className="mb-2 w-28 md:w-32 mr-3 md:mr-8 font-medium text-gray-900 block text-sm lg:text-base ">New password* :</label>
                                <input type="password" id="newPass" name="newPass" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full" placeholder="new password..." required />
                            </div>
                            <div className="flex items-center">
                                <label htmlFor="confirmPass" className="mb-2 w-28 md:w-32 mr-3 md:mr-8 font-medium text-gray-900 block text-sm lg:text-base ">Confirm password :</label>
                                <input type="password" id="confirmPass" name="confirmPass" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full" placeholder="confirm password..." required />
                            </div>

                            <p className="text-sm text-red-500">{passError}</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-4 md:gap-4 mt-4">
                                <span onClick={() => navig(-1)} className="btn btn-primary w-full">Cencel</span>
                                <button className="btn btn-primary w-full" type="submit">Update</button>
                            </div>
                        </div>
                        <div className="flex justify-center items-center order-1 md:order-2">
                            <img className="h-72" src="https://i.ibb.co/8DYgb7d/22a70f8eeb423360c42a5188f0e34068-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword