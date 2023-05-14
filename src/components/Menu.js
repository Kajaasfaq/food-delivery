import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contant";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Menu = () => {
  const { resId } = useParams(); //reading url id

  const restaurant = useRestaurant(resId); //data from self made hook

  const data1 = restaurant?.data?.cards[0]?.card?.card?.info;
  const data2 =
    restaurant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card?.itemCards;
  
  const dispatch = useDispatch()
      
  const addCart = (item) =>{
    dispatch(addItem(item))
  }
  const removeCart = (item) => {
    dispatch(removeItem(item))
  }

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div className="menu-ress">
        <h1>restaurant id - {resId}</h1>
        <h1>{data1.name}</h1>
        <img src={IMG_CDN_URL + data1?.cloudinaryImageId}/>
        <h2>{data1?.areaName + ", " + data1?.city}</h2>
        <h2>{data1?.cuisines.join(", ")}</h2>
        <h2>{data1?.avgRating}</h2>
        <h2>{data1?.costForTwoMessage}</h2>
      </div>
      <div className="menu-items">
        <h1 className="menu-menuu">Menu</h1>
        <ul className="flex-ulll" data-testid="add-btn">
           {data2?.map((item) => (
               <li className="flex-ull" key={item.card.info.id}>
              <h4>{item.card.info.name}</h4> 
              <button className="add-ull" onClick={() => {addCart(item)}} data-testid="add-Item" >Add Item</button>
            </li>   
            ))}
        </ul>    
      </div>
    </div>
  );
};

export default Menu;