document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('dashboard-container').style.display = 'flex';
    createCharts();
});

document.getElementById('withdraw-button').addEventListener('click', function() {
    showPopup();
});

function showPopup() {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `
        <p>Kindly proceed to pay the late payment fee</p>
        <button onclick="closePopup(this)">Close</button>
    `;
    document.body.appendChild(popup);
    popup.style.display = 'block';
}

function closePopup(button) {
    const popup = button.parentElement;
    popup.style.display = 'none';
    document.body.removeChild(popup);
}

function createCharts() {
    const investmentData = [180000, 200000];
    const earningsData = [20000, 25000, 30000, 35000, 40000, 45000, 50000, 55000, 60000, 65000, 70000, 75000];
    const performanceData = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];
    const withdrawalData = [18000, 20000, 22000, 24000, 26000, 28000, 30000, 32000, 34000, 36000, 38000, 40000];

    const ctx1 = document.getElementById('investmentChart').getContext('2d');
    new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['Initial Investment', 'Current Value'],
            datasets: [{
                label: 'Investment Value',
                data: investmentData,
                backgroundColor: ['#ff6384', '#36a2eb'],
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctx2 = document.getElementById('earningsChart').getContext('2d');
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Earnings',
                data: earningsData,
                backgroundColor: '#ff6384',
                borderColor: '#ff6384',
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctx3 = document.getElementById('performanceChart').getContext('2d');
    new Chart(ctx3, {
        type: 'radar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10', 'Q11', 'Q12'],
            datasets: [{
                label: 'Performance',
                data: performanceData,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: '#ff6384',
                pointBackgroundColor: '#ff6384'
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    beginAtZero: true
                }
            }
        }
    });

    const ctx4 = document.getElementById('withdrawalChart').getContext('2d');
    new Chart(ctx4, {
        type: 'doughnut',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Withdrawals',
                data: withdrawalData,
                backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff', '#ff9f40', '#4dc9f6', '#f67019', '#f53794', '#537bc4', '#acc236', '#166a8f'],
            }]
        },
        options: {
            responsive: true
        }
    });
}
