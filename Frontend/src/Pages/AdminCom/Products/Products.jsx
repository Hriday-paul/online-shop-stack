
import { Pagination } from 'antd';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Drawer, Space, Spin } from 'antd';
import Admin from "../../Admin/Admin"
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import UpdateProduct from '../../Admin/UpdateProduct';
import { Link } from 'react-router-dom';



function Products() {
  const [products, setProducts] = useState([])
  const [activePag, setActivePag] = useState(1)
  const [limit, setLimit] = useState(10);
  const [productsLength, setProductsLength] = useState(0);
  const [loading, setLoading] = useState(true)
  const [open, setOpen] = useState(false);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [updateId, setUpdateId] = useState("");

  useEffect(() => {
    axios.get("https://online-shop-server-f69l.onrender.com/api/allDataLength")
      .then(res => {
        setProductsLength(res.data.data)
      })
  }, [])

  useEffect(() => {
    axios.get(`https://online-shop-server-f69l.onrender.com/api/categoryAll/${activePag}?limit=${limit}`)
      .then(res => {
        setProducts(res.data.datas);
        setLoading(false)
      })
  }, [activePag])

  const onChange = (pageNumber) => {
    setActivePag(pageNumber);
    setLoading(true);
  };

  const handledltProduct = (id) => {
    Swal.fire({
      text: "Are you sure want to delete this Product !",
      icon: `warning`,
      cancelButtonText: "No",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      showCloseButton: true,
    })
      .then(result => {
        setLoading(true)
        const filter = products.filter((product) => {
          return product.id !== id;
        })
        if (result.isConfirmed) {
          axios.delete(`https://online-shop-server-f69l.onrender.com/api/deleteProduct?id=${id}`)
            .then(() => {
              setProducts(filter)
              setLoading(false)
            })
        }
        if (result.isDismissed) {
          setLoading(false)
        }
      })
  }


  const showDrawer = () => {
    setOpen(true);
  };
  const showUpdateDrawer = (id) => {
    setUpdateId(id)
    setOpenUpdate(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onCloseUpdate = () => {
    setOpenUpdate(false);
  };

  return (
    <Spin tip="Loading..." spinning={loading} size="large">
      <div className="p-4 mt-8 bg-white rounded-md">
        <div className='flex justify-end items-center my-5'>
          <Button type="primary" size='large' onClick={showDrawer}>Add Product</Button>
        </div>

        <Drawer
          title="Add new product"
          width={720}
          onClose={onClose}
          open={open}
          styles={{
            body: {
              paddingBottom: 20,
            },
          }}
          extra={
            <Space>
              <Button onClick={onClose} type="primary">Cancel</Button>
            </Space>
          }
        >
          <Admin></Admin>

        </Drawer>



        <Drawer
          title="Update product"
          width={720}
          onClose={onCloseUpdate}
          open={openUpdate}
          styles={{
            body: {
              paddingBottom: 20,
            },
          }}
          extra={
            <Space>
              <Button onClick={onCloseUpdate} type="primary">Cancel</Button>
            </Space>
          }
        >
          {
            openUpdate && <UpdateProduct updateId={updateId}></UpdateProduct>
          }

        </Drawer>

        


        <div className="overflow-x-auto">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Brand</th>
                  <th>Price</th>
                  <th>Discount</th>
                  <th>Stock</th>
                  <th>Details</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>

                {
                  products && products.map((product, index) => {
                    return (
                      <tr key={product.id}>
                        <th>{((activePag - 1) * limit) + index + 1}</th>
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
                          {product?.product_model}
                          <br />
                          <span className="badge badge-ghost badge-sm">{product?.category}</span>
                        </td>
                        <td>
                          {product?.brand}
                        </td>
                        <td className='font-medium'>
                          ${product?.price}
                        </td>
                        <td>
                          {product?.discount}%
                        </td>
                        <td>
                          {product?.stock}
                        </td>
                        <td>
                          <Link to={`/product/${product.id}`} className='text-blue-500 cursor-pointer hover:underline'>Details</Link>
                        </td>
                        <td>
                          <Button onClick={() => showUpdateDrawer(product.id)} type="primary" icon={<EditOutlined />} />
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
        </div>
        <div className="mx-auto flex justify-center py-10 ">
          <Pagination showQuickJumper defaultCurrent={1} pageSize={limit} total={productsLength} onChange={onChange} />
          <br />
        </div>
      </div >
    </Spin>

  )
}

export default Products