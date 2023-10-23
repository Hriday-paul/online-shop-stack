import { useContext } from "react"
import { authContext } from "../../Component/Authonicate/Authonicate"
import { useNavigate } from "react-router-dom"

function ForgetPass() {
    const { forgetPass } = useContext(authContext)
    const navig = useNavigate();
    const handleForgetPass = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        forgetPass(email)
        .then(()=>{
            navig("/resetPassEmail")
        })
    }
    return (
        <div>
            <section className="bg-gray-50">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Forget Password
                            </h1>
                            <form onSubmit={handleForgetPass} className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Enter your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@gmail.com" required />
                                </div>
                                
                                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800">Send</button>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ForgetPass