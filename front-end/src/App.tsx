import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ROUTES } from "./router/consts";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import SearchCategory from "./pages/SearchCategory";
import ErrorPage from "./pages/ErrorPage";
import Services from "./pages/Services";
import Register from "./pages/Register";
import BusinessPage from "./pages/BusinessPage";
import MyBookings from "./pages/Bookings";
import MyAccount from "./pages/MyAccount";
import RootLayout from "./components/layout/RootLayout";
import AuthLayout from "./components/layout/AuthLayout";
import { UserProvider } from "./context/UserContext";

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
      {
        path: ROUTES.BUSINESS,
        element: <BusinessPage />
      },
      {
        path: ROUTES.MY_BOOKING,
        element: <MyBookings />
      },
      {
        path: ROUTES.MY_ACCOUNT,
        element: <MyAccount />
      }
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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <SnackbarProvider>
          <RouterProvider router={router} />
        </SnackbarProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
