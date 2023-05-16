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
        <div className="bg-body-colour w-[100%] h-[100%]">
        <div>
        <h1 className="text-2xl text-black text-center p-12">Cart details</h1>
        <div className="flex flex-row justify-around text-lg hover:text-slate-600 hover:underline">
            <h4 className="cart-blk"> Cart - {cartItem.length}</h4>
            <button className="clear-cart" onClick={() => {cartClear()}}>Clear cart</button>
        </div> 
        <div className="bg-body-colour w-[100%] h-[80%] flex flex-wrap gap-7 p-10 justify-center " data-testid="cartItemNum ">
        <CardMenu  aas={cartItem.length}/>
        </div>
        </div>
        </div>
       
        </>
    )
}

export default Cart