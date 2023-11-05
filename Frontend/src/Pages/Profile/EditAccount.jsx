import { useContext, useEffect, useState } from "react"
import { authContext } from "../../Component/Authonicate/Authonicate";
import axios from "axios";
import { updateProfile } from "firebase/auth";
import auth from "../../firebase.init";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function EditAccount() {
    const { userInfo } = useContext(authContext);
    const navig = useNavigate();
    const [user, setUser] = useState({ name: " ", email: " ", phone: " " });
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.get(`https://online-shop-server-f69l.onrender.com/api/getuser?email=${userInfo.email}`)
            .then(res => {
                setUser(res.data.userData)
                setLoading(false);
            })
    }, [])

    const handleChange = (e) => {
        e.preventDefault();
        const fieldName = e.target.name;
        const value = e.target.value;
        setUser(prevInfo => ({ ...prevInfo, [fieldName]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`https://online-shop-server-f69l.onrender.com/api/updateUser?email=${userInfo.email}`, user)
        updateProfile(auth.currentUser, { displayName: user.name, email: user.email, phoneNumber: user.phone })
            .then(() => {
                Swal.fire({
                    title: 'success',
                    text: 'update successfully',
                    icon: 'success',
                    confirmButtonText: 'Go Back'
                })
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
    return (
        <div className="bg-gray-200">
            <div className="max-w-7xl mx-auto px-4 min-h-16">
                <form className="" onSubmit={handleSubmit}>
                    {
                        loading ? <Skeleton height={40} enableAnimation={true} baseColor={"rgb(209 213 219)"} /> : <h2 className="text-lg font-medium decoration-dashed uppercase pt-4 underline underline-offset-4">Edit Account</h2>
                    }

                    <div className="grid grid-cols-1 md:grid-cols-2 py-7">
                        {
                            loading ? <Skeleton height={40} count={3} enableAnimation={true} baseColor={"rgb(209 213 219)"} /> : <div className="grid grid-cols-1 gap-y-4 md:gap-y-0 order-2 md:order-1">
                                <div className="flex items-center">
                                    <label htmlFor="name" className="mb-2 w-28 md:w-32 mr-3 md:mr-8 font-medium text-gray-900 block text-sm lg:text-base ">UserName :</label>
                                    <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full" placeholder="userName..." required onChange={handleChange} value={user.name} />
                                </div>

                                <div className="flex items-center">
                                    <label htmlFor="email" className="mb-2 w-28 md:w-32 mr-3 md:mr-8 font-medium text-gray-900 block text-sm lg:text-base ">Email :</label>
                                    <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-full" placeholder="email..." required onChange={handleChange} value={user.email} />
                                </div>

                                <div className="flex items-center">
                                    <label htmlFor="phone" className="mb-2 w-28 md:w-32 mr-3 md:mr-8 font-medium text-gray-900 block text-sm lg:text-base ">Phone :</label>
                                    <div className="flex w-full">
                                        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md ">
                                            +880
                                        </span>
                                        <input type="number" id="phone" name="phone" className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5" placeholder="phone..." required onChange={handleChange} value={user.phone} />
                                    </div>
                                </div>

                                {
                                    loading ? <Skeleton height={40} count={2} enableAnimation={true} baseColor={"rgb(209 213 219)"}></Skeleton> : <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-4 md:gap-4 mt-4">
                                        <span onClick={() => navig(-1)} className="btn btn-primary w-full">Cencel</span>
                                        <button className="btn btn-primary w-full" type="submit">Update</button>

                                    </div>
                                }


                            </div>
                        }

                        <div className="flex justify-center items-center order-1 md:order-2">
                            {
                                loading ? <Skeleton height={50} enableAnimation={true} baseColor={"#eaeaea"} /> : <img className="h-72" src="https://i.ibb.co/8DYgb7d/22a70f8eeb423360c42a5188f0e34068-removebg-preview.png" alt="img" />
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditAccount