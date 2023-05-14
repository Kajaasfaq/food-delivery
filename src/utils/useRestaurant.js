import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../contant";

  const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  //get data
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch( FETCH_MENU_URL + resId );
    const json = await data.json();
    setRestaurant(json);
    // console.log(setRestaurant)
  }
//   console.log(restaurant)
  return restaurant;
};

export default useRestaurant;



// this is a self made hook used to fetch data for a particular restaurant according to the url id
//we'll use it in restaurantMenu component.