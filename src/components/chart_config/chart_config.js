

// Export slope chart options
export const   line_option = {
  chart: {
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
        color: '#FFFFFF', // Set x-axis title color to white
      },
    },
    labels: {
      style: {
        colors: ['#FFFFFF'], // Set x-axis label color to white
      },
    },
  },
  yaxis: {
    title: {
      text: 'Price',
      style: {
        color: '#FFFFFF', // Set y-axis title color to white
      },
    },
    // labels: {
    //   formatter: function (val) {
    //     return val.toFixed(2);
    //   },
    //   style: {
    //     colors: ['#FFFFFF'], // Set y-axis label color to white
    //   },
    // },
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
  grid: {
    borderColor: '#555', // Change grid color for better visibility
    style: {
      background: '#222', // Set grid background color
    },
  },
}


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
        // Custom logic for formatting the y-axis values
        return val.toFixed(2);
      },
      style: {
        colors: ['#fff'],
        fontSize: '12px',
      }
    },
    title: {
      text: 'Profit/Loss',  // Customize the y-axis title
      style: {
        color: '#fff', // Change the color of the title
      }
    }
  },
  xaxis: {
    type: 'datetime',
    title: {
      text: 'Date',
      style: {
        color: '#FFFFFF',
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