import axios from "axios"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

import { useEffect, useState } from "react";
function Admin() {
    const [allData, setAllData] = useState([])
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);
    const handleAlert = (message, icon) => {
        Swal.fire({
            text: `${message}`,
            icon: `${icon}`,
            confirmButtonText: 'close'
        })
    }
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
    const handleChange = (e) => {
        e.preventDefault();
        const fieldName = e.target.name;
        const value = e.target.value;
        setProductInfo(prevInfo => ({ ...prevInfo, [fieldName]: value }))
    }

    //product post
    const handleUpload = async (e) => {
        e.preventDefault();
        setLoading(false)
        const { productName, productModel, brand, stock, description, price, discount, categoryName } = productInfo;
        var form = new FormData();
        form.append("productName", productName);
        form.append("imageFile", e.target.imageFile.files[0]);
        form.append("productModel", productModel);
        form.append("brand", brand);
        form.append("stock", stock);
        form.append("price", price);
        form.append("discount", discount);
        form.append("description", description);
        form.append("categoryName", categoryName);
        
        await axios.post("https://online-shop-server-f69l.onrender.com/api/postData", form)
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
                        categoryName : productInfo.categoryName
                    })
                    setImage("")
                }
                else {
                    handleAlert(res.data.message, "error")
                }
            })


    }

    //get all product
    useEffect(() => {
        axios.get("https://online-shop-server-f69l.onrender.com/api/category")
            .then(res => {
                if (res.data.status) {
                    setAllData(res.data.datas)
                }
            })
    }, [])



    //
    return (
        <div>
            {/* loading */}
            <div className="relative items-center block p-6 bg-white border border-gray-100 rounded-lg shadow-md w-full">

                {/* main content */}
                <section className="max-w-4xl p-6 mx-auto border-2 rounded-md shadow-md mt-8">
                    <h1 className="text-3xl font-bold text-black capitalize mb-8 text-center">Add product in Database</h1>
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

                                        <input name="discount" id="discount" type="number" className="rounded-none rounded-l-lg bg-white border border-gray-500 text-gray-700 focus:border-blue-500 focus:outline-none focus:ring block flex-1 min-w-0 w-full text-sm p-2.5 " placeholder='product discount ...' required onChange={handleChange} value={productInfo.discount}/>
                                        <span className="inline-flex items-center px-4 text-sm text-gray-900 bg-gray-200 border border-l-0 border-gray-500 rounded-r-md">
                                            %
                                        </span>

                                    </div>
                                </div>


                            </div>
                            <div className="col-span-2">
                                <label className="text-white dark:text-gray-200" htmlFor="passwordConfirmation">Select</label>
                                <select name="categoryName" id="cate" className="block cursor-pointer w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" onChange={handleChange} required>
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
                                        image && <div>
                                            <img src={URL.createObjectURL(image)} height="100" width="100" />
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>



                        <div className="flex justify-end mt-6">
                            <button className="px-6 py-3 leading-5 text-white transition-colors duration-200 transform bg-light-blue-500 rounded-md hover:bg-light-blue-600 focus:outline-none w-full focus:bg-gray-600 uppercase font-bold">Save</button>
                        </div>
                    </form>

                    <div>
                        {/* {
                    allData && allData.map((item, id) => {
                        return (
                            <img src={`https://online-shop-server-f69l.onrender.com/api/getImage/${item.id}`} height={"100"} width={"100"} key={id} alt="img" />
                        )
                    })

                } */}
                        <h1>you added : {allData.length} data</h1>
                    </div>

                </section>



                {
                    loading && <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                }



            </div>


        </div>
    )
}

export default Admin