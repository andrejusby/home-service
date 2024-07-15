import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./router/consts";
import Home from "./pages/Home";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import Login from "./pages/Login";
import SearchCategory from "./pages/SearchCategory";
import RootLayout from "./components/layout/RootLayout";
import AuthLayout from "./components/layout/AuthLayout";
import { UserProvider } from "./context/UserContext";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.SERVICES,
        element: <Services />,
      },
      {
        path: ROUTES.ABOUT_US,
        element: <AboutUs />,
      },
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.SEARCH_CATEGORY,
        element: <SearchCategory />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.REGISTER,
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
