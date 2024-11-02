


// // const { google } = require('googleapis');

// import google from 'googleapis'

// const calendar = google.calendar('v3');


// console.log(calendar)


import axios from 'axios'


const countryCode = 'US';
const year = 2024;


import { google } from 'googleapis';


// async function A(){
//     const calendar = await  google.calendar('v3');
//     return calendar
// }


// const obj = await A()
// console.log(obj)

// import { te } from 'tradingeconomics';
import { te } from 'tradingeconomics';

// Set up your API key
te.login('yourKey', 'yourSecret'); // Separate 'yourKey' and 'yourSecret' instead of 'guest:guest'

// Example usage
te.getHistoricalData({ country: 'mexico', indicator: 'gdp' })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });

// te.getHistoricalData(country = 'mexico', indicator = 'gdp').then(function(data){
//     console.log(data)       
//   });
  
// const  data = axios.get(`https://date.nager.at/Api/v2/PublicHoliday/${year}/${countryCode}`)

// console.log(data)
