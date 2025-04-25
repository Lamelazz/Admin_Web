import Dashboard from "layouts/dashboard";
import SignUp from "layouts/authentication/sign-up";
import Employees from "layouts/employees";
import Products from "layouts/products";
import Customers from "layouts/customers";
import Statistics from "layouts/statistics";
import Revenue from "layouts/revenue";
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Trang chủ",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Nhân viên",
    key: "employees",
    icon: <Icon fontSize="small">people</Icon>,
    route: "/employees",
    component: <Employees />,
  },
  {
    type: "collapse",
    name: "Sản phẩm",
    key: "products",
    icon: <Icon fontSize="small">inventory_2</Icon>,
    route: "/products",
    component: <Products />,
  },
  {
    type: "collapse",
    name: "Khách hàng",
    key: "customers",
    icon: <Icon fontSize="small">person_outline</Icon>,
    route: "/customers",
    component: <Customers />,
  },
  {
    type: "collapse",
    name: "Thống kê sản phẩm",
    key: "statistics",
    icon: <Icon fontSize="small">bar_chart</Icon>,
    route: "/statistics",
    component: <Statistics />,
  },
  {
    type: "collapse",
    name: "Thống kê doanh thu",
    key: "revenue",
    icon: <Icon fontSize="small">show_chart</Icon>,
    route: "/revenue",
    component: <Revenue />,
  },
  {
    type: "collapse",
    name: "Đăng xuất",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
];

export default routes;
