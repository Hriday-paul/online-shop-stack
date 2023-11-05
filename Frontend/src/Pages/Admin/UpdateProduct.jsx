
import PropTypes from 'prop-types'
import axios from "axios"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useEffect, useState } from "react";
import { Button, Spin } from 'antd';
import { RxCross2 } from 'react-icons/rx';


function UpdateProduct({ updateId }) {
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(true);

    const [productInfo, setProductInfo] = useState({
        productName: "",
        productModel: "",
        brand: "",
        stock: "",
        description: "",
        price: "",
        discount: "",
        categoryName: ""
    });

    const handleAlert = (message, icon) => {
        Swal.fire({
            text: `${message}`,
            icon: `${icon}`,
            confirmButtonText: 'close'
        })
    }

    useEffect(() => {
        axios.get(`https://online-shop-server-f69l.onrender.com/api/product/${updateId}`)
            .then(({ data }) => {
                const { data: datas } = data;
                setProductInfo({
                    productName: datas?.product_name,
                    productModel: datas?.product_model,
                    brand: datas?.brand,
                    stock: datas?.stock,
                    description: datas?.description,
                    price: datas?.price,
                    discount: datas?.discount,
                    categoryName: datas?.category
                })
                setLoading(false)
            })
    }, [updateId])

    const handleChange = (e) => {
        e.preventDefault();
        const fieldName = e.target.name;
        const value = e.target.value;
        setProductInfo(prevInfo => ({ ...prevInfo, [fieldName]: value }))
    }

    //product post
    const handleUpload = async (e) => {
        e.preventDefault();
        setLoading(true)
        const { productName, productModel, brand, stock, description, price, discount, categoryName } = productInfo;
        var form = new FormData();
        form.append("productName", productName);
        form.append("imageFile", image);
        form.append("productModel", productModel);
        form.append("brand", brand);
        form.append("stock", stock);
        form.append("price", price);
        form.append("discount", discount);
        form.append("description", description);
        form.append("categoryName", categoryName);
        axios.put(`https://online-shop-server-f69l.onrender.com/api/updateProduct?id=${updateId}&imageTrue=${image}`, form)
            .then(res => {
                if (res.data.status) {
                    setLoading(false)
                    handleAlert(res.data.message, "success");
                    setProductInfo({
                        productName: "",
                        productModel: "",
                        brand: "",
                        stock: "",
                        description: "",
                        price: "",
                        discount: "",
                        categoryName: productInfo.categoryName
                    })
                    setImage("")
                }
                else {
                    setLoading(false)
                    handleAlert(res.data.message, "error")
                } 
            })

    }

    //
    return (
        <Spin tip="Loading..." spinning={loading} size="large">
            <section className="max-w-4xl p-6 mx-auto border-2 rounded-md shadow-md">

                <form onSubmit={handleUpload} encType="multipart/form-data">
                    <div className="">
                        <div className="grid grid-cols-1 mt-4 gap-5 md:grid-cols-2">
                            <div>
                                <label className="text-black text-base font-medium" htmlFor="username">Product name *</label>
                                <input name="productName" id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" placeholder='product name ...' required onChange={handleChange} value={productInfo.productName} />
                            </div>

                            <div>
                                <label className="text-black text-base font-medium" htmlFor="username">Product model *</label>
                                <input name="productModel" id="model" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" placeholder='product model ...' required onChange={handleChange} value={productInfo.productModel} />
                            </div>

                            <div>
                                <label className="text-black text-base font-medium" htmlFor="username">Product brand *</label>
                                <input name="brand" id="brand" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" placeholder='product brand ...' required onChange={handleChange} value={productInfo.brand} />
                            </div>

                            <div>
                                <label className="text-black text-base font-medium" htmlFor="username">Stock product *</label>
                                <input name="stock" id="stock" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" placeholder='product stock ...' required onChange={handleChange} value={productInfo.stock} />
                            </div>

                            <div>
                                <label className="text-black text-base font-medium" htmlFor="username">product price *</label>
                                <input id="price" name="price" type="number" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" placeholder='product price ...' required onChange={handleChange} value={productInfo.price} />
                            </div>


                            <div>
                                <label htmlFor="website-admin" className="text-black text-base font-medium">Product discount</label>
                                <div className="flex mt-2">

                                    <input name="discount" id="discount" type="number" className="rounded-none rounded-l-lg bg-white border border-gray-500 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring block flex-1 min-w-0 w-full text-sm p-2.5 " placeholder='product discount ...' required onChange={handleChange} value={productInfo.discount} />
                                    <span className="inline-flex items-center px-4 text-sm text-gray-900 bg-gray-200 border border-l-0 border-gray-500 rounded-r-md">
                                        %
                                    </span>

                                </div>
                            </div>


                        </div>
                        <div className="col-span-2">
                            <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Select</label>
                            <select name="categoryName" id="cate" className="block cursor-pointer w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" onChange={handleChange} required value={productInfo.categoryName}>
                                <option>Chose category</option>
                                <option value="Smart phone">Smart phone</option>
                                <option value={"Laptop"}>Laptop</option>
                                <option value={"Desktop"}>Desktop</option>
                                <option value="Watch">Watch</option>
                                <option value="T-Shirt">T-Shirt</option>
                                <option value="Bag">Bag</option>
                                <option value="Gift">Gift</option>
                                <option value="Cosmetics">Cosmetics</option>
                            </select>
                        </div>

                        <div className="col-span-2 mt-5">
                            <label className="text-black text-base font-medium" htmlFor="username">Product description *</label>
                            <textarea name="description" id="desc" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-500 rounded-md  focus:border-blue-500 focus:outline-none focus:ring" placeholder='product description ...' rows="5" required onChange={handleChange} value={productInfo.description} />
                        </div>
                    </div>

                    <div>
                        <label className="block text-base font-medium text-black">
                            Image *
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <svg className="mx-auto h-12 w-12 text-black" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <div className="flex text-sm">
                                    <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                        <span className="">Upload a file</span>
                                        <input id="file-upload" name="imageFile" onChange={(e) => setImage(e.target.files[0])} type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1 text-black">or drag and drop</p>
                                </div>
                                <p className="text-xs text-black">
                                    PNG, JPG, GIF up to 10MB
                                </p>
                                {
                                    image && <div className='flex justify-center'>
                                        <img src={URL.createObjectURL(image)} className='bg-cover'height="100" width="100" />
                                        <Button onClick={()=>setImage("")}className='-ml-7' type='primary' size="small"><RxCross2></RxCross2></Button>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end mt-6">
                        <button className="px-6 py-3 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none w-full focus:bg-gray-600 uppercase font-bold">Save</button>
                    </div>
                </form>

            </section>
        </Spin>
    )
}


UpdateProduct.propTypes = {
    updateId: PropTypes.string,
}

export default UpdateProduct

