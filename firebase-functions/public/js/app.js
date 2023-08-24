
const requestModal = document.querySelector('.new-request');
const requestLink = document.querySelector('.add-request');
// import { getFunctions, httpsCallable } from "firebase/functions";
import { functions, httpsCallable } from "./firebase-config.js";


// open request modal
requestLink.addEventListener('click', () => {
  requestModal.classList.add('open');
});

// close request modal
requestModal.addEventListener('click', (e) => {
  if (e.target.classList.contains('new-request')) {
    requestModal.classList.remove('open');
  }
});


// const sayHello = httpsCallable(functions, 'sayHello');
// const button = document.querySelector(".call");
  
// button.addEventListener("click", function () {
//   console.log('hello');
//   sayHello({ name: 'muntasir' }).then(result => {
//     console.log(result.data);
//   });
// });



