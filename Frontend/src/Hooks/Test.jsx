import { useEffect } from "react"
import UseFetchProduct from "./UseFetchProduct"


function Test() {
    const {data, isLoading, isFetching,refetch, error } = UseFetchProduct();
    console.log(data, isLoading, isFetching, error)
  return (
    <div>
        <button onClick={()=>refetch()} className="btn">
            click
        </button>
        {
            isFetching && <p>fetching...</p>
        }
    </div>
  )
}

export default Test