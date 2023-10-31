import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../Pages/Navbar/Navbar"
import Footer from "../Pages/Footer/Footer"
import HashLoader from "react-spinners/HashLoader";

function Root() {
  const navigation = useNavigation();
  return (
    <div>
      <Navbar></Navbar>
      {
        navigation.state === "loading" ? <div className="min-h-[60vh] bg-gray-200 flex justify-center items-center">
          <HashLoader color="#FB923C"
            loading={true}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div> : <Outlet></Outlet>
      }


      <div className=" bg-gray-200">
        <div className="max-w-7xl mx-auto">
          <Footer></Footer>
        </div>

      </div>
    </div>

  )
}

export default Root