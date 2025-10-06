import { lazy, Suspense } from "react";
import LoadingFallback from "./components/LoadingFallback";

const PublicRoutes = lazy(() => import("./PublicRoutes"));

const App = () => {
  return (
    <div id="app">
      <Suspense fallback={<LoadingFallback />}>
        <PublicRoutes />
      </Suspense>
    </div>
  );
};

export default App;
