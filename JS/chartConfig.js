function drawRadarChart() {
    const ctx = document.getElementById('radarChart').getContext('2d');
    const radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['HP', 'MP', 'Pow', 'Tec', 'Spd'],
            datasets: [{
                label: 'ステータス',
                data: [5, 4.0, 4.0, 3.5, 4.0],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(255, 99, 132, 1)'
            }]
        },
        options: {
            animation: {
                duration: 2000,
                easing: 'easeInOutQuad'
            },
            scales: {
                r: {
                    angleLines: {
                        display: true,
                        color: 'rgba(255, 99, 132, 0.5)'
                    },
                    grid: {
                        color: 'rgba(200, 200, 200, 0.5)'
                    },
                    ticks: {
                        beginAtZero: true,
                        min: 0,
                        max: 5,
                        stepSize: 1,
                        font: {
                            size: 12
                        },
                        color: 'rgba(0, 0, 0, 0.8)'
                    },
                    pointLabels: {
                        font: {
                            size: 14
                        },
                        color: 'rgba(0, 0, 0, 0.8)'
                    }
                }
            }
        }
    });
}
