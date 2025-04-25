/* eslint-disable react/prop-types */

import React, { useState } from "react";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Grid from "@mui/material/Grid";
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";
import MDInput from "../../components/MDInput";
import MDButton from "../../components/MDButton";
import DataTable from "../../examples/Tables/DataTable";

const Employees = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [employees, setEmployees] = useState([
    { id: 1, name: "Nguyen Van A", position: "Quản lý", email: "a@gmail.com" },
    { id: 2, name: "Tran Thi B", position: "Nhân viên kho", email: "b@gmail.com" },
    { id: 3, name: "Le Van C", position: "Bán hàng", email: "c@gmail.com" },
  ]);
  const [newEmployee, setNewEmployee] = useState({ name: "", position: "", email: "" });
  const [editingId, setEditingId] = useState(null);

  const handleAdd = () => {
    if (editingId !== null) {
      setEmployees((prev) =>
        prev.map((emp) => (emp.id === editingId ? { ...emp, ...newEmployee } : emp))
      );
      setEditingId(null);
    } else {
      const newId = employees.length + 1;
      setEmployees([...employees, { ...newEmployee, id: newId }]);
    }
    setNewEmployee({ name: "", position: "", email: "" });
  };

  const handleDelete = (id) => {
    setEmployees(employees.filter((e) => e.id !== id));
  };

  const handleEdit = (emp) => {
    setNewEmployee({ name: emp.name, position: emp.position, email: emp.email });
    setEditingId(emp.id);
  };

  const filtered = employees.filter((e) => e.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <MDBox display="flex" justifyContent="center" mt={4} px={2}>
      <Card sx={{ p: 4, width: "100%", maxWidth: "1200px", overflowX: "auto" }}>
        <MDTypography variant="h4" gutterBottom textAlign="center">
          Quản lý nhân viên
        </MDTypography>

        {/* Tìm kiếm */}
        <MDBox mb={3}>
          <MDInput
            fullWidth
            label="Tìm theo tên"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </MDBox>

        {/* Thêm / Sửa nhân viên */}
        <MDBox mb={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <MDInput
                fullWidth
                label="Họ tên"
                value={newEmployee.name}
                onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <MDInput
                fullWidth
                label="Chức vụ"
                value={newEmployee.position}
                onChange={(e) => setNewEmployee({ ...newEmployee, position: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <MDInput
                fullWidth
                label="Email"
                value={newEmployee.email}
                onChange={(e) => setNewEmployee({ ...newEmployee, email: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center">
              <MDButton color={editingId ? "warning" : "info"} onClick={handleAdd}>
                <Icon>{editingId ? "edit" : "add"}</Icon> {editingId ? "Cập nhật" : "Thêm"}
              </MDButton>
            </Grid>
          </Grid>
        </MDBox>

        {/* Bảng danh sách */}
        <DataTable
          table={{
            columns: [
              { Header: "ID", accessor: "id" },
              { Header: "Họ tên", accessor: "name" },
              { Header: "Chức vụ", accessor: "position" },
              { Header: "Email", accessor: "email" },
              {
                Header: "Hành động",
                accessor: "actions",
                Cell: ({ row }) => (
                  <MDBox display="flex" gap={1}>
                    <MDButton
                      variant="contained"
                      color="warning"
                      size="small"
                      sx={{ borderRadius: "12px" }}
                      onClick={() => handleEdit(row.original)}
                    >
                      Sửa
                    </MDButton>
                    <MDButton
                      variant="contained"
                      color="error"
                      size="small"
                      sx={{ borderRadius: "12px" }}
                      onClick={() => handleDelete(row.original.id)}
                    >
                      Xóa
                    </MDButton>
                  </MDBox>
                ),
              },
            ],
            rows: filtered,
          }}
        />
      </Card>
    </MDBox>
  );
};

export default Employees;
