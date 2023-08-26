const authSwitchtLinks = document.querySelectorAll('.switch');
const authModals = document.querySelectorAll('.auth .modal');
const authWrapper = document.querySelector('.auth');

const registerForm = document.querySelector('.register');
const loginForm = document.querySelector('.login');
const signOutUI = document.querySelector('.sign-out');

import * as firebase_configs from "./firebase-config.js";

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

    firebase_configs.createUserWithEmailAndPassword(firebase_configs.auth, email, password)
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

    firebase_configs.signInWithEmailAndPassword(firebase_configs.auth, email, password)
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
    firebase_configs.signOut(firebase_configs.auth).then(() => console.log('signed out'));
})


// auth listener 
firebase_configs.onAuthStateChanged(firebase_configs.auth, (user) => {
    if (user) {
        authWrapper.classList.remove('open');
        authModals.forEach(modal => modal.classList.remove('active'));
    } else {
        authWrapper.classList.add('open');
        authModals[0].classList.add('active');
    }
});


