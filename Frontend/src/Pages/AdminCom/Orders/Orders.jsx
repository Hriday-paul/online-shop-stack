import { Button, Empty, Spin } from "antd";
import axios from "axios";
import { useEffect, useState } from "react"
import ClipLoader from "react-spinners/ClipLoader";
import { EditOutlined } from '@ant-design/icons';

function Orders() {
  const [ordes, setOrders] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("https://online-shop-server-f69l.onrender.com/api/allOrder")
      .then(res => {
        setOrders(res.data.datas)
        setLoading(false)
      })
  }, [])
  return (
    <Spin spinning={loading} size="large">
      <div className="p-4 mt-8 bg-white rounded-md min-h-[200px]">
        {
          ordes.length > 0 ?


            <div className="overflow-x-auto">
              <div className="overflow-x-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>product Id</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>District</th>
                      <th>Location</th>
                      <th>Status</th>
                      <th>Change status</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      ordes && ordes.map((order) => {
                        return (
                          <>
                            {
                              (order && order.productIds) && order.productIds.map((prod, ind) => {
                                return (
                                  <tr key={ind}>
                                    <tr>{prod}</tr>
                                    <td>{order?.fullName}</td>
                                    <td>{order?.phone}</td>
                                    <td>{order?.district}</td>
                                    <td>{order?.location}</td>
                                    <td>{order?.isPending ? <ClipLoader
                                      color="#1677ff"
                                      size={15}
                                    /> : "success"}</td>
                                    <td>
                                      <Button type="primary" icon={<EditOutlined />} size={"small"} />
                                    </td>
                                  </tr>
                                )
                              })
                            }
                          </>
                        )
                      })
                    }

                  </tbody>
                </table>
              </div>
            </div>



            : <Empty></Empty>
        }
      </div>
    </Spin>
  )
}

export default Orders