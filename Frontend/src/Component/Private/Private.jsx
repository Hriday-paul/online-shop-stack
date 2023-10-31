import { useContext } from "react"
import PropTypes from 'prop-types'
import { authContext } from "../Authonicate/Authonicate"
import { Navigate, useLocation } from "react-router-dom"
import HashLoader from "react-spinners/HashLoader";

function Private({children}) {
    const {userInfo, loading} = useContext(authContext)
    const location = useLocation();
    if(loading){
        return <div className="min-h-[60vh] flex justify-center items-center">
        <HashLoader color="#FB923C"
          loading={true}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    }
    else if(userInfo){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
}

Private.propTypes = {
    children : PropTypes.object,
}

export default Private