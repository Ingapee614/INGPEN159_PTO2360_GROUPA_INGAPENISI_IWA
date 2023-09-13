
const MAX_NUMBER=15
const MIN_NUMBER=-5
const STEP_AMOUNT=2


const number =document.querySelector('[data-key="number"]')
const substract =document.querySelector('[data-key="substract"]')
const add =document.querySelector('[data-key="add"]')



const substractHandler= () =>{
    const NewValue = parseInt(number.value)-STEP_AMOUNT
     number.value=NewValue
     if( add.disabled===true){
      add.disabled=false}

      if (NewValue <= MIN_NUMBER){
        substract.disabled=true
      }
}
const addHandler= () => {
    const NewValue = parseInt(number.value)+STEP_AMOUNT
    number.value=NewValue
    if( substract.disabled===true){
        substract.disabled=false}
  
        if (NewValue >= MAX_NUMBER){
          add.disabled=true
        }
}
substract.addEventListener('click',substractHandler)
add.addEventListener('click',addHandler)

