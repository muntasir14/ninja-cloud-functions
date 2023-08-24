const authSwitchtLinks = document.querySelectorAll('.switch');
const authModals = document.querySelectorAll('.auth .modal');
const authWrapper = document.querySelector('.auth');

const registerForm = document.querySelector('.register');
const loginForm = document.querySelector('.login');
const signOutUI = document.querySelector('.sign-out');

import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "./firebase-config.js";

// toggle auth modals
authSwitchtLinks.forEach(link => {
    link.addEventListener('click', () => {
        authModals.forEach(modal => modal.classList.toggle('active'))
    });
});


// register form
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = registerForm.email.value;
    const password = registerForm.password.value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log('registered', user);
            registerForm.reset();
        })
        .catch((error) => {
            console.log(error.message);
            console.log(error.code);
            registerForm.querySelector('.error').textContent = error.message;
        });
})


// login form
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
            console.log('logged in', user);
            loginForm.reset();
        })
        .catch((error) => {
            console.log(error.message);
            console.log(error.code);
            loginForm.querySelector('.error').textContent = error.message;
        });
})

// sign out
signOutUI.addEventListener('click', () => {
    signOut(auth).then(() => console.log('signed out'));
})


// auth listener 
onAuthStateChanged(auth, (user) => {
    if (user) {
        authWrapper.classList.remove('open');
        authModals.forEach(modal => modal.classList.remove('active'));
    } else {
        authWrapper.classList.add('open');
        authModals[0].classList.add('active');
    }
});


