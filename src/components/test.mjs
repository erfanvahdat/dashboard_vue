import axios from 'axios';
import dotenv from 'dotenv';
import { spawn } from 'child_process'; // Modular import of spawn

dotenv.config({ path: '../../.env' }); 

const pythonProcess = spawn('python', ['test.py']);



pythonProcess.stdout.on('data', (data) => {
  

  const output = data.toString().trim();
  // const [value1,value2,value3,value5] = data.toString().trim()

  // console.log(value1,value2,value5,value3)
  const [value1, value2, value3 ] = output.split(',');

  console.log(value1)

  // const base64Data = data.toString('base64');
  // console.log(data.toString() );
  
});


// console.log(pythonProcess.stdout.on())


// pythonProcess.stdout.on('data',(data)=>
//   console.log(data)
// )
// // pythonProcess.stderr.on('data', (data) => {
//   console.error(`Error from Python: ${data.toString()}`);
// });

// pythonProcess.on('close', (code) => {
//   console.log(`Python process exited with code ${code}`);
// });


// // console.log(process.env.VITE_GET_BALANCE_DB)
// async function A(){
//   console.log(process.env.VITE_GET_BALANCE_DB)
//   const url  = `${process.env.VITE_GET_BALANCE_DB}`
//   const  data  = await  axios.get(url)

//   return  data
// }



// const obj = (await A()).data.data ; 

// console.log()