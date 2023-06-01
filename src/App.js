import React, { useEffect, useState } from "react";
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
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
};

export default App;
