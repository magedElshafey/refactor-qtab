import React, { useEffect } from "react";
import Aos from "aos";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import Btns from "./Components/fixedBtns/Btns";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import Reg from "./Pages/Reg";
import CartSidebar from "./Components/cart/CartSidebar";
import Dashboard from "./Pages/Dashboard";
import CardModal from "./Components/Layouts/cardModal/CardModal";
import Theme from "./Pages/Theme";
import CreateBussinessCard from "./Pages/CreateBussinessCard";
import AllCards from "./Pages/AllCards";
import CardDetails from "./Pages/CardDetails";
import Leads from "./Pages/Leads";

const App = () => {
  const queryClient = new QueryClient();
  // handle animation effect
  useEffect(() => {
    Aos.init({
      offset: 0,
      duration: 1200,
    });
  }, []);

  // handle scroll to top
  function ScrollToTopAfterChangePage() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ScrollToTopAfterChangePage />
          <Btns />
          <CartSidebar />
          <CardModal />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/products" element={<Products />} />
          </Routes>
          <Routes>
            <Route path="/products/:id" element={<Product />} />
          </Routes>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/reg" element={<Reg />} />
          </Routes>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Routes>
            <Route path="/card/:type/:lang" element={<Theme />} />
          </Routes>
          <Routes>
            <Route
              path="/bussiness/create/:id"
              element={<CreateBussinessCard />}
            />
          </Routes>
          <Routes>
            <Route path="/cards" element={<AllCards />} />
          </Routes>
          <Routes>
            <Route path="/dashboard/cards/:id" element={<CardDetails />} />
          </Routes>
          <Routes>
            <Route path="/leads" element={<Leads />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
};

export default App;
