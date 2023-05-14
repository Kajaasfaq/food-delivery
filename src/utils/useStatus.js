import { useEffect, useState } from "react"

const useStatus = () => {
    const[isOnline , setIsOnline] = useState("🟢");
    

    useEffect(() => {
        const online = () => { setIsOnline("🟢") };
        const offline =  () => { setIsOnline("🔴")};

        window.addEventListener ("online" , online );
        window.addEventListener ("offline" , offline );
     
   })

    return isOnline;
};

export default useStatus;