const bpChartEl = document.getElementById("bpChart");

if (bpChartEl) {
  new Chart(bpChartEl, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Blood Pressure (mmHg)",
          data: [124, 122, 121, 120, 119, 118, 120],
          borderColor: "#4a90e2",
          backgroundColor: "rgba(74, 144, 226, 0.15)",
          tension: 0.4,
          fill: true,
        },
        {
          label: "Blood Sugar (mg/dL)",
          data: [112, 110, 108, 109, 107, 105, 106],
          borderColor: "#f39c12",
          backgroundColor: "rgba(243, 156, 18, 0.15)",
          tension: 0.4,
          fill: true,
        },
        {
          label: "Heart Rate (bpm)",
          data: [76, 74, 73, 72, 71, 70, 72],
          borderColor: "#27ae60",
          backgroundColor: "rgba(39, 174, 96, 0.15)",
          tension: 0.4,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  });
}

document.getElementById("downloadReportBtn")?.addEventListener("click", () => {
  alert("Medical report downloaded (PDF simulation)");
});
