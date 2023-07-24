'use scritic';
// let ou const ao invés de var
// IIFE - immediately Invoked Function Expression 

(() => {
    const form = document.querySelector('[data-form]')
    const fields = {}
    const requirements = {}

    const showMessageError = (filde, message) => {
        const { Element, errorElement,} = filde
        Element.classList.add('error')
        errorElement.style.display = 'block'
        errorElement.textContent = 'Este campo é obrigatório!'

    }

    const hideMessageError = (field) => {
        const {Element, errorElement, isRequired} = field
        Element.classList.remove('error')
                errorElement.style.display = 'none'
                errorElement.textContent = ''
    } 

    const validateRequiredFields = () => {
        let isValid = false
        for (const fildKey in fields){
            const field = fields[fildKey]
            const { Element, errorElement, isRequired } = field
            if((!Element.value || (fildKey === 'terms' && !Element.checked && isRequired)) && isRequired ) {
                isValid = true
                showMessageError (field, 'Este campo é obrigatório!')
                
                
            }
        }
        return isValid        

    }

    const onPasswordKeyup = (event) => {
        

    }    // Função que valida os campos do tipo checkbox e radiobutton

    const onInputFocus = (event) => {       
        hideMessageError(fields[event.target.name])                

    }

   const onFormsubimit = (event) => {
    event.preventDefault()
    if(validateRequiredFields()) return

    alert('Dados prontos para serem enviados!')
   }

    const setListeners = () => {
        form.addEventListener('submit',onFormsubimit )
        for (const fildKey in fields) {
            const {Element} = fields[fildKey]
        Element.addEventListener('focus', onInputFocus)  
        if(fildKey === 'password') Element.addEventListener('Keyup',onPasswordKeyup )      
    
    }
    }
    const setRequirementItensElements = () => {
        const requirementItensElements = document.querySelectorAll('[data-requirement-item]')
        for (const requirementItem of requirementItensElements) {
        const requirementName = requirementItem.dataset ['requirementItem']
        console.log(requirementName)
        }
        
    }


    const setFieldElements = () => {
        const inputElements = document.querySelectorAll('[data-input]') 
        for (const input of inputElements) {
            const inputName = input.getAttribute('name')
            fields[inputName] = {
                Element: input,
                errorElement: input.parentElement.querySelector('[data-error-message]'),
                isRequired: input.hasAttribute('required') 
            }
            input.removeAttribute('required')
        }
        
    }

    const init = () => {
        setFieldElements()
        setRequirementItensElements()
         setListeners()
    }
    
    init()
})()
