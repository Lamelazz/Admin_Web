import React, { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Statistics = () => {
  const [period, setPeriod] = useState("current");

  const stockDataSets = {
    current: {
      labels: ["Áo", "Quần", "Giày", "Túi xách", "Phụ kiện"],
      data: [40, 30, 25, 15, 10],
    },
    lastMonth: {
      labels: ["Áo", "Quần", "Giày", "Túi xách", "Phụ kiện"],
      data: [35, 28, 20, 17, 12],
    },
    lastQuarter: {
      labels: ["Áo", "Quần", "Giày", "Túi xách", "Phụ kiện"],
      data: [45, 33, 18, 20, 14],
    },
  };

  const productData = {
    labels: stockDataSets[period].labels,
    datasets: [
      {
        label: "Số lượng tồn kho",
        data: stockDataSets[period].data,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Thống kê tồn kho theo danh mục sản phẩm",
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 5,
        },
      },
    },
  };

  const handleExportPDF = () => {
    const chartElement = document.getElementById("productChart");
    html2canvas(chartElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10, 190, 100);
      pdf.save("thong_ke_san_pham.pdf");
    });
  };

  return (
    <MDBox display="flex" justifyContent="center" mt={4} px={2}>
      <Card sx={{ p: 4, width: "100%", maxWidth: "1000px" }}>
        <MDTypography variant="h4" gutterBottom textAlign="center">
          Thống kê sản phẩm
        </MDTypography>

        <Grid container justifyContent="space-between" alignItems="center" mb={3}>
          <Grid item>
            <Select value={period} onChange={(e) => setPeriod(e.target.value)}>
              <MenuItem value="current">Hiện tại</MenuItem>
              <MenuItem value="lastMonth">Tháng trước</MenuItem>
              <MenuItem value="lastQuarter">Quý trước</MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" onClick={handleExportPDF}>
              Xuất PDF
            </Button>
          </Grid>
        </Grid>

        <div id="productChart">
          <Bar data={productData} options={options} />
        </div>
      </Card>
    </MDBox>
  );
};

export default Statistics;
