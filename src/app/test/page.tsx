"use client"
import React from 'react'



const test=()=>{
  fetch('http://localhost:3000/todos/random')
  .then(res => res.json())
  .then(console.log);
}


// const test = () => {
//   fetch('http://localhost:3000/todos')
//     .then(res => {
//       if (!res.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return res.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error('There was a problem with the fetch operation:', error));
// }




const page = () => {
  return (
    <div>
      thi sis the test page 
      <button onClick={test}>click me</button>
    </div>
  )
}

export default page


// for now i have to use the http protocal for making the request 