<script setup>
import { onMounted, ref } from 'vue';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const props = defineProps({
  enrolledPerYear: Array,
  graduatePerYear: Array,
  failedPerYear: Array
});

const chartRef = ref(null);

onMounted(() => {
  const ctx = chartRef.value.getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: props.enrolledPerYear.map(data => data.year),
      datasets: [{
        label: 'Enrolled',
        data: props.enrolledPerYear.map(data => data.total),
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      }, {
        label: 'Graduated',
        data: props.graduatePerYear.map(data => data.total),
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      }, {
        label: 'Failed',
        data: props.failedPerYear.map(data => data.total),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }]
    },
    options: {
      scales: {
        x: {
          stacked: true,
        },
        y: {
          stacked: true
        }
      }
    }
  });
});
</script>
<template>
  <div class="chart-container">
    <canvas ref="chartRef"></canvas>
  </div>
</template>
