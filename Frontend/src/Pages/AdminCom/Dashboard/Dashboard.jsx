import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { MdProductionQuantityLimits, MdOutlineFiberSmartRecord } from 'react-icons/md';
import OrdersChart from './OrdersChart';

function Dashboard() {
  
  return (
    <div className="p-4 mt-10 md:mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-0 md:gap-x-4 gap-y-8 lg:gap-y-14">
        <div className="bg-white p-5 lg:p-7 flex flex-row justify-between items-center shadow-xl w-full rounded-xl h-28 lg:h-36 border-b-4 border-b-blue-600">
          <div className='bg-blue-500 p-5 lg:p-8 rounded-md -mt-20 lg:-mt-24 shadow-2xl'>
            <FaRegMoneyBillAlt className='text-4xl lg:text-5xl text-white'></FaRegMoneyBillAlt>
          </div>
          <div>
            <h3 className='text-lg text-slate-500 font-medium'>Todays money</h3>
            <h4 className='text-2xl font-bold'>$2500</h4>
          </div>
        </div>

        <div className="bg-white p-5 lg:p-7 flex flex-row justify-between items-center shadow-xl w-full rounded-xl h-28 lg:h-36 border-b-4 border-red-600">
          <div className='bg-red-600 p-5 lg:p-8 rounded-md -mt-20 lg:-mt-24 shadow-2xl'>
            <FiUsers className='text-4xl lg:text-5xl text-white'></FiUsers>
          </div>
          <div>
            <h3 className='text-lg text-slate-500 font-medium'>Todays Users</h3>
            <div className='flex flex-row gap-x-2 items-center'>
              <FiUsers className='text-lg'></FiUsers>
              <h4 className='text-2xl font-bold'>110</h4>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 lg:p-7 flex flex-row justify-between items-center shadow-xl w-full rounded-xl h-28 lg:h-36 border-b-4 border-green-600">
          <div className='bg-green-600 p-5 lg:p-8 rounded-md -mt-20 lg:-mt-24 shadow-2xl'>
            <MdOutlineFiberSmartRecord className='text-4xl lg:text-5xl text-white'></MdOutlineFiberSmartRecord>
          </div>
          <div>
            <h3 className='text-lg text-slate-500 font-medium'>New Orders</h3>
            <div className='flex flex-row gap-x-2 items-center'>
              <MdOutlineFiberSmartRecord className='text-lg'></MdOutlineFiberSmartRecord>
              <h4 className='text-2xl font-bold'>32</h4>
            </div>
          </div>
        </div>

        <div className="bg-white p-5 md:p-7 flex flex-row justify-between items-center shadow-xl w-full rounded-xl h-28 lg:h-36 border-b-4 border-orange-500">
          <div className='bg-orange-500 p-5 lg:p-8 rounded-md -mt-20 lg:-mt-24 shadow-2xl'>
            <MdProductionQuantityLimits className='text-4xl lg:text-5xl text-white'></MdProductionQuantityLimits>
          </div>
          <div>
            <h3 className='text-lg text-slate-500 font-medium'>Total Sells</h3>
            <div className='flex flex-row gap-x-2 items-center'>
              <h4 className='text-2xl font-bold'>$ 45000</h4>
            </div>
          </div>
        </div>
      </div>
      <div className={`bg-white p-4 shadow-2xl my-5 lg:my-8 rounded-2xl mx-auto`}>
        <OrdersChart></OrdersChart>
      </div>
    </div>
  )
}

export default Dashboard