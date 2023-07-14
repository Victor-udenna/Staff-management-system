import { memo } from "react";
import {Navigate} from 'react-router-dom';
import {auth} from "../Config/firebase-config";

type ChildrenProps = {
  children: JSX.Element;
};


const PrivateRoute = ({children}: ChildrenProps) => {

const authState = auth.currentUser
  return authState !== null || authState !== "" ? children : <Navigate to="/"/> 
}

export default memo(PrivateRoute)