import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  DetailPage,
  EditPage,
  ListPage,
  AddPage
} from "./pages/pageIndex";
import Header from "./components/common/Header";
import { props } from "./App";

const AppRouter = ({ items }: props) => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/list" element={<ListPage items={items} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
