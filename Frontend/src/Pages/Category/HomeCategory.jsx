import { Link, useLoaderData, useNavigate } from "react-router-dom"
import { BsArrowRight, BsArrowRightShort } from 'react-icons/bs';
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useContext, useEffect, useState } from "react";
import { CardContext } from "../../Component/HandleContext/HandleContext";
import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import axios from "axios"

function HomeCategory() {
    const { AddIdLocal } = useContext(CardContext);
    const [products, setProducts] = useState([]);
    const navig = useNavigate();
    const { datas } = useLoaderData();
    useEffect(() => {
        if (datas) {
            setProducts(datas)
        }
    }, datas)
    const [favourite, setFavourite] = useState(false);
    const [activePag, setActivePag] = useState(1)
    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#C5C3D8'
    }
    const handleAddCart = (id) => {
        AddIdLocal(id)
    }
    const handlePageChange = (page_num) => {
        setActivePag(page_num)
        axios.get(`https://online-shop-server-f69l.onrender.com/api/categoryAll/${page_num}`)
            .then(res => {
                setProducts(res.data.datas);
            })
    }

    return (
        <div>
            {
                !products.length > 0 ?
                    <div className="lg:min-h-[428px] min-h-[300px] flex flex-col justify-center items-center">
                        <img className="h-60 w-96" src="https://i.ibb.co/K6hbJRH/no-product-found.png"></img>
                        <button onClick={()=>navig(-1)} className="btn btn-neutral btn-sm mt-3">Go back<BsArrowRightShort className="text-2xl"></BsArrowRightShort></button>
                    </div> :
                    <div>
                        <div className="grid grid-cols-1 md:grid-cols-3 m-5 gap-x-0 gap-y-5 md:gap-5">
                            {
                                products && products.map((product) => {
                                    return <div className="flex justify-center" key={product._id}>
                                        <div className="group relative border-gray-100/30 flex w-full max-w-xs flex-col self-center overflow-hidden rounded-lg border shadow-md bg-white">
                                            <Link to={`/product/${product.id}`} className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                                                <img className="peer absolute top-0 right-0 h-full w-full object-cover" src={`https://online-shop-server-f69l.onrender.com/api/getImage/${product.id}`} alt="product image" />
                                                <img className="peer peer-hover:right-0 absolute top-0 -right-96 h-full w-full object-cover transition-all delay-100 duration-1000 hover:right-0" src={`https://online-shop-server-f69l.onrender.com/api/getImage/${product.id}`} alt="product image" />
                                                <svg className="group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0 pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white transition-opacity" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
                                            </Link>
                                            <div className="mt-4 px-5 pb-5">
                                                <Link to={`/product/${product.id}`}>
                                                    <h5 className="text-xl tracking-tight">{product.product_model}</h5>
                                                </Link>
                                                <div className="mt-2 mb-5 flex items-center justify-between">
                                                    <p>
                                                        <span className="text-2xl font-bold text-slate-900">${product.price}</span>
                                                        {
                                                            (parseInt(product.discount) > 0) && <span className="text-sm text-slate-900 line-through font-medium">${parseInt(product.price) - (parseInt(product.price) * parseInt(product.discount) / 100)}</span>
                                                        }
                                                    </p>
                                                    <div className="flex items-center w-24">
                                                        <Rating style={{ maxWidth: 500 }} readOnly value={Math.random() * 3 + 2} itemStyles={myStyles} />
                                                    </div>
                                                </div>
                                                <div className="flex justify-between">
                                                    <button onClick={() => handleAddCart(product)} className="hover:border-white/40 w-full hover:bg-orange-500 flex items-center justify-center rounded-md border border-transparent bg-orange-400 px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 duration-200 focus:ring-orange-300">
                                                        Add to cart
                                                        <BsArrowRight className="ml-1"></BsArrowRight>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="absolute top-0 right-0 duration-500 flex justify-between items-center transition-all p-3">
                                                {
                                                    !favourite && <MdFavoriteBorder onClick={() => setFavourite(!favourite)} className="text-2xl text-orange-400 cursor-pointer"></MdFavoriteBorder>
                                                }
                                                {
                                                    favourite && <MdOutlineFavorite onClick={() => setFavourite(!favourite)} className="text-2xl text-orange-400 cursor-pointer"></MdOutlineFavorite>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                        <nav aria-label="Page navigation example" className="py-10">
                            <ul className="flex items-center -space-x-px h-10 text-base justify-center">
                                <li>
                                    <span className="flex cursor-pointer items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
                                        <span className="sr-only">Previous</span>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                        </svg>
                                    </span>
                                </li>
                                <li onClick={() => handlePageChange(1)}>
                                    <span className={`flex items-center cursor-pointer justify-center px-4 h-10 leading-tight ${activePag == 1 ? "leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"}`}>1</span>
                                </li>
                                <li onClick={() => handlePageChange(2)}>
                                    <span className={`flex items-center cursor-pointer justify-center px-4 h-10 leading-tight ${activePag == 2 ? "leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"}`}>2</span>
                                </li>
                                <li onClick={() => handlePageChange(3)}>
                                    <span className={`flex items-center cursor-pointer justify-center px-4 h-10 leading-tight ${activePag == 3 ? "leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"}`}>3</span>
                                </li>
                                <li onClick={() => handlePageChange(4)}>
                                    <span className={`flex items-center cursor-pointer justify-center px-4 h-10 leading-tight ${activePag == 4 ? "leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"}`}>4</span>
                                </li>
                                <li onClick={() => handlePageChange(5)}>
                                    <span className={`flex items-center cursor-pointer justify-center px-4 h-10 leading-tight ${activePag == 5 ? "leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"}`}>5</span>
                                </li>
                                <li>
                                    <span className="flex items-center cursor-pointer justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
                                        <span className="sr-only">Next</span>
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                    </span>
                                </li>
                            </ul>
                        </nav>
                    </div>

            }
        </div>
    )
}

export default HomeCategory