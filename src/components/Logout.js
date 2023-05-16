import { Link } from "react-router-dom"

const LogOut = () => {
    return (
       <>
       <div className="bg-body-colour w-[100%] h-[780px]">
       <h2 className="text-2xl text-black text-center p-12">Logged out successfully!</h2>
       <p className="text-xl text-center">Thank you for using our food delivery service. We hope to see you again soon!</p>
       <button className=" hover:text-slate-600 hover:underline border-2 bg-white cursor-pointer ml-[820px] mt-10"> <Link to="/" > Go back to home page </Link> </button>
       </div>

       </> 
    )
}

export default LogOut