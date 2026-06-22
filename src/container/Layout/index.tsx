import Button from "../../components/button/Index";
import { Outlet, useNavigate } from "react-router";

const Layout = () => {
  const navigate = useNavigate();
  const moveToHome = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-col min-h-full">
      {/* Your shared navbar, sidebar, footer, etc. */}
      <nav className="bg-nav mx-4 my-4 px-6 py-3 rounded-xl flex items-center justify-between shadow-md">
        <button onClick={moveToHome} className="font-roboto font-bold text-lg text-text cursor-pointer hover:text-red transition-colors duration-200">My Website</button>
        <div className="flex gap-3">
          <Button className="py-1.5 px-4 text-sm" content="Home" onClick={moveToHome} />
          <Button className="py-1.5 px-4 text-sm" content="Movies" onClick={() => navigate("/movie")} />
        </div>
      </nav>

      {/* This renders the matched child route */}
      <div className="flex-1 px-4 pb-6">
        <Outlet />
      </div>

      <footer className="bg-nav mx-4 my-4 px-6 py-4 rounded-xl flex items-center justify-between shadow-md mt-auto">
        <span className="font-roboto font-bold text-sm text-text">My Website</span>
        <span className="font-roboto text-xs text-text-muted">&copy; {new Date().getFullYear()} All rights reserved.</span>
      </footer>
    </div>
  );
};

export default Layout;
