import React, { useEffect } from "react";

const LoginGoogleSuccess = () => {
  useEffect(() => {
    setTimeout(() => {
      window.close();
    }, 1000);
  }, []);
  return (
    <div>
      <h1>Login Was sucessful</h1>
    </div>
  );
};

export default LoginGoogleSuccess;
