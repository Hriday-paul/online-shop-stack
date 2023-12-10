import { useContext, useEffect } from "react"
import axios from "axios"
import { authContext } from "../../../Component/Authonicate/Authonicate"
import { useState } from "react"
import { Button, Empty, Spin } from "antd";
import { DeleteOutlined } from '@ant-design/icons';
import ClipLoader from "react-spinners/ClipLoader";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

function ViewOrder() {
    const { userInfo } = useContext(authContext);
    const [orderInfo, setOrderInfo] = useState({});
    const [orderDatas, setOrderDatas] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://online-shop-server-f69l.onrender.com/api/getOrder?email=${userInfo.email}`)
            .then(res => {
                setOrderInfo(res.data.datas)
            })
    }, [])

    useEffect(() => {
        if (orderInfo && orderInfo.productIds) {
            const fetchData = async () => {
                const promises = orderInfo.productIds.map((id) => {
                    return axios.get(`https://online-shop-server-f69l.onrender.com/api/product/${id}`);
                });

                try {
                    const responses = await Promise.all(promises);
                    const data = responses.map((res) => res.data.data);
                    setOrderDatas(data);
                    setLoading(false);
                } catch (error) {
                    //
                }
            };

            fetchData();
        }
    }, [orderInfo]);

    const handledltProduct = (id) => {

        const filterIds = orderInfo.productIds?.filter(idnum => {
            return idnum !== id
        })
        const update = {
            productIds: filterIds
        }

        Swal.fire({
            text: "Are you sure want to delete this ordered products!",
            icon: `warning`,
            cancelButtonText: "No",
            showCancelButton: true,
            confirmButtonText: 'Yes',
            showCloseButton: true,
        })
            .then(result => {
                setLoading(true)
                const filter = orderDatas.filter(data => {
                    return data.id !== id;
                })
                if (result.isConfirmed) {
                    axios.put(`https://online-shop-server-f69l.onrender.com/api/addOrder?email=${userInfo.email}`, update)
                        .then(() => {
                            setOrderDatas(filter)
                            setLoading(false)
                        })
                }
                if (result.isDismissed) {
                    setLoading(false)
                }
            })

    }


    return (
        <Spin spinning={loading} size="large">
            <div className="bg-gray-200">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="min-h-[300px] flex items-center justify-center">
                        {
                            !orderDatas.length > 0 ? <Empty></Empty> :
                                <div>
                                    <table className="table bg-white">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Image</th>
                                                <th>Name</th>
                                                <th>Location</th>
                                                <th>Phone</th>
                                                <th>Product Name</th>
                                                <th>Status</th>
                                                <th>Payment Method</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                orderDatas && orderDatas.map((product, index) => {
                                                    return (
                                                        <tr key={product.id}>
                                                            <th>{index + 1}</th>
                                                            <td>
                                                                <div className="flex items-center space-x-3">
                                                                    <div className="avatar">
                                                                        <div className=" w-12 h-12">
                                                                            <img src={`https://online-shop-server-f69l.onrender.com/api/getImage/${product.id}`} alt="Avatar Tailwind CSS Component" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                {orderInfo?.fullName}
                                                            </td>
                                                            <td>
                                                                {orderInfo?.location}
                                                            </td>
                                                            <td className='font-medium'>
                                                                {orderInfo?.phone}
                                                            </td>
                                                            <td>
                                                                {product?.product_model}
                                                            </td>
                                                            <td>
                                                                {orderInfo?.isPending && <ClipLoader
                                                                    color="#1677ff"
                                                                    size={15}
                                                                />}
                                                            </td>
                                                            <td>
                                                                {orderInfo?.paymentMethod}
                                                            </td>

                                                            <td>
                                                                <Button onClick={() => handledltProduct(product.id)} type="primary" icon={<DeleteOutlined />} />
                                                            </td>

                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </Spin>
    )
}

export default ViewOrder