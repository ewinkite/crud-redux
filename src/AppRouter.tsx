import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  Home,
  DetailPage,
  EditPage,
  ListPage,
  AddPage
} from "./pages/pageIndex";
import Header from "./components/common/Header";
import { props } from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppRouter = ({ items }: props) => {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        theme="light"
        pauseOnHover
        autoClose={1500}
      />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/list" element={<ListPage items={items} />} />
        <Route path="/*" element={<Navigate to={"/"} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
