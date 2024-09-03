import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/navigation";
import { Shop } from "./page/shop";
import { Contact } from "./page/contact";
import { About } from "./page/about";
import { Footer } from "./components/footer";
import { Home } from "./page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBar />
        <Home />
        <Footer />
      </div>
    ),
  },
  {
    path: "/shop",
    element: (
      <div>
        <NavBar />
        <Shop />
        <Footer />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <NavBar />
        <About />
        <Footer />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <NavBar />
        <Contact />
        <Footer />
      </div>
    ),
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
