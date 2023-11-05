import { NavLink, Outlet, useLocation } from "react-router-dom"
import { HiOutlineHome } from 'react-icons/hi2';
import { PiSignInDuotone } from 'react-icons/pi';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import { MdProductionQuantityLimits, MdOutlineFiberSmartRecord } from 'react-icons/md';
import Sticky from 'react-stickynode';

function AdminCom() {
  const location = useLocation();
  return (
    <div className="bg-gray-200">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-0 md:gap-x-4 lg:gap-x-8">
        <div>
        <Sticky className="hidden md:block col-span-1 my-5 md:my-8" top="#header" bottomBoundary="#content" innerZ={50}>
          <div className=" bg-white rounded-xl shadow-lg p-4 h-[90vh]">
            <div className='flex flex-row items-center gap-x-2 justify-center py-3 lg:py-4'>
              <img className="h-4 w-auto lg:h-8" src="https://i.ibb.co/BN5YKjw/images-removebg-preview.png" height={"30"} width={"30"} alt="logo" />
              <h1 className='text-lg lg:text-2xl text-bold text-orange-600 font-medium'>ফেরিওয়ালা</h1>
            </div><hr />

            <div className="py-0 lg:py-2">
              <NavLink to="/admin" className={location.pathname==='/admin' ? "btn w-full bg-blue-500 hover:bg-blue-600 text-white my-3 flex flex-row justify-start" : "btn w-full btn-ghost my-3 flex flex-row justify-start"}>
                <HiOutlineHome className="text-sm lg:text-xl"></HiOutlineHome>
                <h4 className="text-xs lg:base font-medium">Dashboard</h4>
              </NavLink>

              <NavLink to="/admin/products" className={({ isActive}) =>isActive ? "btn w-full bg-blue-500 hover:bg-blue-600 text-white my-3 flex flex-row justify-start" : "btn w-full btn-ghost my-3 flex flex-row justify-start"} >
                <MdProductionQuantityLimits className="text-sm lg:text-xl"></MdProductionQuantityLimits>
                <h4 className="text-xs lg:base font-medium">Products</h4>
              </NavLink>

              <NavLink to="/admin/orders" className={({ isActive}) =>isActive ? "btn w-full bg-blue-500 hover:bg-blue-600 text-white my-3 flex flex-row justify-start" : "btn w-full btn-ghost my-3 flex flex-row justify-start"} >
                <MdOutlineFiberSmartRecord className="text-sm lg:text-xl"></MdOutlineFiberSmartRecord>
                <h4 className="text-xs lg:base font-medium">Orders</h4>
              </NavLink>

              <NavLink to="/admin/users" className={({ isActive}) =>isActive ? "btn w-full bg-blue-500 hover:bg-blue-600 text-white my-3 flex flex-row justify-start" : "btn w-full btn-ghost my-3 flex flex-row justify-start"} >
                <FiUsers className="text-sm lg:text-xl"></FiUsers>
                <h4 className="text-xs lg:base font-medium">Users</h4>
              </NavLink>
              
            </div>
            <hr />
            <div className="my-3">
              <div className="btn w-full btn-ghost my-3 flex flex-row justify-start" >
                <FiUserPlus className="text-sm lg:text-xl"></FiUserPlus>
                <h4 className="text-xs lg:base font-medium">Sign In</h4>
              </div>
              <div className="btn w-full btn-ghost my-3 flex flex-row justify-start" >
                <PiSignInDuotone className="text-sm lg:text-xl"></PiSignInDuotone>
                <h4 className="text-xs lg:base font-medium">Sign Up</h4>
              </div>
            </div>
          </div>
          </Sticky>
        </div>
          <div className="col-span-3 relative">
            <div className="my-5 md:my-8">
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default AdminCom