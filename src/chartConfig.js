// chartConfig.js

export const line_plot = (x,y) => {
    // Sort the data by values
    // const sortedData = [...data].sort((a, b) => a.value - b.value);
  
    // const categories = sortedData.map(item => item.name); // Extract categories (e.g., labels) from sorted data
    // const values = sortedData.map(item => item.value); // Extract values from sorted data
  
    return {
      tooltip: {
        trigger: 'axis',


        formatter: '{b} <br/>{a} : {c}'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: [
          'Access Source'
        ],
        textStyle: {
          color: '#ffffff', // Change this to your desired color
          fontSize: 14,     // Adjust the font size
          fontWeight: 'bold' // You can also adjust the font weight
        }
      },
      xAxis: {
        type: 'category',
        data: x,
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
          data: y,
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
  };
  


  

