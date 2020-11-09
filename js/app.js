
// select Elements
const form = document.querySelector('#connect-form');
const btnSubmit = document.querySelector("btn-submit");

// chexk usernameInput
// @param Nombre de caractères requis pour le username, par défaut 4
checkUsername('.form-username')

// checEmail
validateEmail('.form-email')

// check password
checkPassword('.form-password')



// listener
form.addEventListener('submit', checkInputForm);



// Function checkInputForm
function checkInputForm(event) {
    
    event.preventDefault();
    
    
    console.log(usernameInputValue)
    
}

////////////////////////////////////////////////////////////////////////////////////////
//////////////////////// FONCTIONS DE VERIFICATION  ////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////

// function check username

function checkUsername(selectorInputText,minLength=4) {
    
    
    const usernameInput = document.querySelector(selectorInputText)

    usernameInput.addEventListener('keyup', (e)=>{

        // select elements
            const small = e.target.parentElement.querySelector('small')
            const i = e.target.parentElement.querySelectorAll('i')
            const [success,error] = i

        // if lenght of input value < minLength
        // display red icon and red error message
            if(usernameInput.value.length < minLength) {
                displayMessage('error','4 caractères minimum',small,error,success,minLength)
                
                // if length of input value is ok 
                // display green icon and remove error message  
            } else {
                displayMessage('success','',small,error,success,minLength)
                
            }
    })

}

// Fonction de vérification de l'email

/**
 * Validate email function with regualar expression
 * 
 * If email isn't valid then return false
 * 
 * @param email
 * @return Boolean
 */
function validateEmail(selectorEmailInput, minLength=7){

    // regular expression
    var emailReg = new RegExp(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i);

    // select element
    const emailInput = document.querySelector(selectorEmailInput)

    emailInput.addEventListener('keyup', (e)=>{

        // select elements
            const small = e.target.parentElement.querySelector('small')
            const i = e.target.parentElement.querySelectorAll('i')
            const [success,error] = i

            var valid = emailReg.test(emailInput.value);
        // if lenght of input value < minLength
        // display red icon and red error message
            if(!valid) {
                displayMessage('error','La forme de l\'email n\est pas correct',small,error,success,minLength)
                
                // if length of input value is ok 
                // display green icon and remove error message  
            } else  {
                displayMessage('success','',small,error,success,minLength)
                
            }
    })
    

   
}

function checkPassword(selectorPasswordInput,minLength=4) {

     // select element
     const passwordInput = document.querySelector(selectorPasswordInput)
     const passwordInput2 = document.querySelector(selectorPasswordInput+2)

     passwordInput.addEventListener('keyup', (e)=>{
 
            // select elements
             const small = e.target.parentElement.querySelector('small')
             const i = e.target.parentElement.querySelectorAll('i')
             const [success,error] = i
        
            // Same passwords ?
             passwordInput2.addEventListener('keyup' ,(e)=>{
                if(passwordInput.value === passwordInput2.value) {
                    // if identical
                    displayMessage('success','Les passwords corresponde',small,error,success,minLength)
                    
                    // if not identical 
                } else  {
                    displayMessage('error','Les passwords ne correspondent pas',small,error,success,minLength)
                    
                }
             })
            
         // if lenght of input value < minLength
         // display red icon and red error message
             
     })
    
}


function displayMessage(type = 'success',message='' , small ,error ,success , minLength) {

   if(type ==='error') {

    small.innerHTML          = `${message}`
    small.style.visibility   = "visible"
    success.style.visibility ="hidden"
    error.style.visibility   = "visible"
    error.style.color        = "red"
    return false

   } else if(type === 'success') {

    small.style.visibility   = "hidden"
    error.style.visibility   = "hidden"
    success.style.visibility = "visible"
    success.style.color      = "green"
    return true

   }
}