import { Outlet } from "react-router";
import MainNavigation from "../components/MainNavigation";

export default function MainUi() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <MainNavigation />
    </>
  );
}
