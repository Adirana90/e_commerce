import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/navigation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
