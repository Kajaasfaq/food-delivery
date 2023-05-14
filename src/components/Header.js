import { useState } from "react"
import { Link } from "react-router-dom"
import useStatus from "../utils/useStatus"
import { useSelector } from "react-redux"
import iconDelivery from "../assets/food_delivery_web_icon_for_project-removebg-preview.png"

const HeaderSection = () => {
  const [logIn, setLogIn] = useState('false')
  const status = useStatus()

  const cartItem = useSelector( store => store.cart.items )

    return(
      <div className='nav-bar'>
         <div className='nav-logo'>
            <Link to="/"><img data-testid="logo" className="nav-logoo" src={iconDelivery} alt='logo'></img></Link>
        </div>
        <h5 className="bawa">Location : <span className="bawa-cur">Bengalur</span> <span data-testid="online-status" className="on-off" >{status}</span></h5>
        <div className='nav-list'>
            <ul className='nav-list-ul' >
              <li><Link className="link-re"to="/">Home</Link></li>
              <li><Link className="link-re" to="/about">About Us</Link></li>
              <li><Link className="link-re" to="/contact">Contact Us</Link></li>
              <li><Link className="link-re" to="/instamart">InstaMart</Link></li>
              <li><Link className="link-re" to="/cart" data-testid="cartZero">Cart {cartItem.length}</Link></li>
              {
                logIn ? (<Link to="/logout"><button className="button-nav" onClick={() => setLogIn(false)}>LogOut</button></Link>) : (<Link to="/login"><button  className="button-nav" onClick={() => setLogIn(true)}> Log In</button></Link>)
              }
            </ul>
        </div>
      </div>
    )
  }

  export default HeaderSection