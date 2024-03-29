import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Products";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import About from "./pages/About";
import ProductDetails from "./pages/ProductDetails";

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    errorElement: < Error />,
    children: [
      {path: '/', element: <Homepage />},
      {path: '/products', element: <Products />},
      {path: '/about', element: <About />},
      {path:'/products/:Id', element: <ProductDetails />}
    ]
  }
  
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
