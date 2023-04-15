import React from 'react'
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
  Filler,
} from 'chart.js'
import { useRef, useEffect, useState } from 'react'

import { Chart } from 'react-chartjs-2'

import { Box } from '@chakra-ui/react'
import { useColorModeValue } from '@chakra-ui/react'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)

const today = new Date()
const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()
const labels = [...Array(daysInMonth - today.getDate() + 1)].map((_, i) => {
  const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i)
  return `${date.getDate()}/${date.getMonth() + 1}`
})

const colors = ['red', 'orange', 'yellow', 'lime', 'green', 'teal', 'blue', 'purple']

const options = {
  plugins: {
    // not display legend
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Balance ETH',
      padding: {
        top: 10,
        bottom: -50,
      },
      font: {
        size: 24,
        family: 'Helvetica Neue',
      },
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
}

const dataValues = [5.2, 5.1, 4.75, 4.01, 3.95, 3.74, 3.6, 2.97, 4.3, 4.2, 3.74, 3.64, 3.51, 3.14, 2.84, 2.72]
export const data = {
  labels,
  datasets: [
    {
      //   label: 'Users helped',
      data: dataValues,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',

      pointBackgroundColor: 'red',

      fill: true,
      tension: 0.2,
    },
  ],
}

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea, colorStart: string) {
  // Choose the next color in the list, or the first one if we're at the end
  const colorMid = colors[(colors.indexOf(colorStart) + 1) % colors.length]
  const colorEnd = colors[(colors.indexOf(colorStart) + 2) % colors.length]
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top)

  gradient.addColorStop(0, colorStart)
  gradient.addColorStop(0.5, colorMid)
  gradient.addColorStop(1, colorEnd)
  return gradient
}

export default function BalanceChart() {
  const chartRef = useRef<ChartJS>(null)
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    datasets: [],
  })

  useEffect(() => {
    const chart = chartRef.current

    if (!chart) {
      return
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map((dataset) => ({
        ...dataset,
        borderColor: createGradient(chart.ctx, chart.chartArea, dataset.borderColor as string),
        backgroundColor: createGradient(chart.ctx, chart.chartArea, dataset.backgroundColor as string),
        borderWidth: 2,
      })),
    }

    setChartData(chartData)
  }, [])

  return (
    <Box w={'100%'} h={'100%'} mt={14}>
      <Chart ref={chartRef} type="line" data={chartData} options={options}></Chart>
    </Box>
  )
}
