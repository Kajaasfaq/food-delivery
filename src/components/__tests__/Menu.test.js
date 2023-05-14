import { render , waitFor , fireEvent } from "@testing-library/react"
import { Provider } from "react-redux"
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server" 
import Menu_Data from "../../mocks/dummyMenu"
import Menu from "../Menu"
import HeaderSection from "../Header"
import Cart from "../Cart"
import CartSlice from "../../utils/cartSlice"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(Menu_Data);
        }
    })
})

test("add item in menu page and update the cart" , async() => {
    const MenuAdd =  render(<StaticRouter>
          <Provider store={store}>
            < HeaderSection />
            < Menu />
            < Cart />
          </Provider>
          </StaticRouter>)
     
  
  
      await waitFor(() => expect(MenuAdd.getByTestId("add-btn")))
  
      const addItems = MenuAdd.getAllByTestId("add-Item")

      fireEvent.click(addItems[0])
      
  
      const zero = MenuAdd.getByTestId("cartZero")

      expect(zero.innerHTML).toBe("Cart 1");

    //   const cartItemNum = MenuAdd.getByTestId("cartItemNum")
      
    //   expect(cartItemNum).toBe(1)
     
  })


