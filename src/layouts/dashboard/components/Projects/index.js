import React from "react";
import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";

const Projects = () => {
  const columns = [
    { Header: "Tên bộ sưu tập", accessor: "name" },
    { Header: "Mùa", accessor: "season" },
    { Header: "Sản phẩm", accessor: "items" },
    { Header: "Trạng thái", accessor: "status" },
  ];

  const rows = [
    { name: "BST Xuân 2025", season: "Xuân", items: 120, status: "Đang hoạt động" },
    { name: "BST Hè Năng Động", season: "Hè", items: 98, status: "Đang thiết kế" },
    { name: "BST Thu Cổ Điển", season: "Thu", items: 76, status: "Ngưng" },
    { name: "BST Đông Ấm Áp", season: "Đông", items: 110, status: "Đang sản xuất" },
  ];

  return (
    <Card>
      <MDBox p={3}>
        <MDTypography variant="h6" gutterBottom>
          Bộ sưu tập thời trang
        </MDTypography>
        <DataTable
          table={{ columns, rows }}
          isSorted={false}
          entriesPerPage={false}
          showTotalEntries={false}
          noEndBorder
        />
      </MDBox>
    </Card>
  );
};

export default Projects;
