import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import Header from "../Header/Header";
import Modal from "../Modal/Modal";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  const { isOpen } = useAppSelector(({ ui }) => ui);

  return (
    <LayoutStyled>
      {isOpen && <Modal />}
      <Header />
      <Outlet></Outlet>
    </LayoutStyled>
  );
};

export default Layout;
