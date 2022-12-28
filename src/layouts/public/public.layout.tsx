import { FlexColumn, Navbar } from "../../components";
import { Outlet } from "react-router-dom";
import { useNavbar } from "../../hooks";
import { publicMenuItems } from "./domain";

export function PublicLayout() {
  const navbar = useNavbar(publicMenuItems);

  return (
    <FlexColumn minHeight={"100vh"}>
      <Navbar {...navbar} />
      <Outlet />
    </FlexColumn>
  );
}
