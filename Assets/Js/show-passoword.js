'use strict';
(() => {   
    const passowordEye = document.querySelector('data-password-eye')
    const inptuPassoword = document.querySelector('[name="password"]')
    const state = {showpassword: false}

    const onPasswordEyeClick = (event) => {
        passowordEye.classList.toggle('slash')
        inptuPassoword.setAttribute('type', state.passoword ? 'password' : 'text')
        state.showpassword = !state.showpassword        
    
    }

    const setListeners = () => {
        passowordEye.addEventListener('click', onPasswordEyeClick)

    }


    const init = () => {
         setListeners()       
    }

    init()


})()