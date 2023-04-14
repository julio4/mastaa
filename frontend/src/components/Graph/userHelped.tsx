import React from "react";
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
import { Line } from "react-chartjs-2";

import { Box } from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


import { useRef, useEffect, useState } from "react";
import type { ChartData, ChartArea } from "chart.js";

import { Chart } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const today = new Date();
const daysInMonth = new Date(
  today.getFullYear(),
  today.getMonth() + 1,
  0
).getDate();
const labels = [...Array(daysInMonth - today.getDate() + 1)].map((_, i) => {
  const date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + i
  );
  return `${date.getDate()}/${date.getMonth() + 1}`;
});

const colors = [
  "red",
  "orange",
  "yellow",
  "lime",
  "green",
  "teal",
  "blue",
  "purple",
];

const options = {
  plugins: {
    // not display legend
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Users helped",
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      //   label: 'Users helped',
      data: labels.map(() => Math.random() * 100),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",

      pointBackgroundColor: "red",
    },
  ],
};

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const colorStart = colors[Math.floor(Math.random() * colors.length)];
  const colorMid = colors.filter((color) => color !== colorStart)[
    Math.floor(Math.random() * colors.length)
  ];
  const colorEnd = colors.filter(
    (color) => color !== colorStart && color !== colorMid
  )[Math.floor(Math.random() * colors.length)];

  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, "red");
  gradient.addColorStop(0.5, "orange"); //   
  gradient.addColorStop(1, "yellow");

  return gradient;
}

export default function UserHelped() {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<"bar">>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        borderColor: createGradient(chart.ctx, chart.chartArea),
      })),
    };

    setChartData(chartData);
  }, []);

  return (
    <Box w={"100%"} h={"100%"}>
      <Chart
        ref={chartRef}
        type="line"
        data={chartData}
        options={options}
      ></Chart>
    </Box>
  );
}

