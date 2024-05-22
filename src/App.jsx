// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Home from './component/Home';
// import Login from './component/Login';
// import './App.css'
// import User from './component/User';
// import NavBar from './component/Navbar'
// import { createBrowserRouter ,RouterProvider} from "react-router-dom";
// import About from './component/About';
// function App() {
//   const router=createBrowserRouter([
//     {path : "/",element:<><NavBar /><Home /></>},
//     {path:"/login",element:<><NavBar /><Login /></>},
//     {path:"/about",element:<><NavBar /><About /></>},
//     {path:"/user/:username",element:<><NavBar /><User /></>},
//   ]);
//   // const [count, setCount] = useState(0)
  

//   return (
//     <>
//     {/* <NavBar /> */}
//     <RouterProvider router={router} />
//     </>
//   )
// }
import Root from "./Pages/Root";
import Product from "./Pages/Product";
import { createBrowserRouter ,RouterProvider ,createRoutesFromElements, Route} from "react-router-dom";
import HomePage from "./Pages/HomePage";
// const routeDefinition=createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<Product />} />
//   </Route>
// );

// const router=createBrowserRouter(routeDefinition);
import Error from "./Pages/Error";
import ProductDetails from "./Pages/ProductDetails";
const router=createBrowserRouter([
  {
    path:'/',
    element:<Root />,
    errorElement:<Error />,
    children:[
      // {path:"", element:<HomePage />},
      {index:true,element:<HomePage />},
      {path:"products" , element : <Product />},
      {path:"products/:productId",element:<ProductDetails />}
    ],
  },
]);
// const router=createBrowserRouter([
//   {path:"/home", element:<HomePage />},
//   {path:"/products" , element : <Product />}
// ]);
function App(){
  return (
  <RouterProvider router={router} />
  );
}
export default App;
