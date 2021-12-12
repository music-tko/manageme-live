import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from '../UserContext';

function PublicRoute ()  {
   const {currentUser} = useContext(UserContext);
    return !currentUser ? <Navigate to={"/dashboard"} /> : <Outlet />   ;
       
};

export default PublicRoute;