// import './sass/main.scss';
// import './ZonAnn.Ts+dSST.csv';

const GLOBAL_MEAN_TEMPERATURE = 14;

const ctx = document.querySelector('.js-chart').getContext('2d');
console.log(ctx);

fetchData()
  .then(parseData)
  .then(getLabelsAndData)
  .then(({ years, temps }) => drawChart(years, temps));

async function fetchData() {
  const response = await fetch('./ZonAnn.Ts+dSST.csv');
  return await response.text();
}

function parseData(data) {
  return Papa.parse(data, { header: true }).data;
}

function getLabelsAndData(data) {
  return data.reduce(
    (acc, entry) => {
      acc.years.push(entry.Year);
      acc.temps.push(GLOBAL_MEAN_TEMPERATURE + Number(entry.Glob));
      return acc;
    },
    { years: [], temps: [] },
  );
}

function drawChart(labels, data) {
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: '# Average Global Temperature',
          data: data,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          fill: true,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: false,
          ticks: {
            callback(value, index, values) {
              return value + '°C';
            },
          },
        },
      },
    },
  });
}
