import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home"
import Error from "../Pages/Error/Error"
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ForgetPass from "../Pages/ForgetPass/ForgetPass";
import RsetPassEmail from "../Pages/EmailManager/ResetPassEmail/RsetPassEmail";
import Category from "../Pages/Category/Category";
import Product from "../Pages/Category/Product";
import HomeCategory from "../Pages/Category/HomeCategory";
import ProductSingle from "../Pages/ProductSingle/ProductSingle";
import MyCart from "../Pages/MyCart/MyCart";
import Admin from "../Pages/Admin/Admin";
import Private from "../Component/Private/Private"
import Checkout from "../Pages/Checkout/Checkout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/category",
        element: <Category></Category>,
        children: [
          {
            path: "/category",
            loader: () => fetch(`https://online-shop-server-f69l.onrender.com/api/categoryAll/1`),
            element: <HomeCategory></HomeCategory>
          },
          {
            path: "/category/:categoryName",
            loader: ({ params }) => fetch(`https://online-shop-server-f69l.onrender.com/api/category/${params.categoryName}/1`),
            element: <Product></Product>
          },
        ]
      },
      {
        path: "/product/:id",
        loader: ({ params }) => fetch(`https://online-shop-server-f69l.onrender.com/api/product/${params.id}`),
        element: <ProductSingle></ProductSingle>
      },
      {
        path: "/mycart",
        element: <Private><MyCart></MyCart></Private>
      },
      {
        path: "/checkout",
        element: <Private><Checkout></Checkout></Private>
      }
    ]

  },
  {
    path: "/register",
    element: <Register></Register>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/forgetPass",
    element: <ForgetPass></ForgetPass>
  },
  {
    path: "/resetPassEmail",
    element: <RsetPassEmail></RsetPassEmail>
  },
  {
    path: "/admin",
    element: <Admin></Admin>
  }
])

export default Router;