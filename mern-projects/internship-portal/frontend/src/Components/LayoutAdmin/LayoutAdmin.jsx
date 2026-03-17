import SidebarAdmin from "../SidebarAdmin/SidebarAdmin";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { ToastContainer } from 'react-toastify';

const Layout = ({ isMenuOpen, setIsMenuOpen, children }) => {
  return (
    <div className="flex">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <SidebarAdmin isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <div className="flex-1">
        <NavbarAdmin isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="pt-20 lg:pl-56">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
