"use client";

import React from "react";
import { SessionProvider as Provider } from "next-auth/react";

const AuthProvider = ({ children , session}) => {
  return <Provider>{children}</Provider>;
};

export default AuthProvider;
