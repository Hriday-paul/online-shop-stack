import PropTypes from 'prop-types'
import { useState } from 'react';
import { createContext } from 'react'
import axios from "axios"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export const CardContext = createContext(null);
function HandleContext({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    const addProductCart = (getProduct) => {
        let { id, product_model, price, discount, stock, email } = getProduct;
        const addCart = { id, product_model, price, discount, stock, email };
        var form = new FormData();
        form.append("productModel", product_model);
        form.append("stock", stock);
        form.append("price", price);
        form.append("discount", discount);
        form.append("id", id)
        form.append("email", email)
        form.append("quantity", 1);
        axios.put("https://online-shop-server-f69l.onrender.com/api/addCart", form)
            .then((data) => {
                if (data.data.status) {
                    Swal.fire({
                        text: `${data.data.message}`,
                        icon: "success",
                        confirmButtonText: 'close'
                    })
                }
                else {
                    Swal.fire({
                        text: `${data.data.message}`,
                        icon: "error",
                        confirmButtonText: 'close'
                    })
                }
            })
        const findData = cartProducts.find((cartprod) => cartprod.id == id)
        if (!findData) {
            setCartProducts([...cartProducts, addCart])
        } 
    }
    const getCartProduct = (email) => {
        axios.get(`https://online-shop-server-f69l.onrender.com/api/getCart/${email}`)
            .then(res => setCartProducts(res.data.carts))
    }

    const deleteCart = (id)=>{
        axios.delete(`https://online-shop-server-f69l.onrender.com/api/deleteCart/${id}`)
        const filterData = cartProducts.filter(cart=>{
            return cart.id !== id
        })
        setCartProducts(filterData)
    }

    const dataList = {
        addProductCart,
        cartProducts,
        setCartProducts,
        getCartProduct,
        deleteCart
    }
    return (
        <CardContext.Provider value={dataList}>
            {children}
        </CardContext.Provider>
    )
}

HandleContext.propTypes = {
    children: PropTypes.object
}
export default HandleContext


