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

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([
    { id: 1, name: "Áo thun trắng", category: "Áo", price: 250000 },
    { id: 2, name: "Quần jean xanh", category: "Quần", price: 350000 },
    { id: 3, name: "Giày sneaker", category: "Giày", price: 650000 },
  ]);
  const [newProduct, setNewProduct] = useState({ name: "", category: "", price: "" });
  const [editingId, setEditingId] = useState(null);

  const handleAdd = () => {
    if (editingId !== null) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingId ? { ...p, ...newProduct, price: Number(newProduct.price) } : p
        )
      );
      setEditingId(null);
    } else {
      const newId = products.length + 1;
      setProducts([...products, { ...newProduct, id: newId, price: Number(newProduct.price) }]);
    }
    setNewProduct({ name: "", category: "", price: "" });
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleEdit = (p) => {
    setNewProduct({ name: p.name, category: p.category, price: p.price });
    setEditingId(p.id);
  };

  const filtered = products.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <MDBox display="flex" justifyContent="center" mt={4} px={2}>
      <Card sx={{ p: 4, width: "100%", maxWidth: "1200px", overflowX: "auto" }}>
        <MDTypography variant="h4" gutterBottom textAlign="center">
          Quản lý sản phẩm
        </MDTypography>

        {/* Tìm kiếm */}
        <MDBox mb={3}>
          <MDInput
            fullWidth
            label="Tìm theo tên sản phẩm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </MDBox>

        {/* Thêm / Sửa sản phẩm */}
        <MDBox mb={3}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <MDInput
                fullWidth
                label="Tên sản phẩm"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <MDInput
                fullWidth
                label="Danh mục"
                value={newProduct.category}
                onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <MDInput
                fullWidth
                label="Giá bán (VND)"
                type="number"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              />
            </Grid>
            <Grid item xs={12} display="flex" justifyContent="center">
              <MDButton color={editingId ? "warning" : "info"} onClick={handleAdd}>
                <Icon>{editingId ? "edit" : "add"}</Icon> {editingId ? "Cập nhật" : "Thêm"}
              </MDButton>
            </Grid>
          </Grid>
        </MDBox>

        {/* Bảng sản phẩm */}
        <DataTable
          table={{
            columns: [
              { Header: "ID", accessor: "id" },
              { Header: "Tên", accessor: "name" },
              { Header: "Danh mục", accessor: "category" },
              { Header: "Giá bán", accessor: "price" },
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

export default Products;
