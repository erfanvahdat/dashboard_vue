

// Export slope chart options
export const   line_option = {
  chart: {
    // height: 200,
    height: 'auto',

    width: 'auto',  

    colors: ['#FFFF00'], // Set the line color to yellow

    type: 'line',
    toolbar: {
      show: true,
      tools: {
        download: true,
        selection: true,
      },
      style: {
        background: '#333', // Set the toolbar background color
      },
    },
  },
  colors: ['#FFFF00'], // Set the line color to yellow
  
  grid: {
    show: false,
  },
  title: {
    text: 'Line Chart',
    align: 'left',
    style: {
      color: '#FFFFFF', // Set title color to white
    },
  },
  xaxis: {
    type: 'datetime',
    title: {
      text: 'Date',
      style: {
        color: '#9090EE',
      },
    },
    labels: {
      style: {
        colors: '#fff',
        fontSize: '13px',
      },

    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val.toFixed(2);
      },
      style: {
        colors: ['#fff'],
        fontSize: '12px',
      }
    },
    title: {
      text: 'Profit/Loss',
      style: {
        color: '#90EE90', 
        fontSize: '12px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 200,
        cssClass: 'apexcharts-yaxis-label',
      }
    }
  },
  stroke: {
    width: 1,
  },
  tooltip: {
    theme: 'dark',
    style: {
      fontSize: '12px',
      background: '#000',
      color: '#fff',
    },
  },

  // responsive: [{
  //   breakpoint: 1000,  // Adjust breakpoint based on your design
  //   options: {
  //     chart: {
  //       width: '100%',
  //       height: 300  // Adjust height if needed
  //     },
  //     legend: {
  //       position: 'bottom'
  //     }
  //   }
  // }]

  
}


//  Slope chart config
export const Slope_option =  {
  chart: {
    height: 400,
    width: 700,
    type: "line",
    background: "rgb(55 65 81)",

    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
    animations: {
      enabled: true,
      easing: "easeinout",
      speed: 9000,
    },
  },

  grid: {
    show: false,
  },
  stroke: {
    width: 3,
    curve: "smooth",
  },
  markers: {
    size: 6,
    hover: {
      size: 8,
    },
  },
  

  tooltip: {
    theme: "dark",
    x: {
      format: "dd MMM HH:mm",
    },
  },

  dataLabels: {
    enabled: false,

  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val.toFixed(2);
      },
      style: {
        colors: ['#fff'],
        fontSize: '12px',
      }
    },
    title: {
      text: 'Profit/Loss',
      style: {
        color: '#90EE90', 
        fontSize: '12px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontWeight: 200,
        cssClass: 'apexcharts-yaxis-label',
      }
    }
  },
  xaxis: {
    type: 'datetime',
    title: {
      text: 'Date',
      style: {
        color: '#9090EE',
      },
    },
    labels: {
      style: {
        colors: '#fff',
        fontSize: '13px',
      },

    },
  },

  legend: {
    show: true,
    position: "top",
    horizontalAlign: "center",
    fontSize: "14px",
    labels: {
      colors: "#ffffff",
    },
  },

}