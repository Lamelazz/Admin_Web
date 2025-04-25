import { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    // Xoá thông tin người dùng khỏi localStorage (nếu cần)
    localStorage.removeItem("adminToken");

    // Điều hướng về trang đăng nhập website thời trang
    window.location.href = "http://localhost:3000/login";
  }, []);

  return null;
};

export default Logout;
