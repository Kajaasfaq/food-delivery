import { Link } from "react-router-dom"


const FooterSection = () => {
  return(
    <>
    <div className="bg-header-colour w-[100%] h-72">
    <div className=" flex flex-row gap-10 decoration-none">
      <div className="ml-[200px] mt-10 text-xl list-none">
       <li className="text-white text-2xl ">COMPANY</li>
       <Link to="/about"><li className=" mt-2 hover:text-slate-300 hover:underline cursor-pointer">About us</li></Link>
       <li className="hover:text-slate-300 hover:underline cursor-pointer mt-2">Team</li>
       <li className="hover:text-slate-300 hover:underline cursor-pointer mt-2">Careers</li>
      </div>
      <div className="ml-[100px] mt-10 text-xl list-none">
      <li className="text-white text-2xl ">CONTACT</li>
      <li className="hover:text-slate-300 hover:underline cursor-pointer mt-2">Help & Support</li>
      <li className="hover:text-slate-300 hover:underline cursor-pointer mt-2">Partner with us</li>
      <li className="hover:text-slate-300 hover:underline cursor-pointer mt-2">Ride with us</li>
      </div>
      <div className="ml-[100px] mt-10 text-xl list-none">
       <li className="text-white text-2xl ">LEGAL</li>
       <li className="hover:text-slate-300 hover:underline cursor-pointer mt-2">Terms & Conditions</li>
       <li className="hover:text-slate-300 hover:underline cursor-pointer mt-2">Refund & Cancellation</li>
       <li className="hover:text-slate-300 hover:underline cursor-pointer mt-2">Privacy Policy</li>
      </div>
      <div>
      <form className=" mt-24 ml-20 flex gap-3 "> <span className="text-white text-2xl">Feedback :</span>
        <input type="text" placeholder="Enter your feedback  " className=""/>
        <Link to="/"><button type="submit" className="hover:text-slate-300 hover:underline mt-1">Submit</button></Link>
      </form>
      </div>
    </div>
        <div className="bg-white h-[2px] w-[85%] ml-36 mt-7"></div>
        <div className="text-black mt-5 text-center hover:text-slate-300 hover:underline cursor-pointer"><Link to="https://www.linkedin.com/in/abdul-muthalif-asfaq/"><p>Developed by <span className="text-white">A</span>sfaq</p></Link></div>
     </div>
     
    </>
  )
}

export default FooterSection















// for context ex 
// import userContext from "../utils/userContext"
// import { useContext } from "react"
// const {user , setusers} = useContext(userContext)

//    <h1>{user.name}</h1>
//     <h1>{user.email}</h1>
//     <input value={user.name} onChange={(e) => setusers({
//      ...user , name : e.target.value
//     })}></input>
//     <input value={user.email} onChange={(e) => setusers({
//       ...user , email : e.target.value
//     })}></input> 