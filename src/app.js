import React, { lazy , Suspense , useContext, useState } from 'react';
import ReactDOM  from 'react-dom/client';
import HeaderSection from './components/Header';
import BodySection from './components/Body';
import FooterSection from './components/Footer';
import Error from './components/Error';
import Contact from './components/Contact';
import Menu from './components/Menu';
import Login from './components/Login';
import LogOut from './components/Logout';
import { createBrowserRouter , RouterProvider , Outlet } from 'react-router-dom';
import Shimmer from './components/Shimmer';
import Loadingspin from './components/Loadingspin';
import userContext from './utils/userContext';
import { Provider } from 'react-redux';
import store from './utils/store';
import Cart from './components/Cart';

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));



const AppLayout = () => {

  const[users , setusers] = useState({
    name : "asfaq",
    email : "kajaasfaq@gmail.com"
  });

  return (
  <Provider store={store}>
  <userContext.Provider value={{
    user : users,
    setusers : setusers
  }}>
  < HeaderSection  />
  < Outlet />
  < FooterSection />
  </userContext.Provider>
  </Provider>
  );
}


const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <BodySection />
        },
        {
          path: "/search",
          element: <BodySection />
        },
        {
          path: "/about",
          element:  <Suspense fallback={<Loadingspin/>}>
                       <About/>
                     </Suspense>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/menu/:resId",
          element: <Menu/>
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/logout",
          element: <LogOut />
        },
        {
          path: "/instamart",
          element: <Suspense fallback={<Shimmer/>}>
                         <Instamart />
                   </Suspense>
        },
        {
          path: "/cart",
          element: <Cart />
        },
      ]
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< RouterProvider router={appRouter}/>);

  
