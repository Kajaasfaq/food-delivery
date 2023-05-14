import RestrauntCard from "./Restaurantcard";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/Helper";
import { FETCH_ALL_RESTAURANTS } from "../contant";
import useOnline from "../utils/useOnline";

const BodySection = () => {
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants , setFilteredRestaurants] = useState([])
  const [searchTxt, setSearchTxt] = useState('')
  
  
  useEffect(() => {
    getRestaurants();  
   },[])
 
 async function getRestaurants() {
   const data = await fetch( FETCH_ALL_RESTAURANTS );
   const  json = await data.json();
  setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

const isOnline = useOnline()

  if(!isOnline){
    return(
  <>
      <div className="offline">
       <div className="container">
        <div className="offline-wrapper">
         <h2 className="offline-heading">Uh oh!</h2>
         <p className="offline-text">It looks like you're offline. Please check your internet connection and try again.</p>
       </div>
     </div>
  </div>
  </>
    )}  


    if(!allrestaurants?.length === 0) return null;

    return (allrestaurants?.length === 0) ? (<Shimmer/>) : (
      <>
      <div className="nav-search">
        <input  data-testid="btn-inputs" className="nav-input" type='text' placeholder='Search for Reataurant and Dish' value={searchTxt} onChange={(e) => {setSearchTxt(e.target.value)}}></input>
        <button data-testid="btn-tests" className="nav-button" onClick = {() => {
         const data = filterData(searchTxt,allrestaurants);
         setFilteredRestaurants(data);
         }}> Search</button>
    </div>
     <div className="restaurant-list" data-testid="res-list">
       {filteredRestaurants.map((restaurant) => {
        return (<Link to={"/menu/" + restaurant.data.id} key={restaurant.data.id} className="res-link" > <RestrauntCard {...restaurant.data} /></Link>); 
        })}
     </div>
      </>
     
    );
  };

  export default BodySection;    
  