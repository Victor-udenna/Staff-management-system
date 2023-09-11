import { memo} from "react";
import {Navigate} from 'react-router-dom';

type ChildrenProps = {
  children: JSX.Element;
};


const PrivateRoute = ({children}: ChildrenProps) => {



let authState = sessionStorage.getItem("authState")

return authState !== null  ? children : <Navigate to="/"/> 
}
export default memo(PrivateRoute)