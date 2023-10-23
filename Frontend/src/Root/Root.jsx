import { Outlet } from "react-router-dom"
import Navbar from "../Pages/Navbar/Navbar"
import Footer from "../Pages/Footer/Footer"

function Root() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div className=" bg-gray-200">
        <div className="max-w-7xl mx-auto">
          <Footer></Footer>
        </div>

      </div>
    </div>

  )
}

export default Root