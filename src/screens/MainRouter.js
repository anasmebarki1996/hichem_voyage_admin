import React, { useState } from "react";

import AuthRouter from "screens/auth/AuthRouter";
import AppRouter from "screens/app/AppRouter";
import { useDispatch, useSelector } from "react-redux";
import { checkToken } from "store/auth/authAction";

const MainRouter = () => {
  const dispatch = useDispatch();
  dispatch(checkToken());
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (isLoggedIn) {
    return <AuthRouter />;
  } else {
    return <AppRouter />;
  }
};

export default MainRouter;
