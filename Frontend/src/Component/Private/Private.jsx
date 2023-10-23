import { useContext } from "react"
import PropTypes from 'prop-types'
import { authContext } from "../Authonicate/Authonicate"
import { Navigate, useLocation } from "react-router-dom"

function Private({children}) {
    const {userInfo, loading} = useContext(authContext)
    const location = useLocation();
    if(loading){
        return <div className='h-[60vh] flex justify-center items-center'><span className="loading loading-bars loading-lg"></span></div>
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