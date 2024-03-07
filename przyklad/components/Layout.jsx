import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import LogoutButton from "./LogoutButton";

export default function Layout() {
  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "0 16px" }}>
      <Navigation />
      <LogoutButton />
      <hr />
      <Outlet />
    </div>
  );
}
