import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Appbar from "./Components/AppBar/appbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./Components/auth/SignIn/SignIn";
import SignUp from "./Components/auth/SignUp/Signup";
import ErrorPage from "./Components/Error/ErrorPage";
import ProductDetails from "./Components/product-details/ProductDetails";
function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Appbar />, errorElement: <ErrorPage/> },
    {path: "/product-Details/:product-id", element: <ProductDetails/> },
    { path: "/Sign-In", element: <SignIn/> , errorElement: <ErrorPage/> },
    { path: "/Sign-Up", element: <SignUp/>, errorElement: <ErrorPage/>  },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
