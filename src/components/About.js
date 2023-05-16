import { useContext } from "react";
import userContext from "../utils/userContext";
import Profile from "./ProfileClass";
import ProfileFunction from "./Profile";

const About = () => {

  const {user} = useContext(userContext)

    return (
      <> 
      <section className="bg-body-colour w-[100%] h-[780px]">
         <div className="flex items-center flex-col gap-5">
          <h2 className="text-2xl text-black text-center p-12">About Us</h2>
          {/* <h1>{user.name}</h1> */}
          {/* <h1>{user.email}</h1> */}
          <p className="text-xl w-[700] text-center">Bawa Food Delivery is a premium food delivery service that specializes in bringing you the best quality food right to your doorstep. Our mission is to make sure that you have access to the best and most delicious food from top restaurants in your city. </p>
          <p className="text-xl w-[700] text-center">We have partnered with hundreds of restaurants in various cities across the country to provide you with a wide variety of cuisines and dishes to choose from. From Italian to Indian, Chinese to Mexican, we have it all!</p>
          <p className="text-xl w-[700] text-center">Our team of experienced chefs and delivery executives work together to ensure that your food is prepared with the utmost care and delivered to you on time. We use only the best ingredients and cooking techniques to provide you with a truly unforgettable dining experience.</p>
          <p className="text-xl w-[700] text-center">At Bawa Food Delivery, we value our customers and strive to exceed their expectations with every order. Our goal is to make food delivery as easy, convenient, and enjoyable as possible for you. So sit back, relax, and let us bring you the best food in town!</p>
       </div>
     </section>
 {/* <ProfileFunction name={"asfaq for function"} />   
  <Profile  name={"asfaq for class"}  /> for class base components */} 
      </>
    );
}

export default About ;