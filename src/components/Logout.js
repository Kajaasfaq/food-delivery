import { Link } from "react-router-dom"

const LogOut = () => {
    return (
       <>
       <div className="logout-message">
       <h2>Logged out successfully!</h2>
       <p>Thank you for using our food delivery service. We hope to see you again soon!</p>
       <button className="logout-bt"> <Link to="/" > Go back to home page </Link> </button>
       </div>

       </> 
    )
}

export default LogOut