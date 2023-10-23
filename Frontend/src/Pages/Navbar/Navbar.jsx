import { MdWifiCalling2, MdEmail, MdOutlineLocationOn, MdShoppingCartCheckout } from 'react-icons/md';
import { FcBusinessman, FcLike } from 'react-icons/fc';
import { RiMenu3Line } from 'react-icons/ri';
import { BiLogInCircle, BiLogIn, BiSolidUserAccount } from 'react-icons/bi';
import { Link, NavLink } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { MdOutlineArrowDropDown } from 'react-icons/md';
// import { useContext, useEffect, useState } from 'react';
// import { getLocalData } from '../../LocalStore';
// import { CardContext } from '../../Component/HandleContext/HandleContext';


function Navbar() {
    // const { localUpdate } = useContext(CardContext);
    // const [cart, setCart] = useState(localUpdate)
    // useEffect(()=>{
    //     setCart(localUpdate)
    //     console.log(localUpdate)
    // }, [localUpdate])

    // const fetchData = (id) => {
    //     fetch(`https://online-shop-server-f69l.onrender.com/api/product/${id}`)
    //         .then((res) => res.json())
    //         .then((data) => cart.push(data.data));
    // };

    return (
        <div className=''>
            <div className='max-w-7xl mx-auto'>
                <div className='container mx-auto px-4 md:px-0 py-5'>
                    <div className='flex flex-col gap-y-4 lg:flex-row justify-between items-center'>
                        <div className='flex gap-x-2items-center'>
                            <div className='flex gap-x-2 items-center border-r border-r-gray-400 px-3 text-sm font-medium'>
                                <MdWifiCalling2 className='text-orange-400 text-lg'></MdWifiCalling2>
                                <p>+060 (800) 801-582</p>
                            </div>
                            <div className='flex items-center gap-x-2 px-3 text-sm'>
                                <MdEmail className='text-orange-400 text-lg'></MdEmail>
                                <p>support@shophub.com</p>
                            </div>
                        </div>
                        <div className='flex gap-x-2 items-center'>
                            <div className='border-r border-r-gray-400 pr-3 text-sm'>
                                <Link className='flex items-center gap-x-2 hover:text-orange-400 duration-300'>
                                    <MdOutlineLocationOn className='text-orange-400 text-lg'></MdOutlineLocationOn>
                                    <p>location</p>
                                </Link>
                            </div>
                            <div className='flex items-center border-r-gray-400 text-sm'>
                                <div className='border-r border-r-gray-400 px-3 text-sm'>
                                    <Link to="/account" className='flex gap-x-2 items-center hover:text-orange-400 duration-300'>
                                        <FcBusinessman className='text-orange-400 text-lg'></FcBusinessman>
                                        <p>My account</p>
                                    </Link>
                                </div>
                            </div>
                            <div className='flex items-center border-r border-r-gray-400  text-sm'>
                                <div className='border-r-gray-400 px-3 text-sm'>
                                    <Link to="/login" className='flex gap-x-2 items-center hover:text-orange-400 duration-300'>
                                        <BiLogInCircle className='text-orange-400 text-lg'></BiLogInCircle>
                                        <p>Login</p>
                                    </Link>
                                </div>
                            </div>
                            <div className='flex items-center border-r border-r-gray-400 text-sm'>
                                <div className='px-3 text-sm'>
                                    <Link to="/register" className='flex gap-x-2 items-center hover:text-orange-400 duration-300'>
                                        <BiLogIn className='text-orange-400 text-lg'></BiLogIn>
                                        <p>Register</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='max-w-7xl mx-auto'>
                <div className='container mx-auto px-4 md:px-0 py-0 md:py-8'>
                    <div className='hidden md:grid grid-cols-3 items-center'>
                        <Link to={"/"}>
                            <div className='flex flex-row items-center gap-x-2'>
                                <img src="https://i.ibb.co/BN5YKjw/images-removebg-preview.png" height={"30"} width={"30"} alt="logo" />
                                <h1 className='text-2xl text-bold text-orange-600 font-medium'>ফেরিওয়ালা</h1>
                            </div>
                        </Link>
                        <div>
                            <div className="relative max-w-sm mx-auto">
                                <input className="w-full py-2 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-orange-600" type="search" placeholder="Search" />
                                <button className="absolute duration-300 group inset-y-0 right-0 flex items-center px-4 text-gray-700 bg-gray-100 border border-gray-300 rounded-r-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-900 focus:border-orange-600 ">
                                    <svg className="h-5 w-5 text-orange-600 group-hover:text-white duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.795 13.408l5.204 5.204a1 1 0 01-1.414 1.414l-5.204-5.204a7.5 7.5 0 111.414-1.414zM8.5 14A5.5 5.5 0 103 8.5 5.506 5.506 0 008.5 14z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className='flex justify-end items-center'>
                            <div className='relative group flex items-center justify-center mr-5'>
                                <Link to="/" className='mr-5'><FcLike className='text-4xl text-orange-600 p-2 border-orange-600 hover:bg-orange-600 hover:text-white duration-200 rounded-full border'></FcLike></Link>
                            </div>
                            <div className='relative group flex items-center justify-center mr-5'>
                                <Link to="/" className='mr-5'><BiSolidUserAccount className='text-4xl text-orange-600 hover:bg-orange-600 hover:text-white duration-200 p-2 border-orange-600 rounded-full border'></BiSolidUserAccount></Link>
                            </div>
                            <div className='relative group flex items-center justify-center mr-5'>
                                <Link to="/mycart" className=''><MdShoppingCartCheckout className='text-4xl text-orange-600 p-2 border-orange-600 hover:bg-orange-600 hover:text-white duration-200 rounded-full border'></MdShoppingCartCheckout></Link>
                                <div className='absolute top-0  group-hover:mt-9 right-0 duration-200 bg-white border z-50 p-5 w-60 hidden'>
                                    <div className='flex justify-between pb-3 border-b-2'>
                                        <p>2 items</p>
                                        <Link className='hover:text-orange-400' to="/mycart">view cart</Link>
                                    </div>
                                    {/* {console.log(cart)} */}
                                    <div className='grid grid-cols-2 justify-between items-center py-2 border-b-2'>
                                        <div className=''>
                                            <h1 className='text-base font-medium'>product name</h1>
                                            <p className='text-xs font-mono'>$565757</p>
                                            <RxCross2 className='border border-black mt-3 hover:bg-black hover:text-white duration-200 p-1 text-xl cursor-pointer'></RxCross2>
                                        </div>
                                        <img src="" alt="" />
                                    </div>
                                    <button className="hover:border-white/40 w-full hover:bg-orange-400 flex items-center justify-center rounded-md border border-transparent bg-orange-500 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 duration-200 focus:ring-orange-600 mt-2">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className='sticky top-5 z-40'>
                <div className='bg-gray-900 px-4 md:pb-0 lg:px-0'>
                    <nav className="max-w-7xl mx-auto z-20 left-0">
                        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
                            <Link to={"/"} className='w-1/4 lg:w-1/4'>
                                <NavLink to="/category" className='flex items-center gap-x-2 px-5 py-3 md:py-5 bg-orange-400 duration-300 text-white'>
                                    <h1 className='text-xl font-medium'>See All</h1>
                                    <RiMenu3Line className='text-xl'></RiMenu3Line>
                                </NavLink>
                            </Link>
                            <div className="flex md:order-2">
                                <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 justify-center text-sm text-white rounded-lg md:hidden hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-700 duration-300" aria-controls="navbar-sticky" aria-expanded="false">
                                    <span className="sr-only">Open main menu</span>
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                                    </svg>
                                </button>
                            </div>
                            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                                <ul className="flex flex-col p-4 md:p-0 mt-4 mb-5 md:mb-0 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-10 md:mt-0 md:border-0 py-5">
                                    <li>
                                        <Link to="/" className="block py-2 pl-3 text-white pr-4 border-b-2 border-orange-400 border-opacity-0 hover:border-opacity-100 hover:text-orange-400 duration-200 cursor-pointer">Home</Link>
                                    </li>
                                    <li>
                                        <span className='relative group'>
                                            <p className="flex items-center gap-x-1 py-2 pl-3 text-white pr-4  border-opacity-0 hover:border-opacity-100 hover:text-orange-400 duration-200 cursor-pointer">Products<MdOutlineArrowDropDown className="text-2xl group-hover:rotate-180 duration-200"></MdOutlineArrowDropDown></p>
                                            <div className='absolute hidden group-hover:grid grid-cols-2 gap-x-3 justify-between items-center w-72 top-0 bg-gray-100 rounded rounded-t-none border-t-4 border-t-orange-600 mt-[40px]'>
                                                <NavLink to="/category/Smart phone" className={({ isActive }) => isActive ? " duration-200 px-6 py-3 border-r-2 bg-white border-orange-600 text-sm" : "hover:border-orange-600 hover:border-r-2 duration-100 px-6 py-3 hover:bg-white text-sm"
                                                }>Smart Phone</NavLink>
                                                <NavLink to="/category/Laptop" className={({ isActive }) => isActive ? " duration-200 px-6 py-3 border-r-2 bg-white border-orange-600 text-sm mt-2" : "hover:border-orange-600 hover:border-r-2 duration-100 px-6 py-3 hover:bg-white text-sm mt-2"
                                                }>Laptop</NavLink>
                                                <NavLink to="/category/Desktop" className={({ isActive }) => isActive ? " duration-200 px-6 py-3 border-r-2 bg-white border-orange-600 text-sm " : "hover:border-orange-600 hover:border-r-2 duration-100 px-6 py-3 hover:bg-white text-sm"
                                                }>Desktop</NavLink>
                                                <NavLink to="/category/Watch" className={({ isActive }) => isActive ? " duration-200 px-6 py-3 border-r-2 bg-white border-orange-600 text-sm mt-2" : "hover:border-orange-600 hover:border-r-2 duration-100 px-6 py-3 hover:bg-white text-sm mt-2"
                                                }>Watch</NavLink>
                                                <NavLink to="/category/T-Shirt" className={({ isActive }) => isActive ? " duration-200 px-6 py-3 border-r-2 bg-white border-orange-600 text-sm mt-2" : "hover:border-orange-600 hover:border-r-2 duration-100 px-6 py-3 hover:bg-white text-sm mt-2"
                                                }>Shirt</NavLink>
                                                <NavLink to="/category/Bag" className={({ isActive }) => isActive ? " duration-200 px-6 py-3 border-r-2 bg-white border-orange-600 text-sm mt-2" : "hover:border-orange-600 hover:border-r-2 duration-100 px-6 py-3 hover:bg-white text-sm mt-2"
                                                }>Bag</NavLink>
                                                <NavLink to="/category/Gift" className={({ isActive }) => isActive ? " duration-200 px-6 py-3 border-r-2 bg-white border-orange-600 text-sm mt-2" : "hover:border-orange-600 hover:border-r-2 duration-100 px-6 py-3 hover:bg-white text-sm mt-2"
                                                }>Gift</NavLink>
                                                <NavLink to="/category/Cosmetics" className={({ isActive }) => isActive ? " duration-200 px-6 py-3 border-r-2 bg-white border-orange-600 text-sm mt-2" : "hover:border-orange-600 hover:border-r-2 duration-100 px-6 py-3 hover:bg-white text-sm mt-2"
                                                }>Cosmetics</NavLink>
                                            </div>
                                        </span>
                                    </li>

                                    <li>
                                        <a className="block py-2 pl-3 text-white pr-4 border-b-2 border-orange-400 border-opacity-0 hover:border-opacity-100 hover:text-orange-400 duration-200 cursor-pointer">Service</a>
                                    </li>
                                    <li>
                                        <a className="block py-2 pl-3 text-white pr-4 border-b-2 border-orange-400 border-opacity-0 hover:border-opacity-100 hover:text-orange-400 duration-200 cursor-pointer">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>




        </div>
    )
}

export default Navbar