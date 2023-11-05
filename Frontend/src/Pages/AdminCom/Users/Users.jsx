
import { Pagination } from 'antd';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { Spin } from 'antd';

function Users() {
  const [users, setUsers] = useState([])
  const [activePag, setActivePag] = useState(1)
  const [limit, setLimit] = useState(10);
  const [usersLength, setUsersLength] = useState(0)
  const [loading, setLoading] = useState(true);

  //get users length
  useEffect(() => {
    axios.get("https://online-shop-server-f69l.onrender.com/api/usersLength")
      .then(res => setUsersLength(res.data.datas))

  }, [])

  //get user by current page
  useEffect(() => {
    setLoading(true)
    axios.get(`https://online-shop-server-f69l.onrender.com/api/allUsers?currentPage=${activePag}&pageLimit=${limit}`)
      .then(res => {
        setUsers(res.data.datas)
        setLoading(false)
      })
  }, [activePag, limit])

  const onChange = (pageNumber) => {
    setActivePag(pageNumber);
  };
  const handledltUser = (email) => {
    setLoading(true)

    Swal.fire({
      text: "Are you sure want to delete this User !",
      icon: `warning`,
      cancelButtonText: "No",
      showCancelButton: true,
      confirmButtonText: 'Yes',
      showCloseButton: true,
    })
      .then(result => {
        setLoading(true)
        const filter = users.filter((user) => {
          return user.email !== email;
        })
        if (result.isConfirmed) {
          axios.delete(`https://online-shop-server-f69l.onrender.com/api/deleteUser?email=${email}`)
            .then(() => {
              setLoading(false)
              setUsers(filter)
            })
        }
        if (result.isDismissed) {
          setLoading(false)
        }
      })



  }

  return (
    <Spin tip="Loading..." spinning={loading} size="large">
      <div className="p-4 mt-10 md:mt-16 bg-white rounded-md">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Password</th>
                {/* <th>Edit</th> */}
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>

              {
                users.map((user, index) => {
                  return <tr key={user._id} className="hover">
                    <th>{((activePag - 1) * limit) + index + 1}</th>
                    <td>{user?.name}</td>
                    <td>{user?.email}</td>
                    <td>{user?.phone}</td>
                    <td>{user?.password}</td>
                    {/* <td>
                    <Button type="primary" icon={<EditOutlined />} size={"large"} />
                  </td> */}
                    <td>
                      <Button onClick={() => handledltUser(user.email)} type="primary" icon={<DeleteOutlined />} />
                    </td>
                  </tr>
                })
              }

            </tbody>
          </table>
        </div>
        <div className="mx-auto flex justify-center py-10 ">
          <Pagination showQuickJumper defaultCurrent={1} pageSize={limit} total={usersLength} onChange={onChange} />
          <br />
        </div>
      </div>
    </Spin>
  )
}

export default Users