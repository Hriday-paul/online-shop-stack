import { useContext, useEffect, useState } from "react"
import { authContext } from "../../Component/Authonicate/Authonicate"
import axios from "axios";
import { CardContext } from "../../Component/HandleContext/HandleContext";
import { Spin } from "antd";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useNavigate } from "react-router-dom";

function Checkout() {
    const { userInfo } = useContext(authContext);
    const { cartProducts, setCartProducts } = useContext(CardContext);
    const [paymentType, setPaymentType] = useState("Cash on delivery")
    const [user, setUser] = useState({ name: "", email: "", phone: "" });
    const [loading, setLoading] = useState(false);
    const navig = useNavigate();

    useEffect(() => {
        axios.get(`https://online-shop-server-f69l.onrender.com/api/getuser?email=${userInfo.email}`)
            .then(({ data }) => {
                const userDataInfo = data.userData
                setUser(userDataInfo)
            })
    }, [])

    let cartIds = [];
    if (cartProducts) {
        for (let i = 0; i < cartProducts.length; i++) {
            cartIds.push(cartProducts[i].id)
        }
    }

    const handleOrder = (e) => {
        e.preventDefault();
        setLoading(true);
        const orderInfo = {
            email: userInfo.email,
            fullName: e.target.fname.value + " " + e.target.lname.value,
            paymentMethod: paymentType,
            productIds: cartIds,
            phone: e.target.phone.value,
            location: e.target.location.value,
            district: e.target.district.value,
            isPending: true,
            completePay: false,
        }
        axios.put(`https://online-shop-server-f69l.onrender.com/api/addOrder?email=${userInfo.email}`, orderInfo)
            .then(() => {
                for(let id of cartIds){
                    axios.delete(`https://online-shop-server-f69l.onrender.com/api/deleteCart/${id}`)
                }
                setLoading(false);
                Swal.fire({
                    text: "Your order completed.",
                    icon: "success",
                    confirmButtonText: 'close'
                })
                    .then((res) => {
                        if (res.isConfirmed) {
                            setCartProducts([])
                            navig("/")
                        }
                    })
            })
    }

    return (
        <Spin tip="Loading..." spinning={loading} size="large">
            <div className="bg-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-0 lg:gap-x-20 py-10 items-center">
                        <form onSubmit={handleOrder} className="col-span-2 order-2 lg:order-1">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0 md:gap-x-5 gap-y-5">
                                <div>
                                    <label className="text-black text-base font-medium" htmlFor="username">First name *</label>
                                    <input name="fname" id="fname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white outline-0 border-0 rounded-md  focus:border-orange-400 focus:outline-none focus:ring" placeholder='First name ...' required defaultValue={user?.name} />
                                </div>
                                <div>
                                    <label className="text-black text-base font-medium" htmlFor="username">Last name(optional)</label>
                                    <input name="lname" id="lname" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white outline-0 border-0 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" placeholder='Last name ...' />
                                </div>
                                <div>
                                    <label className="text-black text-base font-medium" htmlFor="username">Email Address *</label>
                                    <input name="email" id="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white outline-0 border-0 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" placeholder='Email ...' required defaultValue={user?.email} />
                                </div>
                                <div>
                                    <label className="text-black text-base font-medium" htmlFor="username">Phone Number *</label>
                                    <input name="phone" id="phone" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white outline-0 border-0 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" placeholder='Phone Number ...' required defaultValue={user?.phone} />
                                </div>
                                <div>
                                    <label className="text-black text-base font-medium" htmlFor="cate">Select District</label>
                                    <select name="district" id="cate" className="block cursor-pointer w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" required>
                                        <option>Chose District</option>
                                        <option value="Cumilla">Cumilla</option>
                                        <option value={"Dhaka"}>Dhaka</option>
                                        <option value={"Barisal"}>Barisal</option>
                                        <option value="Dinajpur">Dinajpur</option>
                                        <option value="Rajshahi">Rajshahi</option>
                                        <option value="Khulna">Khulna</option>
                                        <option value="Chittagong">Chittagong</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="text-black text-base font-medium" htmlFor="username">Location *</label>
                                    <input name="location" id="location" type="string" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white outline-0 border-0 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" placeholder='Location ...' required />
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="btn btn-primary w-full mt-8">Order Now</button>
                            </div>
                        </form>
                        <div className="col-span-1 order-1 lg:order-2">
                            <div className="bg-white p-5 mt-8 lg:mt-2 mb-5 rounded-md">
                                <h3 className="text-xl font-medium mb-5">Coupon/Voucher</h3>
                                <label className="text-black text-base font-medium" htmlFor="cupon">Enter your cupon here : </label>
                                <input name="productName" id="cupon" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" placeholder='cupon ...' required />
                                <button className="btn btn-primary btn-sm w-full mt-3">Submit</button>
                            </div>
                            <div className="bg-white p-5 rounded-md">
                                <p className="text-lg font-medium">Shipping Methods</p>
                                <div className="mt-5 grid gap-6">
                                    <div className="relative">
                                        <input onChange={() => setPaymentType("Cash on delivery")} className="peer hidden" id="radio_1" type="radio" name="radio" checked />
                                        <span className="peer-checked:border-indigo-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                                        <label className="peer-checked:border-2 peer-checked:border-indigo-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_1">
                                            <img className="w-14 object-contain" src="https://cdn-images-1.medium.com/max/732/1*5c8KOrF2CKKQCcY67sJDWA.jpeg" alt="" />
                                            <div className="ml-5">
                                                <span className="mt-2 font-semibold">Cash On Delivery</span>
                                                <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input onChange={() => setPaymentType("Payment with Bank")} className="peer hidden" id="radio_2" type="radio" name="radio" />
                                        <span className="peer-checked:border-indigo-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                                        <label className="peer-checked:border-2 peer-checked:border-indigo-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_2">
                                            <img className="w-14 object-contain" src="https://cdn.jagonews24.com/media/imgAllNew/BG/2019November/lagod-bkash-20210405174432.jpg" alt="" />
                                            <div className="ml-5">
                                                <span className="mt-2 font-semibold">Pay with Credit Card / bKash / Nagad</span>
                                                <p className="text-slate-500 text-sm leading-6">Delivery: 1-4 Days</p>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Spin>
    )
}

export default Checkout