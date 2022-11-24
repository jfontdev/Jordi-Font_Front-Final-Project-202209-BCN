import { Provider } from "react-redux";
import { store } from "../redux/store";

interface MakeWrapperProps {
  children: JSX.Element | JSX.Element[];
}

const MakeWrapper = ({ children }: MakeWrapperProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default MakeWrapper;
