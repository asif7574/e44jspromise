// 1. Create a function fetchData that returns a Promise. The Promise should resolve with the string "Data fetched successfully" after a delay of 2 seconds. Use setTimeout to simulate the delay. Test your function by calling it and using .then() to log the resolved value to the console.  

// function fetchData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             message = "Data fetched successfully"
//             resolve(message)
//         }, 2000);
//     })
   
// }
// fetchData().then((resolve)=>{console.log(resolve);
// })



// 2.  Modify the fetchData function from Question 1 to sometimes reject the Promise with an error message "Failed to fetch data". Modify your test to handle this rejection using .catch().  

// function fetchData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             message = "Failed to fetch data"
//             reject(message)
//         }, 2000);
//     })
    
// }
// fetchData().then((resolve)=>{console.log(resolve);
// }).catch((message)=>{console.log(message);
// })


// 3. Convert the fetchData function from Question  1 to use async and await instead of .then(). Ensure to handle errors using try and catch

// function fetchData(data){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(data);
//             message = "Data fetched successfully"
//             resolve(message)
//         }, 2000);
//     })
// }

// async function asyfn(){
// try {const result= await fetchData('print')
//     console.log(result);
// } catch (error) {
//     console.log(error);
// }
// }
// asyfn()







