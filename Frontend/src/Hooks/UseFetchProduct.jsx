import { useQuery } from "@tanstack/react-query"
import axios from "axios"


function UseFetchProduct() {
    const {data, isLoading, isFetching, error, refetch} = useQuery({
        queryKey : ['fetchProduct'],
        initialData : [],
        refetchOnWindowFocus: false,
        queryFn : ()=>{
            const data = axios.get(`https://online-shop-server-f69l.onrender.com/api/allDataLength`)
            return data;
        }
    })
    return {data, isLoading, isFetching, error, refetch}
//   return (
//     <div>UseFetchProduct</div>
//   )
}

export default UseFetchProduct