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
        <div className="card-cart" key={item.id} >
          <img src={IMG_CDN_URL_CART + item.card.info?.imageId} />
          <h5 className="cart-name">{item.card.info?.name}</h5>
          <h5 className="cart-des">{item.card.info?.description}</h5>
          <h5 className="cart-car">{item.card.info?.category}</h5>
          <h5 className="cart-rating">Rating: {item.card.info?.ratings?.aggregatedRating?.rating}⭐</h5>
          <h5 className="cart-price">₹{item.card.info?.price / 100}</h5>
          <button className="card-menu-button" onClick={() => {removeItems(index)}}>remove items</button>
        </div>
      ))}
    </>
  );
}

export default CardMenu;

