import { useState } from "react"
import { Link } from "react-router-dom"
import useStatus from "../utils/useStatus"
import { useSelector } from "react-redux"
import iconDelivery from "../assets/food_delivery_web_icon_for_project-removebg-preview.png"
import { Tooltip } from 'react-tippy';

const HeaderSection = () => {
  const [logIn, setLogIn] = useState('false')
  const status = useStatus()

  const cartItem = useSelector( store => store.cart.items )

    return(
      <div className="bg-header-colour flex flex-wrap h-20 justify-between shadow-xl">
         <div className="">
            <Link to="/"><img data-testid="logo" className="absolute top-0 w-34 h-20 " src={iconDelivery} alt='logo'></img></Link>
        </div>
        <h5 className=" absolute top-7 left-32"><span className="hover:text-slate-300 hover:underline ">Location</span> : <Tooltip title="Default location"><span className="cursor-pointer" >Bengaluru, Karnataka, India</span></Tooltip> <Tooltip title="Status"><span data-testid="online-status" className="text-xs" >{status}</span></Tooltip></h5>
        <div className=''>
            <ul className='flex flex-row gap-8 text-lg mt-6 mr-4'>
              <li><Link className="hover:text-slate-300 hover:underline cursor-pointer"to="/">Home</Link></li>
              <li><Link className="hover:text-slate-300 hover:underline cursor-pointer" to="/about">About Us</Link></li>
              <li><Link className="hover:text-slate-300 hover:underline cursor-pointer" to="/contact">Contact Us</Link></li>
              <li><Link className="hover:text-slate-300 hover:underline cursor-pointer" to="/instamart">InstaMart</Link></li>
              <li><Link className="hover:text-slate-300 hover:underline cursor-pointer" to="/cart" data-testid="cartZero">Cart {cartItem.length}</Link></li>
              {
                logIn ? (<Link to="/logout"><button className="hover:text-slate-300 hover:underline cursor-pointer" onClick={() => setLogIn(false)}>LogOut</button></Link>) : (<Link to="/login"><button  className="hover:text-slate-300 hover:underline cursor-pointer" onClick={() => setLogIn(true)}> Log In</button></Link>)
              }
            </ul>
        </div>
      </div>
    )
  }

  export default HeaderSection