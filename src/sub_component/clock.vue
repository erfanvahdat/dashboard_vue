<template>
    <div id="clock">
      <p id="date-time " class=" p-1 text-[25px] font-bold  from-blue-300 rounded ">{{ dateTime }}</p>
    </div>
  </template>
  
<script>

import moment from "moment";

  export default {
    data() {
      return {
        dateTime: "",
        day : null,
      };
    },
    mounted() {
      this.clock();
    },
    methods: {
      clock() {
        const today = new Date();
  
        this.day  = moment().format("dd")
        // Get time components
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();
  
        // Add '0' to hour, minute & second when they are less than 10
        const hour = hours < 10 ? "0" + hours : hours;
        const minute = minutes < 10 ? "0" + minutes : minutes;
        const second = seconds < 10 ? "0" + seconds : seconds;
  
        // Make clock a 12-hour format
        const hourTime = hours > 12 ? hours - 12 : hours || 12;
        const ampm = hours < 12 ? "AM" : "PM";
  
        // Get date components
        const month = today.getMonth();
        const year = today.getFullYear();
        const day = today.getDate();
  
        // Month names
        const monthList = [
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
  
        // Get current date and time
        const date = `${monthList[month]} ${day}, ${year}`;
        const time = `${hourTime}:${minute} ${ampm}`;
  
        // Update dateTime with current date and time
        this.dateTime = `${this.day}- ${time}`;
  
        // Update every second
        setTimeout(this.clock, 1000);
      }
    }
  };
  </script>
  
  <style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Oswald:wght@300;400&display=swap");
  
  html {
    font-size: 62.5%;
  }
  
  body {
    text-align: center;
    font-family: "Oswald", sans-serif;
    font-weight: 300;
    font-size: 2.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #faedcd;
    height: 100vh;
  }
  
  #clock {
    max-width: 600px;
  }
  
  /* Responsive font sizes */
  @media only screen and (max-width: 700px) {
    body {
      font-size: 1.8rem;
    }
  }
  
  @media only screen and (max-width: 300px) {
    body {
      font-size: 1.6rem;
    }
  }
  </style>
  