/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // Private Routes: Khi người dùng chưa đăng nhập thì sẽ chuyển hướng sang trang login, còn ko thì chạy vào children (children là component con mà component cha PrivateRoute bảo vệ)
  if (!isAuthenticated) {
    return <Navigate to={"/signin"} />;
  }

  return <>{children}</>;
};

export default PrivateRoute;
