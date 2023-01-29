import React, { FC } from "react";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigation"; 
import { useSelector } from "react-redux";
type Props = { };

const Nav: FC<Props> = () => {
    const user = useSelector(state => state.isLoggedIn) 
  return (<>
    {user ? <AppNavigator /> : <AuthNavigator />}</>
  )
};

export default Nav;