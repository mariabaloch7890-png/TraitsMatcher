import React from "react";
import Navbar from "./shared/components/Navbar";
import LandingPage from "./pages/LandingPage";

import LogIn from "./pages/LogIn";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ForgetPassword from "./pages/ForgetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import ResetPassword from "./pages/ResetPassword";
import Assessments from "./pages/Assessments";
import Candidates from "./pages/Candidates";
import CandidateDetail from "./pages/CandidateDetail";
import AssesmentComplete from "./pages/AssesmentComplete";
import Settings from "./pages/Settings";
import AssessmentLayout from "./pages/AssessmentLayout";
import Signup from "./pages/SignUp";

import NavbarLayout from "./layouts/NavbarLayout";
import SidebarLayout from "./layouts/SidebarLayout";



function App() {
  const router = createBrowserRouter([


    // 🔹 Landing Page → Navbar only
    {
      element: <NavbarLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
      ],
    },

    {
      path: "/signUp",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <LogIn />,
    },
        {
      path: "/ForgetPassword",
      element: <ForgetPassword />,
    },

    {
      path: "/VerifyEmail",
      element: <VerifyEmail />,
    },
    {
      path: "/ResetPassword",
      element: <ResetPassword />,
    },
    
    {

    element: <SidebarLayout />,
      children: [
    
    {
      path: "/assessments",
      element: <Assessments />,
    },
        {
      path: "/candidates",
      element: <Candidates />,
    },
        {
      path: "/CandidateDetail",
      element: <CandidateDetail />,
    },
  ],
},

                 {
      path: "/AssesmentComplete",
      element: <AssesmentComplete />,
    },
           {
      path: "/Settings",
      element: <Settings />,
    },

               {
      path: "/AssessmentLayout",
      element: <AssessmentLayout />,
    },

  ])
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
