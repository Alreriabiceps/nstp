<script setup>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const props = defineProps({
    chartData: {
        type: Object,
        required: true,
        default: {
            labels: [ '', '', '' ],
            datasets: [ { data: [0, 0, 0] } ]
        }
    },

});
const chartOptions = () => {
    responsive: true
}
</script>
<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </template>


