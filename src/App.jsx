import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Latest from "./pages/Latest/Latest";
import Categories from "./pages/Categories/Categories";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "movies/",
        children: [
          {
            path: "categories",
            element: <Categories />
          },
          {
            path: "latest",
            element: <Latest />
          }
        ]
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
