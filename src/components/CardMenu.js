import { useDispatch, useSelector } from "react-redux"
import { IMG_CDN_URL_CART } from "../contant"
import { removeCart } from "../utils/cartSlice"
import Shimmer from "./Shimmer"

const CardMenu = () => {
  const cartMenu = useSelector(store => store?.cart?.items);
 
  const dispatch = useDispatch()

  const removeItems = (index) => {
    dispatch(removeCart(index))
  }
    
  return (cartMenu.length === 0) ? (<Shimmer />) : (
    <>
      {cartMenu?.map((item, index) => (
        <div className="" key={item.id} >
          <div className="border-2 border-transparent bg-white  w-[300px] h-[580px] p-3">
          <img className="w-[100%]" src={IMG_CDN_URL_CART + item.card.info?.imageId} />
          <h5 className="mt-2 text-xl">{item.card.info?.name}</h5>
          <h5 className="mt-3">{item.card.info?.description}</h5>
          <h5 className="mt-3">{item.card.info?.category}</h5>
          <h5 className="mt-3">Rating: {item.card.info?.ratings?.aggregatedRating?.rating}⭐</h5>
          <h5 className="mt-4 text-orange-700">₹{item.card.info?.price / 100}</h5>
          <button className=" hover:text-black hover:underline border-2 bg-header-colour text-white" onClick={() => {removeItems(index)}}>remove items</button>
          </div>  
        </div>
      ))}
    </>
  );
}

export default CardMenu;

