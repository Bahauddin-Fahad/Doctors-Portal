import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <h2 className="font-bold text-primary text-xs text-center">
          Logged In as : {user.email}
        </h2>
        <h2 className="font-bold text-primary text-2xl text-center">
          Dashboard
        </h2>

        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link className="text-primary font-bold" to="/dashboard">
              My Appointments
            </Link>
          </li>
          <li>
            <Link className="text-primary font-bold" to="/dashboard/review">
              My Review
            </Link>
          </li>
          <li>
            <Link className="text-primary font-bold" to="/dashboard/history">
              My Treatment History
            </Link>
          </li>
          {admin && (
            <>
              <li>
                <Link className="text-primary font-bold" to="/dashboard/users">
                  All Users
                </Link>
              </li>
              <li>
                <Link
                  className="text-primary font-bold"
                  to="/dashboard/addDoctor"
                >
                  Add A Doctor
                </Link>
              </li>
              <li>
                <Link
                  className="text-primary font-bold"
                  to="/dashboard/manageDoctor"
                >
                  Manage Doctors
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
