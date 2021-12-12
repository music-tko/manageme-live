import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from '../UserContext';

function PrivateRoute ()  {
   const {currentUser} = useContext(UserContext);
    return currentUser ? <Outlet />:   <Navigate to={"/login"} />;
       
};

export default PrivateRoute;