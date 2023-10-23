import { Link, NavLink } from "react-router-dom"
// import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
// import AwesomeSlider from 'react-awesome-slider';
import { FcSmartphoneTablet } from 'react-icons/fc';
import { BsLaptop, BsGift } from 'react-icons/bs';
import { GiWatch, GiSchoolBag } from 'react-icons/gi';
import { BiDesktop, BiSolidTShirt } from 'react-icons/bi';

function Home() {

    return (
        <div className="bg-gray-200 pb-10">
            <div className="max-w-7xl mx-auto px-4 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                    <div className="col-span-3">
                        <div className="lg:flex flex-col hidden">
                            <NavLink to="/category/Smart phone" className="bg-white hover:bg-orange-400 hover:text-white duration-200 p-4">
                                <span >Smart Phone</span>
                            </NavLink>
                            <NavLink to="/category/Laptop" className="bg-white hover:bg-orange-400 hover:text-white duration-200 p-4">
                                <span>Laptop</span>
                            </NavLink>
                            <NavLink to="/category/Desktop" className="bg-white hover:bg-orange-400 hover:text-white duration-200 p-4">
                                <span>Desktop</span>
                            </NavLink>
                            <NavLink to="/category/Watch" className="bg-white hover:bg-orange-400 hover:text-white duration-200 p-4">
                                <span>Watch</span>
                            </NavLink>
                            <NavLink to="/category/T-Shirt" className="bg-white hover:bg-orange-400 hover:text-white duration-200 p-4">
                                <span>T-Shirt</span>
                            </NavLink>
                            <NavLink to="/category/Bag" className="bg-white hover:bg-orange-400 hover:text-white duration-200 p-4">
                                <span>Bag</span>
                            </NavLink>
                            <NavLink to="/category/Gift" className="bg-white hover:bg-orange-400 hover:text-white duration-200 p-4">
                                <span>Gift</span>
                            </NavLink>
                            <NavLink to="/category/Cosmetics" className="bg-white hover:bg-orange-400 hover:text-white duration-200 p-4">
                                <span>Cosmetics</span>
                            </NavLink>
                        </div>
                    </div>

                    {/* //carousel */}

                    <div className="col-span-9">
                        <div className="relative flex flex-col justify-center items-center z-10 ">
                            <div id="default-carousel" className="relative w-full" data-carousel="slide">

                                <div className="relative h-56 overflow-hidden md:h-96 lg:h-[448px]">

                                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                        <div className="hero h-full bg-[url('https://azse77seaprodsa.blob.core.windows.net/b2b-dr-pickaboocdn/media/dcastalia_hybridslider/image/Amazfit_Pop_3s_and_3r_Big_Banner_1_.jpg')]" >
                                        </div>
                                    </div>

                                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                        <div className="hero h-full bg-[url('https://i.ibb.co/DQP9gDb/ezgif-com-webp-to-jpg.jpg')]">
                                        </div>
                                    </div>

                                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                        <div className="hero h-full bg-[url('https://www.startech.com.bd/image/cache/catalog/home/banner/mpl-pc-laptop-offer-982x500.webp')]">
                                        </div>
                                    </div>

                                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                        <div className="hero h-full bg-[url('https://i.ibb.co/DQP9gDb/ezgif-com-webp-to-jpg.jpg')]" >
                                        </div>
                                    </div>

                                </div>

                                <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                                    <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                    <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                                </div>

                                <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  group-focus:outline-none">
                                        <svg className="w-4 h-8 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                                        </svg>
                                        <span className="sr-only">Previous</span>
                                    </span>
                                </button>
                                <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full  group-focus:outline-none">
                                        <svg className="w-4 h-8" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <span className="sr-only">Next</span>
                                    </span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* //category */}

                <div className="my-10">
                    <div className="bg-gradient-to-r from-sky-400 to-blue-300">
                        <h3 className="bg-orange-400 p-4 pr-6 inline-block rounded-tr-full text-white font-bold text-xl">FEATURED CATEGORY</h3>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-10">
                        <Link to="/category/Smart phone" className="h-60 group">
                            <div className="bg-white rounded-xl flex flex-col gap-y-3 justify-center items-center h-full shadow-md hover:shadow-lg">
                                <FcSmartphoneTablet className="text-[100px] group-hover:scale-110 duration-200"></FcSmartphoneTablet>
                                <p className="text-2xl font-bold font-mono">Samrt Phone</p>
                            </div>
                        </Link>
                        <Link to="/category/Laptop" className="h-60 group">
                            <div className="bg-white rounded-xl flex flex-col gap-y-3 justify-center items-center h-full shadow-md hover:shadow-lg">
                                <BsLaptop className="text-[100px] group-hover:scale-110 duration-200 text-orange-400"></BsLaptop>
                                <p className="text-2xl font-bold font-mono">Laptop</p>
                            </div>
                        </Link>
                        <Link to="/category/Desktop" className="h-60 group">
                            <div className="bg-white rounded-xl flex flex-col gap-y-3 justify-center items-center h-full shadow-md hover:shadow-lg">
                                <BiDesktop className="text-[100px] group-hover:scale-110 duration-200 text-orange-400"></BiDesktop>
                                <p className="text-2xl font-bold font-mono">Desktop</p>
                            </div>
                        </Link>
                        <Link to="/category/Watch" className="h-60 group">
                            <div className="bg-white rounded-xl flex flex-col gap-y-3 justify-center items-center h-full shadow-md hover:shadow-lg">
                                <GiWatch className="text-[100px] group-hover:scale-110 duration-200 text-orange-400"></GiWatch>
                                <p className="text-2xl font-bold font-mono">Watch</p>
                            </div>
                        </Link>
                        <Link to="/category/T-Shirt" className="h-60 group">
                            <div className="bg-white rounded-xl flex flex-col gap-y-3 justify-center items-center h-full shadow-md hover:shadow-lg">
                                <BiSolidTShirt className="text-[100px] group-hover:scale-110 duration-200 text-orange-400"></BiSolidTShirt>
                                <p className="text-2xl font-bold font-mono">T-Shirt</p>
                            </div>
                        </Link>
                        <Link to="/category/Bag" className="h-60 group">
                            <div className="bg-white rounded-xl flex flex-col gap-y-3 justify-center items-center h-full shadow-md hover:shadow-lg">
                                <GiSchoolBag className="text-[100px] group-hover:scale-110 duration-200 text-orange-400"></GiSchoolBag>
                                <p className="text-2xl font-bold font-mono">Bag</p>
                            </div>
                        </Link>
                        <Link to="/category/Gift" className="h-60 group">
                            <div className="bg-white rounded-xl flex flex-col gap-y-3 justify-center items-center h-full shadow-md hover:shadow-lg">
                                <BsGift className="text-[100px] group-hover:scale-110 duration-200 text-orange-400"></BsGift>
                                <p className="text-2xl font-bold font-mono">Gift</p>
                            </div>
                        </Link>
                        <Link to="/category/Cosmetics" className="h-60 group">
                            <div className="bg-white rounded-xl flex flex-col gap-y-3 justify-center items-center h-full shadow-md hover:shadow-lg">
                                <img src="https://i.ibb.co/Sn9fWBj/3194619.png" className="group-hover:scale-110 duration-200 h-28"></img>
                                <p className="text-2xl font-bold font-mono">Cosmetics</p>
                            </div>
                        </Link>
                    </div>
                </div>
                
                {/* //subscribe */}
                <div className="relative bg-violet-600">
                    <div className="absolute inset-x-0 bottom-0">
                        <svg viewBox="0 0 224 12" fill="currentColor" className="w-full -mb-1 text-white" preserveAspectRatio="none">
                            <path
                                d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z">
                            </path>
                        </svg>
                    </div>
                    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
                            <h2 className="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Subscribe to our newsletter
                            </h2>
                            <p className="mb-6 text-base text-indigo-200 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                                rem aperiam, eaque ipsa quae. explicabo. Sed ut perspiciatis unde omnis.
                            </p>
                            <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                                <input
                                    placeholder="Email"
                                    required=""
                                    type="text"
                                    className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
                                />
                                <button
                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-gray-200 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none border">
                                    Subscribe
                                </button>
                            </form>
                            <p className="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                            </p>
                            <a href="/" aria-label="Scroll down"
                                className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                                    <path
                                        d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;