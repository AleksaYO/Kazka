import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
const MenuPage = lazy(() => import("../pages/MenuPage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
