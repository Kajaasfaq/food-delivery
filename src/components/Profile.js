import { useState } from "react"

const Profile = (props) => {
    const [count , setcount] = useState(0)
    return(
        <>
        <h1> form function components name: {props.name} </h1>
        <h1 onClick={() => setcount(1)}> Count : {count} </h1>
        </>
    )
}

export default Profile