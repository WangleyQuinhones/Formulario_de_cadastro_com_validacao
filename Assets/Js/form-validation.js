'use scritic';
// let ou const ao invés de var
// IIFE - immediately Invoked Function Expression 

(() => {
    const form = document.querySelector('[data-form]')
    const fields = {}

   const onFormsubimit = (event) => {
    event.preventDefault()
    alert('Dados prontos para serem enviados!')
   }

    const setListeners = () => {
        form.addEventListener('submit',onFormsubimit )
    }

    const setFieldElements = () => {
        const inputElements = document.querySelectorAll('[data-input]') 
        for (const input of inputElements) {
            const inputName = input.getAttribute('name')
            console.log(inputName)
        }
        
    }

    const init = () => {
        setFieldElements()
         setListeners()
    }
    
    init()
})()
