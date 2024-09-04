//  Define the configuration options for the chart
    const option_1 = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: [
      'Direct Access',
      'Email Marketing',
      'Affiliate Ads',
      'Video Ads',
      'Search Engines'
    ],
    textStyle: {
      color: 'white', // Change this to your desired color
      fontSize: 15,     // Adjust the font size
      fontWeight: 'bold', // You can also adjust the font weight,
      

    }
  },
  series: [
    {
      name: 'Access Source',
      type: 'pie',
      radius: '55%',
      center: ['70%', '70%'],
      data: [
        { value: 335, name: 'Direct Access' },
        { value: 310, name: 'Email Marketing' },
        { value: 234, name: 'Affiliate Ads' },
        { value: 135, name: 'Video Ads' },
        { value: 1548, name: 'Search Engines' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'green'
        }
      }
    }
  ]
};  


export default option_1;