import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../contant";
import useRestaurant from "../utils/useRestaurant";
import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import ShimmerMenu from "./ShimmerMenus";

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
    < ShimmerMenu />
  ) : (
    <div className="">
        <div className="bg-body-colour top-5 flex gap-2 flex-col">
      <div className="bg-white  w-[85%] h-[80%] relative left-[7.5%] top-5 flex flex-row ">
        <div className="w-[400px] h-[300px] pl-9 mt-9">
        <img className="" src={IMG_CDN_URL + data1?.cloudinaryImageId}/>   
        </div>
        <div className="flex flex-col gap-4 p-5 ml-[250px]">
        <h1 className="text-xl text-black">Restaurant Id - {resId}</h1>
        <h1 className="text-xl text-black" >{data1.name}</h1>
        <h2 className="text-xl text-black" >{data1?.areaName + ", " + data1?.city}</h2>
        <h2 className="text-xl text-black">{data1?.cuisines.join(", ")}</h2>
        <h2 className="text-xl text-red-500">{data1?.avgRating}⭐</h2>
        <h2 className="text-xl text-black">{data1?.costForTwoMessage}</h2>
        </div>
      </div>
      <div className="flex flex-col relative top-3">
        <h1 className="text-xl text-black ml-40">Menu :</h1>
        <div className="bg-white  w-[85%]  relative left-[7.5%] top-1 ">
          <div>
             <ul className="flex flex-col gap-5 mt-5 " data-testid="add-btn">
               {data2?.map((item) => (
               <li className="flex flex-wrap items-center gap-20 ml-28 " key={item.card.info.id}>
                <img className="relative w-60" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + item.card.info.imageId} />
              <h4 className="text-2xl p-5">{item?.card?.info?.name}</h4> 
              <h4>Rating: {item.card.info?.ratings?.aggregatedRating?.rating}⭐</h4>
              <h4 className="text-red-500">₹{item?.card?.info?.price/100}</h4>
              <button className="bg-header-colour text-white" onClick={() => {addCart(item)}} data-testid="add-Item" >Add Item</button>
            </li>   
            ))}
        </ul>    
          </div>
        
        </div>
        
      </div>
    </div>
    </div>
    );
  };
   
export default Menu;