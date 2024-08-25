import value from 'assets/scss/_themes-vars.module.scss';
// eslint-disable-next-line
export default {
  height: 228,
  type: 'donut',
  options: {
    dataLabels: {
      enabled: false
    },
    yaxis: {
      min: 0,
      max: 100
    },
    labels: ['Envoie ', 'Recus',],
    legend: {
      show: true,
      position: 'bottom',
      fontFamily: 'inherit',
      labels: {
        colors: 'inherit'
      }
    },
    itemMargin: {
      horizontal: 10,
      vertical: 10
    },
    colors: [ value.primary, value.info]
  },
  series: [ 975, 500]
};
