//   this is integration testing

import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react"
import BodySection from "../Body"
import { Provider } from "react-redux"
import store from "../../utils/store"
import { StaticRouter } from "react-router-dom/server"
import RES_fetch from "../../mocks/dummyFetch"

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(RES_fetch);
        }
    })
})

test("search result on homepage" , async() => {
  const body =  render(<StaticRouter>
        <Provider store={store}>
            <BodySection/>
        </Provider>
        </StaticRouter>)



    await waitFor(() => expect(body.getByTestId("btn-tests")))

    const resList = body.getByTestId("res-list")

    expect(resList.children.length).toBe(15);
    
})

test("search result for string in home page input box" , async() => {
    const body =  render(<StaticRouter>
          <Provider store={store}>
              <BodySection/>
          </Provider>
          </StaticRouter>)
  
  
  
      await waitFor(() => expect(body.getByTestId("btn-tests")))
  
      const input = body.getByTestId("btn-inputs")

      fireEvent.change(input , { 
        target : {
        value: "food",
       }
    })
    const btn = body.getByTestId("btn-tests")  

      fireEvent.click(btn)

    const resList = body.getByTestId("res-list")

      expect(resList.children.length).toBe(2);
      
  })

