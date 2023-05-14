import { useEffect, useState } from "react"

const useOnline = () => {
    const[isOnline , setIsOnline] = useState(true);
    

    useEffect(() => {
        const online = () => { setIsOnline("on") };
        const offline =  () => { setIsOnline("off")};

        window.addEventListener ("online" , online );
        window.addEventListener ("offline" , offline );
     
   })

    return isOnline;
};

export default useOnline;