import { Link } from "react-router-dom"
import { FiEdit } from 'react-icons/fi';
import { GoSignOut } from 'react-icons/go';
import { BsCardChecklist } from 'react-icons/bs';
import { RiLockPasswordFill } from 'react-icons/ri';
import { useContext } from "react";
import { authContext } from "../../Component/Authonicate/Authonicate";
import Swal from 'sweetalert2'

function UserProfile() {
    const { logOut } = useContext(authContext);
    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: 'success',
                    text: 'Logout successfully',
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
        <>
            <div className="bg-gray-200">
                <div className="max-w-7xl mx-auto p-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-5">
                        <Link to="/profile/EditAccount" className="flex flex-col justify-center items-center gap-y-4 border border-gray-300 py-10 rounded-md cursor-pointer hover:bg-white hover:shadow-lg duration-200 hover:border-white">
                            <FiEdit className="text-2xl md:text-4xl"></FiEdit>
                            <h3 className="text-xl md:text-2xl font-medium font-serif text-center">Edit Your Account</h3>
                        </Link>
                        <Link to="/profile/changePassword" className="flex flex-col justify-center items-center gap-y-4 border border-gray-300 py-10 rounded-md cursor-pointer hover:bg-white hover:shadow-lg duration-200 hover:border-white">
                            <RiLockPasswordFill className="text-2xl md:text-4xl"></RiLockPasswordFill>
                            <h3 className="text-xl md:text-2xl font-medium font-serif text-center">Change Password</h3>
                        </Link>
                        <div onClick={handleLogout} className="flex flex-col justify-center items-center gap-y-4 border border-gray-300 py-10 rounded-md cursor-pointer hover:bg-white hover:shadow-lg duration-200 hover:border-white">
                            <GoSignOut className="text-2xl md:text-4xl"></GoSignOut>
                            <h3 className="text-xl md:text-2xl font-medium font-serif text-center">Sign Out</h3>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg my-5">My Orders</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center gap-5">
                            <Link to="/profile/viewOrder" className="flex flex-col justify-center items-center gap-y-4 border border-gray-300 py-10 rounded-md cursor-pointer hover:bg-white hover:shadow-lg duration-200 hover:border-white">
                                <BsCardChecklist className="text-2xl md:text-4xl"></BsCardChecklist>
                                <h3 className="text-xl md:text-2xl font-medium font-serif text-center">View My Orders</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default UserProfile