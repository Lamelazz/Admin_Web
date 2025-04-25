import React, { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import MDBox from "../../components/MDBox";
import MDTypography from "../../components/MDTypography";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Revenue = () => {
  const [period, setPeriod] = useState("month");

  const dataSets = {
    month: {
      labels: ["Th1", "Th2", "Th3", "Th4", "Th5", "Th6"],
      data: [12000000, 15000000, 10000000, 18000000, 20000000, 17000000],
    },
    quarter: {
      labels: ["Q1", "Q2", "Q3", "Q4"],
      data: [37000000, 48000000, 55000000, 60000000],
    },
    year: {
      labels: ["2021", "2022", "2023", "2024"],
      data: [180000000, 200000000, 240000000, 270000000],
    },
  };

  const revenueData = {
    labels: dataSets[period].labels,
    datasets: [
      {
        label: "Doanh thu (VNĐ)",
        data: dataSets[period].data,
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.4,
        pointRadius: 5,
        pointHoverRadius: 7,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Thống kê doanh thu", font: { size: 18 }, padding: 10 },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: 
          ${context.raw.toLocaleString("vi-VN")} VNĐ`,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) => value.toLocaleString("vi-VN"),
        },
      },
    },
  };

  const handleExportPDF = () => {
    const chartElement = document.getElementById("revenueChart");
    html2canvas(chartElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 10, 10, 190, 100);
      pdf.save("doanh_thu.pdf");
    });
  };

  return (
    <MDBox display="flex" justifyContent="center" mt={4} px={2}>
      <Card sx={{ p: 4, width: "100%", maxWidth: "1000px" }}>
        <MDTypography variant="h4" gutterBottom textAlign="center">
          Thống kê doanh thu
        </MDTypography>

        <Grid container justifyContent="space-between" alignItems="center" mb={3}>
          <Grid item>
            <Select value={period} onChange={(e) => setPeriod(e.target.value)}>
              <MenuItem value="month">Theo tháng</MenuItem>
              <MenuItem value="quarter">Theo quý</MenuItem>
              <MenuItem value="year">Theo năm</MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <Button variant="outlined" color="primary" onClick={handleExportPDF}>
              Xuất PDF
            </Button>
          </Grid>
        </Grid>

        <div id="revenueChart">
          <Line data={revenueData} options={options} />
        </div>
      </Card>
    </MDBox>
  );
};

export default Revenue;
