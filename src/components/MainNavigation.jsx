import { NavLink } from "react-router";

export default function MainNavigation() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-stone-900 text-stone-100 p-4 flex justify-around items-center rounded-t-2xl shadow-lg">
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-purple-600" : "")}
            end
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "text-purple-600" : "")}
          >
            DashBoard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
