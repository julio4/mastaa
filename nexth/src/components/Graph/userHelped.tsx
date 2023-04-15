import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js'

import { Line } from 'react-chartjs-2'

import { Box, Button, useColorModeValue } from '@chakra-ui/react'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

import { useRef, useEffect, useState } from 'react'
import type { ChartData, ChartArea } from 'chart.js'

import { Chart } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

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
      text: 'Sponsored Transactions',
      padding: {
        top: 10,
        bottom: 10,
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
      min: 0,
      grid: {
        display: false,
      },
    },
  },
}
const dataValues = [
  46.975244810295166, 64.99892326785778, 59.23660465630941, 84.07064879260034, 66.0103938498518, 100.62545183839863, 57.74747130178211,
  84.38968707415512, 28.17705613510223, 89.14312391313163, 55.287140042197535, 83.16968544136735, 54.18233314747357, 92.47001298393836,
  82.21956387016041, 81.44685867631055,
]

export const data = {
  labels,
  datasets: [
    {
      data: dataValues,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      fill: true,
      tension: 0.2,
    },
  ],
}

function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top)

  gradient.addColorStop(1, 'rgba(224, 56, 14, 0.95)')
  gradient.addColorStop(0.61, 'rgba(184, 76, 14, 0.75)')
  gradient.addColorStop(0.3, 'rgba(184, 108, 14, 0.65)')
  gradient.addColorStop(0, 'rgba(232, 153, 27, 0.42)')

  return gradient
}

export default function UserHelped() {
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
        borderColor: createGradient(chart.ctx, chart.chartArea),
        backgroundColor: createGradient(chart.ctx, chart.chartArea),
      })),
    }

    setChartData(chartData)
  }, [])

  return (
    <Box w={'100%'} h={'100%'}>
      <Chart ref={chartRef} type="line" data={chartData} options={options}></Chart>
    </Box>
  )
}
