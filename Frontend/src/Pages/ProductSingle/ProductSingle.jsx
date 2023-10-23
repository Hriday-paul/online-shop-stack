import { useLoaderData } from "react-router-dom"
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { BsCartCheck } from 'react-icons/bs';
import Zoom from "react-img-zoom-gdn";
import Swal from 'sweetalert2'
import { addLocalData } from "../../LocalStore";
import { useContext } from "react";
import { CardContext } from "../../Component/HandleContext/HandleContext";


function ProductSingle() {
  const {AddIdLocal} = useContext(CardContext);
  const { data } = useLoaderData()
  const {price, brand, category, description, product_model, product_name, discount, stock, id} = data;
  const myStyles = {
    itemShapes: Star,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#C5C3D8'
}
const handleAddCart = (id)=>{
  AddIdLocal(id)
}
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-0 md:gap-x-5 py-10">
          <div className="flex justify-center items-center lg:col-span-2">
            <div>
              <Zoom img={`https://online-shop-server-f69l.onrender.com/api/getImage/${id}`} zoomScale={2} width={400} height={400} />
              <div className="w-44 mx-auto mt-5">
                <Rating style={{ maxWidth: 500 }} readOnly value={Math.random() * 3 + 2} itemStyles={myStyles} />
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 flex items-center">
            <div className="w-full">
              <table className="table">
                <caption className="text-3xl font-medium  my-5">{product_name}</caption>
                <tbody>
                <tr>
                    <td className="text-lg font-medium ">Product Model</td>
                    <td className="text-base font-medium ">{product_model}</td>
                  </tr>
                  <tr>
                    <td className="text-lg font-medium ">Brand</td>
                    <td className="text-base font-medium ">{brand}</td>
                  </tr>
                  {/* row 1 */}
                  <tr>
                    <td className="text-lg font-medium ">Category</td>
                    <td className="text-base font-medium ">{category}</td>
                  </tr>
                  <tr>
                    <td className="text-lg font-medium ">Stock</td>
                    <td className="text-base font-medium ">{stock}</td>
                  </tr>
                  <tr>
                    <td className="text-lg font-medium ">Discount</td>
                    <td className="text-base font-medium ">{discount}%</td>
                  </tr>
                  {/* row 2 */}

                  <tr className="bg-gray-500 rounded-lg text-white">
                    <td className="text-lg font-medium">Price</td>
                    <td className="text-base font-medium">${price}</td>
                  </tr>
                </tbody>

              </table>
              <button onClick={()=>handleAddCart(id)} className="hover:border-white/40 w-full mt-8 hover:bg-blue-700 flex items-center justify-center rounded-md border border-transparent bg-blue-600 p-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 duration-200 focus:ring-blue-300">
                <BsCartCheck className="text-lg font-bold mr-1"></BsCartCheck> Add to cart</button>
            </div>

          </div>
        </div>
        <div className="py-3 min-h-16">
          <h3 className="text-base font-medium underline underline-offset-4">Description : </h3>
          <p className="p-5">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductSingle