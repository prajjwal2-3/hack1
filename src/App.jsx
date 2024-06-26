import Header from "./components/Header";
import Home from "./components/Home/Home";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Login from "./components/auth/Login";
import ProtectedRoute from "./ProtectedRoute";
import CreateAccount from "./components/auth/CreateAccount";
import CreateOrganization from "./components/Afterlogin/CreateOrganization";
import Volunteer from "./components/Afterlogin/Volunteer";
import { isAuthenticated } from "../utils/auth";

import Myorg from "./components/org/Myorg";
import { useSelector } from "react-redux";
import Organization from "./components/org/Organization";
import Organizationdetail from "./components/org/Organizationdetail";
import CreateProject from "./components/projects/CreateProject";
import CreateVolunteer from "./components/volunteer/CreateVolunteer";
import Explore from "./components/Explore";
import ViewProject from "./components/projects/ViewProject";
function App() {
  return (
    <div className="min-h-screen w-full">
      <Header isAuthenticated={isAuthenticated()} />
      <Outlet />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <CreateAccount />,
      },
      
      {
        path: "/createOrganization",
        element: (
          <ProtectedRoute>
            <CreateOrganization />
          </ProtectedRoute>
        )
      },
      {
        path: "/createVolunteer",
        element: (
          <ProtectedRoute>
            <CreateVolunteer />
          </ProtectedRoute>
        )
      },
      {
        path: "/organization",
        element: (
          <ProtectedRoute>
            <Organization />
          </ProtectedRoute>
        )
      },
      {
        
          path: "/organization/:orgID",
          element: (
            <ProtectedRoute>
              <Organizationdetail />
            </ProtectedRoute>
          ),
        
      },
      {
        path:'/explore',
        element:(
          <Explore/>
        )
      },
      {
        path:'/projects/:projectID',
        element:(
          <ProtectedRoute>
            <ViewProject/> 
          </ProtectedRoute>
        )
      },
      {
        path: "/myOrg",
        element: (
          <ProtectedRoute>
            <Myorg />
          </ProtectedRoute>
        ),
      },
      {
        path:'/createProject',
        element:(
<ProtectedRoute>
            <CreateProject />
          </ProtectedRoute>
        )
      },
      {
        path: "/volunteer",
        element: (
          <ProtectedRoute>
            <Volunteer />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);
export default App;
