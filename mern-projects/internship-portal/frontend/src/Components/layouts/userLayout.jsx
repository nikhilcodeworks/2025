import { Outlet } from "react-router";
import {ToastContainer} from "react-toastify";

const UserLayout = () => {
  return (
    <div>
      {/* ToastContainer */}
      <ToastContainer position="top-right" autoClose={3000} hidePrograssBar={false} />
      <Outlet />
    </div>
  )
}

export default UserLayout
