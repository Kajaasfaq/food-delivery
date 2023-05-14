import { createContext } from "react"

const userContext = createContext({
        user : {
            name: "dummyname",
            email: "dummy@gmail.com"
        }
    })

    export default userContext 