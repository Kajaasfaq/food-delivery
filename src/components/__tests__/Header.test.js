import { render } from "@testing-library/react"
import HeaderSection from "../Header"
import { Provider } from "react-redux"
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server" 

//   this is unit testing 


test("Logo should load on redering header" , () => {
  const header = render(
  <StaticRouter>
    <Provider store={store}>
        < HeaderSection />
    </Provider>
  </StaticRouter>
  );

  const logo = header.getAllByTestId("logo")
  
  expect(logo[0].src).toBe("http://localhost/dummyLogo.png")
 });

 test("online status should be green in heading" , () => {
    const header = render(
    <StaticRouter>
      <Provider store={store}>
          < HeaderSection />
      </Provider>
    </StaticRouter>
    );
  
    const onlineStatus = header.getByTestId("online-status")
    
    expect(onlineStatus.innerHTML).toBe("🟢")
   });

  

test("cart should have 0 initial value " , () => {
   const header = render(
   <StaticRouter>
     <Provider store={store}>
         < HeaderSection />
     </Provider>
   </StaticRouter>
   );
 
   const cartZero = header.getByTestId("cartZero")
   
   expect(cartZero.innerHTML).toBe("Cart 0")
  });
