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
  ChartData,
  ChartArea,
} from "chart.js";
import { useRef, useEffect, useState } from "react";

import { Chart } from "react-chartjs-2";

import { Box } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

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
      text: "Balance (ETH)",
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

let currentValue = 4;
const dataValues = labels.map((_, i) => {
  if (i >= 10 && i <= 20 && Math.random() < 0.45) {
    currentValue = Math.random() * (5 - 3) + 3;
  } else {
    currentValue = Math.max(0, currentValue - Math.random());
  }
  return currentValue;
});

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      //   label: 'Users helped',
      data: dataValues,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",

      pointBackgroundColor: "red",
    },
  ],
};

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea, colorStart: string) {

  // Choose the next color in the list, or the first one if we're at the end
  const colorMid = colors[(colors.indexOf(colorStart) + 1) % colors.length];
  const colorEnd = colors[(colors.indexOf(colorStart) + 2) % colors.length];
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(0, colorStart);
  gradient.addColorStop(0.5, colorMid);
  gradient.addColorStop(1, colorEnd);
  return gradient;
}

export default function BalanceChart() {
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
        borderColor: createGradient(chart.ctx, chart.chartArea, dataset.borderColor as string),
        backgroundColor: createGradient(chart.ctx, chart.chartArea, dataset.backgroundColor as string),
        borderWidth: 2,
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
