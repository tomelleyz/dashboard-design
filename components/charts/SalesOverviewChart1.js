import { useState } from "react";
import Chart from "react-apexcharts";

export default function SalesOverviewChart1() {
  const [options] = useState({
    chart: {
      id: "sales-overview-chart",
      toolbar: { show: false },
      fontFamily: "Inter, sans-serif",
    },
    xaxis: {
      categories: ["20 Aug", "21 Aug", "22 Aug", "23 Aug", "24 Aug", "25 Aug"],
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { show: false },
    },
    stroke: { width: 2, curve: "straight", colors: ["#EF2C5A"] },
    fill: {
      colors: ["#EF2C5A"],
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
  });

  const [series] = useState([
    {
      name: "Sales",
      data: [2100, 2000, 1800, 1900, 2500, 3000],
    },
  ]);

  return (
    <Chart
      options={options}
      series={series}
      type="area"
      height="100%"
      width="100%"
    />
  );
}
