import userContext from "../utils/userContext"
import { useContext } from "react"

const FooterSection = () => {
  const {user , setusers} = useContext(userContext)
  return(
    <>
    {/* <h1>{user.name}</h1>
    <h1>{user.email}</h1>
    <input value={user.name} onChange={(e) => setusers({
     ...user , name : e.target.value
    })}></input>
    <input value={user.email} onChange={(e) => setusers({
      ...user , email : e.target.value
    })}></input> */}
    </>
  )
}

export default FooterSection