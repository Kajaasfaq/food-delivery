import { useState } from "react"

const Section = ({title , descrition , Isvisible , setIsvisiable }) => {
            console.log('isvisible:', Isvisible)
            console.log('setIsvisible:', setIsvisiable) 
    return (

        <div className="border-insta">
          <h1>{title}</h1>
          {Isvisible ? (<div><button onClick={() => {setIsvisiable(!Isvisible)}}>Hide</button><p>{descrition}</p></div>) : <button onClick={() =>{setIsvisiable(true)}}>Show</button> } 
        </div>
    )
}



const Instamart = () => {
    const [isShow ,setIsshow] = useState("about")
    return (
       <>
        <h1>Instamart</h1>
        <div >
        < Section title = {"About Instamart"} Isvisible={isShow === "about"}  setIsvisiable={() => setIsshow("about")}     descrition={"Even though React only updates the changed DOM nodes, re-rendering still takes some time. In many cases its not a problem, but if the slowdown is noticeable, you can speed all of this up by overriding the lifecycle function shouldComponentUpdate, which is triggered before the re-rendering process starts. The default implementation of this function returns true, leaving React to perform the update:"}  />,
        < Section title = {"Team Instamart"}  Isvisible={isShow === "team"}   setIsvisiable={() => setIsshow("team")}    descrition={"Even though React only updates the changed DOM nodes, re-rendering still takes some time. In many cases its not a problem, but if the slowdown is noticeable, you can speed all of this up by overriding the lifecycle function shouldComponentUpdate, which is triggered before the re-rendering process starts. The default implementation of this function returns true, leaving React to perform the update:"} />,
        < Section title = {"Details Instamart"} Isvisible={isShow === "details"} setIsvisiable={() => setIsshow("details")}     descrition={"Even though React only updates the changed DOM nodes, re-rendering still takes some time. In many cases its not a problem, but if the slowdown is noticeable, you can speed all of this up by overriding the lifecycle function shouldComponentUpdate, which is triggered before the re-rendering process starts. The default implementation of this function returns true, leaving React to perform the update:"}/>
        </div>
      </>
    );
}

export default Instamart