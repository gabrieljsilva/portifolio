import { FlexColumn, Navbar } from "../../components";
import { Outlet } from "react-router-dom";

export function PublicLayout() {
  return (
    <FlexColumn minHeight={"100vh"}>
      <Navbar
        items={[
          {
            key: "HOME",
            name: "Home",
            path: "/",
          },
          {
            key: "ABOUT",
            name: "About",
            path: "/about",
          },
          {
            key: "SKILLS",
            name: "Skills",
            path: "/skills",
          },
          {
            key: "CASES",
            name: "Cases",
            path: "/cases",
          },
        ]}
      />
      <Outlet />
    </FlexColumn>
  );
}
