import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Hyperealistcom from "./pages/hyperealistcom";
import Experiencewelcomecom from "./pages/experiencewelcomecom";
import Wolvesartfr from "./pages/wolvesartfr";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/experiencewelcomecom":
        title = "";
        metaDescription = "";
        break;
      case "/wolvesartfr":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Hyperealistcom />} />
      <Route path="/experiencewelcomecom" element={<Experiencewelcomecom />} />
      <Route path="/wolvesartfr" element={<Wolvesartfr />} />
    </Routes>
  );
}
export default App;
