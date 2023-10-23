
import { NavLink, Outlet, useNavigation } from 'react-router-dom'
import HashLoader from "react-spinners/HashLoader";



function Category() {

    const navigation = useNavigation();
    return (
        <div className="bg-gray-200">
            <div className=''>
                <div className="max-w-7xl mx-auto px-4 lg:px-0">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="col-span-3">
                            <div className="lg:flex flex-col hidden">
                                <NavLink to="/category/Smart phone" className={({ isActive}) => isActive ? " duration-200 p-4 bg-orange-400 text-white" : "bg-white hover:bg-orange-400 hover:text-white duration-200 p-4"
                                }>
                                    <span >Smart Phone</span>
                                </NavLink>
                                <NavLink to="/category/Laptop" className={({ isActive}) => isActive ? " duration-200 p-4 bg-orange-400 text-white" : "bg-white hover:bg-orange-400 hover:text-white duration-200 p-4"
                                }>
                                    <span>Laptop</span>
                                </NavLink>
                                <NavLink to="/category/Desktop" className={({ isActive}) => isActive ? " duration-200 p-4 bg-orange-400 text-white" : "bg-white hover:bg-orange-400 hover:text-white duration-200 p-4"
                                }>
                                    <span>Desktop</span>
                                </NavLink>
                                <NavLink to="/category/Watch" className={({ isActive}) => isActive ? " duration-200 p-4 bg-orange-400 text-white" : "bg-white hover:bg-orange-400 hover:text-white duration-200 p-4"
                                }>
                                    <span>Watch</span>
                                </NavLink>
                                <NavLink to="/category/T-Shirt" className={({ isActive}) => isActive ? " duration-200 p-4 bg-orange-400 text-white" : "bg-white hover:bg-orange-400 hover:text-white duration-200 p-4"
                                }>
                                    <span>T-Shirt</span>
                                </NavLink>
                                <NavLink to="/category/Bag" className={({ isActive}) => isActive ? " duration-200 p-4 bg-orange-400 text-white" : "bg-white hover:bg-orange-400 hover:text-white duration-200 p-4"
                                }>
                                    <span>Bag</span>
                                </NavLink>
                                <NavLink to="/category/Gift" className={({ isActive}) => isActive ? " duration-200 p-4 bg-orange-400 text-white" : "bg-white hover:bg-orange-400 hover:text-white duration-200 p-4"
                                }>
                                    <span>Gift</span>
                                </NavLink>
                                <NavLink to="/category/Cosmetics" className={({ isActive}) => isActive ? " duration-200 p-4 bg-orange-400 text-white" : "bg-white hover:bg-orange-400 hover:text-white duration-200 p-4"
                                }>
                                    <span>Cosmetics</span>
                                </NavLink>
                            </div>
                        </div>



                        <div className="col-span-9">
                            {
                                navigation.state === "loading" ? <div className="min-h-[60vh] flex justify-center items-center">
                                    <HashLoader color="#FB923C"
                                        loading={true}
                                        size={50}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    />
                                </div> : <Outlet></Outlet>
                            }
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Category