import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Suspense, lazy } from "react";
import { Loader } from "./Loader/Loader";

const HomePage = lazy(() => import("../pages/HomePage"));
const MenuPage = lazy(() => import("../pages/MenuPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="menu" element={<MenuPage />} />
            <Route path="contacts" element={<ContactsPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
