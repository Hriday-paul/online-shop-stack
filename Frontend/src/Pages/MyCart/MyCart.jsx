import { useContext } from "react"
import { CardContext } from "../../Component/HandleContext/HandleContext"
import { Link } from "react-router-dom";

function MyCart() {
    const { cartProducts, deleteCart } = useContext(CardContext);
    let totalPrice = 0;
    let allDiscount = 0
    if(cartProducts){
        for(let i = 0; i < cartProducts.length; i++){
           allDiscount += parseInt(cartProducts[i].price)*(parseInt(cartProducts[i].discount)/100)
           totalPrice += parseInt(cartProducts[i].price)*(parseInt(cartProducts[i].discount)/100) + parseInt(cartProducts[i].price)
        }
    }
    return (
        <div>
            <div className="bg-gray-100 pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                        {
                            cartProducts && cartProducts.map((cart) => {
                                return (
                                    <div key={cart.id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start items-center">
                                        <Link to={`/product/${cart.id}`}>
                                            <img src={`https://online-shop-server-f69l.onrender.com/api/getImage/${cart.id}`} alt="product-image" className="w-60 rounded-lg sm:w-40 mx-auto" />
                                        </Link>
                                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                            <div className="mt-5 sm:mt-0 flex flex-col items-center" >
                                                <Link to={`/product/${cart.id}`} className="text-lg font-bold text-gray-900 block align-middle hover:text-orange-400 duration-200">{cart.product_model}</Link>

                                            </div>
                                            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                                <div className="flex items-center border-gray-100">
                                                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-orange-400 hover:text-blue-50"> - </span>
                                                    <input className="h-8 w-8 border bg-white text-black text-center text-xs outline-none" type="number" value={cart.quantity}></input>
                                                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-orange-400 hover:text-blue-50"> + </span>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <p className="text-sm">{cart.price} $</p>
                                                    <button onClick={()=>deleteCart(cart.id)}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                        <div className="mb-2 flex justify-between">
                            <p className="text-gray-700">Subtotal</p>
                            <p className="text-gray-700">${totalPrice}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700">Discount</p>
                            <p className="text-gray-700">${allDiscount}</p>
                        </div>
                        <hr className="my-4" />
                        <div className="flex justify-between">
                            <p className="text-lg font-bold">Total</p>
                            <div className="">
                                <p className="mb-1 text-lg font-bold">${totalPrice-allDiscount}</p>
                                <p className="text-sm text-gray-700">including VAT</p>
                            </div>
                        </div>
                        {
                            cartProducts.length>0 ? <Link to="/checkout" className="mt-6 block text-center rounded-md bg-orange-400 py-2 px-5 font-medium text-blue-50 hover:bg-orange-500 duration-200">Check out</Link> : <Link to="/" className="mt-6 block text-center rounded-md bg-orange-400 py-2 px-5 font-medium text-blue-50 hover:bg-orange-500 duration-200">Continue</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCart