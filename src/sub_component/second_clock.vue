<template>
    <div class="clock-container">
      <div class="clock-col">
        <div class="clock-day clock-timer"></div>
        <span class="clock-label">Day</span>
      </div>
      <div class="clock-col">
        <div class="clock-hours clock-timer"></div>
        <span class="clock-label">Hours</span>
      </div>
      <div class="clock-col">
        <div class="clock-minutes clock-timer"></div>
        <span class="clock-label">Minutes</span>
      </div>
      
    </div>
  </template>
  
  <script>
  import moment from "moment";
  
  export default {
    mounted() {
      this.updateTime();
    },
    methods: {
      updateTime() {

        const today = new Date();
  
        this.day  = moment().format("dd")
        // Get time components
        const hours = today.getHours();
        const ampm = hours < 12 ? "AM" : "PM";

        document.documentElement.style.setProperty(
          "--timer-day",
          "'" + moment().format("dd") + "'"
        );
        document.documentElement.style.setProperty(
          "--timer-hours",
          "'" + moment().format("k") + "'"
        );
        document.documentElement.style.setProperty(
          "--timer-minutes",
          "'" + moment().format("mm") + "'"
        );
        document.documentElement.style.setProperty(
          "--timer-seconds",
          "'" + moment().format('hh:mm A') + "'"
        );
        
        requestAnimationFrame(this.updateTime);
      },
    },
  };
  </script>
  
  <style scoped lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap");
  
  body {
    background: linear-gradient(45deg, #1870ed 0, #f18f88 100%);
    font-family: 'Montserrat', 'sans-serif';
    min-height: vh; 
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .clock-container {
    margin-top: 10px;
    margin-bottom: 5px;
    // background-color: #080808;
    border-radius: 5px;
    padding: 2px 2px;
    box-shadow: 1px 1px 5px rgba(255, 255, 255, 0.15), 0 15px 90px 30px rgba(0, 0, 0, 0.25);
    display: flex;
    
    @media (max-width: 825px) {
      flex-direction: column;
      padding-top: 2px;
      padding-bottom: 2px;
    }
  }
  
  .clock-col {
    text-align: center;
    margin-right: 20px;
    margin-left: 20px;
    min-width: 90px;
    position: relative;
    
    &:not(:last-child):before,
    &:not(:last-child):after {
      content: "";
      background-color: rgba(255, 255, 255, 0.3);
      height: 5px;
      width: 5px;
      border-radius: 50%;
      display: block;
      position: absolute;
      right: -42px;
    }
    
    &:not(:last-child):before {
      top: 35%;
    }
    
    &:not(:last-child):after {
      top: 50%;
    }
  
    @media (max-width: 825px) {
      & + & {
        margin-top: 20px;
      }
      &:before,
      &:after {
        display: none !important;
      }
    }
  }
  
  .clock-timer:before {
    color: #fff;
    font-size: 4.2rem;
    text-transform: uppercase;
  }
  
  .clock-label {
    color: rgba(255, 255, 255, 0.35);
    text-transform: uppercase;
    font-size: 0.7rem;
    margin-top: 10px;
  }
  
  .clock-day:before {
    content: var(--timer-day);
  }
  
  .clock-hours:before {
    content: var(--timer-hours);
  }
  
  .clock-minutes:before {
    content: var(--timer-minutes);
  }
  
  .clock-seconds:before {
    content: var(--timer-seconds);
  }
  </style>
  