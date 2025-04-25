import Grid from "@mui/material/Grid";
//import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
//import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";

import reportsBarChartOptions from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartOptions from "layouts/dashboard/data/reportsLineChartData";

function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <ReportsBarChart
                color="info"
                title="Lượt xem sản phẩm"
                description="Biểu đồ lượt truy cập theo ngày"
                date="Cập nhật 2 giờ trước"
                chart={reportsBarChartOptions}
              />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <ReportsLineChart
                color="success"
                title="Doanh số bán hàng"
                description="(+15%) tăng trưởng theo tháng"
                date="Cập nhật hôm nay"
                chart={reportsLineChartOptions}
              />
            </Grid>
          </Grid>
        </MDBox>

        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
