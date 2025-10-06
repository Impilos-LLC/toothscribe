import { lazy, Suspense } from "react";
import {
  Navigate,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingFallback from "./components/LoadingFallback";
import ScrollToTop from "./utility/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import("./pages/Home/Home"));

const PublicRoutes = () => (
  <Router>
    <ScrollToTop />
    <Header />
    <main className="mt-20 min-h-screen">
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Suspense>
    </main>
    <Footer />
  </Router>
);

export default PublicRoutes;
