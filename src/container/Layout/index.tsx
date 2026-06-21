import Button from "../../components/button/Index";
import { Outlet, useNavigate } from "react-router";

const Layout = () => {
  const navigate = useNavigate();
  const moveToHome = () => {
    navigate("/");
  };
  return (
    <div>
      {/* Your shared navbar, sidebar, footer, etc. */}
      <nav className="bg-peach-light mx-4 my-4 px-6 py-3 rounded-xl flex items-center justify-between shadow-md">
        <span className="font-roboto font-bold text-lg text-stone-800">My Website</span>
        <Button className="py-1.5 px-4 text-sm" content="Home" onClick={moveToHome} />
      </nav>

      {/* This renders the matched child route */}
      <Outlet />

      {/* Footer, etc. */}
      <footer>Footer here</footer>
    </div>
  );
};

export default Layout;
