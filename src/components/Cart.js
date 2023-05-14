import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../utils/cartSlice"
import CardMenu from "./CardMenu"

const Cart = () => {
 const cartItem = useSelector( store => store.cart.items )
   

  const dispatch = useDispatch()

  const cartClear = () => {
    dispatch(clearCart())
  }
    return (
        <>
        <h1 className="cart-de">Cart details</h1>
        <div className="cart-fl">
            <h4 className="cart-blk"> Cart - {cartItem.length}</h4>
            <button className="clear-cart" onClick={() => {cartClear()}}>Clear cart</button>
        </div> 
        <div className="flex-cartt" data-testid="cartItemNum">
        <CardMenu  aas={cartItem.length}/>
        </div>
        </>
    )
}

export default Cart