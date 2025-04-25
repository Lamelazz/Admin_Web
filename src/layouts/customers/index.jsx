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

const Customers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [customers, setCustomers] = useState([
    { id: 1, name: "Hoang Minh", phone: "0912345678", email: "minh@gmail.com" },
    { id: 2, name: "Nguyen Hoa", phone: "0987654321", email: "hoa@gmail.com" },
    { id: 3, name: "Tran Lam", phone: "0934567890", email: "lam@gmail.com" },
  ]);
  const [newCustomer, setNewCustomer] = useState({ name: "", phone: "", email: "" });
  const [editingId, setEditingId] = useState(null);

  const handleAdd = () => {
    if (editingId !== null) {
      setCustomers((prev) => prev.map((c) => (c.id === editingId ? { ...c, ...newCustomer } : c)));
      setEditingId(null);
    } else {
      const newId = customers.length + 1;
      setCustomers([...customers, { ...newCustomer, id: newId }]);
    }
    setNewCustomer({ name: "", phone: "", email: "" });
  };

  const handleDelete = (id) => {
    setCustomers(customers.filter((c) => c.id !== id));
  };

  const handleEdit = (c) => {
    setNewCustomer({ name: c.name, phone: c.phone, email: c.email });
    setEditingId(c.id);
  };

  const filtered = customers.filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <MDBox display="flex" justifyContent="center" mt={4} px={2}>
      <Card sx={{ p: 4, width: "100%", maxWidth: "1200px", overflowX: "auto" }}>
        <MDTypography variant="h4" gutterBottom textAlign="center">
          Quản lý khách hàng
        </MDTypography>

        {/* Tìm kiếm */}
        <MDBox mb={3}>
          <MDInput
            fullWidth
            label="Tìm theo tên khách hàng"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </MDBox>

        {/* Thêm / Sửa khách hàng */}
        <MDBox mb={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <MDInput
                fullWidth
                label="Tên khách hàng"
                value={newCustomer.name}
                onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <MDInput
                fullWidth
                label="Số điện thoại"
                value={newCustomer.phone}
                onChange={(e) => setNewCustomer({ ...newCustomer, phone: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <MDInput
                fullWidth
                label="Email"
                value={newCustomer.email}
                onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center">
              <MDButton color={editingId ? "warning" : "info"} onClick={handleAdd}>
                <Icon>{editingId ? "edit" : "add"}</Icon> {editingId ? "Cập nhật" : "Thêm"}
              </MDButton>
            </Grid>
          </Grid>
        </MDBox>

        {/* Bảng khách hàng */}
        <DataTable
          table={{
            columns: [
              { Header: "ID", accessor: "id" },
              { Header: "Họ tên", accessor: "name" },
              { Header: "SĐT", accessor: "phone" },
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

export default Customers;
