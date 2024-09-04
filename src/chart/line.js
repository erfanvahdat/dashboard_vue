


import * as echarts from 'echarts' // Ensure ECharts is imported


const option = {
    tooltip: {
      trigger: 'axis',
      formatter: '{b} <br/>{a} : {c}'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: [
        'Access Source'],
        
      textStyle: {
        color: '#ffffff', // Change this to your desired color
        fontSize: 14,     // Adjust the font size
        fontWeight: 'bold' // You can also adjust the font weight
      }
    },
    xAxis: {
      type: 'category',
      data: [
        'Direct Access',
        'Email Marketing',
        'Affiliate Ads',
        'Video Ads',
        'Search Engines'
      ],
      axisLabel: {
        color: 'white' // Change this to your desired color
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        color: 'yellow' // Change this to your desired color
      }
    },
    series: [
      {
        name: 'Access Source',
        type: 'line',
        data: [
          335,
          310,
          234,
          135,
          1548
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };


     // // Highlight effect
    // let currentIndex = -1

    // setInterval(function() {
      
    //   const dataLen = option.series[0].data.length

    //   // Downplay the previously highlighted item
    //   myChart.dispatchAction({
    //     type: 'downplay',
    //     seriesIndex: 0, 
    //     dataIndex: currentIndex
    //   })

    //   // Highlight the current item
    //   currentIndex = (currentIndex + 1) % dataLen
    //   myChart.dispatchAction({
    //     type: 'highlight',
    //     seriesIndex: 0,
    //     dataIndex: currentIndex
    //   })

    //   // Show tooltip for the highlighted item
    //   myChart.dispatchAction({
    //     type: 'showTip',
    //     seriesIndex: 0,
    //     dataIndex: currentIndex
    //   })
    // }, 500)

    
export default option;
