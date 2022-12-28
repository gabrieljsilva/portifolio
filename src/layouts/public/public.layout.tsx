import { FlexColumn, Navbar } from "../../components";
import { Outlet } from "react-router-dom";
import { useNavbar } from "../../hooks";
import { publicMenuItems } from "./domain";

export function PublicLayout() {
  const navbar = useNavbar(publicMenuItems);
  const linearGradientBackGround =
    "linear-gradient(345deg, rgba(38,30,30,1) 0%, rgba(20,17,34,1) 52%, rgba(75,0,84,1) 100%)";
  return (
    <FlexColumn minHeight={"100vh"} background={linearGradientBackGround}>
      <Navbar {...navbar} />
      <Outlet />
    </FlexColumn>
  );
}
