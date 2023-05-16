import { useState } from "react"

const Section = ({title , descrition , Isvisible , setIsvisiable }) => {
            console.log('isvisible:', Isvisible)
            console.log('setIsvisible:', setIsvisiable) 
    return (

        <div className="p-5 text-center">
          <h1 className=" text-xl text-black text-center p-4 bg-white">{title}</h1>
          {Isvisible ? (<div className="text-xl text-black text-center"><button className="cursor-pointer hover:text-slate-600 hover:underline" onClick={() => {setIsvisiable(!Isvisible)}}>Hide</button><p>{descrition}</p></div>) : <button className="cursor-pointer hover:text-slate-600 hover:underline" onClick={() =>{setIsvisiable(true)}}>Show</button> } 
        </div>
    )
}



const Instamart = () => {
    const [isShow ,setIsshow] = useState("about")
    return (
       <>
       <div className="bg-body-colour w-[100%] h-[780px] flex flex-col items-center">
       <h1 className="text-2xl text-black text-center p-12">Instamart</h1>
        <div className="text-xl w-[700] text-center " >
        < Section  title = {"About Instamart"} Isvisible={isShow === "about"}  setIsvisiable={() => setIsshow("about")}     descrition={"Instamart is an online grocery delivery platform that allows users to order groceries and household essentials from local stores and have them delivered to their doorstep"}  />
        < Section title = {"Team Instamart"}  Isvisible={isShow === "team"}   setIsvisiable={() => setIsshow("team")}    descrition={"Project Manager, Software Development Manager, UX/UI Designer, Front-end Developer, Back-end Developer, QA Analyst"} />
        < Section title = {"Details Instamart"} Isvisible={isShow === "details"} setIsvisiable={() => setIsshow("details")}     descrition={"Users can place orders through the Instamart mobile app or website, and can choose from a variety of payment options, including cash on delivery, bank transfer, and credit card, In addition to its grocery delivery services, Instamart has also launched Instacart Go, a service that allows users to order and pay for items from convenience stores and have them delivered within 30 minutes."}/>
        </div>
       </div>
      </>
    );
}

export default Instamart