
 const ctx = document.getElementById('live-chart').getContext('2d');
 const initialData = {
     labels: [],
     datasets: [{
         label: 'Real-time Data',
         data: [],
         borderColor: 'rgba(75, 192, 192, 1)',
         backgroundColor: 'rgba(75, 192, 192, 0.2)',
         tension: 0.5,
         borderWidth: 2,
         pointRadius: 0
     }]
 };
 const chartConfig = {
     type: 'line',
     data: initialData,
     options: {
         responsive: true,
         scales: {
             x: {
                 type: 'linear',
                 position: 'bottom'
             },
             y: {
                 beginAtZero: true
             }
         }
     }
 };
 const liveChart = new Chart(ctx, chartConfig);

 function addDataPoint(x, y) {
     liveChart.data.labels.push(x);
     liveChart.data.datasets[0].data.push(y);
     liveChart.update();
 }

 let x = 0;
 const updateInterval = 1000; 
 setInterval(() => {
     const y = Math.random() * 100; 
     addDataPoint(x, y);
     x++;
 }, updateInterval);