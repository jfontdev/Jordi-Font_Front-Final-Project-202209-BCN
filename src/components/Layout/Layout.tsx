import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  const { isOpen, isLoading } = useAppSelector(({ ui }) => ui);

  return (
    <LayoutStyled>
      {isLoading && <Loading />}
      {isOpen && <Modal />}
      <Header />
      <Outlet></Outlet>
    </LayoutStyled>
  );
};

export default Layout;
