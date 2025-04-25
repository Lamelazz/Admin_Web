import React from "react";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Tổng quan đơn hàng
        </MDTypography>
        <MDBox mt={0.5} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <strong>24%</strong> tăng so với tháng trước
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem color="success" icon="check" title="120 đơn hàng mới" dateTime="hôm nay" />
        <TimelineItem
          color="info"
          icon="local_shipping"
          title="90 đơn đã giao"
          dateTime="2 ngày trước"
        />
        <TimelineItem
          color="warning"
          icon="hourglass_top"
          title="20 đơn đang xử lý"
          dateTime="1 giờ trước"
        />
        <TimelineItem color="error" icon="cancel" title="10 đơn bị hủy" dateTime="3 ngày trước" />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
